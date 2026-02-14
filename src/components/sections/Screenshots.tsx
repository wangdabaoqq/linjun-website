"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const SCREENSHOTS = [
  { src: "/images/screenshots/dashboard.png", key: "dashboard" },
  { src: "/images/screenshots/quota.png", key: "quota" },
  { src: "/images/screenshots/agents.png", key: "agents" },
  { src: "/images/screenshots/settings.png", key: "settings" },
  { src: "/images/screenshots/api-key.png", key: "api_key" },
];

export function Screenshots() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % SCREENSHOTS.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.screenshots.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          {t.screenshots.subtitle}
        </p>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SCREENSHOTS.map((shot, index) => (
          <div 
            key={shot.key} 
            className="flex-none w-[85vw] sm:w-[600px] snap-center first:pl-6 last:pr-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative rounded-2xl bg-zinc-800 p-2 ring-1 ring-white/10 overflow-hidden cursor-zoom-in"
            >
              <Image
                src={shot.src}
                alt={t.screenshots.captions[shot.key as keyof typeof t.screenshots.captions]}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <p className="text-sm font-medium text-white">
                  {t.screenshots.captions[shot.key as keyof typeof t.screenshots.captions]}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
          >
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelectedIndex(null)} 
            />

            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
              <div className="text-white/60 text-sm font-mono mr-4">
                {selectedIndex + 1} / {SCREENSHOTS.length}
              </div>
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white z-[110] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white z-[110] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <Image
                src={SCREENSHOTS[selectedIndex].src}
                alt="Enlarged screenshot"
                width={1920}
                height={1080}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl pointer-events-auto"
              />
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-8 text-white/80 text-lg font-medium"
              >
                {t.screenshots.captions[SCREENSHOTS[selectedIndex].key as keyof typeof t.screenshots.captions]}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
