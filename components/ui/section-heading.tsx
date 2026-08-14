import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  compactMobile = false,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  compactMobile?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 sm:gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {index && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-10 select-none font-display text-[7rem] font-medium leading-none italic sm:text-[9rem]",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2 sm:-left-4",
            invert ? "text-ink-foreground/[0.06]" : "text-foreground/[0.05]",
          )}
        >
          {index}
        </span>
      )}

      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "relative inline-flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em]",
              invert ? "text-accent" : "text-primary",
            )}
          >
            <span className={cn("h-px w-8", invert ? "bg-accent" : "bg-primary")} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "relative text-balance font-display font-medium tracking-tight",
            compactMobile ? "text-2xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl lg:text-6xl",
            invert && "text-background",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "relative max-w-2xl text-balance text-base sm:text-lg",
              invert ? "text-background/60" : "text-muted-foreground",
              align === "center" && "mx-auto",
              compactMobile && "hidden sm:block",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
