import NavbarLayout from "../navbar/components/NavbarLayout";
import BlogList from "./components/BlogList";
import { posts } from "#site/contents";
import {
  getAllTags,
  sortPosts,
  sortTagsByCount,
  getAllCategories,
  getPostByCategorySlug,
  convertToSlug,
  sortCategoriesByCount,
  sumValues,
} from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";
import { TagCard } from "@/components/tagCard";
import { Tag } from "@/components/tag";
import { Category } from "@/components/category";
import { CategoryCard } from "@/components/categoryCard";

const POST_PER_PAGE = 7;
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Bytadit | All Posts",
  description: "All Posts by Aditya Bagus Pratama",
  authors: [
    { name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` },
  ],
  icons: {
    icon: "/th-nobord.webp",
  },
};
export default function BlogLists({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => !post.draft));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );
  const allTags = getAllTags(posts);
  const sortedTags = sortTagsByCount(allTags);
  const allCategories = getAllCategories(posts);
  const sortedCategories = sortCategoriesByCount(allCategories);
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="w-full flex flex-col md:flex-col md:p-16 p-4">
        {displayPosts?.length > 0 ? (
          <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-10 md:mx-auto text-center md:mb-12">
              <h1 className="font-bold text-5xl my-5">
                All ({sumValues(allCategories)}) Posts
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
                        {sortedTags?.map((tag) => (
                          <Tag
                            type="blogs"
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
            <h1 className="font-bold text-5xl my-5">No Post Found !</h1>
          </div>
        )}
      </section>
    </main>
  );
}
