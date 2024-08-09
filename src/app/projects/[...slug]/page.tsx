import { projects } from "#site/contents";
import { notFound } from "next/navigation";
import NavbarLayout from "../../navbar/components/NavbarLayout";
import ProjectSingle from "../components/ProjectSingle";
import { MDXContent } from "@/components/mdx-component";

import type { Metadata } from "next";
// type BlogSingleProps = { params: { slug: string[] } };

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

export const metadata: Metadata = {
  title: "",
  description: "",
  authors: [{ name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
  icons: {
    icon: "/th-nobord.webp",
  },
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return projects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);
  if (!project || project.draft) {
    notFound();
  }
  const projectTitle = project.title.split("|")[0].trim();
  metadata.title = `Project | ${projectTitle}`;
  metadata.description = project.description?.split("|")[0].trim();
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <ProjectSingle project={project}>
        <MDXContent code={project.body}></MDXContent>
      </ProjectSingle>
    </main>
  );
}
