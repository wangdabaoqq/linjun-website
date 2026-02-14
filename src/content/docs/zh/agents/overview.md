# 支持的 CLI 代理

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 概述

霖君可以自动检测并配置以下 CLI 代理工具，让它们使用霖君的统一代理服务：

| CLI 工具 | 说明 |
|----------|------|
| Claude Code | Anthropic 官方 CLI 工具 |
| Codex CLI | OpenAI Codex 命令行工具 |
| Gemini CLI | Google Gemini 命令行工具 |
| OpenCode | 开源 AI 编程助手 |
| Amp CLI | Amp AI 命令行工具 |
| Droid CLI | Droid AI 命令行工具 |
| iFlow CLI | iFlow AI 命令行工具 |

## 自动检测

霖君会自动扫描系统中已安装的 CLI 工具：

1. 进入 **Agents** 页面
2. 霖君会显示检测到的 CLI 工具列表
3. 每个工具显示当前配置状态

## 一键配置

对于检测到的 CLI 工具，点击"Configure"按钮即可自动配置：

- 自动设置代理地址为霖君的本地代理
- 保留工具的其他配置不变
- 配置完成后工具立即生效

## 手动配置

如果自动配置不可用，可以手动设置：

### 代理地址

默认代理地址：`http://localhost:8310`

### 环境变量

对于支持环境变量的工具，可以设置：

```bash
export OPENAI_API_BASE=http://localhost:8310/v1
export ANTHROPIC_API_BASE=http://localhost:8310
```

### 配置文件

具体配置方式取决于各 CLI 工具的文档。

## 下一步

- [配置代理详情](./configuration)
- [查看请求日志](../dashboard/logs)
