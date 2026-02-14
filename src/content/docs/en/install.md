# Installation

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- Install LinJun on your operating system
- Resolve common installation permission issues

## Prerequisites

- Administrator privileges (for installation)
- Network connection (for download)

## Download

Download the latest version from [GitHub Releases](https://github.com/wangdabaoqq/LinJun/releases):

| Platform | Download File |
|----------|---------------|
| macOS (Apple Silicon) | `LinJun-x.x.x-arm64.dmg` |
| macOS (Intel) | `LinJun-x.x.x-x64.dmg` |
| Windows | `LinJun-x.x.x-x64.exe` |
| Linux | `LinJun-x.x.x-x64.AppImage` or `.deb` |

## Installation Steps

### macOS

1. Download the `.dmg` file for your architecture
2. Double-click to open the DMG file
3. Drag LinJun to the Applications folder
4. On first launch, if you see "Cannot verify developer":
   - Open "System Preferences" > "Security & Privacy"
   - Click "Open Anyway"

### Windows

1. Download the `.exe` installer
2. Double-click to run the installer
3. Follow the prompts to complete installation
4. If Windows Defender prompts, click "More info" > "Run anyway"

### Linux

**AppImage:**

1. Download the `.AppImage` file
2. Add execute permission: `chmod +x LinJun-x.x.x-x64.AppImage`
3. Double-click to run or execute from terminal

**Deb Package (Debian/Ubuntu):**

```bash
sudo dpkg -i LinJun-x.x.x-x64.deb
```

## Verification

- **Expected**: LinJun main interface displays normally
- **If not**: See [Common Errors](./troubleshooting/common-errors)

## Common Issues

### macOS: "App is damaged and can't be opened"

Due to macOS security mechanisms, apps downloaded outside the App Store may trigger this warning. Run the following command to fix:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/霖君.app"
```

### macOS: "Cannot be opened because it is from an unidentified developer"

Remove the quarantine attribute:

```bash
xattr -cr /Applications/霖君.app
```

### Windows: Cannot start after installation

Try running as administrator, or check if antivirus software is blocking it.

## Build from Source

If you want to build from source:

**Requirements:**

- Node.js 18+
- Bun (recommended) or npm
- Git

```bash
# Clone the repository
git clone https://github.com/wangdabaoqq/LinJun.git
cd LinJun

# Install dependencies
bun install

# Download CLIProxyAPIPlus binary
bun run download:binary

# Start development server
bun dev

# Build for production
bun run build:mac      # macOS
bun run build:win      # Windows
bun run build:linux    # Linux
bun run build:all      # All platforms
```
