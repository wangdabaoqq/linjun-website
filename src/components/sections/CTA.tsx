"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const { t } = useI18n();

  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.cta.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#download">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {t.cta.button} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
