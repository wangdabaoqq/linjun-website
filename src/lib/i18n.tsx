"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh";

type Translations = {
  header: {
    features: string;
    download: string;
    docs: string;
    github: string;
    changelog: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    meta_os: string;
    meta_license: string;
    meta_oss: string;
  };
    ecosystem: {

    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    subtitle: string;
    dashboard_title: string;
    dashboard_desc: string;
    quota_title: string;
    quota_desc: string;
    routing_title: string;
    routing_desc: string;
    agents_title: string;
    agents_desc: string;
    keys_title: string;
    keys_desc: string;
    security_title: string;
    security_desc: string;
    platform_title: string;
    platform_desc: string;
    performance_title: string;
    performance_desc: string;
  };
  screenshots: {
    title: string;
    subtitle: string;
    captions: {
      dashboard: string;
      quota: string;
      agents: string;
      settings: string;
      api_key: string;
    };
  };
  quickstart: {
    title: string;
    step1_title: string;
    step1_desc: string;
    step2_title: string;
    step2_desc: string;
    step3_title: string;
    step3_desc: string;
  };
  download: {
    title: string;
    subtitle: string;
    mac_desc: string;
    win_desc: string;
    linux_desc: string;
    button: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
    footer: {
      product: string;
      resources: string;
      legal: string;
      copyright: string;
    };
    changelog: {
      title: string;
      subtitle: string;
      versions: {
        date: string;
        version: string;
        changes: string[];
      }[];
    };
    docs: {
      search: string;
      onThisPage: string;
      previous: string;
      next: string;
      language: string;
      english: string;
      chinese: string;
    };
  };
  
export const translations: Record<Language, Translations> = {
    en: {
      header: {
        features: "Features",
        download: "Download",
        docs: "Documentation",
        github: "GitHub",
        changelog: "Changelog",
      },

    hero: {
      badge: "New Version 1.0.6 Available",
      title: "LinJun",
      subtitle:
        "Cross-platform AI proxy management for Claude, Gemini, Codex, Copilot, Qwen, iFlow, Kiro, and more.",
      cta_primary: "Download Now",
      cta_secondary: "View on GitHub",
      meta_os: "macOS • Windows • Linux",
      meta_license: "MIT License",
      meta_oss: "Open Source",
    },
      ecosystem: {

      title: "Seamless Integration",
      subtitle: "Works perfectly with your favorite AI providers and tools.",
    },
    features: {
      title: "Everything you need",
      subtitle: "Powerful features to streamline your AI development workflow.",
      dashboard_title: "Live Dashboard",
      dashboard_desc: "Monitor request traffic, token usage, and success rates in real-time.",
      quota_title: "Quota Tracking",
      quota_desc: "Track account usage and view provider-scoped model catalogs.",
      routing_title: "Smart Routing",
      routing_desc: "Round Robin and Fill First failover strategies for reliable proxying.",
      agents_title: "One-Click Config",
      agents_desc: "Auto-detect and configure Claude Code, OpenCode, Gemini CLI, and more.",
      keys_title: "Key Management",
      keys_desc: "Generate and manage secure API keys for your local proxy.",
      security_title: "Local-First",
      security_desc: "Local-first architecture ensures your API tokens stay private.",
      platform_title: "Cross Platform",
      platform_desc: "Native desktop support for macOS, Windows, and Linux.",
      performance_title: "Large Scale Performance",
      performance_desc: "Virtualized log table and polling keep the UI responsive for large datasets.",
    },
    screenshots: {
      title: "Beautiful Interface",
      subtitle: "Designed for clarity and efficiency.",
      captions: {
        dashboard: "Real-time traffic monitoring dashboard",
        quota: "Detailed quota usage analytics",
        agents: "One-click AI agent configuration",
        settings: "Advanced proxy settings",
        api_key: "Secure API key management",
      },
    },
    quickstart: {
      title: "Get Started in Minutes",
      step1_title: "Download",
      step1_desc: "Get the latest version for your OS.",
      step2_title: "Configure",
      step2_desc: "Add your API keys and proxy settings.",
      step3_title: "Run",
      step3_desc: "Start the server and connect your apps.",
    },
    download: {
      title: "Download LinJun",
      subtitle: "Choose your platform and get started today.",
      mac_desc: "Universal binary for Intel and Apple Silicon.",
      win_desc: "Installer for Windows 10/11 x64.",
      linux_desc: "AppImage for major Linux distributions.",
      button: "Download for",
    },
    cta: {
      title: "Ready to take control?",
      subtitle: "Join the community of developers using LinJun.",
      button: "Get Started Now",
    },
      footer: {
        product: "Product",
        resources: "Resources",
        legal: "Legal",
        copyright: "© 2026 LinJun.",
        author: "Made by wangdabaoqq",
        license: "MIT License • Open Source",
      },
      changelog: {
        title: "Changelog",
        subtitle: "See what's new in LinJun.",
        versions: [
          {
            date: "Feb 14, 2026",
            version: "v1.0.6",
            changes: [
              "Improved stability and performance",
              "Enhanced quota tracking accuracy",
              "Fixed minor UI bugs",
            ],
          },
          {
            date: "Jan 20, 2026",
            version: "v1.0.5",
            changes: [
              "Added support for Antigravity provider",
              "Implemented Round Robin routing strategy",
              "Updated electron framework",
            ],
          },
        ],
      },
      docs: {
        search: "Search docs...",
        onThisPage: "On This Page",
        previous: "Previous",
        next: "Next",
        language: "Language",
        english: "English",
        chinese: "中文",
      },
    },
    zh: {
      header: {
        features: "功能特性",
        download: "下载",
        docs: "文档",
        github: "GitHub",
        changelog: "更新日志",
      },

    hero: {
      badge: "新版本 1.0.6 已发布",
      title: "霖君",
      subtitle:
        "支持 Claude, Gemini, Codex, Copilot, Qwen, iFlow, Kiro 等的跨平台 AI 代理管理工具",
      cta_primary: "立即下载",
      cta_secondary: "GitHub",
      meta_os: "macOS • Windows • Linux",
      meta_license: "MIT 许可证",
      meta_oss: "开源项目",
    },
      ecosystem: {

      title: "无缝集成",
      subtitle: "完美支持您喜爱的 AI 提供商和工具。",
    },
    features: {
      title: "功能特性",
      subtitle: "强大的功能，简化您的 AI 开发工作流。",
      dashboard_title: "实时仪表盘",
      dashboard_desc: "实时监控请求流量、Token 使用量和成功率。",
      quota_title: "额度追踪",
      quota_desc: "追踪账户使用情况并查看各提供商支持的模型列表。",
      routing_title: "智能路由",
      routing_desc: "支持轮询和优先填充策略，确保代理服务不间断。",
      agents_title: "一键配置",
      agents_desc: "自动检测并配置 Claude Code、OpenCode、Gemini CLI 等。",
      keys_title: "密钥管理",
      keys_desc: "为您的本地代理生成并管理安全的 API 密钥。",
      security_title: "本地优先",
      security_desc: "本地优先架构，确保您的 API Token 隐私安全。",
      platform_title: "跨平台支持",
      platform_desc: "原生支持 macOS、Windows 和 Linux 系统。",
      performance_title: "大数据性能优化",
      performance_desc: "采用虚拟化日志表格和增量轮询，从容处理大数据量。",
    },
    screenshots: {
      title: "精美界面",
      subtitle: "为清晰和效率而设计。",
      captions: {
        dashboard: "实时流量监控仪表盘",
        quota: "详细的额度使用分析",
        agents: "一键 AI Agent 配置",
        settings: "高级代理设置",
        api_key: "安全的 API 密钥管理",
      },
    },
    quickstart: {
      title: "几分钟内开始使用",
      step1_title: "下载",
      step1_desc: "获取适用于您操作系统的最新版本。",
      step2_title: "配置",
      step2_desc: "添加您的 API 密钥和代理设置。",
      step3_title: "运行",
      step3_desc: "启动服务器并连接您的应用。",
    },
    download: {
      title: "下载 LinJun",
      subtitle: "选择您的平台，立即开始。",
      mac_desc: "Intel 和 Apple Silicon 通用二进制文件。",
      win_desc: "适用于 Windows 10/11 x64 的安装程序。",
      linux_desc: "适用于主流 Linux 发行版的 AppImage。",
      button: "下载",
    },
    cta: {
      title: "准备好掌控一切了吗？",
      subtitle: "加入使用 LinJun 的开发者社区。",
      button: "立即开始",
    },
      footer: {
        product: "产品",
        resources: "资源",
        legal: "法律",
        copyright: "© 2026 LinJun.",
        author: "由 wangdabaoqq 打造",
        license: "MIT 许可证 • 开源",
      },
      changelog: {
        title: "更新日志",
        subtitle: "了解霖君的最新动态。",
        versions: [
          {
            date: "2026年2月14日",
            version: "v1.0.6",
            changes: [
              "提高稳定性和性能",
              "增强额度追踪准确性",
              "修复了一些 UI bug",
            ],
          },
          {
            date: "2026年1月20日",
            version: "v1.0.5",
            changes: [
              "新增 Antigravity 提供商支持",
              "实现轮询路由策略",
              "更新 electron 框架",
            ],
          },
        ],
      },
      docs: {
        search: "搜索文档...",
        onThisPage: "本页内容",
        previous: "上一页",
        next: "下一页",
        language: "语言",
        english: "English",
        chinese: "中文",
      },
    },
  };


const I18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
