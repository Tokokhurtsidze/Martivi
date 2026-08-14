"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/work/project-cover";
import { projectsMeta, palettes } from "@/lib/data/projects-meta";
import { useLanguage } from "@/context/language-context";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  delay = 0,
  className,
}: {
  project: Project;
  index: number;
  delay?: number;
  className?: string;
}) {
  const { t, locale } = useLanguage();
  const text = project[locale];
  const meta = projectsMeta[project.slug] ?? { palette: palettes.ink, coverKind: 0 as const };

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
          {project.cover ? (
            <div className="relative aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={project.cover.url}
                alt={text.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <ProjectCover
              title={text.title}
              index={index}
              palette={meta.palette}
              coverKind={meta.coverKind}
              tag={t.work.categories[project.categories[0]]}
              className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex items-start justify-between gap-4 pt-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {project.client} · {project.year}
            </p>
            <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-primary">
              {text.tagline}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
      </Link>
    </motion.div>
  );
}
