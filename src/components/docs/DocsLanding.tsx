import Link from "next/link";
import { DocItem } from "@/lib/docs-config";
import { ArrowRight, Book, Server, Settings, Terminal, LayoutDashboard, LifeBuoy } from "lucide-react";

interface DocsLandingProps {
  nav: DocItem[];
  lang: "en" | "zh";
}

const iconMap: Record<string, any> = {
  "Getting Started": Book,
  "快速开始": Book,
  "Providers": Server,
  "提供商": Server,
  "Agents": Terminal,
  "代理 (Agents)": Terminal,
  "Dashboard": LayoutDashboard,
  "仪表盘": LayoutDashboard,
  "Settings": Settings,
  "设置": Settings,
  "Troubleshooting": LifeBuoy,
  "故障排除": LifeBuoy,
};

export function DocsLanding({ nav, lang }: DocsLandingProps) {
  const title = lang === "zh" ? "文档中心" : "Documentation";
  const subtitle = lang === "zh" 
    ? "了解如何集成、配置和使用 LinJun"
    : "Learn how to integrate, configure, and use LinJun";

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {nav.map((section) => {
          const Icon = iconMap[section.title] || Book;
          return (
            <div key={section.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{section.title}</h2>
              </div>
              
              <ul className="space-y-2">
                {section.items?.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="group flex items-center text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="-ml-5 transition-transform group-hover:translate-x-5">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {section.items && section.items.length > 4 && (
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                   <Link href={section.href} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                     {lang === "zh" ? "查看更多" : "View all"} &rarr;
                   </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
