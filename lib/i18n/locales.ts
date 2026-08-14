export const locales = ["en", "ka"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ka: "GE",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ka: "ქართული",
};
