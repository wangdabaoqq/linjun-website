# Quota Monitoring

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

The Quota page monitors usage quotas for each provider account, helping you understand account status and remaining capacity.

## Main Features

### Account Quota Overview

Each added account displays:

- **Account ID**: Email or account identifier
- **Provider**: Service provider
- **Usage**: Quota used in current period
- **Remaining Quota**: Available remaining capacity
- **Reset Time**: When quota resets

### Quota Warnings

When account quota is running low, LinJun will warn you:

- **Yellow Warning**: Quota usage exceeds 80%
- **Red Warning**: Quota usage exceeds 95%
- **Notification**: Can enable quota warning notifications in settings

## View All Models

Click the **View All Models** button to see provider-supported model lists:

- Model list comes from `/v1/models?is_webui=true` endpoint
- Filtered by provider context (Codex, Copilot, Kiro show their respective models)
- Shows model ID, name, and availability status

## Provider-Specific Notes

### Claude

- Quota resets monthly
- Shows remaining message count or tokens

### Codex / Copilot

- Quota info comes from GitHub account
- May show subscription status

### Gemini

- Shows API call count limits
- Tracked per minute/day/month

## Refreshing Quota

- Auto refresh: Page updates periodically
- Manual refresh: Click refresh button to update immediately

## Common Issues

### Quota shows empty

- Provider may not provide quota API
- Try re-logging into the account
- Check network connection

### Quota not updating

- Click refresh button to manually update
- Some providers have delayed quota updates

## Next Steps

- [View Request Logs](./logs)
- [Set Quota Warnings](../settings/basic)
