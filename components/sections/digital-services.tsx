"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Code2,
  Palette,
  Share2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const icons = [Palette, Share2, Code2, Clapperboard];

const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-span-2 lg:col-start-3 lg:row-start-2",
];

export function DigitalServices() {
  const { t } = useLanguage();
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onScroll() {
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      setAtEnd(max <= 1 || track.scrollLeft >= max - 8);
    }

    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function goToStart() {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }

  function goToEnd() {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
  }

  return (
    <section
      id="digital"
      className="bg-grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          index="02"
          eyebrow={t.digital.eyebrow}
          title={t.digital.title}
          subtitle={t.digital.subtitle}
          invert
        />

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 lg:grid-rows-2"
        >
          {t.digital.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const isFeature = index === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative flex w-[calc(50%-0.5rem)] shrink-0 snap-start flex-col justify-between overflow-hidden border border-ink-foreground/10 bg-ink-foreground/[0.03] p-4 transition-colors hover:border-accent/50 sm:p-6 lg:w-auto lg:min-h-[10rem] lg:shrink",
                  spans[index],
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <Icon
                    className={
                      isFeature ? "h-7 w-7 text-accent lg:h-10 lg:w-10" : "h-6 w-6 text-accent lg:h-7 lg:w-7"
                    }
                  />
                  <ArrowUpRight className="h-4 w-4 text-ink-foreground/30 transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="relative">
                  <h3
                    className={cn(
                      "font-display font-medium tracking-tight text-ink-foreground",
                      isFeature ? "text-lg sm:text-2xl lg:text-3xl" : "text-base sm:text-lg",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-ink-foreground/55",
                      isFeature ? "text-xs sm:text-sm lg:max-w-xs lg:text-base" : "text-xs sm:text-sm",
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            aria-label="Previous"
            disabled={!atEnd}
            onClick={goToStart}
            className={cn(
              "flex h-9 w-9 items-center justify-center border transition-colors",
              !atEnd
                ? "border-ink-foreground/10 text-ink-foreground/30"
                : "border-ink-foreground/20 text-ink-foreground hover:border-accent hover:text-accent",
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-display text-sm italic text-ink-foreground/50">
            {atEnd ? "02" : "01"} / 02
          </span>
          <button
            type="button"
            aria-label="Next"
            disabled={atEnd}
            onClick={goToEnd}
            className={cn(
              "flex h-9 w-9 items-center justify-center border transition-colors",
              atEnd
                ? "border-ink-foreground/10 text-ink-foreground/30"
                : "border-ink-foreground/20 text-ink-foreground hover:border-accent hover:text-accent",
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
