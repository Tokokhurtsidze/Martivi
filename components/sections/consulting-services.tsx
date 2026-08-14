"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Megaphone, Rocket, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const icons = [Megaphone, TrendingUp, Rocket];

export function ConsultingServices() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = cardRefs.current.indexOf(visible.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        }
      },
      { root: track, threshold: [0.6] },
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function goToCard(index: number) {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <section
      id="consulting"
      className="relative flex min-h-[100svh] flex-col justify-center py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          index="01"
          eyebrow={t.consulting.eyebrow}
          title={t.consulting.title}
          subtitle={t.consulting.subtitle}
        />

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mt-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {t.consulting.categories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={category.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex w-full shrink-0 snap-start justify-center lg:contents"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group relative flex w-full flex-col border border-border p-5 transition-colors hover:border-accent/50 sm:mx-auto sm:max-w-md lg:mx-0 lg:w-auto lg:max-w-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg italic text-muted-foreground/50">
                      0{index + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-medium tracking-tight sm:text-xl lg:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                    {category.description}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-foreground/80"
                      >
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
          {t.consulting.categories.map((category, index) => (
            <button
              key={category.title}
              type="button"
              aria-label={category.title}
              aria-current={active === index}
              onClick={() => goToCard(index)}
              className={cn(
                "flex h-8 w-8 items-center justify-center border font-display text-xs italic transition-colors",
                active === index
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground",
              )}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
