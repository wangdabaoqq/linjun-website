# 自定义提供商

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 添加不在预设列表中的 AI 提供商
- 配置自定义 API 端点

## 前置条件

- 霖君已安装并运行
- 拥有第三方 AI 服务的 API 凭证
- 了解该服务的 API 端点格式

## 支持 API Key 的提供商

| 提供商 | 说明 |
|--------|------|
| Custom Provider | 任何 OpenAI 兼容的 API 服务 |
| AmpCode | AmpCode AI 服务 |

## 操作步骤

### 1. 进入提供商管理

点击左侧菜单 **Providers**。

### 2. 添加自定义提供商

1. 选择 **Custom Provider** 或 **AmpCode**
2. 填写配置信息：
   - **名称**：用于识别的显示名称
   - **API 端点**：服务的 API 地址
   - **API Key**：你的凭证（会安全存储）

### 3. 保存配置

填写完成后点击保存，提供商会添加到列表中。

## 配置示例

### OpenAI 兼容服务

```text
名称: My-OpenAI-Compatible
API 端点: https://api.example.com/v1
API Key: sk-xxxxxxxxxxxxx
```

### 自部署 LLM 服务

```text
名称: Local-LLM
API 端点: http://localhost:8080/v1
API Key: (留空或按服务要求填写)
```

### Azure OpenAI

```text
名称: Azure-GPT
API 端点: https://your-resource.openai.azure.com
API Key: your-azure-api-key
```

## 验证结果

- **预期看到**：自定义提供商出现在列表中，状态正常
- **若未出现**：检查 API 端点和密钥是否正确

## 常见问题

### 连接测试失败

- 确认 API 端点地址正确（包含协议和端口）
- 检查 API Key 有效性
- 确认网络可以访问该端点
- 检查是否需要 VPN/代理

### 仪表盘显示 "custom · xxx"

这是正常的，自定义提供商会以此格式显示在效率统计中，便于区分内置提供商。

### 请求失败但配置正确

- 检查 API 端点是否需要特定的路径后缀（如 `/v1/chat/completions`）
- 确认服务是否兼容 OpenAI API 格式

## 下一步

- [提供商概览](./overview)
- [OAuth 登录](./oauth-login)
