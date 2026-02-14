"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DocItem } from "@/lib/docs-config";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

interface DocsSidebarProps {
  nav: DocItem[];
}

export function DocsSidebar({ nav }: DocsSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out dark:bg-zinc-950 md:static md:translate-x-0 md:border-r md:border-zinc-200 md:dark:border-zinc-800",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto px-6 py-8 md:w-64 md:py-6">
          <div className="mb-8 flex items-center justify-between md:hidden">
            <span className="text-lg font-bold">Documentation</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full rounded-md border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <nav className="space-y-8">
            {nav.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items?.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block text-sm transition-colors hover:text-blue-500",
                            isActive
                              ? "font-medium text-blue-500"
                              : "text-zinc-600 dark:text-zinc-400"
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
