import ProjectCard from "./ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getAllTags, sortTagsByCount } from "@/lib/utils";
import Link from "next/link";

export default function ProjectList({
  displayProjects,
  projects,
  children,
}: any) {
  return (
    <>
      <div className="flex flex-col md:col-span-2 col-span-2">
        <div className="flex flex-col gap-5 w-full">
          {displayProjects.map((project: any) => {
            const {
              title,
              description,
              bgImage,
              slug,
              date,
              category,
              tags,
              repoLink,
              notebookLink,
              siteLink,
            } = project;
            return (
              <ProjectCard
                detailLink={`/${slug}`}
                className=""
                key={slug}
                title={title}
                bgImage={bgImage || ""}
                description={description}
                slug={slug}
                date={date}
                category={category}
                tags={tags}
                content={""}
                repoLink={repoLink}
                notebookLink={notebookLink}
                siteLink={siteLink}
              />
            );
          })}
        </div>
        {children}
      </div>
    </>
  );
}
