"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RootProvider
        theme={{
          attribute: "class",
          defaultTheme: "system",
          enableSystem: true,
        }}
      >
        <I18nProvider>{children}</I18nProvider>
      </RootProvider>
    </ThemeProvider>
  );
}
