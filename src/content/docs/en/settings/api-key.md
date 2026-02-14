# API Key Management

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

LinJun can generate API keys for the local proxy, making it easy for third-party tools to connect.

## Generate Key

1. Go to **Settings** or **API Key** page
2. Click **Generate New Key** button
3. Enter a key name (for identification)
4. Click confirm to generate

Generated key format: `lj-xxxxxxxxxxxxxxxxxxxx`

## Using Keys

Configure in third-party tools:

```bash
# API Address
http://localhost:8310/v1

# API Key
lj-xxxxxxxxxxxxxxxxxxxx
```

### Environment Variables

```bash
export OPENAI_API_BASE=http://localhost:8310/v1
export OPENAI_API_KEY=lj-xxxxxxxxxxxxxxxxxxxx
```

### Configuration File Example

```json
{
  "api_base": "http://localhost:8310/v1",
  "api_key": "lj-xxxxxxxxxxxxxxxxxxxx"
}
```

## Managing Keys

### View Keys

- Key list shows name, creation time, last used time
- Click a key to copy to clipboard

### Delete Key

- Click the delete button next to a key
- Deleted keys are immediately invalidated
- Tools using that key will need a new key

## Security Recommendations

- Don't share keys publicly
- Rotate keys periodically
- Generate separate keys for different tools for easier management

## Next Steps

- [Basic Settings](./basic)
- [Update Management](./update)
