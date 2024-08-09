"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxBookmark } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { IconButton, iconVariants } from "@/components/ui/iconButton";
import { Tag } from "@/components/tag";
import Link from "next/link";
import React, { useEffect } from "react";
import { cn, convertToSlug } from "@/lib/utils";
import { useRouter } from "next/navigation";

import {
  HPostCard,
  HPostCardImage,
  HPostCardContent,
  HPostCardDescription,
  HPostCardHeader,
  HPostCardTitle,
  HPostCardFooter,
} from "@/components/ui/horizontalPostCard";

export default function PostList({
  bgImage,
  title,
  slug,
  description,
  body,
  date,
  tags,
  category,
  ...props
}: {
  bgImage: string;
  title: string;
  description?: string;
  tags: string[];
  slug: string;
  date: string;
  category: string;
  body: string;
}) {
  const router = useRouter();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <HPostCard
        id={`post-card-${slug}`}
        // onClick={() => router.push(`${slug}`)}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HPostCardImage src={bgImage} alt="thumbnail" isHovered={isHovered} />
        <div
          className={cn("flex flex-col justify-between col-span-3", {
            // "col-span-2": isHovered,
            // "col-span-1": !isHovered,
          })}
        >
          <HPostCardHeader>
            <div className="hidden md:flex gap-2 absolute top-0 left-0 m-2">
              <Link
                href={`/blogs/categories/${convertToSlug(category)}`}
                className={buttonVariants({
                  variant: "revDefault",
                  size: "md",
                  bgColor: "secondary",
                })}
              >
                {category}
              </Link>
            </div>
            {/* <div className="flex gap-2 absolute top-0 left-0 m-2">
              <Link
                href={`categories/${convertToSlug(category)}`}
                className={cn(
                  "",
                  buttonVariants({
                    variant: "revDefault",
                    size: "sm",
                    bgColor: "secondary",
                  })
                )}
              >
                {category}
              </Link>
            </div> */}

            <HPostCardTitle>{title}</HPostCardTitle>
            <div className="tech">
              <div className="flex flex-row gap-1 flex-wrap">
                {tags?.map((tag) => (
                  <Tag type="blogs" tag={tag} key={tag} />
                ))}
              </div>
            </div>
            <HPostCardDescription>{description}</HPostCardDescription>
          </HPostCardHeader>
          {/* <HPostCardContent>
            <p>{content}</p>
          </HPostCardContent> */}
          <HPostCardFooter
            isHovered={isHovered}
            date={date}
            detailLink={"/" + slug}
          />
        </div>
      </HPostCard>
    </>
  );
}
