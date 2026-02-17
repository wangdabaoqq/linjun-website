"use client";

import { useI18n } from "@/lib/i18n";
import { releases } from "@/lib/changelog.generated";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ChangelogPage() {
  const { t, language } = useI18n();
  const [showPrerelease, setShowPrerelease] = useState(false);

  const filtered = showPrerelease
    ? releases
    : releases.filter((r) => !r.prerelease);

  const hasPrerelease = releases.some((r) => r.prerelease);

  function formatDate(iso: string) {
    const d = new Date(iso);
    return language === "zh"
      ? d.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })
      : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

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

          {hasPrerelease && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowPrerelease(!showPrerelease)}
                className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-orange-500 dark:hover:text-orange-400"
              >
                {showPrerelease
                  ? (language === "zh" ? "隐藏预发布版本" : "Hide Pre-releases")
                  : (language === "zh" ? "显示预发布版本" : "Show Pre-releases")}
              </button>
            </div>
          )}

          <div className="mt-16 space-y-12">
            {filtered.map((release, index) => (
              <motion.div
                key={release.tag}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-800 last:before:hidden"
              >
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-orange-600" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {release.tag}
                    </h2>
                    {release.prerelease && (
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        Pre-release
                      </span>
                    )}
                    {index === 0 && !release.prerelease && (
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Latest
                      </span>
                    )}
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-orange-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <time className="text-sm text-zinc-500 dark:text-zinc-400">
                    {formatDate(release.date)}
                  </time>
                </div>
                {release.body && (
                  <div className="mt-4 prose prose-sm prose-zinc max-w-none dark:prose-invert prose-a:text-orange-600 dark:prose-a:text-orange-400 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {release.body}
                    </ReactMarkdown>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
