"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth/session";
import { getProjects, saveProjects, uploadProjectImage, deleteProjectImage } from "@/lib/content/store";
import type { Project, ProjectImage } from "@/lib/content/types";
import type { ProjectCategory } from "@/lib/i18n/types";

export interface ProjectFormState {
  error?: string;
}

const CATEGORY_VALUES: ProjectCategory[] = ["branding", "social", "web", "motion"];

function parseCategories(formData: FormData): ProjectCategory[] {
  return CATEGORY_VALUES.filter((c) => formData.get(`category-${c}`) === "on");
}

function parseLines(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string") return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function textField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readLocalizedText(formData: FormData, locale: "en" | "ka") {
  return {
    title: textField(formData, `${locale}-title`),
    tagline: textField(formData, `${locale}-tagline`),
    summary: textField(formData, `${locale}-summary`),
    challenge: textField(formData, `${locale}-challenge`),
    approach: parseLines(formData.get(`${locale}-approach`)),
    results: parseLines(formData.get(`${locale}-results`)),
  };
}

async function uploadGallery(slug: string, formData: FormData): Promise<ProjectImage[]> {
  const files = formData.getAll("gallery").filter((f): f is File => f instanceof File && f.size > 0);
  return Promise.all(files.map((file) => uploadProjectImage(slug, file)));
}

export async function createProject(_prevState: ProjectFormState, formData: FormData): Promise<ProjectFormState> {
  if (!(await verifySession())) {
    return { error: "Your session expired. Please log in again." };
  }

  const slug = slugify(textField(formData, "slug"));
  if (!slug) return { error: "Slug is required." };

  const en = readLocalizedText(formData, "en");
  const ka = readLocalizedText(formData, "ka");
  if (!en.title || !ka.title) {
    return { error: "Title is required in both languages — check the EN and KA tabs." };
  }

  const categories = parseCategories(formData);
  if (categories.length === 0) return { error: "Pick at least one category." };

  const projects = await getProjects();
  if (projects.some((p) => p.slug === slug)) {
    return { error: `A project with slug "${slug}" already exists.` };
  }

  let cover: ProjectImage | null = null;
  const coverFile = formData.get("cover");
  try {
    if (coverFile instanceof File && coverFile.size > 0) {
      cover = await uploadProjectImage(slug, coverFile);
    }
    const gallery = await uploadGallery(slug, formData);

    const project: Project = {
      slug,
      categories,
      client: textField(formData, "client"),
      year: textField(formData, "year"),
      services: parseLines(formData.get("services")),
      cover,
      gallery,
      en,
      ka,
      updatedAt: new Date().toISOString(),
    };

    await saveProjects([...projects, project]);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save the project." };
  }

  updateTag("projects");
  redirect("/admin");
}

export async function updateProject(
  currentSlug: string,
  _prevState: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  if (!(await verifySession())) {
    return { error: "Your session expired. Please log in again." };
  }

  const projects = await getProjects();
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { error: "This project no longer exists." };
  const existing = projects[index];

  const slug = slugify(textField(formData, "slug"));
  if (!slug) return { error: "Slug is required." };
  if (slug !== currentSlug && projects.some((p) => p.slug === slug)) {
    return { error: `A project with slug "${slug}" already exists.` };
  }

  const en = readLocalizedText(formData, "en");
  const ka = readLocalizedText(formData, "ka");
  if (!en.title || !ka.title) {
    return { error: "Title is required in both languages — check the EN and KA tabs." };
  }

  const categories = parseCategories(formData);
  if (categories.length === 0) return { error: "Pick at least one category." };

  try {
    let cover = existing.cover;
    const removeCover = formData.get("remove-cover") === "on";
    const coverFile = formData.get("cover");
    if (removeCover && cover) {
      await deleteProjectImage(cover.url);
      cover = null;
    }
    if (coverFile instanceof File && coverFile.size > 0) {
      if (cover) await deleteProjectImage(cover.url);
      cover = await uploadProjectImage(slug, coverFile);
    }

    const removedGalleryUrls = new Set(formData.getAll("remove-gallery").filter((v): v is string => typeof v === "string"));
    const keptGallery = existing.gallery.filter((img) => !removedGalleryUrls.has(img.url));
    await Promise.all([...removedGalleryUrls].map((url) => deleteProjectImage(url)));
    const newGallery = await uploadGallery(slug, formData);

    const updated: Project = {
      ...existing,
      slug,
      categories,
      client: textField(formData, "client"),
      year: textField(formData, "year"),
      services: parseLines(formData.get("services")),
      cover,
      gallery: [...keptGallery, ...newGallery],
      en,
      ka,
      updatedAt: new Date().toISOString(),
    };

    const next = [...projects];
    next[index] = updated;
    await saveProjects(next);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save the project." };
  }

  updateTag("projects");
  redirect("/admin");
}

export async function deleteProject(slug: string): Promise<void> {
  if (!(await verifySession())) {
    redirect("/admin/login");
  }

  const projects = await getProjects();
  const target = projects.find((p) => p.slug === slug);
  if (!target) redirect("/admin");

  const urls = [target.cover?.url, ...target.gallery.map((g) => g.url)].filter((u): u is string => Boolean(u));
  await Promise.all(urls.map((url) => deleteProjectImage(url)));
  await saveProjects(projects.filter((p) => p.slug !== slug));

  updateTag("projects");
  redirect("/admin");
}
