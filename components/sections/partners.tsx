"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { techPartners, brandPartnersRowOne, brandPartnersRowTwo } from "@/lib/data/partners";
import { useLanguage } from "@/context/language-context";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow={t.partners.eyebrow}
          title={t.partners.title}
          subtitle={t.partners.subtitle}
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {techPartners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex aspect-[3/2] flex-col items-center justify-center gap-2 border border-border bg-card p-4 transition-colors hover:border-accent/50"
            >
              <ArrowUpRight className="absolute right-3 top-3 h-3.5 w-3.5 text-muted-foreground/0 transition-all group-hover:text-accent group-hover:opacity-100" />
              <Image
                src={partner.logo}
                alt={partner.name}
                width={40}
                height={40}
                className="h-8 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <span className="text-center text-xs font-medium text-muted-foreground">
                {partner.name}
              </span>
            </motion.a>
          ))}
        </div>
      </Container>

      <div className="mt-8 flex flex-col gap-3 border-y border-border py-6">
        <Marquee items={brandPartnersRowOne} direction="left" />
        <Marquee items={brandPartnersRowTwo} direction="right" />
      </div>
    </section>
  );
}
