<h1 align="center">V2Ray / Clash to Socks5</h1>

<details>
<summary align="center">🇨🇳 点击查看中文文档 / Click to view Chinese documentation</summary>

<h2 align="center">V2Ray / Clash 转 Socks5</h2>

<p align="center">
  <img src="https://img.shields.io/github/stars/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/issues/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Issues">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/last-commit/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Repo Size">
  <img src="https://img.shields.io/github/languages/top/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Language">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=fabaonb.V2Ray-to-Clash-to-Socks5" alt="Visitors">
</p>

<h4 align="center">技术栈</h4>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
</p>

<h4 align="center">支持平台</h4>

<p align="center">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages">
  <img src="https://img.shields.io/badge/Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Workers">
</p>

<h4 align="center">一键部署</h4>

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/fabaonb/V2Ray-to-Clash-to-Socks5"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/fabaonb/V2Ray-to-Clash-to-Socks5"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers"></a>
</p>

---

<p align="center">
这是一个全本地化执行的 V2Ray / Clash 节点转换为 Socks5 多端口代理生成的工具静态网页。<br>
不依赖任何服务端，彻底杜绝隐私泄露风险。
</p>

### 核心功能

- **全协议支持**：极速解析 VMess, VLESS (Vision/Reality), Trojan, Hysteria 1/2, Tuic (v4/v5), Shadowsocks (2022/Plugin), ShadowsocksR, WireGuard, Snell, Shadow-TLS 及 HTTP/Socks5。
- **严格协议准入**：根据 `wiki.metacubex.one` 规范，自动过滤不支持的旧版 XTLS 流控或非法协议组合，输出明确的 `🛑 Clash不支持` 警告。
- **全参数映射 (Meta 增强)**：深度支持 TUIC 拥塞控制、Hysteria2 端口跳跃、Reality 公钥/短 ID、各协议 TLS 指纹 (Fingerprint) 及 ALPN 等高级配置。
- **智能防冲突**：自动识别并处理订阅中的重复节点名称，确保生成的配置在 Clash/Mihomo 客户端中 100% 合法可用。
- **配置保留/注入**：
  - 输入完整 Clash YAML 时，保留原有的代理组、路由规则及 DNS 设置，仅注入 Socks5 接口。
  - 输入纯节点列表时，自动生成标准的极简补全配置。
- **智能 i18n 系统**：根据浏览器环境自动切换中英双语，所有转换警告与报错信息均同步国际化。
- **隐私与安全**：100% 浏览器内本地执行，起始端口持久化记忆（LocalStorage），绝不上传任何数据。

### 关于多平台部署适配

目前项目已经完全适配主流的 Serverless 和静态托管平台：**GitHub Pages**, **Vercel**, **Cloudflare Pages** 以及 **Cloudflare Workers**。

由于本工具是纯前端实现的无后端静态网页，直接将代码上传即可完成部署。以下为具体平台部署指南：

#### 1. 部署到 Vercel (最简单，全自动化)

项目已内置 `vercel.json`，进行了安全 Headers 和缓存相关的基础优化配置。

