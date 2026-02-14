# Common Errors

> Updated: 2024-02-13

## Installation Errors

### "App is damaged and can't be opened" (macOS)

**Cause**: macOS Gatekeeper quarantine attribute

**Solution**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/霖君.app"
```

### "Cannot be opened because it is from an unidentified developer" (macOS)

**Cause**: macOS Gatekeeper quarantine attribute

**Solution**:

```bash
xattr -cr /Applications/霖君.app
```

### "Windows Defender SmartScreen blocked this app"

**Cause**: App unsigned or signature not trusted

**Solution**: Click "More info" > "Run anyway"

## Proxy Errors

### "Port already in use"

**Cause**: Port 8310 (default) is used by another program

**Solution**:

1. Change to a different proxy port, or
2. Close the program using the port:

```bash
# Find process using the port (using 8310 as example)
# macOS/Linux
lsof -i :8310

# Windows
netstat -ano | findstr :8310
```

### "Proxy binary not found"

**Cause**: CLIProxyAPIPlus binary not downloaded or deleted

**Solution**: Re-download proxy binary on the **About** page

### "Proxy startup timeout"

**Cause**: Insufficient system resources or antivirus blocking

**Solution**:

1. Check system resource usage
2. Add LinJun to antivirus whitelist
3. Try restarting the app

## Network Errors

### "Cannot connect to provider"

**Cause**: Network issues or provider service outage

**Solution**:

1. Check network connection
2. Check provider service status
3. Try using a proxy/VPN

### "Request timeout"

**Cause**: High network latency or slow service response

**Solution**:

1. Check network quality
2. Retry later
3. Consider using a closer service node

## Authentication Errors

### "Token expired"

**Cause**: OAuth token expired

**Solution**: Re-authorize via OAuth login on the Providers page

### "Invalid API key"

**Cause**: Custom provider API key is wrong or expired

**Solution**: Check and update API key

## CLI Tool Errors

### Tool errors after configuration

**Cause**: Proxy not running or configuration error

**Solution**:

1. Confirm LinJun proxy service is running (status shows "Running")
2. Confirm at least one provider account is added
3. Check if port 8310 is correct

### Auto-configuration didn't detect tool

**Cause**: CLI tool not properly installed

**Solution**:

1. Confirm CLI tool is properly installed
2. Run tool in terminal to confirm it works
3. Use manual configuration as alternative

## Data Errors

### "Configuration file corrupted"

**Cause**: Configuration file format error

**Solution**:

1. Backup current configuration file
2. Delete configuration file
3. Restart app to generate default config
4. Redo necessary configuration

### Token file corrupted

**Cause**: JSON files in `~/.cli-proxy-api/` are corrupted

**Solution**:

1. Delete the corresponding token file
2. Re-login via OAuth

## Getting Help

If above solutions don't work:

1. Collect error logs
2. Submit issue on [GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues)
3. Include system info and error logs
