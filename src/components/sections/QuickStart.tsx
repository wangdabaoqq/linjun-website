"use client";

import { useI18n } from "@/lib/i18n";
import { Download, Settings, Play } from "lucide-react";
import { motion } from "framer-motion";

export function QuickStart() {
  const { t } = useI18n();

  const steps = [
    { icon: Download, title: t.quickstart.step1_title, desc: t.quickstart.step1_desc },
    { icon: Settings, title: t.quickstart.step2_title, desc: t.quickstart.step2_desc },
    { icon: Play, title: t.quickstart.step3_title, desc: t.quickstart.step3_desc },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t.quickstart.title}
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-zinc-200 dark:bg-zinc-800" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white ring-8 ring-cream-100 dark:bg-zinc-900 dark:ring-zinc-950 shadow-lg mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
