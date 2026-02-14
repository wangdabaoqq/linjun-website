# Quick Start

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Install and launch LinJun
- Add your first AI provider
- Verify the proxy service is working

## Prerequisites

- macOS 12+, Windows 10+, or Linux (AppImage / deb supported)
- At least one AI service account (Claude, Gemini, Codex, Copilot, etc.)

## Steps

### 1. Install LinJun

Download the installer for your platform from [GitHub Releases](https://github.com/wangdabaoqq/LinJun/releases):

| Platform | Download File |
|----------|---------------|
| macOS (Apple Silicon) | `LinJun-x.x.x-arm64.dmg` |
| macOS (Intel) | `LinJun-x.x.x-x64.dmg` |
| Windows | `LinJun-x.x.x-x64.exe` |
| Linux | `LinJun-x.x.x-x64.AppImage` or `.deb` |

### 2. First Launch

After launching the app, you'll see the main interface. On first launch:

1. The app will automatically check and download the CLIProxyAPIPlus binary (if needed)
2. Wait for the download to complete; the status bar will show "Proxy Ready"

### 3. Add a Provider

Click the **Providers** menu on the left:

1. Select the service you want to add (e.g., Claude Code, Gemini CLI, Codex)
2. Click the login button and complete OAuth authorization in the popup window
3. After successful authorization, the account will appear in the list

Supported providers:

- Claude Code (OAuth)
- Gemini CLI (OAuth)
- OpenAI Codex (OAuth)
- Qwen Code (OAuth)
- Antigravity (OAuth / Google)
- iFlow (OAuth)
- GitHub Copilot (OAuth)
- Kiro (OAuth)
- Custom Provider (API Key)
- AmpCode (API Key)

### 4. Start the Proxy

Return to the main interface:

1. Click the **Start** button to start the proxy service
2. Once started, the status changes to "Running"
3. Default proxy address: `http://localhost:8310`

### 5. Configure CLI Tools

LinJun can automatically detect and configure these CLI tools:

- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode
- Amp CLI
- Droid CLI
- iFlow CLI

Go to the **Agents** page, select the detected tool, and click "Configure" to set up the proxy automatically.

## Verification

- **Expected**: Dashboard shows request statistics, Logs show request records
- **If not**: Check if the proxy is running and if CLI tool proxy settings are correct

## Next Steps

- [View all supported providers](./providers/overview)
- [Learn about OAuth login](./providers/oauth-login)
- [Configure CLI agents](./agents/configuration)
- [View the dashboard](./dashboard/overview)
