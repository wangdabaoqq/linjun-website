"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Monitor } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <Link href="/changelog">
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit hover:bg-primary/20 transition-colors cursor-pointer">
                <span>v1.0.6 Released</span>
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </div>
            </Link>
            
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="mt-6 text-xl leading-relaxed text-foreground/70 max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#download">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  {t.hero.cta_primary} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/wangdabaoqq/LinJun" target="_blank">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  <Github className="h-4 w-4" /> {t.hero.cta_secondary}
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-foreground/40">
              <span className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                {t.hero.meta_os}
              </span>
              <span>{t.hero.meta_license}</span>
              <span>{t.hero.meta_oss}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-16 lg:col-span-6 lg:mt-0"
          >
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative rounded-2xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 animate-float">
                <Image
                  src="/images/screenshots/dashboard.png"
                  alt="App Dashboard"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-2xl ring-1 ring-zinc-900/10 dark:ring-white/10"
                  priority
                />
              </div>
            </div>
            
            {/* Decor elements */}
            <div className="absolute -top-24 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl lg:opacity-100 opacity-50" />
            <div className="absolute -bottom-24 -left-24 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl lg:opacity-100 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
