import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight",
        className,
      )}
    >
      <span className="relative flex h-6 w-9 items-center justify-center">
        <svg viewBox="0 0 48 32" fill="none" className="h-6 w-9">
          <path d="M2 3L15 16L2 29V3Z" fill="currentColor" className="text-accent" />
          <path d="M28 3L15 16L28 29V3Z" fill="currentColor" className="text-accent" />
          <path d="M33 3L46 16L33 29V3Z" fill="currentColor" className="text-primary" />
        </svg>
      </span>
      <span>
        Martivi<span className="text-accent">.</span>
      </span>
    </span>
  );
}
