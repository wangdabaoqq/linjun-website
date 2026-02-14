"use client";

import { AnnouncementBanner } from "@/components/sections/AnnouncementBanner";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Features } from "@/components/sections/Features";
import { Screenshots } from "@/components/sections/Screenshots";
import { QuickStart } from "@/components/sections/QuickStart";
import { Download } from "@/components/sections/Download";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBanner />
      <Header />
      <main className="flex-1 bg-background text-foreground transition-colors duration-300">
        <Hero />
        <Ecosystem />
        <Features />
        <Screenshots />
        <QuickStart />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
