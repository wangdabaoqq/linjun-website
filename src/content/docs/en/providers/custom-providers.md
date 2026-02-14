# Custom Providers

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Add AI providers not in the preset list
- Configure custom API endpoints

## Prerequisites

- LinJun installed and running
- API credentials for a third-party AI service
- Knowledge of the service's API endpoint format

## API Key Providers

| Provider | Description |
|----------|-------------|
| Custom Provider | Any OpenAI-compatible API service |
| AmpCode | AmpCode AI service |

## Steps

### 1. Go to Provider Management

Click the **Providers** menu on the left.

### 2. Add Custom Provider

1. Select **Custom Provider** or **AmpCode**
2. Fill in configuration:
   - **Name**: Display name for identification
   - **API Endpoint**: The service's API address
   - **API Key**: Your credentials (stored securely)

### 3. Save Configuration

Click save after completing the form; the provider will be added to the list.

## Configuration Examples

### OpenAI-Compatible Service

```text
Name: My-OpenAI-Compatible
API Endpoint: https://api.example.com/v1
API Key: sk-xxxxxxxxxxxxx
```

### Self-Hosted LLM Service

```text
Name: Local-LLM
API Endpoint: http://localhost:8080/v1
API Key: (leave empty or as required by service)
```

### Azure OpenAI

```text
Name: Azure-GPT
API Endpoint: https://your-resource.openai.azure.com
API Key: your-azure-api-key
```

## Verification

- **Expected**: Custom provider appears in the list with normal status
- **If not**: Check if API endpoint and key are correct

## Common Issues

### Connection test failed

- Confirm API endpoint address is correct (including protocol and port)
- Check API Key validity
- Confirm network can access the endpoint
- Check if VPN/proxy is needed

### Dashboard shows "custom · xxx"

This is normal. Custom providers display in this format to distinguish them from built-in providers.

### Requests fail but configuration is correct

- Check if API endpoint needs a specific path suffix (e.g., `/v1/chat/completions`)
- Confirm service is compatible with OpenAI API format

## Next Steps

- [Provider Overview](./overview)
- [OAuth Login](./oauth-login)
