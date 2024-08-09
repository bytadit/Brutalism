"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxBookmark } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { IconButton, iconVariants } from "@/components/ui/iconButton";
import Link from "next/link";
import React, { useEffect } from "react";
import { cn, convertToSlug } from "@/lib/utils";
import { useRouter } from 'next/navigation'
import { Tag } from "@/components/tag";
import { Category } from "@/components/category";

import {
  HCard,
  HCardImage,
  HCardContent,
  HCardDescription,
  HCardFooter,
  HCardHeader,
  HCardTitle,
} from "@/components/ui/horizontalCard";

export default function ProjectCard({
  bgImage,
  title,
  description,
  content,
  repoLink,
  siteLink,
  detailLink,
  notebookLink,
  slug,
  date,
  tags,
  className,
  category,
  ...props
}: {
  bgImage: string;
  title: string;
  description: string;
  content: string;
  repoLink: string;
  notebookLink: string;
  detailLink: string;
  tags: string[];
  slug: string;
  date: string;
  className: string;
  category: string;
  siteLink: string;
}) {
  const router = useRouter()
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <HCard
        id={`project-card-${slug}`}
        // onClick={() => router.push(`/${slug}`)}
        className={cn(
          "relative", // Adjust colors as needed
          className
        )}{...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HCardImage src={bgImage} alt="thumbnail" isHovered={isHovered} />
        <div
          className={cn("flex flex-col justify-between col-span-3", {
            // "col-span-2": isHovered,
            // "col-span-1": !isHovered,
          })}
        >
          <HCardHeader>
            <div className="flex gap-2 absolute top-0 left-0 m-2">
              <Link
                href={`projects/categories/${convertToSlug(category)}`}
                className={cn(
                  "",
                  buttonVariants({
                    variant: "revDefault",
                    size: "md",
                    bgColor: "secondary",
                  })
                )}
              >
                {category}
              </Link>
            </div>
            <div className="tags flex flex-row gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                {tags?.map((tag: any) => (
                  <Tag type="projects" tag={tag} key={tag} isSingle={false} />
                ))}
              </div>
            </div>
            <HCardTitle>{title}</HCardTitle>
            <HCardDescription>{description}</HCardDescription>
          </HCardHeader>
          {/* <HCardContent>
            <p>{content}</p>
          </HCardContent> */}
          <HCardFooter
            repoLink={repoLink}
            notebookLink={notebookLink}
            siteLink={siteLink}
            detailLink={detailLink}
            isHovered={isHovered}
          />
        </div>
      </HCard>
    </>
  );
}
