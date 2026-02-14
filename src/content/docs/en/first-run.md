# First Run

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Complete essential first-time configuration
- Download and initialize the CLIProxyAPIPlus proxy binary

## Prerequisites

- Completed [Installation](./install)

## Steps

### 1. Launch the App

After first launching LinJun, the app will automatically detect your environment.

### 2. Proxy Binary Initialization

If the CLIProxyAPIPlus binary doesn't exist, the app will prompt you to download it:

1. Go to the **About** page
2. In the proxy binary card, click **Download** or **Update**
3. Wait for download to complete (may take a few minutes depending on network)
4. Version number will display when complete

### 3. Configure Proxy Port (Optional)

The default proxy port is `8310`. To change it:

1. Go to the **Settings** page
2. Find the proxy port option
3. Enter a new port number and save

### 4. Start the Proxy Service

1. Return to the main page
2. Click the **Start** button
3. Status changes to "Running" indicates successful startup

### 5. Add Provider Accounts

1. Go to the **Providers** page
2. Select the service to add (e.g., Claude Code, Gemini CLI)
3. Complete OAuth authorization or enter API Key

## Verification

- **Expected**: Proxy status shows "Running", port 8310 is listening
- **If not**: Check if the port is in use, view logs to troubleshoot errors

## Common Issues

### Proxy binary download failed

- Check network connection
- Try using a proxy/VPN
- Visit [GitHub Releases](https://github.com/router-for-me/CLIProxyAPIPlus/releases) to download manually

### Port is in use

Change to a different port, or close the program using port 8310:

```bash
# Find the process using the port
lsof -i :8310  # macOS/Linux
netstat -ano | findstr :8310  # Windows
```

## Next Steps

- [Configure CLI agents](./agents/configuration)
- [View the dashboard](./dashboard/overview)
