import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight",
        className,
      )}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
          <path d="M2 4L14 16L2 28V4Z" fill="currentColor" className="text-primary" />
          <path d="M17 4L29 16L17 28V4Z" fill="currentColor" className="text-accent" />
        </svg>
      </span>
      <span>
        Martivi<span className="text-accent">.</span>
      </span>
    </span>
  );
}
