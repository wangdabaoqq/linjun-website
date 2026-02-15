"use client";

import { useI18n } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
              <Link
                 href="/"
                 className="flex items-center gap-2"
               >
                 <Image
                   src="/images/logo.webp"
                   alt="LinJun Logo"
                   width={32}
                   height={32}
                   className="rounded-lg"
                 />
                 <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                   LinJun
                 </span>
               </Link>
               <p className="text-sm leading-6 text-foreground/60 max-w-xs">
                 {t.hero.subtitle}
               </p>
               <div className="flex space-x-6">
              <Link href={SITE_CONFIG.github} target="_blank" className="text-foreground/40 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
               <Link href="https://x.com/Xia5ai" target="_blank" className="text-foreground/40 hover:text-primary transition-colors">
                 <Twitter className="h-5 w-5" />
               </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">{t.footer.product}</h3>
                <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#features" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  {t.header.features}
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  {t.header.download}
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  {t.header.changelog}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-foreground">{t.footer.resources}</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href={SITE_CONFIG.docs} target="_blank" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  {t.header.docs}
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.github} target="_blank" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  {t.header.github}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">{t.footer.legal}</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-foreground/60 hover:text-primary">
                  Terms
                </Link>
              </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
         <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            {t.footer.copyright} <a href="https://github.com/wangdabaoqq" target="_blank" className="hover:text-primary transition-colors">{t.footer.author}</a> • {t.footer.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
