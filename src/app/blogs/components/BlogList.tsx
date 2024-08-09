"use client";

import PostList from "@/components/ui/postlist";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getAllTags, sortTagsByCount } from "@/lib/utils";

export default function BlogList({ displayPosts, posts, children }: any) {
  return (
    <div className="flex flex-col md:col-span-2 col-span-2">
      <div className="flex flex-col gap-2 w-full">
        {displayPosts.map((post: any) => {
          const {
            title,
            description,
            bgImage,
            slug,
            date,
            body,
            category,
            tags,
          } = post;
          return (
            <PostList
              key={slug}
              title={title}
              bgImage={bgImage || ""}
              description={description}
              slug={slug}
              date={date}
              category={category}
              tags={tags}
              body={body}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
