import { ProjectsGrid } from "@/components/work/projects-grid";
import { getProjects } from "@/lib/content/store";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsGrid projects={projects} />;
}
