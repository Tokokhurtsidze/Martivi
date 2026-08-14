import { ProjectDetail } from "@/components/work/project-detail";
import { getProjects } from "@/lib/content/store";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  return <ProjectDetail project={project} />;
}
