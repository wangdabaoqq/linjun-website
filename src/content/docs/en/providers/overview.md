# Provider Overview

> Version: v1.0.0+
> Updated: 2024-02-13

## Supported Providers

LinJun supports the following AI providers through a unified proxy interface:

| Provider | Auth Method | Description |
|----------|-------------|-------------|
| Claude Code | OAuth | Anthropic Claude official service |
| Gemini CLI | OAuth | Google Gemini service |
| OpenAI Codex | OAuth | OpenAI Codex service |
| Qwen Code | OAuth | Alibaba Qwen service |
| Antigravity | OAuth (Google) | Antigravity AI service |
| iFlow | OAuth | iFlow AI service |
| GitHub Copilot | OAuth | GitHub Copilot service |
| Kiro | OAuth | Kiro AI service |
| Custom Provider | API Key | Custom OpenAI-compatible service |
| AmpCode | API Key | AmpCode service |

## Authentication Methods

### OAuth Authentication

Most providers use OAuth authentication flow:

1. Click the corresponding service in the provider list
2. Click the login button; browser will open the authorization page
3. Log in with your account and authorize
4. Authorization completes and automatically returns to LinJun

Token storage location: JSON files in `~/.cli-proxy-api/` directory:

- `codex-{email}-Plus.json`
- `antigravity-{email}.json`
- `kiro-google-{id}.json`
- etc.

### API Key Authentication

Custom Provider and AmpCode use API Key authentication:

1. Select Custom Provider or AmpCode
2. Enter the API endpoint address
3. Enter your API Key
4. Click save

## Multi-Account Management

LinJun supports adding multiple accounts for the same provider:

- Click "Add Account" next to a provider to add additional accounts
- Multiple accounts can be used for load balancing and failover
- Choose routing strategy in settings (Round Robin or Fill First)

## Next Steps

- [OAuth Login Details](./oauth-login)
- [Configure Custom Providers](./custom-providers)
- [Account Model Rules](./account-model-rules)
