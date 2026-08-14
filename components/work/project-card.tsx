"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/work/project-cover";
import { projectsMeta } from "@/lib/data/projects-meta";
import { useLanguage } from "@/context/language-context";
import type { ProjectEntry } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  delay = 0,
  className,
}: {
  project: ProjectEntry;
  index: number;
  delay?: number;
  className?: string;
}) {
  const { t } = useLanguage();
  const meta = projectsMeta[project.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="overflow-hidden border border-border">
          <ProjectCover
            title={project.title}
            index={index}
            palette={meta.palette}
            coverKind={meta.coverKind}
            tag={t.work.categories[project.categories[0]]}
            className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-start justify-between gap-4 pt-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {project.client} · {project.year}
            </p>
            <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-primary">
              {project.tagline}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
      </Link>
    </motion.div>
  );
}
