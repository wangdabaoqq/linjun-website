export type DocItem = {
  title: string;
  href: string;
  items?: DocItem[];
};

export type DocsConfig = {
  sidebarNav: {
    en: DocItem[];
    zh: DocItem[];
  };
};

export const docsConfig: DocsConfig = {
  sidebarNav: {
    en: [
      {
        title: "Getting Started",
        href: "/docs/en/install",
        items: [
          { title: "Installation", href: "/docs/en/install" },
          { title: "Quick Start", href: "/docs/en/quick-start" },
          { title: "First Run", href: "/docs/en/first-run" },
        ],
      },
      {
        title: "Providers",
        href: "/docs/en/providers",
        items: [
          { title: "Overview", href: "/docs/en/providers/overview" },
          { title: "OAuth Login", href: "/docs/en/providers/oauth-login" },
          { title: "Custom Providers", href: "/docs/en/providers/custom-providers" },
          { title: "Account Rules", href: "/docs/en/providers/account-model-rules" },
        ],
      },
      {
        title: "Agents",
        href: "/docs/en/agents",
        items: [
          { title: "Overview", href: "/docs/en/agents/overview" },
          { title: "Configuration", href: "/docs/en/agents/configuration" },
        ],
      },
      {
        title: "Dashboard",
        href: "/docs/en/dashboard",
        items: [
          { title: "Overview", href: "/docs/en/dashboard/overview" },
          { title: "Logs", href: "/docs/en/dashboard/logs" },
          { title: "Quota", href: "/docs/en/dashboard/quota" },
        ],
      },
      {
        title: "Settings",
        href: "/docs/en/settings",
        items: [
          { title: "Basic Settings", href: "/docs/en/settings/basic" },
          { title: "API Key", href: "/docs/en/settings/api-key" },
          { title: "Update", href: "/docs/en/settings/update" },
        ],
      },
      {
        title: "Troubleshooting",
        href: "/docs/en/troubleshooting",
        items: [
          { title: "FAQ", href: "/docs/en/troubleshooting/faq" },
          { title: "Common Errors", href: "/docs/en/troubleshooting/common-errors" },
        ],
      },
    ],
    zh: [
      {
        title: "快速开始",
        href: "/docs/zh/install",
        items: [
          { title: "安装指南", href: "/docs/zh/install" },
          { title: "快速入门", href: "/docs/zh/quick-start" },
          { title: "首次运行", href: "/docs/zh/first-run" },
        ],
      },
      {
        title: "提供商",
        href: "/docs/zh/providers",
        items: [
          { title: "概览", href: "/docs/zh/providers/overview" },
          { title: "OAuth 登录", href: "/docs/zh/providers/oauth-login" },
          { title: "自定义提供商", href: "/docs/zh/providers/custom-providers" },
          { title: "账号模型规则", href: "/docs/zh/providers/account-model-rules" },
        ],
      },
      {
        title: "代理 (Agents)",
        href: "/docs/zh/agents",
        items: [
          { title: "概览", href: "/docs/zh/agents/overview" },
          { title: "配置指南", href: "/docs/zh/agents/configuration" },
        ],
      },
      {
        title: "仪表盘",
        href: "/docs/zh/dashboard",
        items: [
          { title: "概览", href: "/docs/zh/dashboard/overview" },
          { title: "日志", href: "/docs/zh/dashboard/logs" },
          { title: "额度", href: "/docs/zh/dashboard/quota" },
        ],
      },
      {
        title: "设置",
        href: "/docs/zh/settings",
        items: [
          { title: "基础设置", href: "/docs/zh/settings/basic" },
          { title: "API 密钥", href: "/docs/zh/settings/api-key" },
          { title: "更新", href: "/docs/zh/settings/update" },
        ],
      },
      {
        title: "故障排除",
        href: "/docs/zh/troubleshooting",
        items: [
          { title: "常见问题", href: "/docs/zh/troubleshooting/faq" },
          { title: "常见错误", href: "/docs/zh/troubleshooting/common-errors" },
        ],
      },
    ],
  },
};
