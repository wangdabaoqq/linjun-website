"use client";

import { useI18n } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Command, Monitor, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Download() {
  const { t } = useI18n();

  const platforms = [
    {
      key: "mac",
      name: "macOS",
      icon: Command,
      desc: t.download.mac_desc,
      link: SITE_CONFIG.download.mac,
      color: "bg-background shadow-sm ring-1 ring-border/50",
    },
    {
      key: "win",
      name: "Windows",
      icon: Monitor,
      desc: t.download.win_desc,
      link: SITE_CONFIG.download.win,
      color: "bg-background shadow-sm ring-1 ring-border/50",
    },
    {
      key: "linux",
      name: "Linux",
      icon: Terminal,
      desc: t.download.linux_desc,
      link: SITE_CONFIG.download.linux,
      color: "bg-background shadow-sm ring-1 ring-border/50",
    },
  ];

  return (
    <section id="download" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t.download.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {t.download.subtitle}
          </p>
        </div>

        <div className="grid max-w-lg grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ring-1 ring-zinc-200 dark:ring-zinc-800 transition-shadow hover:shadow-xl ${platform.color}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-950 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 mb-6">
                <platform.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {platform.name}
              </h3>
              
              <p className="flex-auto text-zinc-600 dark:text-zinc-400 mb-8">
                {platform.desc}
              </p>
              
              <Button href={platform.link} className="mt-auto w-full justify-center">
                {t.download.button} {platform.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
