
import { 
  Bot, 
  TerminalSquare, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  LayoutDashboard, 
  Key 
} from "lucide-react";

export const SITE_CONFIG = {
  name: "LinJun",
  version: "1.0.6",
  github: "https://github.com/wangdabaoqq/LinJun",
  docs: "https://linjun-docs.940703.xyz/",
  download: {
    mac: "https://github.com/wangdabaoqq/LinJun/releases/latest/download/LinJun-1.0.6-arm64.zip",
    win: "https://github.com/wangdabaoqq/LinJun/releases/latest/download/LinJun-1.0.6-x64.exe",
    linux: "https://github.com/wangdabaoqq/LinJun/releases/latest/download/LinJun-1.0.6-x86_64.AppImage",
  },
};

export const FEATURES = [
  {
    key: "dashboard",
    icon: LayoutDashboard,
  },
  {
    key: "quota",
    icon: Zap,
  },
  {
    key: "routing",
    icon: Globe,
  },
  {
    key: "agents",
    icon: Bot,
  },
  {
    key: "keys",
    icon: Key,
  },
  {
    key: "security",
    icon: Shield,
  },
  {
    key: "platform",
    icon: TerminalSquare,
  },
  {
    key: "performance",
    icon: Cpu,
  },
];

export const ECOSYSTEM = {
  providers: [
    { name: "Google Gemini", type: "OAuth", icon: "gemini" },
    { name: "Anthropic Claude", type: "OAuth", icon: "claude" },
    { name: "OpenAI Codex", type: "OAuth", icon: "openai" },
    { name: "Qwen Code", type: "OAuth", icon: "qwen" },
    { name: "Vertex AI", type: "Service Account", icon: "aws" },
    { name: "iFlow", type: "OAuth", icon: "dify" },
    { name: "Antigravity", type: "OAuth", icon: "ollama" },
    { name: "Kiro", type: "OAuth", icon: "aws" },
    { name: "GitHub Copilot", type: "OAuth", icon: "github" },
  ],
  agents: [
    { name: "Claude Code", icon: "claude" },
    { name: "Codex CLI", icon: "openai" },
    { name: "Gemini CLI", icon: "gemini" },
    { name: "Amp CLI", icon: "amp" },
    { name: "OpenCode", icon: "opencode" },
    { name: "Factory Droid", icon: "bot" },
  ],
};

export const INSTALL_STEPS = [
  {
    key: "download",
    command: "Download the latest release",
  },
  {
    key: "config",
    command: "Configure your API keys",
  },
  {
    key: "start",
    command: "./linjun start",
  },
];
