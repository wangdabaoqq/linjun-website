'use client';

import type { ReactNode } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';
import { 
  BookIcon, 
  GithubIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';

const baseOptions = {
  nav: {
    title: 'LinJun',
    logo: undefined,
    links: [
      {
        label: 'Docs',
        href: '/docs',
        active: true,
      },
      {
        label: 'Changelog',
        href: '/changelog',
      },
      {
        label: (
          <span className="flex items-center gap-1">
            <GithubIcon className="w-4 h-4" />
            GitHub
          </span>
        ),
        href: 'https://github.com/wangdabaoqq/LinJun',
      },
    ],
  },
  themeSwitch: {
    enabled: true,
    mode: 'light-dark-system' as const,
  },
  search: {
    enabled: true,
  },
};

export { baseOptions };

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring p-2"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
}
