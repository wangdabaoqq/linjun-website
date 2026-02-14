# 安装

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 在你的操作系统上安装霖君
- 解决常见的安装权限问题

## 前置条件

- 管理员权限（用于安装）
- 网络连接（用于下载）

## 下载

从 [GitHub Releases](https://github.com/wangdabaoqq/LinJun/releases) 下载最新版本：

| 平台 | 下载文件 |
|------|---------|
| macOS (Apple Silicon) | `LinJun-x.x.x-arm64.dmg` |
| macOS (Intel) | `LinJun-x.x.x-x64.dmg` |
| Windows | `LinJun-x.x.x-x64.exe` |
| Linux | `LinJun-x.x.x-x64.AppImage` 或 `.deb` |

## 操作步骤

### macOS

1. 下载对应架构的 `.dmg` 文件
2. 双击打开 DMG 文件
3. 将霖君拖入 Applications 文件夹
4. 首次打开时，如果提示"无法验证开发者"：
   - 打开"系统偏好设置" > "安全性与隐私"
   - 点击"仍要打开"

### Windows

1. 下载 `.exe` 安装程序
2. 双击运行安装程序
3. 按提示完成安装
4. 如果 Windows Defender 提示，点击"更多信息" > "仍要运行"

### Linux

**AppImage 方式：**

1. 下载 `.AppImage` 文件
2. 添加执行权限：`chmod +x LinJun-x.x.x-x64.AppImage`
3. 双击运行或从终端执行

**Deb 包方式（Debian/Ubuntu）：**

```bash
sudo dpkg -i LinJun-x.x.x-x64.deb
```

## 验证结果

- **预期看到**：霖君主界面正常显示
- **若未出现**：查看 [常见错误](./troubleshooting/common-errors)

## 常见问题

### macOS 提示"App is damaged and can't be opened"

由于 macOS 安全机制，从 App Store 外下载的应用可能触发此警告。执行以下命令修复：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/霖君.app"
```

### macOS 提示"已损坏，无法打开"

执行以下命令移除隔离属性：

```bash
xattr -cr /Applications/霖君.app
```

### Windows 安装后无法启动

尝试以管理员身份运行，或检查杀毒软件是否拦截。

## 从源码构建

如果你想从源码构建，需要：

- Node.js 18+
- Bun（推荐）或 npm
- Git

```bash
# 克隆仓库
git clone https://github.com/wangdabaoqq/LinJun.git
cd LinJun

# 安装依赖
bun install

# 下载 CLIProxyAPIPlus 二进制
bun run download:binary

# 启动开发服务器
bun dev

# 构建生产版本
bun run build:mac      # macOS
bun run build:win      # Windows
bun run build:linux    # Linux
bun run build:all      # 全平台
```
