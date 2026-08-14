"use client";

import { useActionState, useState } from "react";
import type { Project } from "@/lib/content/types";
import type { ProjectCategory } from "@/lib/i18n/types";
import type { ProjectFormState } from "@/app/admin/projects/actions";

const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: "branding", label: "Branding" },
  { value: "social", label: "Social Media" },
  { value: "web", label: "Web Development" },
  { value: "motion", label: "Motion Graphics" },
];

const inputClass = "mt-1 w-full border border-border bg-transparent px-3 py-2 text-sm focus:border-accent focus:outline-none";
const labelClass = "mt-5 block text-sm font-medium";

export function ProjectForm({
  project,
  action,
  submitLabel,
}: {
  project?: Project;
  action: (state: ProjectFormState, formData: FormData) => Promise<ProjectFormState>;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, {});
  const [tab, setTab] = useState<"en" | "ka">("en");

  return (
    <form action={formAction}>
      <label className={labelClass} htmlFor="slug">
        Slug (URL)
      </label>
      <input
        id="slug"
        name="slug"
        defaultValue={project?.slug}
        placeholder="sun-motors-social-media"
        required
        className={inputClass}
      />

      <div className="mt-5 flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium" htmlFor="client">
            Client
          </label>
          <input id="client" name="client" defaultValue={project?.client} required className={inputClass} />
        </div>
        <div className="w-32">
          <label className="block text-sm font-medium" htmlFor="year">
            Year
          </label>
          <input id="year" name="year" defaultValue={project?.year} required className={inputClass} />
        </div>
      </div>

      <span className={labelClass}>Categories</span>
      <div className="mt-2 flex flex-wrap gap-4">
        {CATEGORIES.map((c) => (
          <label key={c.value} className="flex items-center gap-2 text-sm">
            <input type="checkbox" name={`category-${c.value}`} defaultChecked={project?.categories.includes(c.value)} />
            {c.label}
          </label>
        ))}
      </div>

      <label className={labelClass} htmlFor="services">
        Services (one per line)
      </label>
      <textarea
        id="services"
        name="services"
        defaultValue={project?.services.join("\n")}
        rows={3}
        className={inputClass}
      />

      <span className={labelClass}>Cover image</span>
      {project?.cover && (
        <div className="mt-2 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- admin-only preview thumbnail, not a public page */}
          <img src={project.cover.url} alt="" className="h-16 w-24 object-cover" />
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <input type="checkbox" name="remove-cover" /> Remove
          </label>
        </div>
      )}
      <input id="cover" name="cover" type="file" accept="image/*" className={`${inputClass} mt-2`} />

      <span className={labelClass}>Gallery images</span>
      {project && project.gallery.length > 0 && (
        <div className="mt-2 grid grid-cols-3 gap-3">
          {project.gallery.map((img) => (
            <label key={img.url} className="flex flex-col gap-1 text-xs text-muted-foreground">
              {/* eslint-disable-next-line @next/next/no-img-element -- admin-only preview thumbnail, not a public page */}
              <img src={img.url} alt="" className="aspect-video w-full object-cover" />
              <span className="flex items-center gap-2">
                <input type="checkbox" name="remove-gallery" value={img.url} /> Remove
              </span>
            </label>
          ))}
        </div>
      )}
      <input id="gallery" name="gallery" type="file" accept="image/*" multiple className={`${inputClass} mt-2`} />
      <p className="mt-1 text-xs text-muted-foreground">New files are added after any existing images you keep.</p>

      <div className="mt-8 flex gap-2 border-b border-border">
        {(["en", "ka"] as const).map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => setTab(locale)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              tab === locale ? "border-b-2 border-accent text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>

      {(["en", "ka"] as const).map((locale) => (
        <div key={locale} className={tab === locale ? "" : "hidden"}>
          <label className={labelClass} htmlFor={`${locale}-title`}>
            Title
          </label>
          <input id={`${locale}-title`} name={`${locale}-title`} defaultValue={project?.[locale].title} className={inputClass} />

          <label className={labelClass} htmlFor={`${locale}-tagline`}>
            Tagline
          </label>
          <input
            id={`${locale}-tagline`}
            name={`${locale}-tagline`}
            defaultValue={project?.[locale].tagline}
            className={inputClass}
          />

          <label className={labelClass} htmlFor={`${locale}-summary`}>
            Summary
          </label>
          <textarea
            id={`${locale}-summary`}
            name={`${locale}-summary`}
            defaultValue={project?.[locale].summary}
            rows={3}
            className={inputClass}
          />

          <label className={labelClass} htmlFor={`${locale}-challenge`}>
            Challenge
          </label>
          <textarea
            id={`${locale}-challenge`}
            name={`${locale}-challenge`}
            defaultValue={project?.[locale].challenge}
            rows={3}
            className={inputClass}
          />

          <label className={labelClass} htmlFor={`${locale}-approach`}>
            Approach (one per line)
          </label>
          <textarea
            id={`${locale}-approach`}
            name={`${locale}-approach`}
            defaultValue={project?.[locale].approach.join("\n")}
            rows={4}
            className={inputClass}
          />

          <label className={labelClass} htmlFor={`${locale}-results`}>
            Results (one per line)
          </label>
          <textarea
            id={`${locale}-results`}
            name={`${locale}-results`}
            defaultValue={project?.[locale].results.join("\n")}
            rows={4}
            className={inputClass}
          />
        </div>
      ))}

      {state.error && <p className="mt-6 text-sm text-red-500">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity disabled:opacity-60"
      >
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
