import { posts } from "#site/contents";
import { slug } from "github-slugger";
import { Tag } from "@/components/tag";
import { TagCard } from "@/components/tagCard";
import { Category } from "@/components/category";
import { CategoryCard } from "@/components/categoryCard";
import {
  getAllCategories,
  getPostByCategorySlug,
  sortCategoriesByCount,
  getAllTags,
  slugToTitle,
  getPostByTagSlug,
  sortTagsByCount,
  sortPosts,
} from "@/lib/utils";
import BlogList from "../../components/BlogList";
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
const POST_PER_PAGE = 7;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: `${slugToTitle(tag)} Posts`,
    description: `Bytadit | Posts on the topic of : ${slugToTitle(tag)}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({
    tag: slug(tag),
  }));
  return paths;
};

export default function TagPage({ params, searchParams }: PageProps) {
  const { category, tag } = params;
  
  const sortedPosts = getPostByTagSlug(posts, tag);
  const allCategories = getAllCategories(posts);
  const sortedCategories = sortCategoriesByCount(allCategories);
  const allTags = getAllTags(posts);
  const sortedTags = sortTagsByCount(allTags);

  const currentPage = Number(searchParams?.page) || 1;
  // const sortedPosts = sortPosts(posts.filter((post) => !post.draft));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="w-full flex flex-col md:flex-col md:p-16 p-4">
        <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
          <div className="mb-10 md:mx-auto text-center md:mb-12">
            <h1 className="font-bold text-5xl my-5">
              {allTags[tag]} {slugToTitle(tag)} Posts
            </h1>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
            <BlogList displayPosts={displayPosts} posts={posts}>
              <div className="pagination my-10">
                <QueryPagination totalPages={totalPages}></QueryPagination>
              </div>
            </BlogList>
            <div className="hidden md:block md:col-span-1">
              <div className="sticky top-5 flex flex-col gap-2">
                <CategoryCard>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl mb-3">Categories</h1>
                    <ul className="flex flex-row gap-2 flex-wrap">
                      {sortedCategories?.map((category) => (
                        <Category
                        isSingle={true}
                          type="blogs"
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
                      {sortedTags?.map((t) => (
                        <Tag
                        isSingle={true}
                          type="blogs"
                          key={t}
                          tag={t}
                          current={slug(t) === tag ? true : false}
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
