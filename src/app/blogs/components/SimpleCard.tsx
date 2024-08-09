import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxBookmark } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { IconButton, iconVariants } from "@/components/ui/iconButton";

import {
  Card,
  CardImage,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SimpleCard({
  imgSrc,
  title,
  desc,
  content,
  ...props
}: {
  imgSrc: string;
  title: string;
  desc: string;
  content: string;
}) {
  return (
    <>
      <div className="border-2 p-2.5 h-full border-[#292729] ease-out hover:translate-y-1 transition-all hover:shadow-[4px_4px_0px_rgba(41,41,39,1)] bg-white">
        {/* <CardImage src={imgSrc} alt="thumbnail" /> */}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Link
              href="#"
              className={iconVariants({ shape: "rfull", bgColor: "warning" })}
            >
              <RxBookmark />
            </Link>
            <Link
              href="#"
              className={iconVariants({ shape: "rfull", bgColor: "default" })}
            >
              <RxGithubLogo className="text-white" />
            </Link>
          </div>
          <Link
            href="#"
            className={buttonVariants({
              variant: "revDefault",
              bgColor: "primary",
            })}
          >
            Read More
          </Link>
        </CardFooter>
      </div>
    </>
  );
}
