"use client";

import { useI18n } from "@/lib/i18n";
import { FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";

export function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const titleKey = `${feature.key}_title` as keyof typeof t.features;
              const descKey = `${feature.key}_desc` as keyof typeof t.features;

              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col p-8 rounded-3xl bg-cream-100/50 dark:bg-zinc-800/50 border border-border/50 hover:bg-white dark:hover:bg-zinc-800 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                    {t.features[titleKey] as string}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {t.features[descKey] as string}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
