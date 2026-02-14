# OAuth Login

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Add AI provider accounts via OAuth
- Understand each provider's authentication method

## Prerequisites

- LinJun installed and running
- Account for the corresponding AI service

## OAuth-Supported Providers

| Provider | Auth Method | Notes |
|----------|-------------|-------|
| Claude Code | OAuth | Anthropic official account |
| Gemini CLI | OAuth | Google account |
| OpenAI Codex | OAuth | OpenAI account |
| Qwen Code | OAuth | Alibaba Cloud account |
| Antigravity | OAuth (Google) | Uses Google account for authorization |
| iFlow | OAuth | iFlow account |
| GitHub Copilot | OAuth | GitHub account |
| Kiro | OAuth | Kiro account |

## Steps

### 1. Go to Provider Management

Click the **Providers** menu on the left.

### 2. Select Provider

Choose the service you want to add from the provider list.

### 3. Start OAuth Authorization

Click the login button for the corresponding provider:

1. Browser will automatically open the authorization page
2. Log in with your account
3. Agree to the authorization request
4. Authorization completes and window closes automatically

### 4. Verify Success

Return to the provider list; the newly added account should appear with "Connected" status.

## Token Storage

OAuth tokens are securely stored locally:

- Location: `~/.cli-proxy-api/` directory
- File format: `{provider}-{identifier}.json`

Examples:

- `codex-user@example.com-Plus.json`
- `antigravity-user@gmail.com.json`
- `kiro-google-123456.json`

## Verification

- **Expected**: Provider list shows the new account with normal status
- **If not**: Check network, try re-authorizing

## Common Issues

### Authorization page won't open

- Check default browser settings
- Try manually copying the authorization link to browser

### Didn't auto-return after authorization

Manually return to LinJun and click refresh to check if the account was added successfully.

### Token expired

Some provider tokens expire and require re-authorization:

1. Find the corresponding account in the provider list
2. Click "Re-login" or "Refresh Token"

## Next Steps

- [Provider Overview](./overview)
- [Add Custom Providers](./custom-providers)
- [Account Model Rules](./account-model-rules)
