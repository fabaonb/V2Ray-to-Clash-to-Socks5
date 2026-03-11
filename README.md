<h1 align="center">V2Ray / Clash to Socks5</h1>

<details>
<summary align="center">🇨🇳 点击查看中文文档 / Click to view Chinese documentation</summary>

<h2 align="center">V2Ray / Clash 转 Socks5</h2>

<p align="center">
  <img src="https://img.shields.io/github/stars/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/license/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/last-commit/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Last Commit">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=fabaonb.V2Ray-to-Clash-to-Socks5" alt="Visitors">
</p>

<h4 align="center">技术栈</h4>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
</p>

---

<p align="center">
这是一个全本地化执行的 V2Ray / Clash 节点转换为 Socks5 多端口代理生成的工具静态网页。<br>
不依赖任何服务端，彻底杜绝隐私泄露风险。
</p>

### 核心功能

- **深度协议解析**：支持 VMess, VLESS (Vision/Reality), Trojan, Hysteria 1/2, TUIC (v4/v5), Shadowsocks, ShadowsocksR, WireGuard, Snell, Shadow-TLS 及 HTTP/Socks5。
- **全参数映射 (Meta 增强)**：根据 `wiki.metacubex.one` 标准，深度支持：
  - **TUIC v5**：拥塞控制、UDP 转发模式、0-RTT 开启及各类超时参数。
  - **Hysteria 2**：端口跳跃 (Port Hopping)、上传/下载带宽、混淆配置。
  - **VLESS Reality**：公钥 (Public Key)、短 ID (Short ID) 及 Spider-X 等。
  - **通用 TLS**：各种 TLS 指纹 (Fingerprint)、ALPN 与 SNI 映射。
- **严格准入校验**：自动识别 Clash (Mihomo/Meta) 不支持的协议组合（如旧版 XTLS），并给出明确的 `🛑 Clash不支持` 警告。
- **极简配置生成**：输入节点列表或现有配置，自动生成仅包含 `proxies` 和 `listeners` 的极简 YAML 结构，每个节点自动分配独立的 Socks5 端口。
- **智能防冲突**：自动处理重复的节点名称，确保输出的配置在 Clash 内核中 100% 合法。
- **隐私与安全**：100% 浏览器本地执行，起始端口通过 LocalStorage 持久化，绝不上传任何数据。
- **双语系统**：根据浏览器语言自动切换中英文界面。

### 部署指南

由于本工具是纯前端实现的无后端静态网页，您可以轻松部署到以下平台：

#### 1. Vercel
1. Fork 本仓库。
2. 在 Vercel 控制台关联仓库，直接部署即可（自动识别 `index.html`）。

#### 2. Cloudflare Pages
1. 在 CF Dashboard 进入 **Workers 和 Pages**。
2. 选择 **Pages** -> **Connect to Git**，选中仓库并部署。

#### 3. Cloudflare Workers
1. 本地运行 `node build-worker.js` 生成 `worker.js`。
2. 在 CF Worker 编辑器中粘贴 `worker.js` 的内容并保存发布。

---

<h4 align="center">Star 历史</h4>

<p align="center">
  <a href="https://star-history.com/#fabaonb/V2Ray-to-Clash-to-Socks5&Date"><img src="https://api.star-history.com/svg?repos=fabaonb/V2Ray-to-Clash-to-Socks5&type=Date" alt="Star History Chart"></a>
</p>

</details>

---

<p align="center">
  <img src="https://img.shields.io/github/stars/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/license/fabaonb/V2Ray-to-Clash-to-Socks5?style=flat-square" alt="License">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=fabaonb.V2Ray-to-Clash-to-Socks5" alt="Visitors">
</p>

<p align="center">
A fully client-side static web tool that converts V2Ray / Clash links into Socks5 multi-port proxy configurations.<br>
No server-side dependency — zero privacy leak risk.
</p>

### Key Features

- **Deep Protocol Parsing**: Supports VMess, VLESS (Vision/Reality), Trojan, Hysteria 1/2, TUIC (v4/v5), Shadowsocks, ShadowsocksR, WireGuard, Snell, Shadow-TLS, and HTTP/Socks5.
- **Full Parameter Mapping (Meta Enhanced)**: Adheres to `wiki.metacubex.one` standards, with deep support for:
  - **TUIC v5**: Congestion control, UDP relay mode, 0-RTT, and timeout settings.
  - **Hysteria 2**: Port hopping, bandwidth limits, and obfuscation.
  - **VLESS Reality**: Public Key, Short ID, Spider-X, etc.
  - **Global TLS**: Comprehensive mapping for Fingerprints, ALPN, and SNI.
- **Strict Protocol Check**: Automatically identifies configurations unsupported by Clash/Mihomo (e.g., legacy XTLS) and provides a `🛑 Unsupported by Clash` warning.
- **Minimalist Config Generation**: Generates a clean YAML containing only `proxies` and `listeners`. Each node is assigned a unique Socks5 port.
- **Smart Collision Handling**: Automatically resolves duplicate node names for 100% valid Clash configurations.
- **Privacy-First**: 100% browser-side execution with LocalStorage for port persistence.
- **Dynamic i18n**: Automatically switches between English and Chinese based on browser language.

### Deployment Guides

As a pure front-end static tool, you can deploy it anywhere:

#### 1. Vercel
1. Fork the repo.
2. Link the repo in Vercel dashboard and deploy (auto-detects `index.html`).

#### 2. Cloudflare Pages
1. Go to **Workers & Pages** in CF Dashboard.
2. Select **Pages** -> **Connect to Git** and deploy.

#### 3. Cloudflare Workers
1. Run `node build-worker.js` locally to generate `worker.js`.
2. Paste the `worker.js` content into the CF Worker editor and deploy.

---

<h3 align="center">Star History</h3>

<p align="center">
  <a href="https://star-history.com/#fabaonb/V2Ray-to-Clash-to-Socks5&Date"><img src="https://api.star-history.com/svg?repos=fabaonb/V2Ray-to-Clash-to-Socks5&type=Date" alt="Star History Chart"></a>
</p>
