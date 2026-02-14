# Supported CLI Agents

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

LinJun can automatically detect and configure the following CLI agents to use LinJun's unified proxy service:

| CLI Tool | Description |
|----------|-------------|
| Claude Code | Anthropic official CLI tool |
| Codex CLI | OpenAI Codex command-line tool |
| Gemini CLI | Google Gemini command-line tool |
| OpenCode | Open-source AI programming assistant |
| Amp CLI | Amp AI command-line tool |
| Droid CLI | Droid AI command-line tool |
| iFlow CLI | iFlow AI command-line tool |

## Auto-Detection

LinJun automatically scans for installed CLI tools on your system:

1. Go to the **Agents** page
2. LinJun displays a list of detected CLI tools
3. Each tool shows its current configuration status

## One-Click Configuration

For detected CLI tools, click the "Configure" button to auto-configure:

- Automatically sets proxy address to LinJun's local proxy
- Preserves the tool's other settings
- Configuration takes effect immediately

## Manual Configuration

If auto-configuration isn't available, you can configure manually:

### Proxy Address

Default proxy address: `http://localhost:8310`

### Environment Variables

For tools that support environment variables:

```bash
export OPENAI_API_BASE=http://localhost:8310/v1
export ANTHROPIC_API_BASE=http://localhost:8310
```

### Configuration Files

Specific configuration methods depend on each CLI tool's documentation.

## Next Steps

- [Configuration Details](./configuration)
- [View Request Logs](../dashboard/logs)
