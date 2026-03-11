const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const workerPath = path.join(__dirname, 'worker.js');

if (!fs.existsSync(htmlPath)) {
  console.error("error: index.html not found!");
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Escape backticks, dollar signs, and backslashes
const safeHtml = htmlContent
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

const workerCode = `// Generated automatically from index.html
const html_content = \`${safeHtml}\`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Only serve HTML on root path
    if (url.pathname !== "/") {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(html_content, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=0, must-revalidate"
      },
    });
  },
};
`;

fs.writeFileSync(workerPath, workerCode.trim());
console.log('Successfully generated `worker.js` for Cloudflare Workers.');
