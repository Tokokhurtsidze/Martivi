"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "top",
  "consulting",
  "digital",
  "work",
  "about",
  "partners",
  "contact",
  "footer",
] as const;

function goToSection(id: (typeof SECTION_IDS)[number]) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ScrollSlides() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>("top");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");

    function apply(matches: boolean) {
      document.documentElement.classList.toggle("snap-y", matches);
      document.documentElement.classList.toggle("snap-proximity", matches);
    }

    function onChange(e: MediaQueryListEvent) {
      apply(e.matches);
    }

    apply(mql.matches);
    document.documentElement.classList.add("scrollbar-hide");
    mql.addEventListener("change", onChange);

    return () => {
      document.documentElement.classList.remove("snap-y", "snap-proximity", "scrollbar-hide");
      mql.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id as (typeof SECTION_IDS)[number]);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      const currentIndex = SECTION_IDS.indexOf(activeRef.current);

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goToSection(SECTION_IDS[Math.min(currentIndex + 1, SECTION_IDS.length - 1)]);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSection(SECTION_IDS[Math.max(currentIndex - 1, 0)]);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSection("top");
      } else if (e.key === "End") {
        e.preventDefault();
        goToSection("footer");
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const labels: Record<(typeof SECTION_IDS)[number], string | null> = {
    top: null,
    consulting: t.nav.consulting,
    digital: t.nav.digital,
    work: t.nav.work,
    about: t.nav.about,
    partners: t.nav.partners,
    contact: t.nav.contact,
    footer: null,
  };

  return (
    <>
      <div className="pointer-events-none fixed right-5 top-1/2 z-[55] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
        {SECTION_IDS.map((id) => {
          const isActive = active === id;
          const label = labels[id];
          return (
            <button
              key={id}
              type="button"
              aria-label={label ?? id}
              aria-current={isActive}
              onClick={() => goToSection(id)}
              className="group pointer-events-auto flex items-center gap-2.5"
            >
              {label && (
                <span
                  className={cn(
                    "whitespace-nowrap border border-border bg-card px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100",
                    isActive && "text-primary",
                  )}
                >
                  {label}
                </span>
              )}
              <span
                className={cn(
                  "h-2 w-2 rounded-full border transition-all duration-300",
                  isActive
                    ? "scale-125 border-accent bg-accent"
                    : "border-muted-foreground/40 bg-transparent group-hover:border-accent",
                )}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {active !== "top" && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
            onClick={() => goToSection("top")}
            className="fixed bottom-6 left-6 z-[55] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
