"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

export function AnnouncementBanner() {
  const { t, language } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("linjun-banner-dismissed-version");
      setVisible(dismissed !== SITE_CONFIG.version);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem("linjun-banner-dismissed-version", SITE_CONFIG.version);
    } catch {
      return;
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-primary px-4 py-2 text-primary-foreground">
      <div className="mx-auto relative flex max-w-7xl items-center justify-center gap-3 pr-8 text-sm font-medium">
        <Link
          href="/changelog"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="inline-block rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
            New
          </span>
          <p>
            {t.hero.badge} — <span className="underline">{language === "en" ? "Changelog" : "查看日志"}</span>
          </p>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-0 inline-flex size-6 items-center justify-center rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
