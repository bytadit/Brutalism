import { Button, buttonVariants } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { projects } from "#site/contents";
import { sortProjects } from "@/lib/utils";
const PROJECT_PER_PAGE = 6;
export default function ProjectLayout() {
  const topProjects = sortProjects(
    projects.filter((project) => !project.draft)
  ).slice(0, PROJECT_PER_PAGE);
  return (
    <>
      <section className="section my-10 w-full pt-24 sm:px-10 px-16" id="projects">
        <div className="mb-10 md:mx-auto text-center md:mb-12">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-bold text-4xl md:text-5xl mb-5"
          >
            Recent Projects
          </h1>
          <p className="mb-6 font-medium text-[#522528] md:mb-8 sm:text-lg md:text-xl dark:text-gray-400">
            {
              "List of my top projects in the field of Web Development and Data Science"
            }
          </p>
        </div>
        <div className="flex w-100 justify-center gap-10 flex-wrap">
          {topProjects?.length > 0 ? (
            topProjects.map((post: any) => {
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
              } = post;
              return (
                <ProjectCard
                  detailLink={slug}
                  className="sm:max-w-lg"
                  key={slug}
                  title={title}
                  bgImage={bgImage || ""}
                  description={description}
                  slug={slug}
                  date={date}
                  category={category}
                  tags={tags || []} 
                  content={""}
                  repoLink={repoLink}
                  notebookLink={notebookLink}
                  siteLink={siteLink}
                />
              );
            })
          ) : (
            <>
              <p>No Project Made</p>
            </>
          )}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "default", bgColor: "theme" })}
          >
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
