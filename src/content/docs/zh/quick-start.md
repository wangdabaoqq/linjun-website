# 快速开始

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 安装并启动霖君
- 添加第一个 AI 提供商
- 验证代理服务正常工作

## 前置条件

- macOS 12+、Windows 10+ 或 Linux（支持 AppImage / deb）
- 至少一个 AI 服务账号（Claude、Gemini、Codex、Copilot 等）

## 操作步骤

### 1. 安装霖君

从 [GitHub Releases](https://github.com/wangdabaoqq/LinJun/releases) 下载对应平台的安装包：

| 平台 | 下载文件 |
|------|---------|
| macOS (Apple Silicon) | `LinJun-x.x.x-arm64.dmg` |
| macOS (Intel) | `LinJun-x.x.x-x64.dmg` |
| Windows | `LinJun-x.x.x-x64.exe` |
| Linux | `LinJun-x.x.x-x64.AppImage` 或 `.deb` |

### 2. 首次启动

启动应用后，你会看到主界面。首次启动时：

1. 应用会自动检查并下载 CLIProxyAPIPlus 代理二进制（如果需要）
2. 等待下载完成，状态栏显示"代理已就绪"

### 3. 添加提供商

点击左侧 **Providers** 菜单：

1. 选择要添加的服务（如 Claude Code、Gemini CLI、Codex 等）
2. 点击对应的登录按钮，在弹出窗口中完成 OAuth 授权
3. 授权成功后，账号会显示在列表中

支持的提供商：

- Claude Code（OAuth）
- Gemini CLI（OAuth）
- OpenAI Codex（OAuth）
- Qwen Code（OAuth）
- Antigravity（OAuth / Google）
- iFlow（OAuth）
- GitHub Copilot（OAuth）
- Kiro（OAuth）
- Custom Provider（API Key）
- AmpCode（API Key）

### 4. 启动代理

回到主界面：

1. 点击 **Start** 按钮启动代理服务
2. 代理启动后，状态变为"运行中"
3. 默认代理地址：`http://localhost:8310`

### 5. 配置 CLI 工具

霖君可以自动检测并配置以下 CLI 工具：

- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode
- Amp CLI
- Droid CLI
- iFlow CLI

进入 **Agents** 页面，选择检测到的工具，点击"配置"即可自动设置代理。

## 验证结果

- **预期看到**：Dashboard 显示请求统计，Logs 中有请求记录
- **若未出现**：检查代理是否正常运行，CLI 工具的代理配置是否正确

## 下一步

- [查看所有支持的提供商](./providers/overview)
- [了解 OAuth 登录详情](./providers/oauth-login)
- [配置 CLI 代理工具](./agents/configuration)
- [查看仪表盘](./dashboard/overview)
