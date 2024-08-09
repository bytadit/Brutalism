import { Button, buttonVariants } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { posts } from "#site/contents";
import { sortPosts } from "@/lib/utils";
const POST_PER_PAGE = 4;
export default function BlogLayout() {
  const topPosts = sortPosts(posts.filter((post) => !post.draft)).slice(
    0,
    POST_PER_PAGE
  );
  return (
    <>
      <section className="section my-10 w-full pt-24 sm:px-16 px-16" id="blogs">
        <div className="mb-10 md:mx-auto text-center md:mb-12">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-bold text-4xl md:text-5xl mb-5"
          >
            Latest Posts
          </h1>
          <p className="mb-6 font-medium text-[#522528] md:mb-8 sm:text-lg md:text-xl dark:text-gray-400">
            {"See my journey in mastering Web Development and Data Science"}
          </p>
        </div>
        <div className="grid gap-10 row-gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {topPosts?.length > 0 ? (
            topPosts.map((post: any) => {
              const {
                title,
                description,
                bgImage,
                slug,
                onclick,
                date,
                category,
                tags,
                body
              } = post;
              return (
                <BlogCard
                  key={slug}
                  title={title}
                  bgImage={bgImage || ""}
                  description={description}
                  slug={slug}
                  date={date}
                  category={category}
                  tags={tags || []}
                  body={body} 
                />
              );
            })
          ) : (
            <>
              <p>No Post Found</p>
            </>
          )}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blogs"
            className={buttonVariants({ variant: "default", bgColor: "theme" })}
          >
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
