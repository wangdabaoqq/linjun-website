# API 密钥管理

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 概述

霖君可以为本地代理生成 API 密钥，方便第三方工具接入。

## 生成密钥

1. 进入 **Settings** 或 **API Key** 页面
2. 点击 **Generate New Key** 按钮
3. 输入密钥名称（用于识别）
4. 点击确认生成

生成的密钥格式类似：`lj-xxxxxxxxxxxxxxxxxxxx`

## 使用密钥

在第三方工具中配置：

```bash
# API 地址
http://localhost:8310/v1

# API 密钥
lj-xxxxxxxxxxxxxxxxxxxx
```

### 环境变量

```bash
export OPENAI_API_BASE=http://localhost:8310/v1
export OPENAI_API_KEY=lj-xxxxxxxxxxxxxxxxxxxx
```

### 配置文件示例

```json
{
  "api_base": "http://localhost:8310/v1",
  "api_key": "lj-xxxxxxxxxxxxxxxxxxxx"
}
```

## 管理密钥

### 查看密钥

- 密钥列表显示名称、创建时间、最后使用时间
- 点击密钥可复制到剪贴板

### 删除密钥

- 点击密钥旁的删除按钮
- 删除后该密钥立即失效
- 使用该密钥的工具需要更换新密钥

## 安全建议

- 不要在公开场合分享密钥
- 定期轮换密钥
- 为不同工具生成独立密钥，方便管理

## 下一步

- [基本设置](./basic)
- [更新管理](./update)
