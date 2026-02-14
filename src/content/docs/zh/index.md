---
title: 霖君文档
description: 欢迎使用霖君官方文档，跨平台 AI 代理管理工具。
---

# 霖君文档

欢迎来到 **霖君 (LinJun)** 官方文档。霖君是一款终极跨平台应用，用于管理 AI 账号、追踪配额，并为您的开发工作流提供高可用性保障。

## 什么是霖君？

霖君位于您的工具（IDE、CLI 脚本、解释器）与 AI 提供商（OpenAI、Anthropic、Gemini）之间。它作为一个智能代理和管理器，提供以下功能：

-   **配额聚合**：在一个地方查看所有 Key 的使用情况。
-   **防止停机**：当一个账号失败时，自动切换到备份账号。
-   **节省费用**：根据规则将请求路由到更便宜的模型或本地回退方案。

## 快速开始

如果您是第一次使用霖君，请从这里开始：

<cards>
  <card
    icon="download"
    href="/docs/zh/install"
    title="安装指南"
    description="在 macOS、Windows 或 Linux 上安装并运行霖君。"
  ></card>
  <card
    icon="zap"
    href="/docs/zh/quick-start"
    title="快速开始"
    description="连接您的第一个 AI 账号并开始追踪配额使用。"
  ></card>
</cards>

## 核心概念

了解系统的构建基块：

-   **[提供商管理](/docs/zh/providers/overview)**：AI 服务连接与身份验证。
-   **[配额监控](/docs/zh/dashboard/quota)**：配额计算与限制执行方式。
-   **[智能路由](/docs/zh/settings/basic)**：自动账号切换背后的逻辑。

## 集成指南

将霖君连接到您喜爱的工具：

### CLI 代理

-   **[CLI 工具](/docs/zh/agents/overview)**：使用 `curl` 或标准脚本。
-   **[Claude Code](/docs/zh/agents/overview)**：驱动带故障转移功能的 Claude CLI。
-   **[OpenCode](/docs/zh/agents/overview)**：管理繁重的解释器工作负载。
-   **[Codex CLI](/docs/zh/agents/overview)**：通过代理使用 OpenAI Codex。
-   **[Gemini CLI](/docs/zh/agents/overview)**：通过 CLI 访问 Google Gemini。

### IDE 配额监控

-   **[Cursor](/docs/zh/dashboard/quota)**：在 Cursor IDE 内监控 AI 使用情况。
-   **[Trae](/docs/zh/dashboard/quota)**：追踪 Trae IDE 中的 AI 消耗。
-   **[Windsurf](/docs/zh/dashboard/quota)**：监控 Windsurf IDE 中的使用情况。

> **注意**：IDE 集成仅用于配额监控，不能作为代理提供商。

## 开发者资源

-   **[架构设计](/docs/zh/agents/overview)**：了解应用底层运行机制。
-   **[参与贡献](https://github.com/wangdabaoqq/LinJun)**：帮助我们改进霖君。

## 社区

加入霖君社区：

-   **[GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues)**：反馈 Bug 或建议新功能。
-   **[GitHub Discussions](https://github.com/wangdabaoqq/LinJun/discussions)**：提问与交流想法。

