"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCover } from "@/components/work/project-cover";
import { projectsMeta, palettes } from "@/lib/data/projects-meta";
import { useLanguage } from "@/context/language-context";
import type { Project } from "@/lib/content/types";

export function ProjectDetail({ project }: { project: Project | undefined }) {
  const { t, locale } = useLanguage();

  if (!project) {
    return (
      <Container className="flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight">
          {t.work.notFoundTitle}
        </h1>
        <p className="mt-3 text-muted-foreground">{t.work.notFoundSubtitle}</p>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.work.backToWork}
        </Link>
      </Container>
    );
  }

  const text = project[locale];
  const meta = projectsMeta[project.slug] ?? { palette: palettes.ink, coverKind: 0 as const };
  const images = [project.cover, ...project.gallery].filter((img): img is { url: string } => Boolean(img));

  return (
    <div className="pb-28 sm:pb-36">
      <Container className="pt-32 sm:pt-40">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.work.backToWork}
        </Link>

        <h1 className="mt-8 max-w-3xl text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          {text.title}
        </h1>
      </Container>

      <div className="mt-10 flex flex-col gap-6 sm:gap-10">
        {images.length > 0 ? (
          images.map((img, i) => (
            <div key={img.url} className="relative aspect-[16/9] w-full">
              <Image
                src={img.url}
                alt={text.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <Reveal>
            <ProjectCover
              title={text.title}
              index={0}
              palette={meta.palette}
              coverKind={meta.coverKind}
              className="aspect-[16/8] w-full sm:aspect-[16/6]"
              titleClassName="max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
            />
          </Reveal>
        )}
      </div>
    </div>
  );
}
