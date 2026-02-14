"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Laptop, Monitor, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/Button";

export function Header() {
  const { t, language, setLanguage } = useI18n();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "zh" : "en";
    setLanguage(newLang);

    if (pathname?.startsWith("/docs")) {
      const segments = pathname.split("/").filter(Boolean);
      
      if (segments[1] === "zh") {
        const newPath = `/docs/${segments.slice(2).join("/")}`;
        router.push(newPath);
      } else if (segments[1] === "en") {
        const newPath = `/docs/zh/${segments.slice(2).join("/")}`;
        router.push(newPath);
      } else {
        if (newLang === "zh") {
          const newPath = `/docs/zh/${segments.slice(1).join("/")}`;
          router.push(newPath);
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-cream-50/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="LinJun Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              LinJun
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {t.header.features}
          </Link>
          <Link
            href="/changelog"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {t.header.changelog}
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {t.header.docs}
          </Link>
          <Link
            href="https://github.com/wangdabaoqq/LinJun"
            target="_blank"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {t.header.github}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className="text-xs font-bold uppercase">{language}</span>
          </Button>

          <Link href="#download">
            <Button variant="primary" size="sm" className="ml-2">
              {t.header.download}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {t.header.features}
            </Link>
            <Link
              href="/changelog"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {t.header.changelog}
            </Link>
            <Link
              href="/docs"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {t.header.docs}
            </Link>
            <Link
              href="https://github.com/wangdabaoqq/LinJun"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {t.header.github}
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={toggleTheme}
              >
                {mounted && resolvedTheme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" /> Dark Mode
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
              >
                <Globe className="mr-2 h-4 w-4" />
                {language === "en" ? "Switch to Chinese" : "Switch to English"}
              </Button>
              <Link href="#download" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  {t.header.download}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
