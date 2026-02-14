# Basic Settings

> Version: v1.0.0+
> Updated: 2024-02-13

## Proxy Settings

### Port

- **Default**: 8310
- **Description**: Port the proxy service listens on
- **How to change**: Enter new port number in settings page and save

Restart proxy service after changing port for it to take effect.

### Routing Strategy

LinJun supports two routing strategies for multi-account scenarios:

| Strategy | Description |
|----------|-------------|
| Round Robin | Requests distributed to accounts in sequence |
| Fill First | Prioritize first account until quota exhausted |

### Auto-Start

- When enabled, proxy service starts automatically with the app
- Useful when LinJun is set to launch at startup

## Notification Settings

### Quota Warnings

- When enabled, sends system notification when account quota falls below threshold
- Can set warning threshold (default 20%)

### Error Notifications

- When enabled, sends notification on request failures
- Helps catch issues promptly

## Interface Settings

### Theme

- **Light**: Light theme
- **Dark**: Dark theme
- **System**: Follow system setting

### Language

- **简体中文** (Simplified Chinese)
- **English**

## System Tray

LinJun supports minimizing to system tray:

- Closing window minimizes to tray (can be disabled in settings)
- Tray icon shows proxy running status
- Right-click menu for quick proxy start/stop

## Next Steps

- [Manage API Keys](./api-key)
- [Update Management](./update)
