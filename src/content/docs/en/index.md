---
title: LinJun Documentation
description: Welcome to the official documentation for LinJun, the cross-platform AI proxy management tool.
---

# LinJun Documentation

Welcome to the official documentation for **LinJun**, the ultimate cross-platform application for managing AI accounts, tracking quotas, and ensuring high availability for your development workflows.

## What is LinJun?

LinJun sits between your tools (IDEs, CLI scripts, Interpreters) and AI Providers (OpenAI, Anthropic, Gemini). It acts as a smart proxy and manager that:

-   **Aggregates Quotas**: See your usage across all keys in one place.
-   **Prevents Downtime**: Automatically switches to a backup key when one fails.
-   **Saves Money**: Routes requests to cheaper models or local fallbacks based on rules.

## Getting Started

If you are new to LinJun, start here:

<cards>
  <card
    icon="download"
    href="/docs/en/install"
    title="Installation"
    description="Install and run LinJun on macOS, Windows, or Linux."
  ></card>
  <card
    icon="zap"
    href="/docs/en/quick-start"
    title="Quick Start"
    description="Connect your first AI account and start tracking usage."
  ></card>
</cards>

## Core Concepts

Understand the building blocks of the system:

-   **[Providers](/docs/en/providers/overview)**: AI service connections and authentication.
-   **[Quotas](/docs/en/dashboard/quota)**: How limits are calculated and enforced.
-   **[Smart Routing](/docs/en/settings/basic)**: The logic behind automatic account switching.

## Integration Guides

Connect LinJun to your favorite tools:

### CLI Agents

-   **[CLI Tools](/docs/en/agents/overview)**: Use `curl` or standard scripts.
-   **[Claude Code](/docs/en/agents/overview)**: Power the Claude CLI with failover.
-   **[OpenCode](/docs/en/agents/overview)**: Manage heavy interpreter workloads.
-   **[Codex CLI](/docs/en/agents/overview)**: Use OpenAI Codex through the proxy.
-   **[Gemini CLI](/docs/en/agents/overview)**: Access Google Gemini via CLI.

### IDE Quota Monitoring

-   **[Cursor](/docs/en/dashboard/quota)**: Monitor AI usage within Cursor IDE.
-   **[Trae](/docs/en/dashboard/quota)**: Track AI consumption in Trae IDE.
-   **[Windsurf](/docs/en/dashboard/quota)**: Monitor usage in Windsurf IDE.

> **Note**: IDE integrations are for quota monitoring only and cannot be used as proxy providers.

## Developer Resources

-   **[Architecture](/docs/en/agents/overview)**: How the app works under the hood.
-   **[Contributing](https://github.com/wangdabaoqq/LinJun)**: Help us improve LinJun.

## Community

Join the LinJun community:

-   **[GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues)**: Report bugs or suggest features.
-   **[GitHub Discussions](https://github.com/wangdabaoqq/LinJun/discussions)**: Ask questions and share ideas.
