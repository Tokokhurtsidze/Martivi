"use client";

import { useParams } from "next/navigation";
import { ProjectDetail } from "@/components/work/project-detail";

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  return <ProjectDetail slug={slug ?? ""} />;
}
