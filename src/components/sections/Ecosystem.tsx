"use client";

import { useI18n } from "@/lib/i18n";
import { ECOSYSTEM } from "@/lib/constants";
import { Icons, type IconKey } from "../ui/Icons";
import { motion } from "framer-motion";

export function Ecosystem() {
  const { t, language } = useI18n();

  return (
    <section className="py-24 bg-cream-50 dark:bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t.ecosystem.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {t.ecosystem.subtitle}
          </p>
        </div>
        
        <div className="mt-16 space-y-16">
          <div>
            <h3 className="text-center text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-8">
              {language === 'en' ? 'AI Providers' : 'AI 提供商'}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {ECOSYSTEM.providers.map((item, index) => {
                const Icon = Icons[item.icon as IconKey] || Icons.bot;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -4,
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10 cursor-default transition-colors hover:ring-primary/30"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.name}</span>
                    <span className="text-[10px] font-bold uppercase text-zinc-400">{item.type}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-8">
              {language === 'en' ? 'Compatible CLI Agents' : '兼容的 CLI 代理'}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {ECOSYSTEM.agents.map((item, index) => {
                const Icon = Icons[item.icon as IconKey] || Icons.bot;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -2,
                      backgroundColor: "var(--color-cream-100)"
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10 cursor-default transition-all hover:shadow-md hover:ring-primary/20"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
