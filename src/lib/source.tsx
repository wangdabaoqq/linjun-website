import { docsConfig, type DocItem } from './docs-config';
import { createElement } from 'react';
import { 
  BookOpen, 
  Zap, 
  Users, 
  LayoutDashboard, 
  Settings, 
  Wrench,
  ChevronRight
} from 'lucide-react';

type TreeNode = {
  type: 'folder' | 'page';
  name: string;
  url?: string;
  icon?: ReturnType<typeof createElement>;
  children: TreeNode[];
};

const sectionIcons: Record<string, ReturnType<typeof createElement>> = {
  'Getting Started': createElement(BookOpen, { className: "size-4" }),
  '快速开始': createElement(BookOpen, { className: "size-4" }),
  'Providers': createElement(Zap, { className: "size-4" }),
  '提供商': createElement(Zap, { className: "size-4" }),
  'Agents': createElement(Users, { className: "size-4" }),
  '代理 (Agents)': createElement(Users, { className: "size-4" }),
  'Dashboard': createElement(LayoutDashboard, { className: "size-4" }),
  '仪表盘': createElement(LayoutDashboard, { className: "size-4" }),
  'Settings': createElement(Settings, { className: "size-4" }),
  '设置': createElement(Settings, { className: "size-4" }),
  'Troubleshooting': createElement(Wrench, { className: "size-4" }),
  '故障排除': createElement(Wrench, { className: "size-4" }),
};

function buildTree(nav: DocItem[], lang: 'en' | 'zh'): TreeNode[] {
  return nav.map((item) => {
    const icon = sectionIcons[item.title] ?? createElement(ChevronRight, { className: "size-4" });
    
    return {
      type: 'folder',
      name: item.title,
      icon,
      children: item.items 
        ? item.items.map((child) => ({
            type: 'page',
            name: child.title,
            url: child.href,
            children: [],
          }))
        : [],
    };
  });
}

export function getPageTree(lang: 'en' | 'zh' = 'en'): TreeNode {
  const nav = docsConfig.sidebarNav[lang];
  const rootChildren = buildTree(nav, lang);
  
  const introPage: TreeNode = {
    type: 'page',
    name: lang === 'zh' ? '霖君文档' : 'LinJun Documentation',
    url: `/docs/${lang}`,
    children: [],
  };

  return {
    type: 'folder',
    name: lang === 'zh' ? '文档' : 'Documentation',
    children: [introPage, ...rootChildren],
  };
}

export const source = {
  getPageTree,
};