**步骤**：
1. 将当前文件夹内的所有代码推送到你的 GitHub 仓库中。
2. 登录并且打开 [Vercel](https://vercel.com/) 控制台。
3. 点击 **Add New...** -> **Project**，并关联刚推送的仓库。
4. 一路点击默认的 **Deploy** 即可完成发布。自动识别 `index.html`。

#### 2. 部署到 Cloudflare Pages (推荐，国内访问更稳定)

项目支持通过 CF Pages 进行纯静态内容托管。

**步骤**：
1. 将当前项目所有代码推送到你的 GitHub。
2. 登录 [Cloudflare 控制面板](https://dash.cloudflare.com/)，在左侧菜单进入 **Workers 和 Pages（Workers & Pages）**。
3. 点击 **创建 (Create application)** -> **Pages** -> **连接到 Git (Connect to Git)**。
4. 选中你的 GitHub 仓库，并在"构建设置"部分：
   - 框架预设保持为 **None**
   - 构建命令留空
   - 输出目录 (Build output directory) 填入： `.` 或保持默认空值
5. 点击 **Save and Deploy** 即可发布上线。

#### 3. 部署到 Cloudflare Workers (单文件手动复制法)

如果不想走 GitHub 同步，你也可以直接将代码以脚本的方式塞进 CF Worker 中，项目内置了转换脚本可以打包你的 HTML。
本项目中的 `wrangler.toml` 也提供好了相关的配置。

**步骤（极简手动法）**：
1. 确保电脑里安装了 Node.js，在本地项目目录中打开命令行并运行：
   ```bash
   node build-worker.js
   ```
2. 此时会生成一个包含全部前端代码逻辑的 `worker.js`。
3. 登录 Cloudflare 控制面板，进入 **Workers & Pages** -> 点击 **创建 Worker (Create Worker)**。
4. 填好你的服务名后点击创建，接着点击右上角 **编辑代码 (Edit code)**。
5. 清空编辑器里的原有代码，**将刚刚生成的 `worker.js` 里面的所有内容全文复制粘贴进去**。
6. 点击右上角 **保存并部署 (Save and deploy)**，访问 Worker 分配的地址即可使用！

---
*提示：本地如果修改了 `index.html` 代码，更新给 Workers 时请记得重新执行 `node build-worker.js` 生成新的 JS 代码。*

#### 4. 部署到 GitHub Pages (零配置，GitHub 原生支持)

本项目已内置 GitHub Actions 工作流（`.github/workflows/deploy-pages.yml`），推送代码后会自动部署。

**步骤**：
1. 将代码推送到你的 GitHub 仓库。
2. 进入仓库的 **Settings** -> **Pages**。
3. 在 **Source** 下拉菜单中选择 **GitHub Actions**。
4. 下次推送到 `main` 分支时，GitHub Actions 会自动构建并部署。
5. 部署完成后，访问 `https://<你的用户名>.github.io/<仓库名>/` 即可使用。

<h4 align="center">Star 历史</h4>

<p align="center">
  <a href="https://star-history.com/#fabaonb/V2Ray-to-Clash-to-Socks5&Date"><img src="https://api.star-history.com/svg?repos=fabaonb/V2Ray-to-Clash-to-Socks5&type=Date" alt="Star History Chart"></a>
</p>

</details>

---

<p align="center">
  <img src="https://img.shields.io/github/stars/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/issues/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Issues">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/last-commit/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Repo Size">
  <img src="https://img.shields.io/github/languages/top/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Language">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=fabaonb.V2Ray-to-Clash-to-Socks5" alt="Visitors">
</p>

<h3 align="center">Tech Stack</h3>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
</p>

<h3 align="center">Supported Platforms</h3>

<p align="center">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages">
  <img src="https://img.shields.io/badge/Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Workers">
</p>

<h3 align="center">One-Click Deploy</h3>

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/fabaonb/V2Ray-to-Clash-to-Socks5"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/fabaonb/V2Ray-to-Clash-to-Socks5"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers"></a>
</p>

---

<p align="center">
A fully client-side static web tool that converts V2Ray / Clash nodes into Socks5 multi-port proxy configurations.<br>
No server-side dependency — completely eliminates the risk of privacy leaks.
</p>

### Key Features

- **Full Protocol Support**: High-speed parsing for VMess, VLESS (Vision/Reality), Trojan, Hysteria 1/2, Tuic (v4/v5), Shadowsocks (2022/Plugin), ShadowsocksR, WireGuard, Snell, Shadow-TLS, and HTTP/Socks5 links.
- **Strict Protocol Check**: Adheres to `wiki.metacubex.one` standards. Automatically filters unsupported XTLS variants or legacy protocols, providing clear `🛑 Unsupported` warnings.
- **Full Parameter Mapping**: Comprehensive support for TUIC congestion control, Hysteria2 port hopping, Reality public keys/short IDs, TLS fingerprints, ALPN, and other Meta-enhanced fields.
- **Smart Collision Handling**: Automatically identifies and resolves duplicate node names in subscriptions to ensure generated configs are 100% valid for Clash/Mihomo kernels.
- **Config Management**:
  - Preserves original proxy groups, rules, and DNS when a full YAML is provided.
  - Automatically generates minimalist boilerplate for raw proxy lists.
- **Dynamic i18n**: Automatic language detection (CN/EN). All conversion logs and error messages are fully localized.
- **Privacy-First**: 100% local processing in the browser with LocalStorage support for port persistence. No data ever leaves your device.

## Multi-Platform Deployment

The project is fully compatible with mainstream Serverless and static hosting platforms: **GitHub Pages**, **Vercel**, **Cloudflare Pages**, and **Cloudflare Workers**.

Since this tool is a pure front-end static page with no backend, you can deploy it simply by uploading the code. Below are the deployment guides for each platform:

### 1. Deploy to Vercel (Easiest, Fully Automated)

The project includes a built-in `vercel.json` with basic optimizations for security headers and caching.

**Steps**:
1. Push all the code in the current folder to your GitHub repository.
2. Log in and open the [Vercel](https://vercel.com/) dashboard.
3. Click **Add New...** -> **Project**, and link the repository you just pushed.
4. Click through the default **Deploy** button to finish publishing. It will automatically detect `index.html`.

### 2. Deploy to Cloudflare Pages (Recommended, More Stable Access in China)

The project supports pure static content hosting via CF Pages.

**Steps**:
1. Push all the project code to your GitHub.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/), and navigate to **Workers & Pages** in the left menu.
3. Click **Create application** -> **Pages** -> **Connect to Git**.
4. Select your GitHub repository, and in the "Build settings" section:
   - Keep the framework preset as **None**
   - Leave the build command empty
   - Set the Build output directory to: `.` or leave it as the default empty value
5. Click **Save and Deploy** to publish.

### 3. Deploy to Cloudflare Workers (Single-File Manual Copy Method)

If you prefer not to use GitHub sync, you can directly inject the code as a script into a CF Worker. The project includes a build script that packages your HTML.
The `wrangler.toml` in this project also provides the necessary configuration.

**Steps (Minimal Manual Method)**:
1. Make sure Node.js is installed on your machine. Open a terminal in the local project directory and run:
   ```bash
   node build-worker.js
   ```
2. This will generate a `worker.js` file containing all the front-end code logic.
3. Log in to the Cloudflare Dashboard, go to **Workers & Pages** -> click **Create Worker**.
4. Enter your service name, click create, then click **Edit code** in the upper right corner.
5. Clear the existing code in the editor, and **paste the entire contents of the generated `worker.js` file**.
6. Click **Save and deploy** in the upper right corner. Visit the address assigned to the Worker and you're good to go!

---
*Tip: If you modify the `index.html` code locally, remember to re-run `node build-worker.js` to generate the updated JS code before deploying to Workers.*

### 4. Deploy to GitHub Pages (Zero Config, GitHub Native)

This project includes a built-in GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) that automatically deploys on push.

**Steps**:
1. Push the code to your GitHub repository.
2. Go to your repository's **Settings** -> **Pages**.
3. Under the **Source** dropdown, select **GitHub Actions**.
4. On the next push to the `main` branch, GitHub Actions will automatically build and deploy.
5. Once deployed, visit `https://<your-username>.github.io/<repo-name>/` to use the tool.

<h3 align="center">Star History</h3>

<p align="center">
  <a href="https://star-history.com/#fabaonb/V2Ray-to-Clash-to-Socks5&Date"><img src="https://api.star-history.com/svg?repos=fabaonb/V2Ray-to-Clash-to-Socks5&type=Date" alt="Star History Chart"></a>
</p>
