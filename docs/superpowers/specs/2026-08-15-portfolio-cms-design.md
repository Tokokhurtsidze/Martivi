# Portfolio dynamic projects + admin CMS

## Goal

Replace the hardcoded, i18n-embedded project list with a real per-project
content model, dynamic detail pages backed by that model, and an admin panel
to manage it (bilingual text, categories, cover + gallery image uploads).

## Phasing

Built in two phases so visible progress doesn't wait on Blob/auth setup:

- **Phase 1 (this pass):** new bilingual `Project` data model, static seed
  data (migrated from the current 9 hardcoded projects), dynamic
  `/projects` and `/projects/[slug]` pages reading from it. No admin, no
  real image uploads yet — covers still fall back to the existing
  generated palette covers.
- **Phase 2:** admin panel (password-gated), Vercel Blob storage for the
  project JSON + uploaded images, wired in behind the same read interface
  Phase 1 establishes.

## Data model

```ts
type ProjectCategory = "branding" | "social" | "web" | "motion";

interface ProjectImage {
  url: string;
  width: number;
  height: number;
}

interface LocalizedProjectText {
  title: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
}

interface Project {
  slug: string;
  categories: ProjectCategory[];
  client: string;
  year: string;
  services: string[];
  cover: ProjectImage | null;   // null -> fall back to generated cover
  gallery: ProjectImage[];      // real detail images, ordered
  en: LocalizedProjectText;
  ka: LocalizedProjectText;
  updatedAt: string;
}
```

`ProjectCategory` stays where category *labels* are translated
(`lib/i18n/types.ts`); `Project` itself and its store live in a new
`lib/content/` module, decoupled from the i18n dictionaries.

## Storage interface (stable across both phases)

`lib/content/store.ts` exports `getProjects()` (and, from Phase 2,
`saveProjects()`). Phase 1 implements it by returning a static in-repo
array. Phase 2 swaps the implementation to read/write a single JSON
document in Vercel Blob (`content/projects.json`, `list()` + `fetch()`
tagged `projects` for on-demand revalidation via `revalidateTag` after
admin writes). Callers (`/projects`, `/projects/[slug]`) never change.

## Public pages (Phase 1)

- `app/projects/page.tsx` becomes a Server Component: `getProjects()`,
  passes the array to a new client `ProjectsGrid` that owns the category
  filter state and picks `en`/`ka` text per the current locale from
  `useLanguage()`.
- `app/projects/[slug]/page.tsx` becomes a Server Component:
  `generateStaticParams` from `getProjects()`; looks up the project by
  slug; renders the existing "not found" card (unchanged UX) when missing;
  passes the full bilingual `Project` to an adapted `ProjectDetail`.
- `ProjectCard` / `ProjectDetail` / `ProjectCover` are adapted to accept
  the full `Project` and render `project.cover` / `project.gallery` via
  `next/image` when present, falling back to the current generated
  palette cover (`lib/data/projects-meta.ts`) when `cover` is `null` —
  true for all 9 migrated projects until Phase 2 uploads replace them.
- `lib/i18n/en.ts` / `ka.ts`: the `work.projects` array is removed;
  `Dictionary` drops `projects: ProjectEntry[]` from `work` (labels,
  categories, filters, CTA strings all stay).

## Admin panel (Phase 2)

- Env vars: `ADMIN_PASSWORD`, `SESSION_SECRET`, `BLOB_READ_WRITE_TOKEN`.
- `proxy.ts` (this Next version renamed `middleware.ts` → `proxy.ts`)
  does an optimistic cookie check on `/admin/**` (excluding
  `/admin/login`); every admin server action re-verifies the session
  independently, per Next's own auth guidance.
- Session: HMAC-signed httpOnly cookie via `node:crypto`, no new auth
  dependency — single shared password, no user accounts.
- Routes: `/admin/login`, `/admin` (project table + delete), 
  `/admin/projects/new`, `/admin/projects/[slug]/edit`.
- One shared form component: EN/KA tabs for text fields, category
  checkboxes, cover upload (single, replace-with-preview), gallery
  upload (multiple, ordered, add/remove). Server actions use
  `useActionState` so validation errors and typed text survive a failed
  submit.
- Uploading a replacement image deletes the old Blob object.
- `next.config.ts` gets a `remotePatterns` entry for the Blob public
  hostname; `@vercel/blob` becomes a dependency.

## Error handling

- Admin actions return `{ error }` instead of throwing: bad password,
  missing required fields, duplicate slug, upload failure — form
  re-renders with entered values intact.
- Unknown slug on `/projects/[slug]` renders the existing in-page
  "not found" card rather than the framework 404, matching current UX.
- No rate-limiting/lockout on login — single-admin site, not warranted.

## Testing

No test framework currently in the repo; not introducing one for this.
Verification is manual: dev server, filter/detail pages render migrated
projects correctly in both locales; once Phase 2 lands, create/edit/
delete a project through `/admin`, confirm `/admin` is unreachable
without the session cookie, confirm uploaded images render and replace
generated covers.

## Setup the user must do (Phase 2, not doable from the coding agent)

- Attach a Vercel Blob store to the project (`BLOB_READ_WRITE_TOKEN`).
- Set `ADMIN_PASSWORD` and `SESSION_SECRET`, locally and on Vercel.
- After deploy, log into `/admin` and upload real cover + gallery images
  for the 9 migrated projects.
