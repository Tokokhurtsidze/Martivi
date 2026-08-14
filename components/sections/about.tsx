"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center py-14 sm:py-24 lg:min-h-[100svh]"
    >
      <Container className="grid items-center gap-4 sm:grid-cols-[0.7fr_1fr] sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <Reveal>
          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[280px] items-center justify-center border border-border bg-card sm:max-w-none sm:w-full lg:max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <span className="absolute left-4 top-4 font-display text-xs italic text-muted-foreground/50 sm:left-6 sm:top-6">
              04
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
              className="absolute h-32 w-32 rounded-full border border-dashed border-primary/30 sm:h-48 sm:w-48 lg:h-48 lg:w-48"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-2xl font-medium italic text-ink-foreground shadow-xl shadow-primary/20 sm:h-36 sm:w-36 sm:text-4xl lg:h-36 lg:w-36 lg:text-4xl">
              {initials(t.about.name)}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 sm:gap-4">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {t.about.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h2 className="text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                {t.about.name}
              </h2>
              <p className="mt-2 text-base font-medium italic text-accent">
                {t.about.title}
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-2">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.1 + i * 0.06}>
                <p className="text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-2 pt-1">
              {t.about.roles.map((r) => (
                <span
                  key={r.company}
                  className="border border-border px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span className="text-muted-foreground">{r.role} · </span>
                  <span className="font-semibold">{r.company}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
