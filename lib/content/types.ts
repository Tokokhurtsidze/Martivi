import type { ProjectCategory } from "@/lib/i18n/types";

export interface ProjectImage {
  url: string;
  width: number;
  height: number;
}

export interface LocalizedProjectText {
  title: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
}

export interface Project {
  slug: string;
  categories: ProjectCategory[];
  client: string;
  year: string;
  services: string[];
  cover: ProjectImage | null;
  gallery: ProjectImage[];
  en: LocalizedProjectText;
  ka: LocalizedProjectText;
  updatedAt: string;
}
