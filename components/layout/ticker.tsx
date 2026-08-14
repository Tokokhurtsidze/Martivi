"use client";

import { useLanguage } from "@/context/language-context";

export function Ticker() {
  const { t } = useLanguage();

  const items = [
    t.footer.tagline,
    t.nav.consulting,
    t.nav.digital,
    "TBILISI",
    "NEW YORK",
  ];
  const track = [...items, ...items, ...items];

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden bg-ink text-ink-foreground">
      <div className="flex h-full w-max animate-ticker items-center gap-10 whitespace-nowrap px-4 text-[11px] font-semibold uppercase tracking-[0.24em]">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % items.length === 0 ? "text-accent" : "text-ink-foreground/70"}>
              {item}
            </span>
            <span className="text-accent/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
