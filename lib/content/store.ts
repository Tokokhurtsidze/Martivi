import "server-only";
import { del, list, put } from "@vercel/blob";
import { projects as seedProjects } from "./projects";
import type { Project, ProjectImage } from "./types";

const CONTENT_PATHNAME = "content/projects.json";

function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

/**
 * Phase 1 fallback: without a Blob store attached, reads return the static
 * seed so the site still renders. Once BLOB_READ_WRITE_TOKEN is set, the
 * admin panel's first save creates the real content document and this
 * fallback stops being used.
 */
export async function getProjects(): Promise<Project[]> {
  if (!isBlobConfigured()) {
    return seedProjects;
  }

  const { blobs } = await list({ prefix: CONTENT_PATHNAME, limit: 1 });
  if (!blobs.length) {
    return seedProjects;
  }

  const res = await fetch(blobs[0].url, { next: { tags: ["projects"] } });
  if (!res.ok) {
    return seedProjects;
  }

  return (await res.json()) as Project[];
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}

export async function saveProjects(projects: Project[]): Promise<void> {
  if (!isBlobConfigured()) {
    throw new Error(
      "Content storage isn't configured yet. Set BLOB_READ_WRITE_TOKEN (attach a Vercel Blob store) before saving.",
    );
  }

  await put(CONTENT_PATHNAME, JSON.stringify(projects), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function uploadProjectImage(slug: string, file: File): Promise<ProjectImage> {
  if (!isBlobConfigured()) {
    throw new Error("Image storage isn't configured yet. Set BLOB_READ_WRITE_TOKEN before uploading images.");
  }

  const blob = await put(`projects/${slug}/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });
  return { url: blob.url };
}

export async function deleteProjectImage(url: string): Promise<void> {
  if (!isBlobConfigured()) return;
  try {
    await del(url);
  } catch {
    // Best-effort cleanup — an orphaned blob isn't worth failing the save over.
  }
}
