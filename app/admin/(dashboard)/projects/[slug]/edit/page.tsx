import Link from "next/link";
import { ProjectForm } from "@/components/admin/project-form";
import { updateProject } from "@/app/admin/projects/actions";
import { getProject } from "@/lib/content/store";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Project not found</h1>
        <Link href="/admin" className="mt-6 inline-block text-sm text-accent hover:underline">
          Back to projects
        </Link>
      </div>
    );
  }

  const action = updateProject.bind(null, project.slug);

  return (
    <div>
      <h1 className="font-display text-3xl font-medium tracking-tight">Edit Project</h1>
      <div className="mt-8">
        <ProjectForm project={project} action={action} submitLabel="Save Changes" />
      </div>
    </div>
  );
}
