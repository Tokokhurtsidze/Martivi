"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Code2, Palette, Share2 } from "lucide-react";
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

  return (
    <section
      id="digital"
      className="bg-grain relative flex flex-col justify-center overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24 lg:min-h-[100svh]"
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

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
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
                  "group relative flex flex-col justify-between overflow-hidden border border-ink-foreground/10 bg-ink-foreground/[0.03] p-3 transition-colors hover:border-accent/50 sm:p-6 lg:min-h-[10rem]",
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
      </Container>
    </section>
  );
}
