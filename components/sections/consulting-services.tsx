"use client";

import { motion } from "framer-motion";
import { Check, Megaphone, Rocket, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";

const icons = [Megaphone, TrendingUp, Rocket];

export function ConsultingServices() {
  const { t } = useLanguage();

  return (
    <section
      id="consulting"
      className="relative flex flex-col justify-center py-16 sm:py-24 lg:min-h-[100svh]"
    >
      <Container>
        <SectionHeading
          index="01"
          eyebrow={t.consulting.eyebrow}
          title={t.consulting.title}
          subtitle={t.consulting.subtitle}
        />

        <div className="mt-6 flex flex-col gap-4 sm:mt-8 lg:grid lg:grid-cols-3 lg:gap-5">
          {t.consulting.categories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group relative flex w-full flex-col border border-border p-5 transition-colors hover:border-accent/50"
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
                    <li key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
