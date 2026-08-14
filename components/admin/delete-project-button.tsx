"use client";

import { deleteProject } from "@/app/admin/projects/actions";

export function DeleteProjectButton({ slug }: { slug: string }) {
  return (
    <form
      action={deleteProject.bind(null, slug)}
      onSubmit={(e) => {
        if (!confirm("Delete this project? This can't be undone.")) {
          e.preventDefault();
        }
      }}
      className="inline"
    >
      <button type="submit" className="text-red-500 transition-colors hover:text-red-400">
        Delete
      </button>
    </form>
  );
}
