"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCover } from "@/components/work/project-cover";
import { projectsMeta, palettes } from "@/lib/data/projects-meta";
import { useLanguage } from "@/context/language-context";
import type { Project } from "@/lib/content/types";

export function ProjectDetail({
  project,
  next,
}: {
  project: Project | undefined;
  next: Project | undefined;
}) {
  const { t, locale } = useLanguage();

  if (!project || !next) {
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
  const nextText = next[locale];
  const meta = projectsMeta[project.slug] ?? { palette: palettes.ink, coverKind: 0 as const };
  const nextMeta = projectsMeta[next.slug] ?? { palette: palettes.ink, coverKind: 0 as const };
  const galleryShots = project.gallery.slice(0, 3);

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

        <div className="mt-8 flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {project.categories.map((c) => t.work.categories[c]).join(" · ")}
          </span>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            {text.title}
          </h1>
          <p className="max-w-2xl text-balance text-lg italic text-accent">
            {text.tagline}
          </p>
        </div>
      </Container>

      <Reveal className="mt-10">
        {project.cover ? (
          <div className="relative aspect-[16/8] w-full sm:aspect-[16/6]">
            <Image src={project.cover.url} alt={text.title} fill sizes="100vw" className="object-cover" />
          </div>
        ) : (
          <ProjectCover
            title={text.title}
            index={0}
            palette={meta.palette}
            coverKind={meta.coverKind}
            className="aspect-[16/8] w-full sm:aspect-[16/6]"
            titleClassName="max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
          />
        )}
      </Reveal>

      <Container className="mt-14">
        <div className="grid gap-10 border-y border-border py-10 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.work.clientLabel}
            </p>
            <p className="mt-2 font-medium">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.work.yearLabel}
            </p>
            <p className="mt-2 font-medium">{project.year}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.work.servicesLabel}
            </p>
            <p className="mt-2 font-medium">{project.services.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-medium italic tracking-tight sm:text-3xl">
                {t.work.challengeLabel}
              </h2>
              <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
                {text.challenge}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="font-display text-2xl font-medium italic tracking-tight sm:text-3xl">
                {t.work.approachLabel}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {text.approach.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-14">
          <div className="border border-border p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium italic tracking-tight sm:text-3xl">
              {t.work.resultsLabel}
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-3">
              {text.results.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {galleryShots[i] ? (
                <div className="relative aspect-video">
                  <Image
                    src={galleryShots[i].url}
                    alt={`${text.title} ${i + 1}`}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ProjectCover
                  title={project.client}
                  index={i}
                  palette={meta.palette}
                  coverKind={((i + meta.coverKind) % 4) as 0 | 1 | 2 | 3}
                  className="aspect-video"
                  titleClassName="text-lg sm:text-xl"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col items-start justify-between gap-6 border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-12"
        >
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {t.work.ctaTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">{t.work.ctaSubtitle}</p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex h-12 shrink-0 items-center gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            {t.work.ctaButton}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <Link href={`/projects/${next.slug}`} className="group mt-6 block">
          <div className="flex items-center justify-between border border-border p-6 transition-colors hover:border-accent sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t.work.nextProjectLabel}
              </p>
              <p className="mt-2 font-display text-xl font-medium italic tracking-tight sm:text-2xl">
                {nextText.title}
              </p>
            </div>
            <div className="hidden h-20 w-28 shrink-0 overflow-hidden sm:block">
              {next.cover ? (
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <Image src={next.cover.url} alt={nextText.title} fill sizes="112px" className="object-cover" />
                </div>
              ) : (
                <ProjectCover
                  title={nextText.title}
                  index={0}
                  palette={nextMeta.palette}
                  coverKind={nextMeta.coverKind}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  titleClassName="text-xs"
                />
              )}
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
          </div>
        </Link>
      </Container>
    </div>
  );
}
