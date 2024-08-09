import { projects } from "#site/contents";
import { Category } from "@/components/category";
import { CategoryCard } from "@/components/categoryCard";
import { Tag } from "@/components/tag";
import { TagCard } from "@/components/tagCard";
import { slug } from "github-slugger";
import {
  getAllProjectCategories,
  getProjectByCategorySlug,
  sortCategoriesByCount,
  getAllProjectTags,
  getProjectByTagSlug,
  sortTagsByCount,
  slugToTitle,
  sortProjects,
} from "@/lib/utils";
import ProjectList from "../../components/ProjectList";
import NavbarLayout from "@/app/navbar/components/NavbarLayout";
import { QueryPagination } from "@/components/query-pagination";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    tag: string;
  };
  searchParams: {
    page?: string;
  };
}
// interface TagPageProps {
//     params: {
//       tag: string;
//     };
//     searchParams: {
//       page?: string;
//     };
//   }
const PROJECT_PER_PAGE = 7;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = params;
  return {
    title: `${slugToTitle(category)} Projects`,
    description: `Bytadit | Projects on the category of : ${slugToTitle(
      category
    )}`,
  };
}

export const generateStaticParams = () => {
  const categories = getAllProjectCategories(projects);
  const tags = getAllProjectTags(projects);
  const paths = Object.keys(categories).map((category) => ({
    category: slug(category),
  }));
  return paths;
};

export default function CategoryPage({ params, searchParams }: PageProps) {
  const { category, tag } = params;

  const sortedProjects = getProjectByCategorySlug(projects, category);
  const allCategories = getAllProjectCategories(projects);
  const sortedCategories = sortCategoriesByCount(allCategories);
  const allTags = getAllProjectTags(projects);
  const sortedTags = sortTagsByCount(allTags);

  const currentPage = Number(searchParams?.page) || 1;
  // const sortedPosts = sortPosts(posts.filter((post) => !post.draft));
  const totalPages = Math.ceil(sortedProjects.length / PROJECT_PER_PAGE);
  const displayProjects = sortedProjects.slice(
    PROJECT_PER_PAGE * (currentPage - 1),
    PROJECT_PER_PAGE * currentPage
  );
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="w-full flex flex-col md:flex-col md:p-16 p-4">
        <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
          <div className="mb-10 md:mx-auto text-center md:mb-12">
            <h1 className="font-bold text-5xl my-5">
              All {slugToTitle(category)} Projects
            </h1>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-10">
            <ProjectList displayProjects={displayProjects} projects={projects}>
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
                      {sortedCategories?.map((c) => (
                        <Category
                          isSingle={true}
                          type="projects"
                          key={c}
                          category={c}
                          current={slug(c) === category ? true : false}
                          count={allCategories[c]}
                        ></Category>
                      ))}
                    </ul>
                  </div>
                </CategoryCard>
                <TagCard>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl mb-3">Tags</h1>
                    <ul className="flex flex-row gap-2 flex-wrap">
                      {sortedTags?.map((t) => (
                        <Tag
                          isSingle={true}
                          type="projects"
                          key={t}
                          tag={t}
                          current={false}
                          count={allTags[t]}
                        ></Tag>
                      ))}
                    </ul>
                  </div>
                </TagCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
