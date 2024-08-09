"use client";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxBookmark } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { IconButton, iconVariants } from "@/components/ui/iconButton";
import Link from "next/link";
import { RxCalendar } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaBookOpenReader } from "react-icons/fa6";
import { readingTime, convertToSlug } from "@/lib/utils";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  Card,
  CardImage,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { useEffect } from "react";
import { Tag } from "@/components/tag";

export default function BlogCard({
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

  return (
    <Card
      id={`blog-card-${slug}`}
      className="relative"
      // onClick={() => router.push(`${slug}`)}
    >
      <CardImage src={bgImage} alt="thumbnail" />
      <div className="flex flex-col h-1/2 justify-between">
        <CardHeader className="h-auto">
          <div className="flex gap-2 absolute top-0 right-0 m-2">
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
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <span className="gap-2 flex flex-row items-center">
                <RxCalendar className="h-3 w-3" />
                <time className="font-bold text-xs" dateTime={date}>
                  {formatDate(date)}
                </time>
              </span>
              <span className="gap-2 flex flex-row items-center">
                <FaBookOpenReader className="h-3 w-3" />
                <time className="font-bold text-xs" dateTime={date}>
                  {readingTime(body)} Min Read
                </time>
              </span>
            </div>
            <div className="tags">
              <div className="flex flex-row gap-1 flex-wrap">
                {tags?.map((tag) => (
                  <Tag type="blogs" tag={tag} key={tag} />
                ))}
              </div>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          {/* <span className="gap-2 flex flex-row items-center">
            <RxCalendar className="h-4 w-4" />
            <time className="font-bold text-sm" dateTime={date}>
              {formatDate(date)}
            </time>
          </span> */}
          <span></span>
          <span className="gap-2 flex flex-row items-center">
            <Link
              href={slug}
              style={{ width: "100%" }}
              className="flex flex-row items-center gap-1 text-sm font-semibold"
            >
              Read More
              <FaLongArrowAltRight className="text-black" />
            </Link>
          </span>
        </CardFooter>
      </div>
    </Card>
  );
}
