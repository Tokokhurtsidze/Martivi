import type { ProjectPalette } from "@/lib/data/projects-meta";
import { cn } from "@/lib/utils";

function initial(title: string) {
  return title.trim().charAt(0).toUpperCase();
}

export function ProjectCover({
  title,
  index,
  palette,
  coverKind,
  tag,
  className,
  titleClassName,
}: {
  title: string;
  index: number;
  palette: ProjectPalette;
  coverKind: 0 | 1 | 2 | 3;
  tag?: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn("bg-grain relative flex flex-col justify-between overflow-hidden", className)}
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      {coverKind === 0 && (
        <div
          className="pointer-events-none absolute -right-1/4 -top-1/3 h-[140%] w-1/2 rotate-12"
          style={{ backgroundColor: palette.accent, opacity: 0.14 }}
        />
      )}

      {coverKind === 1 && (
        <svg
          viewBox="0 0 200 400"
          className="pointer-events-none absolute -right-6 top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-25"
        >
          <path
            d="M10 10 L150 200 L10 390"
            stroke={palette.accent}
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {coverKind === 2 && (
        <div
          className="pointer-events-none absolute inset-0 bg-grid"
          style={{ opacity: 0.12 }}
        />
      )}

      {(coverKind === 2 || coverKind === 3) && (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-[0.15em] -left-2 select-none font-display text-[9rem] italic leading-none sm:text-[11rem]"
          style={{ color: palette.fg, opacity: 0.1 }}
        >
          {coverKind === 3 ? "“" : initial(title)}
        </span>
      )}

      <div className="relative flex items-start justify-between p-6">
        <span className="font-display text-sm italic opacity-50">0{index + 1}</span>
        {tag && (
          <span
            className="border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80"
            style={{ borderColor: palette.fg }}
          >
            {tag}
          </span>
        )}
      </div>

      <div className="relative p-6 pt-0">
        <p
          className={cn(
            "font-display text-2xl font-medium italic leading-[1.05] tracking-tight sm:text-3xl",
            titleClassName,
          )}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
