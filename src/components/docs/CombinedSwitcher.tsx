"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Github, Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function CombinedSwitcher({ lang }: { lang: "en" | "zh" }) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLang = (newLang: "en" | "zh") => {
    if (newLang === lang) return;
    const currentPath = pathname || "/docs";
    let newPath = currentPath;
    if (currentPath.startsWith("/docs/zh") || currentPath.startsWith("/docs/en")) {
      newPath = currentPath.replace(/\/docs\/(zh|en)/, `/docs/${newLang}`);
    } else {
      newPath = `/docs/${newLang}`;
    }
    router.push(newPath);
  };

  return (
    <div
      className="inline-flex items-center rounded-full border bg-fd-background p-1 shadow-sm"
      suppressHydrationWarning
    >
      <a
        href="https://github.com/wangdabaoqq/LinJun"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center size-7 rounded-full text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent transition-colors mr-1 border-r pr-1 rounded-r-none"
        aria-label="GitHub"
      >
        <Github className="size-4" />
      </a>

      <div className="flex items-center px-1 border-r mr-1">
        <button
          onClick={() => switchLang("en")}
          className={cn(
            "px-2 py-1 text-[10px] font-bold rounded-full transition-colors",
            lang === "en"
              ? "bg-fd-accent text-fd-accent-foreground"
              : "text-fd-muted-foreground hover:text-fd-foreground"
          )}
        >
          EN
        </button>
        <button
          onClick={() => switchLang("zh")}
          className={cn(
            "px-2 py-1 text-[10px] font-bold rounded-full transition-colors",
            lang === "zh"
              ? "bg-fd-accent text-fd-accent-foreground"
              : "text-fd-muted-foreground hover:text-fd-foreground"
          )}
        >
          中
        </button>
      </div>

      <div className="flex items-center gap-0.5">
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "size-7 p-1.5 rounded-full transition-colors flex items-center justify-center",
            mounted && theme === "light"
              ? "bg-fd-accent text-fd-accent-foreground"
              : "text-fd-muted-foreground hover:text-fd-foreground"
          )}
          aria-label="Light"
        >
          <Sun className="size-4" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "size-7 p-1.5 rounded-full transition-colors flex items-center justify-center",
            mounted && theme === "dark"
              ? "bg-fd-accent text-fd-accent-foreground"
              : "text-fd-muted-foreground hover:text-fd-foreground"
          )}
          aria-label="Dark"
        >
          <Moon className="size-4" />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "size-7 p-1.5 rounded-full transition-colors flex items-center justify-center",
            mounted && theme === "system"
              ? "bg-fd-accent text-fd-accent-foreground"
              : "text-fd-muted-foreground hover:text-fd-foreground"
          )}
          aria-label="System"
        >
          <Monitor className="size-4" />
        </button>
      </div>
    </div>
  );
}
