# OAuth 登录

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 通过 OAuth 添加 AI 提供商账号
- 了解各提供商的认证方式

## 前置条件

- 霖君已安装并运行
- 拥有对应 AI 服务的账号

## 支持 OAuth 的提供商

| 提供商 | 认证方式 | 备注 |
|--------|----------|------|
| Claude Code | OAuth | Anthropic 官方账号 |
| Gemini CLI | OAuth | Google 账号 |
| OpenAI Codex | OAuth | OpenAI 账号 |
| Qwen Code | OAuth | 阿里云账号 |
| Antigravity | OAuth (Google) | 使用 Google 账号授权 |
| iFlow | OAuth | iFlow 账号 |
| GitHub Copilot | OAuth | GitHub 账号 |
| Kiro | OAuth | Kiro 账号 |

## 操作步骤

### 1. 进入提供商管理

点击左侧菜单 **Providers**。

### 2. 选择提供商

在提供商列表中选择要添加的服务。

### 3. 开始 OAuth 授权

点击对应提供商的登录按钮：

1. 浏览器会自动打开授权页面
2. 使用你的账号登录
3. 同意授权请求
4. 授权完成后窗口自动关闭

### 4. 验证添加成功

回到提供商列表，新添加的账号应显示在列表中，状态为"已连接"。

## Token 存储

OAuth Token 安全存储在本地：

- 位置：`~/.cli-proxy-api/` 目录
- 文件格式：`{provider}-{identifier}.json`

示例：

- `codex-user@example.com-Plus.json`
- `antigravity-user@gmail.com.json`
- `kiro-google-123456.json`

## 验证结果

- **预期看到**：提供商列表中显示新账号，状态正常
- **若未出现**：检查网络，尝试重新授权

## 常见问题

### 授权页面无法打开

- 检查默认浏览器设置
- 尝试手动复制授权链接到浏览器

### 授权后未自动返回

手动回到霖君，点击刷新检查账号是否添加成功。

### Token 过期

部分提供商的 Token 会过期，需要重新授权：

1. 在提供商列表中找到对应账号
2. 点击"重新登录"或"刷新 Token"

## 下一步

- [提供商概览](./overview)
- [添加自定义提供商](./custom-providers)
