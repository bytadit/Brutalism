"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/mdx-component";
import SidebarTOC from "@/components/sidebar-toc";
import RelatedPage from "@/components/related-page";
import { FaShare } from "react-icons/fa";
import { readingTime, slugToTitle, convertToSlug } from "@/lib/utils";
import { FaClock } from "react-icons/fa";
import { TableOfContents } from "@/components/TableOfContent";
import { FaListUl } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Tag } from "@/components/tag";
import { Category } from "@/components/category";

// import { getHeadings } from "@/lib/get-headings";
import { FaListAlt } from "react-icons/fa";

import { ContentNode } from "@/components/TableOfContent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";

export default function BlogSingle({ post, children }: any) {
  const pathname = usePathname();
  const articleUrl = `${process.env.NEXT_PUBLIC_API_URL}${pathname}`;
  const parts = pathname.split("/").filter((part) => part !== ""); // Split the pathname by '/' and remove empty parts
  const [headings, setHeadings] = useState<ContentNode[]>([]);
  const [showToc, setShowToc] = useState(false);
  const router = useRouter();
  const handleShowToc = () => {
    setShowToc(!showToc);
  };
  useEffect(() => {
    console.log("post:", post); // Log the value of post
    if (!post || !post.slugAsParams) {
      console.error("Invalid post or missing slugAsParams:", post);
      return;
    }

    const fetchHeadings = async () => {
      try {
        const res = await fetch(`/api/getheads/blogs/${post.slugAsParams}`);
        if (!res.ok) {
          throw new Error("Failed to fetch headings");
        }
        const fetchedHeadings = await res.json();
        setHeadings(fetchedHeadings);
      } catch (error) {
        console.error("Error fetching headings:", error);
      }
    };

    fetchHeadings();
  }, [post]);

  return (
    <>
      <section className="w-full flex flex-col md:flex-col">
        <div className="breadcrumb text-left py-4 bg-[#FCF1D8] sm:px-16 px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center" key="home">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-[#522528] dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              {parts.map((part, index) => {
                const isLast = index === parts.length - 1;
                const href = `/${parts.slice(0, index + 1).join("/")}`;
                const title = slugToTitle(part);
                return (
                  <>
                    {isLast ? (
                      <li
                        key={part}
                        className={`${
                          isLast ? "active font-bold" : "font-medium"
                        }`}
                      >
                        <div className="flex items-center">
                          <svg
                            className="rtl:rotate-180 w-3 h-3 text-[#522528] mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <span className="ms-1 text-sm text-[#522528] md:ms-2 dark:text-gray-400 line-clamp-1">
                            {post.title}
                          </span>
                        </div>
                      </li>
                    ) : (
                      <li
                        key={part}
                        className={`${
                          isLast ? "active font-bold" : "font-medium"
                        }`}
                      >
                        <div className="flex items-center">
                          <svg
                            className="rtl:rotate-180 w-3 h-3 text-[#522528] mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <Link
                            href={href}
                            className="ms-1 text-sm text-[#522528] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            {title}
                          </Link>
                        </div>
                      </li>
                    )}
                  </>
                );
              })}
            </ol>
          </nav>
        </div>
        <section className="w-full border-b border-[#522528] grid grid-cols-2 items-center sm:px-16 p-4 gap-4 md:gap-10">
          <div className="border-2 border-[#522528] col-span-2 md:col-span-1">
            <Image
              src={post.bgImage}
              alt={"blog-image"}
              width={80}
              height={100}
              layout="responsive"
              className="w-full h-full object-cover"
              // fill={true}
              objectFit="cover"
              // style={{ position: "relative" }}
            />
          </div>
          <div className="text-left col-span-2 md:col-span-1">
            <h1
              // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
              className="font-bold text-3xl md:text-5xl mb-2"
            >
              {post.title}
            </h1>
            <div className="tags my-2 flex flex-row gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                {post.category && (
                  <Category
                    type="blogs"
                    current={true}
                    category={post.category}
                    key={post.category}
                    isSingle={true}
                  />
                )}
              </div>
              <div className="flex flex-row gap-1 flex-wrap">
                {post.tags?.map((tag: any) => (
                  <Tag type="blogs" tag={tag} key={tag} isSingle={true} />
                ))}
              </div>
            </div>
            <p className="font-medium text-sm text-[#522528] sm:text-lg md:text-xl dark:text-gray-400">
              {post.description ? post.description : null}
            </p>
          </div>
        </section>
        <div className="border-b border-[#522528] sm:sticky sm:top-0 blog-info justify-between flex flex-row py-3 bg-[#FCF1D8] sm:px-16 px-4 md:z-50">
          <div className="flex flex-row items-center">
            <div className="hidden md:flex flex-row justify-between gap-1 items-center sm:m-0">
              {/* <Icon
                  fill={"#522528"}
                  style={{ width: "30px", height: "30px" }}
                /> */}
              <span className="text-sm md:text-normal flex flex-col">
                <p className={`font-bold text-[#522528]`}>Bytadit</p>
              </span>
            </div>
            <div className="hidden md:block mx-4">{" | "}</div>
            <div className="flex flex-row justify-between gap-1 items-center sm:m-0">
              {/* <Icon
                  fill={"#522528"}
                  style={{ width: "30px", height: "30px" }}
                /> */}
              <span className="text-sm flex flex-col bg-[#522528] px-2 py-1">
                <p className={`font-bold text-white`}>
                  {formatDate(post.date)}
                </p>
              </span>
            </div>
            <div className="hidden md:flex mx-4">{" | "}</div>
            <div className="flex flex-row justify-between gap-1 items-center sm:m-0">
              {/* <Icon
                  fill={"#522528"}
                  style={{ width: "30px", height: "30px" }}
                /> */}
              <span className="hidden md:flex text-sm md:text-normal flex-col">
                <p className="font-bold text-[#522528] flex flex-row span-2 items-center">
                  <FaClock className="text-[#522528] mr-1" />
                  {readingTime(post.body)} Min Read
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-sm md:text-normal flex flex-row items-center gap-1">
              <p className={`font-bold text-[#522528]`}>Share</p>
              <div className="mr-4 text-[#522528]">
                <FaShare />
              </div>
            </span>
            <div className="flex flex-row justify-between gap-1 items-center sm:m-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        articleUrl
                      )}`}
                      target="_blank"
                      className="text-sm md:text-normal flex flex-col bg-[#522528] p-2"
                    >
                      <RxLinkedinLogo className="text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share to Linkedin</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        articleUrl
                      )}`}
                      target="_blank"
                      className="text-sm md:text-normal flex flex-col bg-[#522528] p-2"
                    >
                      <BsTwitterX className="text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share to Twitter/X</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        articleUrl
                      )}`}
                      target="_blank"
                      className="text-sm md:text-normal flex flex-col bg-[#522528] p-2"
                    >
                      <FaFacebook className="text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share to Facebook</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleShowToc}
                      className="hidden text-sm ml-4 md:text-normal md:flex flex-col bg-[#522528] p-2"
                    >
                      {showToc ? (
                        <FaListUl className="text-white" />
                      ) : (
                        <FaListAlt className="text-white" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {showToc
                        ? "Hide Table Of Contents"
                        : "Show Table Of Contents"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full justify-center md:px-16 px-4 bg-[#F9F5F2]">
          <article
            className={`${showToc ? "" : "mx-auto"} col-span-3 ${
              showToc ? "md:col-span-2" : "md:col-span-3"
            } w-full max-w-screen-md min-h-screen py-5 font-normal text-black prose dark:prose-invert text-justify mb-10`}
          >
            {children}
          </article>
          <aside
            className={`hidden ${showToc ? "md:block" : "hidden"} col-span-1`}
          >
            <div className="sticky top-16 flex flex-col gap-2 text-lg">
              <TableOfContents nodes={headings} />
            </div>
          </aside>
        </div>
        {/* <RelatedPage></RelatedPage> */}
      </section>
    </>
  );
}
