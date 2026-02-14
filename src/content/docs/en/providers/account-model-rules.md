# Account Model Rules

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

Account Model Rules allow you to specify which models each OAuth account can access. This feature is useful for:

- Restricting specific accounts to only access certain models
- Preventing accounts from using unsupported models that cause request failures
- Assigning different model permissions to different accounts

## Opening Configuration

1. Go to the **Providers** page
2. Next to an added OAuth account, click the model rules icon (usually a gear or filter icon)
3. Open the **Account Model Rules** modal

## Configuration Methods

### Select from Model List

The modal automatically loads available models from the current proxy (filtered by provider). Click any model to add it to the rules.

### Manual Input

Enter a model name or pattern in the search box, then press Enter or click the add button.

## Pattern Matching Syntax

Account model rules support wildcard pattern matching:

| Pattern | Description | Example |
|---------|-------------|---------|
| Exact match | Complete model name | `gemini-2.5-pro` |
| Prefix match | Ends with `*` | `gemini-2.5-*` matches all models starting with gemini-2.5 |
| Suffix match | Starts with `*` | `*-preview` matches all models ending with preview |
| Contains match | `*` on both ends | `*flash*` matches all models containing flash |

## Configuration Examples

### Only Allow Pro Models

```text
gemini-2.5-pro
gemini-2.0-pro
claude-3-5-sonnet*
```

### Allow All Flash Models

```text
*flash*
```

### Exclude Preview Models (Only Allow Stable)

```text
gemini-2.5-pro
gemini-2.0-flash
claude-3-5-sonnet-20241022
```

## Source Key

For some providers (like Gemini), there may be multiple source options:

| Provider | Source Options |
|----------|----------------|
| Gemini | `gemini-cli`, `vertex`, `aistudio` |
| Claude | `claude` |
| Codex | `codex` |
| Copilot | `copilot` |
| Kiro | `kiro` |

Select the correct Source Key to ensure rules apply to the correct upstream service.

## Saving Rules

1. Add all required model patterns
2. Ensure at least one pattern exists (cannot be empty)
3. Click the **Save** button

After saving, requests from this account will only work with models matching the rules.

## Deleting Rules

To remove a pattern, click the X button next to it.

To clear all rules (allow access to all models), delete all patterns and save.

## Common Issues

### Rules not taking effect

- Ensure proxy service is running
- Check if Source Key is correct
- Try re-saving the rules

### Requests being rejected

If the requested model is not in the rules list, the proxy will reject the request. Check if rules correctly include the needed models.

### Model list is empty

- Ensure proxy service is running
- Click refresh to reload
- Check network connection

## Next Steps

- [Provider Overview](./overview)
- [OAuth Login](./oauth-login)
