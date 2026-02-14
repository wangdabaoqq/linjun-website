"use client";

import { useI18n } from "@/lib/i18n";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function ChangelogPage() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-cream-50 dark:bg-zinc-950">
      <Header />
      <main className="flex-1 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              {t.changelog.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {t.changelog.subtitle}
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {t.changelog.versions.map((version, index) => (
              <motion.div
                key={version.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-800 last:before:hidden"
              >
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-orange-600" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {version.version}
                  </h2>
                  <time className="text-sm text-zinc-500 dark:text-zinc-400">
                    {version.date}
                  </time>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-zinc-600 dark:text-zinc-400">
                  {version.changes.map((change, idx) => (
                    <li key={idx}>{change}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
