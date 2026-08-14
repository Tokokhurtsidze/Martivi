import Link from "next/link";
import { DeleteProjectButton } from "@/components/admin/delete-project-button";
import { getProjects } from "@/lib/content/store";

export default async function AdminDashboardPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-medium tracking-tight">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          New Project
        </Link>
      </div>

      <table className="mt-8 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted-foreground">
            <th className="py-2 font-medium">Title</th>
            <th className="py-2 font-medium">Categories</th>
            <th className="py-2 font-medium">Updated</th>
            <th className="py-2" />
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.slug} className="border-b border-border">
              <td className="py-3">{project.en.title}</td>
              <td className="py-3 text-muted-foreground">{project.categories.join(", ")}</td>
              <td className="py-3 text-muted-foreground">
                {new Date(project.updatedAt).toLocaleDateString()}
              </td>
              <td className="py-3 text-right">
                <Link href={`/admin/projects/${project.slug}/edit`} className="mr-4 hover:text-accent">
                  Edit
                </Link>
                <DeleteProjectButton slug={project.slug} />
              </td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan={4} className="py-8 text-center text-muted-foreground">
                No projects yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
