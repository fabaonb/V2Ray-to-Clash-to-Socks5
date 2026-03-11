// Generated automatically from index.html
const html_content = `<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>V2Ray / Clash 转 Socks5 多端口代理生成器</title>
    <!-- 引入 js-yaml 用于解析和生成 YAML -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: rgba(20, 25, 35, 0.6);
            --primary: #00f2fe;
            --secondary: #4facfe;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border: rgba(255, 255, 255, 0.08);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background: linear-gradient(135deg, #090e17 0%, #151b29 100%);
            color: var(--text-main);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            overflow: hidden;
        }

        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
        }

        .header {
            text-align: center;
            margin-bottom: 0.5rem;
            animation: fadeInDown 0.8s ease;
            flex-shrink: 0;
            width: 100%;
            max-width: 800px;
        }

        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        p.subtitle {
            color: var(--text-muted);
            font-size: 1.1rem;
            max-width: 600px;
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 800px;
            /* Reduced from 1200px to better fit single column */
            display: flex;
            flex-direction: column;
            gap: 1rem;
            flex: 1;
            min-height: 0;
            animation: fadeInUp 0.8s ease;
        }

        .panel {
            background: var(--card-bg);
            border: 1px solid var(--border);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 20px;
            padding: 1.2rem 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            flex: 1;
            min-height: 0;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .panel:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0, 242, 254, 0.08);
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }

        .form-group.flex-fill {
            flex: 1;
            min-height: 0;
        }

        label {
            font-weight: 500;
            color: #cbd5e1;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        textarea,
        input[type="number"] {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1rem;
            color: var(--text-main);
            font-family: 'Inter', monospace;
            font-size: 0.9rem;
            outline: none;
            transition: all 0.3s ease;
        }

        textarea {
            resize: none;
            flex: 1;
            min-height: 60px;
            line-height: 1.5;
        }

        textarea:focus,
        input:focus {
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.25);
        }

        .settings-row {
            display: flex;
            gap: 1rem;
        }

        .settings-row .form-group {
            flex: 1;
        }

        button.primary-btn {
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            color: #fff;
            border: none;
            border-radius: 12px;
            padding: 1rem;
            font-size: 1.05rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;
            margin-top: auto;
        }

        button.primary-btn:hover {
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
            transform: scale(1.02);
        }

        button.primary-btn:active {
            transform: scale(0.98);
        }

        .output-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .action-btn {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--border);
            color: var(--text-main);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .action-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }

        .action-btn.danger:hover {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
            color: #fca5a5;
        }



        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: flex;
            align-items: center;
            gap: 0.8rem;
            z-index: 1000;
            font-weight: 500;
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>

    <div class="header">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
            <h1 data-i18n="title"><i class="fa-solid fa-network-wired"></i> V2Ray / Clash 转 Socks5</h1>
        </div>
        <div
            style="margin: 1rem auto 0; width: 100%; display: flex; align-items: flex-start; text-align: left; gap: 0.8rem; background: rgba(16, 185, 129, 0.15); padding: 0.8rem 1.2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; font-size: 0.85rem; font-weight: 500; line-height: 1.5; box-sizing: border-box;">
            <i class="fa-solid fa-shield-halved" style="margin-top: 0.2rem; font-size: 1rem;"></i>
            <span><strong data-i18n="secureTitle">全本地执行：</strong><span
                    data-i18n="secureDesc">整个解析与转换动作都在您的浏览器内部完成，绝不存在任何向远端服务器上传、泄露节点信息的行为，你可以右键菜单查看网页源码，请放心使用。</span></span>
        </div>
    </div>

    <div class="container">
        <!-- 主操作区 -->
        <div class="panel">
            <div class="output-header" style="margin-bottom: 0.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 600; display: flex; align-items: center; gap: 0.6rem;">
                    <i class="fa-solid fa-link" style="color: #a78bfa;"></i> <span data-i18n="v2rayHeader">1. V2RayN
                        配置链接转 Clash (可选功能)</span>
                </h2>
                <button class="action-btn" id="copyV2rayBtn">
                    <i class="fa-solid fa-copy"></i> <span data-i18n="copySourceLink">复制原链接</span>
                </button>
            </div>
            <div class="form-group flex-fill" style="flex: 0.3; min-height: 80px; margin-bottom: 0.5rem;">
                <textarea id="v2rayInput" data-i18n-placeholder="v2rayPlaceholder"
                    placeholder="如您只有 V2RayN 配置链接或Base64：请粘贴在这里！(支持所有主流协议，不支持变种协议，不支持机场订阅链接)，系统将为您自动解析并填充至下框..."></textarea>
            </div>

            <hr
                style="border: 0; height: 1px; background: rgba(255,255,255,0.05); margin: 0.5rem 0; margin-bottom: 1rem;">

            <div class="output-header" style="margin-bottom: 0.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 600; display: flex; align-items: center; gap: 0.6rem;">
                    <i class="fa-solid fa-file-import" style="color: var(--primary);"></i> <span
                        data-i18n="clashHeader">2. Clash 配置源 (默认可直接从这步开始)</span>
                </h2>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="action-btn" id="downloadInputBtn">
                        <i class="fa-solid fa-download"></i> <span data-i18n="downloadSourceBtn">下载原配置</span>
                    </button>
                    <button class="action-btn" id="copyInputBtn">
                        <i class="fa-solid fa-copy"></i> <span data-i18n="copySourceConfig">复制原配置</span>
                    </button>
                </div>
            </div>

            <div class="form-group flex-fill">
                <textarea id="yamlInput" data-i18n-placeholder="clashPlaceholder"
                    placeholder="在此处粘贴完整的 Clash 配置文件源文本&#10;必须要包含 \`proxies:\` 节点数组部分..."></textarea>
            </div>

            <div class="settings-row" style="align-items: flex-end;">
                <div class="form-group">
                    <label for="startPort"><i class="fa-solid fa-plane"></i> <span data-i18n="startPortLabel">Socks5
                            起始分配端口</span></label>
                    <input type="number" id="startPort" value="10000" min="1024" max="65000">
                </div>
                <div class="form-group">
                    <button class="action-btn danger" id="clearBtn"
                        style="padding: 0.9rem; justify-content: center; height: 100%;">
                        <i class="fa-solid fa-trash-can"></i> <span data-i18n="clearAllBtn">一键清空所有配置</span>
                    </button>
                </div>
            </div>

            <hr style="border: 0; height: 1px; background: var(--border); margin: 0.5rem 0;">

            <div class="output-header">
                <h2 style="font-size: 1.25rem; font-weight: 600; display: flex; align-items: center; gap: 0.6rem;">
                    <i class="fa-solid fa-file-export" style="color: var(--secondary);"></i> <span
                        data-i18n="outputHeader">生成结果</span>
                </h2>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="action-btn" id="downloadBtn">
                        <i class="fa-solid fa-download"></i> <span data-i18n="downloadBtn">下载 .yaml</span>
                    </button>
                    <button class="action-btn" id="copyBtn">
                        <i class="fa-solid fa-copy"></i> <span data-i18n="copyResultBtn">复制配置</span>
                    </button>
                </div>
            </div>

            <div class="form-group flex-fill">
                <textarea id="yamlOutput" readonly data-i18n-placeholder="outputPlaceholder"
                    placeholder="转换生成后的 Clash 结构将显示在此处。"></textarea>
            </div>


        </div>
    </div>

    <div class="toast" id="toast">
        <i class="fa-solid fa-check-circle"></i>
        <span>操作成功！</span>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const v2rayInput = document.getElementById('v2rayInput');
            const yamlInput = document.getElementById('yamlInput');
            const startPortInput = document.getElementById('startPort');
            const yamlOutput = document.getElementById('yamlOutput');
            const copyBtn = document.getElementById('copyBtn');
            const clearBtn = document.getElementById('clearBtn');
            const copyInputBtn = document.getElementById('copyInputBtn');
            const downloadInputBtn = document.getElementById('downloadInputBtn');
            const copyV2rayBtn = document.getElementById('copyV2rayBtn');
            const downloadBtn = document.getElementById('downloadBtn');

            let convertTimeout;
            let v2rayTimeout;
            let currentLang = 'en';

            // ====================== 国际化 i18n 系统 =======================
            const translations = {
                'zh': {
                    title: '<i class="fa-solid fa-network-wired"></i> V2Ray / Clash 转 Socks5',
                    secureTitle: '全本地执行：',
                    secureDesc: '整个解析与转换动作都在您的浏览器内部完成，绝不存在任何向远端服务器上传、泄露节点信息的行为，您可以右键菜单查看网页源码进行自行核实，请放心使用。',
                    v2rayHeader: '1. V2RayN 配置链接转 Clash (可选功能)',
                    copySourceLink: '复制原链接',
                    v2rayPlaceholder: '如您只有 V2RayN 配置链接或Base64：请粘贴在这里！(支持所有主流协议，不支持变种协议，不支持机场订阅链接)，系统将为您自动解析并填充至下框...',
                    clashHeader: '2. Clash 配置源 (默认可直接从这步开始)',
                    copySourceConfig: '复制原配置',
                    downloadSourceBtn: '下载原配置',
                    clashPlaceholder: '在此处粘贴完整的 Clash 配置文件或节点列表数组\\n如果是完整配置，系统将保留原有的规则、分组等信息并注入 Socks5 监听器；\\n如果仅粘贴节点列表，系统将为您自动补全基础配置...',
                    startPortLabel: 'Socks5 起始分配端口',
                    clearAllBtn: '一键清空所有配置',
                    outputHeader: '生成结果',
                    downloadBtn: '下载 .yaml',
                    copyResultBtn: '复制配置',
                    outputPlaceholder: '转换生成后的 Clash 结构将显示在此处。',
                    t_parse_v2ray_success: '成功解析 V2RayN 订阅并流入 Clash',
                    t_clear_all: '已清空所有配置',
                    t_err_config_empty: '原配置为空，无内容可复制',
                    t_copied_config: '已复制原配置到剪贴板！',
                    t_copy_fail: '复制失败，请手动全选复制',
                    t_err_v2ray_empty: 'V2Ray链接为空，无内容可复制',
                    t_copied_v2ray: '已复制V2Ray链接到剪贴板！',
                    t_err_result_empty: '还没有转换结果可操作',
                    t_copied_result: '已复制到剪贴板！',
                    t_download_start: '已成功开始下载配置！'
                },
                'en': {
                    title: '<i class="fa-solid fa-network-wired"></i> V2Ray / Clash to Socks5',
                    secureTitle: '100% Local Processing: ',
                    secureDesc: 'All parsing and conversion happen entirely inside your browser. No data, nodes or traffic are ever sent to remote servers. You can right-click to inspect the page source code. Safe to use.',
                    v2rayHeader: '1. Convert V2RayN links to Clash (Optional)',
                    copySourceLink: 'Copy Raw Link',
                    v2rayPlaceholder: 'Paste your raw V2Ray link or Base64 here (Supports vmess/vless/ss/trojan. Does NOT support variants or subscription URLs). It will auto-fill the Clash config box below...',
                    clashHeader: '2. Clash YAML Config (Default Entry)',
                    copySourceConfig: 'Copy Raw Config',
                    downloadSourceBtn: 'Download Config',
                    clashPlaceholder: 'Paste your full Clash YAML configuration or a list of proxies.\\nIf it is a full config, it will preserve rules/groups and inject Socks5 listeners.\\nIf it is just a list, it will auto-complete basic settings...',
                    startPortLabel: 'Socks5 Start Port',
                    clearAllBtn: 'Clear All',
                    outputHeader: 'Conversion Result',
                    downloadBtn: 'Download .yaml',
                    copyResultBtn: 'Copy Result',
                    outputPlaceholder: 'The generated Clash multi-port Socks5 configuration will appear here.',
                    t_parse_v2ray_success: 'Successfully parsed V2Ray link to Clash Config',
                    t_clear_all: 'All fields have been cleared',
                    t_err_config_empty: 'Clash input is empty. Nothing to copy.',
                    t_copied_config: 'Clash source text copied to clipboard!',
                    t_copy_fail: 'Copy failed. Please manually select and copy.',
                    t_err_v2ray_empty: 'V2Ray input is empty. Nothing to copy.',
                    t_copied_v2ray: 'V2Ray source link copied to clipboard!',
                    t_err_result_empty: 'No generated result available yet.',
                    t_copied_result: 'Result config copied to clipboard!',
                    t_download_start: 'Configuration download started successfully!'
                }
            };

            function getI18nStr(key) {
                return translations[currentLang][key] || key;
            }

            function applyI18n() {
                document.title = getI18nStr('title').replace(/<[^>]+>/g, ''); // 移除 title 中的标签

                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[currentLang][key]) {
                        el.innerHTML = translations[currentLang][key];
                    }
                });

                document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                    const key = el.getAttribute('data-i18n-placeholder');
                    if (translations[currentLang][key]) {
                        el.placeholder = translations[currentLang][key];
                    }
                });
            }

            // 初始化系统语言检测
            function initLang() {
                const sysLang = navigator.language || navigator.userLanguage;
                if (sysLang.toLowerCase().includes('zh')) {
                    currentLang = 'zh';
                } else {
                    currentLang = 'en';
                }
                applyI18n();
            }

            initLang();
            // ====================== 国际化结束 =======================

            // ====================== V2Ray 解析器核心库 =======================
            function decodeBase64Safe(str) {
                try {
                    let text = str.replace(/-/g, '+').replace(/_/g, '/');
                    const pad = text.length % 4;
                    if (pad) text += '='.repeat(4 - pad);
                    let decoded = atob(text);
                    try { return decodeURIComponent(escape(decoded)); } catch (e) { return decoded; }
                } catch (e) { return str; }
            }

            function parseV2rayNConfig(text) {
                if (!text) return null;
                if (!text.includes('://')) {
                    let maybeDecoded = decodeBase64Safe(text);
                    if (maybeDecoded && maybeDecoded.includes('://')) text = maybeDecoded;
                }
                const lines = text.split('\\n');
                const proxies = [];
                for (let line of lines) {
                    line = line.trim();
                    if (!line || line.startsWith('#')) continue;
                    try {
                        if (line.startsWith('vmess://')) {
                            const payload = line.slice(8);
                            const config = JSON.parse(decodeBase64Safe(payload));
                            const proxy = {
                                name: config.ps || 'vmess-' + Math.random().toString(36).substr(2, 5),
                                type: 'vmess', server: config.add, port: parseInt(config.port),
                                uuid: config.id, alterId: parseInt(config.aid || 0), cipher: config.scy || "auto",
                                udp: true
                            };
                            if (config.tls === 'tls') {
                                proxy.tls = true;
                                if (config.sni) proxy.servername = config.sni;
                                if (config.alpn) proxy.alpn = config.alpn.split(',');
                                if (config.allowInsecure === 'true' || config.allowInsecure === true) proxy['skip-cert-verify'] = true;
                            }
                            if (config.net === 'ws') {
                                proxy.network = 'ws';
                                proxy['ws-opts'] = { path: config.path || '/', headers: { Host: config.host || '' } };
                            } else if (config.net === 'grpc') {
                                proxy.network = 'grpc';
                                proxy['grpc-opts'] = { 'grpc-service-name': config.path || '' };
                            }
                            proxies.push(proxy);
                        } else if (line.startsWith('vless://') || line.startsWith('trojan://') || line.startsWith('hysteria2://') || line.startsWith('hy2://')) {
                            const url = new URL(line);
                            let type = url.protocol.replace(':', '');
                            if (type === 'hy2') type = 'hysteria2';

                            const proxy = {
                                name: decodeURIComponent(url.hash.slice(1)) || \`\${type}-\${Math.random().toString(36).substr(2, 5)}\`,
                                type: type, server: url.hostname, port: parseInt(url.port) || 443,
                                udp: true
                            };

                            if (type === 'vless') {
                                proxy.uuid = url.username;
                                const flow = url.searchParams.get('flow');
                                if (flow) proxy.flow = flow;
                            } else if (type === 'hysteria2') {
                                proxy.password = url.username;
                                const obfs = url.searchParams.get('obfs');
                                if (obfs) {
                                    proxy.obfs = obfs;
                                    proxy['obfs-password'] = url.searchParams.get('obfs-password') || url.searchParams.get('obfs-pass') || '';
                                }
                            } else {
                                proxy.password = decodeURIComponent(url.username);
                            }

                            const security = url.searchParams.get('security');
                            if (security === 'tls' || security === 'reality' || type === 'hysteria2' || type === 'trojan') {
                                proxy.tls = true;
                                if (security === 'reality') {
                                    proxy['reality-opts'] = {
                                        'public-key': url.searchParams.get('pbk') || '',
                                        'short-id': url.searchParams.get('sid') || ''
                                    };
                                }
                                const sni = url.searchParams.get('sni') || url.searchParams.get('peer');
                                if (sni) proxy.servername = sni;
                                const fp = url.searchParams.get('fp');
                                if (fp) proxy['client-fingerprint'] = fp;
                                const alpn = url.searchParams.get('alpn');
                                if (alpn) proxy.alpn = alpn.split(',');
                                if (url.searchParams.get('insecure') === '1' || url.searchParams.get('allowInsecure') === '1') proxy['skip-cert-verify'] = true;
                            }

                            const network = url.searchParams.get('type');
                            if (network === 'ws') {
                                proxy.network = 'ws';
                                proxy['ws-opts'] = { path: url.searchParams.get('path') || '/', headers: { Host: url.searchParams.get('host') || '' } };
                            } else if (network === 'grpc') {
                                proxy.network = 'grpc';
                                proxy['grpc-opts'] = { 'grpc-service-name': url.searchParams.get('serviceName') || '' };
                            }
                            proxies.push(proxy);
                        } else if (line.startsWith('ss://')) {
                            let hash = ''; let main = line.slice(5);
                            if (main.includes('#')) { const parts = main.split('#'); hash = decodeURIComponent(parts[1]); main = parts[0]; }
                            let method = '', password = '', server = '', port = '';

                            // Handling SIP002 format: ss://BASE64(method:password)@server:port
                            if (main.includes('@')) {
                                const parts = main.split('@');
                                const credentials = decodeBase64Safe(parts[0]);
                                if (credentials.includes(':')) {
                                    const cParts = credentials.split(':');
                                    method = cParts[0]; password = cParts[1];
                                }
                                const serverPart = parts[1];
                                if (serverPart.includes(':')) {
                                    const sParts = serverPart.split(':');
                                    server = sParts[0]; port = parseInt(sParts[1]);
                                }
                            } else {
                                const decoded = decodeBase64Safe(main);
                                // Handles legacy format or others
                                const parts = decoded.split('@');
                                if (parts.length === 2) {
                                    const cParts = parts[0].split(':');
                                    method = cParts[0]; password = cParts[1];
                                    const sParts = parts[1].split(':');
                                    server = sParts[0]; port = parseInt(sParts[1]);
                                }
                            }
                            if (server && port) {
                                proxies.push({ name: hash || 'ss-' + Math.random().toString(36).substr(2, 5), type: 'ss', server: server, port: port, cipher: method, password: password, udp: true });
                            }
                        }
                    } catch (e) {
                        console.warn("解析节点失败:", line, e);
                    }
                }
                if (proxies.length > 0) {
                    const proxyNames = proxies.map(p => p.name);
                    return jsyaml.dump({
                        'port': 7890,
                        'socks-port': 7891,
                        'mixed-port': 7892,
                        'allow-lan': true,
                        'mode': 'rule',
                        'log-level': 'info',
                        'proxies': proxies,
                        'proxy-groups': [
                            {
                                name: '🚀 节点选择',
                                type: 'select',
                                proxies: ['🛰️ 自动选择', 'DIRECT', ...proxyNames]
                            },
                            {
                                name: '🛰️ 自动选择',
                                type: 'url-test',
                                url: 'http://www.gstatic.com/generate_204',
                                interval: 300,
                                tolerance: 50,
                                proxies: proxyNames
                            }
                        ],
                        'rules': [
                            'DOMAIN-WILDCARD,*.google.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.youtube.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.github.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.googlevideo.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.gstatic.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.googleusercontent.com,🚀 节点选择',
                            'DOMAIN-WILDCARD,*.ggpht.com,🚀 节点选择',
                            'DOMAIN-SUFFIX,google.com,🚀 节点选择',
                            'DOMAIN-SUFFIX,github.com,🚀 节点选择',
                            'DOMAIN-KEYWORD,google,🚀 节点选择',
                            'GEOIP,CN,DIRECT',
                            'MATCH,🚀 节点选择'
                        ]
                    }, { lineWidth: -1 });
                }
                return null;
            }
            // ====================== 解析库结束 =======================

            function doConvert() {
                const inputStr = yamlInput.value.trim();
                const startPort = parseInt(startPortInput.value) || 10000;

                let parseSuccess = false;
                let outputStr = '';

                if (inputStr) {
                    try {
                        // 预处理：删除所有 YAML 注释
                        // 正则逻辑：匹配行首或空格后的 # 及其后续所有字符，直到行尾
                        // 注意：这会过滤掉大部分注释，且 js-yaml 本身加载后 dump 也不带注释
                        const cleanInput = inputStr.replace(/(^|[ \\t])#.*\$/gm, '\$1');

                        let doc = jsyaml.load(cleanInput);

                        // 如果输入是数组，则认为它只是节点列表，包装成对象
                        if (Array.isArray(doc)) {
                            doc = { proxies: doc };
                        }

                        if (doc && doc.proxies && Array.isArray(doc.proxies)) {
                            const proxies = doc.proxies;

                            // 检查是否为“完整”配置：是否有常见的顶层配置字段
                            const completeFields = ['port', 'socks-port', 'mixed-port', 'allow-lan', 'mode', 'log-level', 'rules', 'dns', 'proxy-groups'];
                            const isComplete = completeFields.some(field => Object.prototype.hasOwnProperty.call(doc, field));

                            if (!isComplete) {
                                // 非完整配置：合并默认值进行自动补全
                                doc = Object.assign({
                                    'port': 7890,
                                    'socks-port': 7891,
                                    'mixed-port': 7892,
                                    'allow-lan': true,
                                    'mode': 'rule',
                                    'log-level': 'info'
                                }, doc);
                            }

                            // 构造新的监听器列表（每个节点分配一个 Socks5 端口）
                            const listeners = [];
                            let currentPort = startPort;
                            proxies.forEach((proxy) => {
                                const safeName = \`socks5-\${currentPort}\`;
                                listeners.push({
                                    name: safeName,
                                    type: 'socks',
                                    port: currentPort,
                                    proxy: proxy.name
                                });
                                currentPort++;
                            });

                            // 更新或注入监听器，保持其他信息（如 dns, rules 等）不变
                            doc.listeners = listeners;

                            outputStr = jsyaml.dump(doc, {
                                lineWidth: -1,
                                noRefs: true
                            });
                            parseSuccess = true;
                        }
                    } catch (e) {
                        // 静默处理解析异常
                    }
                }

                yamlOutput.value = outputStr;

                // 统一且绝对保证执行的 UI 更新逻辑
                if (!inputStr) {
                    copyInputBtn.style.display = 'none';
                    downloadInputBtn.style.display = 'none';
                    clearBtn.style.display = 'none';
                } else {
                    copyInputBtn.style.display = 'flex';
                    downloadInputBtn.style.display = 'flex';
                    clearBtn.style.display = 'flex';
                }

                if (!parseSuccess) {
                    downloadBtn.style.display = 'none';
                    copyBtn.style.display = 'none';
                } else {
                    downloadBtn.style.display = 'flex';
                    copyBtn.style.display = 'flex';
                }
            }

            // 初始化时执行一次，隐藏初始的空按钮
            doConvert();

            // 初始化 V2Ray 按钮逻辑
            if (!v2rayInput.value.trim()) {
                copyV2rayBtn.style.display = 'none';
            }

            // 防抖监听输入框变化，将延迟降低到 50ms 达到几乎无缝实时转换
            yamlInput.addEventListener('input', () => {
                const originalValue = yamlInput.value;
                // 正则匹配：1. 以#开头的行 2. 空格后的#及其后续内容
                // 并去除多余的空行
                const cleanedValue = originalValue
                    .replace(/(^|\\s)#.*\$/gm, '\$1')
                    .replace(/\\n\\s*\\n/g, '\\n')
                    .trimStart();

                if (originalValue !== cleanedValue) {
                    const start = yamlInput.selectionStart;
                    yamlInput.value = cleanedValue;
                    // 只有在非空且还在输入时才尝试恢复光标，简单的赋值会重置光标
                    try { yamlInput.setSelectionRange(start, start); } catch (e) { }
                }

                clearTimeout(convertTimeout);
                convertTimeout = setTimeout(doConvert, 1);
            });

            // 监听起始端口变化，立马转换不需要较长防抖
            startPortInput.addEventListener('input', () => {
                clearTimeout(convertTimeout);
                convertTimeout = setTimeout(doConvert, 100);
            });

            // V2Ray 输入框防抖监听
            v2rayInput.addEventListener('input', () => {
                clearTimeout(v2rayTimeout);
                v2rayTimeout = setTimeout(() => {
                    const val = v2rayInput.value.trim();
                    if (val === '') {
                        copyV2rayBtn.style.display = 'none';
                        return;
                    }
                    copyV2rayBtn.style.display = 'flex';
                    const clashYaml = parseV2rayNConfig(val);
                    if (clashYaml) {
                        yamlInput.value = clashYaml;
                        doConvert();
                        showToast(getI18nStr('t_parse_v2ray_success'), 'success');
                    }
                }, 100);
            });

            clearBtn.addEventListener('click', () => {
                v2rayInput.value = '';
                yamlInput.value = '';
                copyV2rayBtn.style.display = 'none';
                doConvert();
                showToast(getI18nStr('t_clear_all'), 'success');
            });

            copyInputBtn.addEventListener('click', () => {
                const text = yamlInput.value;
                if (!text) {
                    showToast(getI18nStr('t_err_config_empty'), 'error');
                    return;
                }
                navigator.clipboard.writeText(text).then(() => {
                    showToast(getI18nStr('t_copied_config'), 'success');
                }).catch(() => {
                    showToast(getI18nStr('t_copy_fail'), 'error');
                });
            });

            downloadInputBtn.addEventListener('click', () => {
                const text = yamlInput.value;
                if (!text) {
                    showToast(getI18nStr('t_err_config_empty'), 'error');
                    return;
                }
                const blob = new Blob([text], { type: 'text/yaml;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'clash-source.yaml';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                showToast(getI18nStr('t_download_start'), 'success');
            });

            copyV2rayBtn.addEventListener('click', () => {
                const text = v2rayInput.value;
                if (!text) {
                    showToast(getI18nStr('t_err_v2ray_empty'), 'error');
                    return;
                }
                navigator.clipboard.writeText(text).then(() => {
                    showToast(getI18nStr('t_copied_v2ray'), 'success');
                }).catch(() => {
                    showToast(getI18nStr('t_copy_fail'), 'error');
                });
            });

            copyBtn.addEventListener('click', () => {
                const text = yamlOutput.value;
                if (!text) {
                    showToast(getI18nStr('t_err_result_empty'), 'error');
                    return;
                }
                navigator.clipboard.writeText(text).then(() => {
                    showToast(getI18nStr('t_copied_result'), 'success');
                }).catch(() => {
                    showToast(getI18nStr('t_copy_fail'), 'error');
                });
            });

            downloadBtn.addEventListener('click', () => {
                const text = yamlOutput.value;
                if (!text) {
                    showToast(getI18nStr('t_err_result_empty'), 'error');
                    return;
                }

                // 基于纯前端 Blob 实现的文件下载
                const blob = new Blob([text], { type: 'text/yaml;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'clash-to-socks5.yaml'; // 默认指定生成的文件名
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                showToast(getI18nStr('t_download_start'), 'success');
            });

            function showToast(msg, type = 'success') {
                const toast = document.getElementById('toast');
                const icon = toast.querySelector('i');
                const text = toast.querySelector('span');

                if (type === 'error') {
                    toast.style.background = 'linear-gradient(135deg, #ef4444, #b91c1c)';
                    icon.className = 'fa-solid fa-triangle-exclamation';
                } else {
                    toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    icon.className = 'fa-solid fa-check-circle';
                }

                text.innerText = msg;
                toast.classList.add('show');

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
        });
    </script>
</body>

</html>`;

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