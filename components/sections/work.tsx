"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/context/language-context";

export function Work() {
  const { t } = useLanguage();
  const featured = t.work.projects.slice(0, 4);

  return (
    <section
      id="work"
      className="relative flex flex-col justify-center py-24 sm:py-28 lg:min-h-[100svh]"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
            eyebrow={t.work.eyebrow}
            title={t.work.title}
            subtitle={t.work.subtitle}
          />
          <Link
            href="/projects"
            className="group hidden shrink-0 items-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            {t.work.viewAll}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              delay={i * 0.08}
              className={i === 0 ? undefined : i === 1 ? "hidden sm:block" : "hidden lg:block"}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="group mt-8 flex w-full items-center justify-center gap-2 border border-border py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          {t.work.viewAll}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </section>
  );
}
