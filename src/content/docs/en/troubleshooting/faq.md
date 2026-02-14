# FAQ

> Updated: 2024-02-13

## Installation

### Q: macOS says "Cannot verify developer"?

A: Open "System Preferences" > "Security & Privacy" > "General", click "Open Anyway".

### Q: macOS says "App is damaged and can't be opened"?

A: Run the following command to remove the quarantine attribute:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/霖君.app"
```

### Q: What operating systems are supported?

A: macOS 12+, Windows 10+, Linux (AppImage and deb packages supported).

## Providers

### Q: What AI providers are supported?

A: LinJun supports 10+ providers:

- **OAuth Auth**: Claude Code, Gemini CLI, OpenAI Codex, Qwen Code, Antigravity, iFlow, GitHub Copilot, Kiro
- **API Key Auth**: Custom Provider, AmpCode

### Q: OAuth login failed?

A: Check network connection, ensure browser isn't blocking popups, try clearing browser cache and retry.

### Q: How to configure custom providers?

A: See [Custom Providers](../providers/custom-providers) documentation.

### Q: Where are tokens stored?

A: Tokens are stored in JSON files in the `~/.cli-proxy-api/` directory.

## Proxy

### Q: What's the default proxy port?

A: Default port is **8310**. Can be changed in settings.

### Q: Proxy won't start?

A: Check if port 8310 is in use, try changing to a different port. View logs for detailed error info.

### Q: How to change proxy port?

A: Modify proxy port settings on the **Settings** page.

### Q: What's the difference between app and proxy?

A: The LinJun app is the user interface; the CLIProxyAPIPlus proxy is the backend service that handles API requests.

### Q: What CLI tools are supported?

A: LinJun can auto-configure these CLI tools:

- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode
- Amp CLI
- Droid CLI
- iFlow CLI

## Updates

### Q: How to check for updates?

A: Click "Check for Updates" on the **About** page.

### Q: What components need updating?

A: Two components:

1. **Application**: LinJun desktop app
2. **Proxy Binary**: CLIProxyAPIPlus proxy program

## Data

### Q: Where is data stored?

A:

- **Tokens**: `~/.cli-proxy-api/`
- **App Config**: System user data directory

### Q: How to backup data?

A: Copy the `~/.cli-proxy-api/` directory to backup token data.

### Q: How to clear all data?

A: Close app, delete `~/.cli-proxy-api/` directory and app config directory, restart.

## Getting Help

If above solutions don't work:

1. See [Common Errors](./common-errors)
2. Submit issue on [GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues)
3. Include system info and error logs
