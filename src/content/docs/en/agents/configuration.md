# CLI Agent Configuration

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Configure CLI tools to use LinJun proxy
- Verify configuration is working

## Prerequisites

- LinJun installed and running
- At least one provider account added
- Proxy service started

## Steps

### 1. Go to Agents Page

Click the **Agents** menu on the left to view the detected CLI tools list.

### 2. Select Tool

Find the CLI tool you want to configure in the list. Each tool displays:

- Tool name and icon
- Current configuration status (Configured/Not Configured)
- Detected installation path

### 3. Configure Proxy

Click the **Configure** button next to the tool:

- LinJun will automatically modify the tool's configuration file
- Sets API endpoint to LinJun proxy address
- Shows success message when complete

### 4. Verify Configuration

After configuration, run the CLI tool in terminal:

```bash
# Example: Claude Code
claude --version

# Example: Run a simple request
claude "Hello"
```

Check LinJun's **Logs** page; you should see request records.

## Manual Configuration

If auto-configuration doesn't work, you can configure manually:

### Claude Code

Edit `~/.claude/config.json`:

```json
{
  "apiBaseUrl": "http://localhost:8310"
}
```

### OpenCode

Edit `~/.opencode/config.yaml`:

```yaml
api:
  base_url: http://localhost:8310/v1
```

### Environment Variables

Add to your shell config file (e.g., `~/.zshrc` or `~/.bashrc`):

```bash
# OpenAI-compatible interface
export OPENAI_API_BASE=http://localhost:8310/v1

# Anthropic interface
export ANTHROPIC_API_BASE=http://localhost:8310
```

Reload configuration:

```bash
source ~/.zshrc
```

## Verification

- **Expected**: CLI tool works normally, LinJun logs show request records
- **If not**: Check if proxy is running, if configuration paths are correct

## Common Issues

### Tool errors after configuration

1. Confirm LinJun proxy service is running
2. Confirm at least one provider account is added
3. Check if port 8310 is correct

### Auto-configuration didn't detect tool

- Confirm CLI tool is properly installed
- Try running the tool in terminal to confirm it works
- Use manual configuration as an alternative

## Next Steps

- [View Dashboard](../dashboard/overview)
- [Monitor Request Logs](../dashboard/logs)
