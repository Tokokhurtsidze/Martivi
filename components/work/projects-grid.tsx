"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/context/language-context";
import type { Project } from "@/lib/content/types";
import type { ProjectCategory } from "@/lib/i18n/types";

const categoryOrder: ProjectCategory[] = ["branding", "social", "web", "motion"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [projects, filter],
  );

  return (
    <div className="pt-32 pb-28 sm:pt-40 sm:pb-36">
      <Container>
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {t.work.eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          {t.work.title}
        </h1>
        <p className="mt-5 max-w-xl text-balance text-lg text-muted-foreground">
          {t.work.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-3 border-y border-border py-6">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`border px-4 py-2 text-sm font-medium transition-colors ${
              filter === "all"
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
            }`}
          >
            {t.work.filterAll}
          </button>
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {t.work.categories[cat]}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </Container>
    </div>
  );
}
