import { ProjectForm } from "@/components/admin/project-form";
import { createProject } from "@/app/admin/projects/actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-medium tracking-tight">New Project</h1>
      <div className="mt-8">
        <ProjectForm action={createProject} submitLabel="Create Project" />
      </div>
    </div>
  );
}
