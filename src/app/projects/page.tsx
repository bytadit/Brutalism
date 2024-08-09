import NavbarLayout from "../navbar/components/NavbarLayout";
import ProjectList from "./components/ProjectList";
import { projects } from "#site/contents";
import { QueryPagination } from "@/components/query-pagination";
import {
  getAllProjectTags,
  sortProjects,
  sortTagsByCount,
  getAllProjectCategories,
  getProjectByCategorySlug,
  sortCategoriesByCount,
  sumValues,
  convertToSlug,
} from "@/lib/utils";
import { TagCard } from "@/components/tagCard";
import { Tag } from "@/components/tag";
import { Category } from "@/components/category";
import { CategoryCard } from "@/components/categoryCard";

const PROJECT_PER_PAGE = 7;
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
interface ProjectPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Bytadit | All Projects",
  description: "All Projects by Aditya Bagus Pratama",
  authors: [
    { name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` },
  ],
  icons: {
    icon: "/th-nobord.webp",
  },
};
export default function ProjectLists({ searchParams }: ProjectPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedProjects = sortProjects(
    projects.filter((project) => !project.draft)
  );
  const totalPages = Math.ceil(sortedProjects.length / PROJECT_PER_PAGE);
  const displayProjects = sortedProjects.slice(
    PROJECT_PER_PAGE * (currentPage - 1),
    PROJECT_PER_PAGE * currentPage
  );
  const allTags = getAllProjectTags(projects);
  const sortedTags = sortTagsByCount(allTags);
  const allCategories = getAllProjectCategories(projects);
  const sortedCategories = sortCategoriesByCount(allCategories);
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="w-full flex flex-col md:flex-col md:p-16 p-4">
        {displayProjects?.length > 0 ? (
          <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-10 md:mx-auto text-center md:mb-12">
              <h1 className="font-bold text-5xl my-5">
                All ({sumValues(allCategories)}) Projects
              </h1>
            </div>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
              <ProjectList
                displayProjects={displayProjects}
                projects={projects}
              >
                <div className="pagination my-10">
                  <QueryPagination totalPages={totalPages}></QueryPagination>
                </div>
              </ProjectList>
              <div className="hidden md:block md:col-span-1">
                <div className="sticky top-5 flex flex-col gap-2">
                  <CategoryCard>
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold text-2xl mb-3">Categories</h1>
                      <ul className="flex flex-row gap-2 flex-wrap">
                        {sortedCategories?.map((category) => (
                          <Category
                            type="projects"
                            key={category}
                            category={category}
                            current={false}
                            count={allCategories[category]}
                          ></Category>
                        ))}
                      </ul>
                    </div>
                  </CategoryCard>
                  <TagCard>
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold text-2xl mb-3">Tags</h1>
                      <ul className="flex flex-row gap-2 flex-wrap">
                        {sortedTags?.map((tag) => (
                          <Tag
                            type="projects"
                            isSingle={true}
                            key={tag}
                            tag={tag}
                            current={false}
                            count={allTags[tag]}
                          ></Tag>
                        ))}
                      </ul>
                    </div>
                  </TagCard>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:max-text-2xl md:max-w-full lg:max-w-screen-xl items-center m-auto text-center">
            <h1 className="font-bold text-5xl my-5">No Project Found !</h1>
          </div>
        )}
      </section>
    </main>
  );
}