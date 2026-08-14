import { projects } from "./projects";
import type { Project } from "./types";

/**
 * Phase 1: static in-repo data. Phase 2 swaps this for a Vercel Blob-backed
 * JSON document (`list()` + `fetch()`, tagged "projects" for on-demand
 * revalidation) — callers are unaffected by the swap.
 */
export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}
