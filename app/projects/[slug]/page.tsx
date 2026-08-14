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
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;
  const next = index >= 0 ? projects[(index + 1) % projects.length] : undefined;

  return <ProjectDetail project={project} next={next} />;
}
