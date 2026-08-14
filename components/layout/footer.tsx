"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Behance, Facebook, Linkedin, Youtube } from "@/components/icons/social";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Behance", href: "https://behance.net", Icon: Behance },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
];

export function Footer() {
  const { t } = useLanguage();
  const isHome = usePathname() === "/";

  const navItems = [
    { key: "consulting", href: "/#consulting", label: t.nav.consulting },
    { key: "digital", href: "/#digital", label: t.nav.digital },
    { key: "work", href: "/projects", label: t.nav.work },
    { key: "about", href: "/#about", label: t.nav.about },
    { key: "partners", href: "/#partners", label: t.nav.partners },
    { key: "contact", href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer
      id={isHome ? "footer" : undefined}
      className={cn(
        "border-t border-border bg-ink text-ink-foreground",
        isHome && "flex min-h-[100svh] flex-col justify-center snap-start scroll-mt-28 sm:scroll-mt-32",
      )}
    >
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8 lg:py-20">
        <div className="flex flex-col gap-5">
          <Logo className="text-ink-foreground" />
          <p className="max-w-xs font-display text-xl italic text-ink-foreground/60">
            {t.footer.tagline}
          </p>
          <div className="mt-2 flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-ink-foreground/15 text-ink-foreground/60 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-foreground/40">
            {t.footer.linksTitle}
          </span>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="w-fit text-sm text-ink-foreground/70 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-foreground/40">
            {t.contact.eyebrow}
          </span>
          {t.contact.offices.map((office) => (
            <div key={office.city} className="text-sm text-ink-foreground/70">
              <p className="text-ink-foreground">{office.city}</p>
              <a
                href={`mailto:${office.email}`}
                className="transition-colors hover:text-accent"
              >
                {office.email}
              </a>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-ink-foreground/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ink-foreground/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Martivi. {t.footer.rights}</p>
          <p>{t.footer.owner}</p>
        </Container>
      </div>
    </footer>
  );
}
