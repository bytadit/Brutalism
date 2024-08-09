"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxCode } from "react-icons/rx";
import { IconButton, iconVariants } from "@/components/ui/iconButton";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
import { RxCalendar } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HPostCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group grid grid-cols-1 overflow-hidden border-[#292729] border-2 ease-out transition-all sm:grid-cols-4 bg-white", // Adjust colors as needed
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
HPostCard.displayName = "HPostCard";

interface HPostCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  isHovered: boolean;
}
const HPostCardImage = React.forwardRef<HTMLDivElement, HPostCardImageProps>(
  ({ className, children, src, alt, isHovered, ...props }, ref) => (
    <figure
      ref={ref}
      className={cn(
        "col-span-1 first-letter:group relative h-full w-full overflow-hidden border-[#292729] border-b-2 transition-transform duration-300",
        {
          // "col-span-1": isHovered,
          // "col-span-2": !isHovered,
        },
        className
      )}
      {...props}
    >
      {/* <img
        src={src}
        alt={alt}
        className="h-full w-full border-none object-cover text-gray-700 transition-transform duration-300 transform-gpu group-hover:scale-125"
      /> */}
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        objectFit="cover"
        quality={100}
        className={cn(
          "hidden md:block h-full w-full border-none object-cover text-gray-700 transition-transform duration-300 transform-gpu group-hover:scale-125",
          className
        )}
        style={{
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "transparent",
        }}
        {...props}
        // fill={true}
        // style={{ position: "relative" }}
      />
    </figure>
  )
);
HPostCardImage.displayName = "HPostCardImage";

const HPostCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col justify-between p-4 leading-normal space-y-1.5",
      className
    )}
    {...props}
  />
));
HPostCardHeader.displayName = "HPostCardHeader";

const HPostCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold tracking-tight line-clamp-3", className)}
    {...props}
  />
));
HPostCardTitle.displayName = "HPostCardTitle";

const HPostCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600 line-clamp-2", className)}
    {...props}
  />
));
HPostCardDescription.displayName = "HPostCardDescription";

const HPostCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4", className)} // Adjust padding as needed
    {...props}
  />
));
HPostCardContent.displayName = "HPostCardContent";

interface HPostCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  isHovered: boolean;
  date: string;
  detailLink: string;
}
const HPostCardFooter = React.forwardRef<HTMLDivElement, HPostCardFooterProps>(
  ({ className, date, detailLink, isHovered, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-4 flex-row gap-2",
        {
          // "flex-row": isHovered,
          // "flex-col": !isHovered,
        },
        className
      )} // Adjust padding and layout as needed
      {...props}
    >
      <span className="gap-2 flex flex-row items-center">
        <RxCalendar className="h-4 w-4" />
        <time className="font-bold text-sm" dateTime={date}>
          {formatDate(date)}
        </time>
      </span>
      <span className="gap-2 flex flex-row items-center">
        <Link
          href={detailLink}
          style={{ width: "100%" }}
          className="flex flex-row items-center gap-1 text-sm font-semibold"
        >
          Read More
          <FaLongArrowAltRight className="text-black" />
        </Link>
      </span>
      {/* {isHovered ? (
        <Link
          href={detailLink}
          className={buttonVariants({
            variant: "default",
            size: "lg",
            bgColor: "primary",
          })}
        >
          Detail
        </Link>
      ) : (
        ""
      )} */}
    </div>
  )
);
HPostCardFooter.displayName = "HPostCardFooter";

export {
  HPostCard,
  HPostCardImage,
  HPostCardHeader,
  HPostCardFooter,
  HPostCardTitle,
  HPostCardDescription,
  HPostCardContent,
};
