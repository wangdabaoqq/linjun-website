# 首次运行

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 完成首次启动的必要配置
- 下载并初始化 CLIProxyAPIPlus 代理二进制

## 前置条件

- 已完成 [安装](./install)

## 操作步骤

### 1. 启动应用

首次启动霖君后，应用会自动检测环境。

### 2. 代理二进制初始化

如果 CLIProxyAPIPlus 代理二进制不存在，应用会提示下载：

1. 进入 **About** 页面
2. 在代理二进制卡片中点击 **Download** 或 **Update**
3. 等待下载完成（根据网络情况可能需要几分钟）
4. 下载完成后显示版本号

### 3. 配置代理端口（可选）

默认代理端口为 `8310`。如需修改：

1. 进入 **Settings** 页面
2. 找到代理端口选项
3. 输入新端口号并保存

### 4. 启动代理服务

1. 回到主页
2. 点击 **Start** 按钮
3. 状态变为"运行中"表示启动成功

### 5. 添加提供商账号

1. 进入 **Providers** 页面
2. 选择要添加的服务（如 Claude Code、Gemini CLI 等）
3. 完成 OAuth 授权或输入 API Key

## 验证结果

- **预期看到**：代理状态显示"运行中"，端口 8310 正常监听
- **若未出现**：检查端口是否被占用，查看日志排查错误

## 常见问题

### 代理二进制下载失败

- 检查网络连接
- 尝试使用代理/VPN
- 查看 [GitHub Releases](https://github.com/router-for-me/CLIProxyAPIPlus/releases) 手动下载

### 端口被占用

更换其他端口，或关闭占用端口 8310 的程序：

```bash
# 查找占用端口的进程
lsof -i :8310  # macOS/Linux
netstat -ano | findstr :8310  # Windows
```

## 下一步

- [配置 CLI 代理工具](./agents/configuration)
- [查看仪表盘](./dashboard/overview)
