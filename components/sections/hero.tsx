"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/context/language-context";

const chunkVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  const { t } = useLanguage();
  const [titleStart, titleHighlight, titleEnd] = t.hero.title;

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24 sm:pt-28 lg:items-end lg:pt-32"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/videos/hero-office.mp4"
        poster="/videos/hero-office-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />
      <div className="bg-grain absolute inset-0" />

      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-ink-foreground/10 md:block" />

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
        <span
          className="font-display text-xs uppercase tracking-[0.5em] text-ink-foreground/40"
          style={{ writingMode: "vertical-rl" }}
        >
          Consulting × Digital
        </span>
      </div>

      <Container className="relative z-10 pb-8 pt-6 sm:pb-10">
        <div className="max-w-4xl pl-0 md:pl-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 border border-ink-foreground/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent"
          >
            {t.hero.eyebrow}
          </motion.span>

          <h1 className="font-display text-balance text-4xl font-medium leading-[0.98] tracking-tight text-ink-foreground sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={chunkVariants}
                className="block"
              >
                {titleStart}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={chunkVariants}
                className="block italic text-accent"
              >
                {titleHighlight}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={chunkVariants}
                className="block"
              >
                {titleEnd}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-4 max-w-lg text-balance text-base text-ink-foreground/70 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:justify-start"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#consulting"
              className="inline-flex h-12 w-full items-center justify-center gap-2 border border-ink-foreground/25 px-6 text-sm font-semibold text-ink-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto sm:justify-start"
            >
              {t.hero.secondaryCta}
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 grid max-w-lg grid-cols-3 gap-4 border-t border-ink-foreground/15 pt-4 sm:mt-8 sm:gap-6 sm:pt-5"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-medium tracking-tight text-ink-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-foreground/55 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
