# Update Management

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

LinJun has two components that can be updated:

- **Application**: LinJun desktop app
- **Proxy Binary**: CLIProxyAPIPlus proxy program

## Checking for Updates

### Application Update

1. Go to the **About** page
2. In the app info card, click **Check for Updates**
3. If a new version is available, an update button will appear

### Proxy Binary Update

1. Go to the **About** page
2. In the proxy binary card, click **Check for Updates**
3. If a new version is available, click **Update** to download

## Update Process

### Updating the Application

1. Click the update button
2. Download new version installer
3. Prompt to restart after download completes
4. New version auto-installs after restart

### Updating Proxy Binary

1. Click the update button
2. Automatically downloads new binary version
3. Automatically replaces after download completes
4. Proxy service auto-restarts

## Version Information

On the About page you can see:

- Current app version
- Current proxy binary version
- Last update check time

## Auto-Update

You can enable auto-update checking in settings:

- When enabled, checks for updates on startup
- Shows notification when new version available
- Won't auto-download; requires manual confirmation

## Common Issues

### Update download failed

- Check network connection
- Try using a proxy/VPN
- Retry later

### Proxy binary version shows unknown

- May be first install without download
- Click download/update button to get latest version

### Issues after update

- Try restarting the app
- Check [Changelog](https://github.com/wangdabaoqq/LinJun/blob/main/CHANGELOG) for changes
- Report issues on GitHub Issues

## Next Steps

- [Basic Settings](./basic)
- [FAQ](../troubleshooting/faq)
