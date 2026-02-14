# 提供商概览

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 支持的提供商

霖君支持以下 AI 提供商，通过统一的代理接口管理多个账号：

| 提供商 | 认证方式 | 说明 |
|--------|----------|------|
| Claude Code | OAuth | Anthropic Claude 官方服务 |
| Gemini CLI | OAuth | Google Gemini 服务 |
| OpenAI Codex | OAuth | OpenAI Codex 服务 |
| Qwen Code | OAuth | 阿里通义千问服务 |
| Antigravity | OAuth (Google) | Antigravity AI 服务 |
| iFlow | OAuth | iFlow AI 服务 |
| GitHub Copilot | OAuth | GitHub Copilot 服务 |
| Kiro | OAuth | Kiro AI 服务 |
| Custom Provider | API Key | 自定义 OpenAI 兼容服务 |
| AmpCode | API Key | AmpCode 服务 |

## 认证方式

### OAuth 认证

大多数提供商使用 OAuth 认证流程：

1. 在提供商列表中点击对应服务
2. 点击登录按钮，浏览器会打开授权页面
3. 使用你的账号登录并授权
4. 授权完成后自动返回霖君

Token 存储位置：`~/.cli-proxy-api/` 目录下的 JSON 文件：

- `codex-{email}-Plus.json`
- `antigravity-{email}.json`
- `kiro-google-{id}.json`
- 等等

### API Key 认证

自定义提供商和 AmpCode 使用 API Key 认证：

1. 选择 Custom Provider 或 AmpCode
2. 输入 API 端点地址
3. 输入你的 API Key
4. 点击保存

## 多账号管理

霖君支持为同一提供商添加多个账号：

- 点击提供商旁的"添加账号"可添加额外账号
- 多个账号可用于负载均衡和故障转移
- 在设置中选择路由策略（Round Robin 或 Fill First）

## 下一步

- [OAuth 登录详情](./oauth-login)
- [配置自定义提供商](./custom-providers)
