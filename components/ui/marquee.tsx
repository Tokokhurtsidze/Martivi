import { cn } from "@/lib/utils";
import type { BrandPartner } from "@/lib/data/partners";

export function Marquee({
  items,
  direction = "left",
}: {
  items: BrandPartner[];
  direction?: "left" | "right";
}) {
  const track = [...items, ...items];

  return (
    <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max shrink-0 items-center gap-12 py-3 animate-marquee"
        style={direction === "right" ? { animationDirection: "reverse" } : undefined}
      >
        {track.map((partner, i) => {
          const content = (
            <span className="whitespace-nowrap font-display text-xl italic tracking-tight text-muted-foreground/60 transition-colors group-hover:text-foreground sm:text-2xl">
              {partner.name}
            </span>
          );

          return partner.href ? (
            <a
              key={`${partner.name}-${i}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              {content}
            </a>
          ) : (
            <span key={`${partner.name}-${i}`} className={cn("group flex items-center")}>
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}
