import {
  Claude,
  Gemini,
  OpenAI,
  Github,
  Aws,
  Meta,
  Mistral,
  Qwen,
  Moonshot,
  Copilot,
  Dify
} from "@lobehub/icons";
import { 
  Terminal, 
  Bot, 
  Cpu, 
  Globe, 
  Zap, 
  Shield, 
  Key, 
  LayoutDashboard, 
  Download,
  Check,
  Menu,
  X,
  Moon,
  Sun,
  Laptop,
  Monitor,
  Smartphone,
  Command
} from "lucide-react";

export const Icons = {
  // AI Providers (LobeHub)
  claude: Claude,
  gemini: Gemini, 
  openai: OpenAI,
  qwen: Qwen,
  github: Github,
  copilot: Copilot,
  aws: Aws,
  meta: Meta,
  mistral: Mistral,
  moonshot: Moonshot,
  dify: Dify,

  // UI Icons (Lucide)
  terminal: Terminal,
  bot: Bot,
  cpu: Cpu,
  globe: Globe,
  zap: Zap,
  shield: Shield,
  key: Key,
  dashboard: LayoutDashboard,
  download: Download,
  check: Check,
  menu: Menu,
  close: X,
  moon: Moon,
  sun: Sun,
  laptop: Laptop,
  monitor: Monitor,
  smartphone: Smartphone,
  command: Command
};

export type IconKey = keyof typeof Icons;
