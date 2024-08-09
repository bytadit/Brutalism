import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { RxBookmark } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { RxCode } from "react-icons/rx";
import { SlNotebook } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconButton, iconVariants } from "@/components/ui/iconButton";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group grid max-w-full grid-cols-1 overflow-hidden border-[#292729] border-2 ease-out hover:translate-y-1 transition-all shadow-[8px_8px_0px_rgba(41,41,39,1)] hover:shadow-[0px_0px_0px_rgba(41,41,39,1)] sm:grid-cols-4 bg-white relative", // Adjust colors as needed
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
HCard.displayName = "HCard";

interface HCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  isHovered: boolean;
}
const HCardImage = React.forwardRef<HTMLDivElement, HCardImageProps>(
  ({ className, children, src, alt, isHovered, ...props }, ref) => (
    <figure
      ref={ref}
      className={cn(
        "col-span-1 first-letter:group relative max-h-60 overflow-hidden border-[#292729] border-b-2 transition-transform duration-300",
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
          "h-full w-full border-none object-cover text-gray-700 transition-transform duration-300 transform-gpu group-hover:scale-125",
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
HCardImage.displayName = "HCardImage";

const HCardHeader = React.forwardRef<
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
HCardHeader.displayName = "HCardHeader";

const HCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold tracking-tight line-clamp-3",
      className
    )}
    {...props}
  />
));
HCardTitle.displayName = "HCardTitle";

const HCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-700 line-clamp-2", className)}
    {...props}
  />
));
HCardDescription.displayName = "HCardDescription";

const HCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4", className)} // Adjust padding as needed
    {...props}
  />
));
HCardContent.displayName = "HCardContent";

interface HCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  repoLink: string;
  notebookLink: string;
  siteLink: string;
  detailLink: string;
  isHovered: boolean;
}
const HCardFooter = React.forwardRef<HTMLDivElement, HCardFooterProps>(
  (
    {
      className,
      repoLink,
      notebookLink,
      siteLink,
      detailLink,
      isHovered,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-4 flex-row gap-4",
        {
          // "flex-row": isHovered,
          // "flex-col": !isHovered,
        },
        className
      )} // Adjust padding and layout as needed
      {...props}
    >
      
      <div className="flex gap-2 justify-between">
        <TooltipProvider>
          {repoLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href={repoLink}
                  className={iconVariants({
                    variant: "revDefault",
                    shape: "default",
                    bgColor: "secondary",
                  })}
                >
                  <RxCode className="text-dark" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open Repository</p>
              </TooltipContent>
            </Tooltip>
          )}
          {notebookLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href={notebookLink}
                  className={iconVariants({
                    variant: "revDefault",
                    shape: "default",
                    bgColor: "secondary",
                  })}
                >
                  <SlNotebook className="text-dark" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open Notebook</p>
              </TooltipContent>
            </Tooltip>
          )}
          {siteLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href={siteLink}
                  className={iconVariants({
                    variant: "revDefault",
                    shape: "default",
                    bgColor: "secondary",
                  })}
                >
                  <RxOpenInNewWindow className="text-dark" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open Site</p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>
      <div className="text-right">
        <Link
          href={detailLink}
          style={{ width: "100%" }}
          className="flex flex-row text-[#522528] items-center gap-1 text-md font-semibold"
        >
          View Detail
          <FaLongArrowAltRight className="text-[#522528]" />
        </Link>
      </div>

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
HCardFooter.displayName = "HCardFooter";

export {
  HCard,
  HCardImage,
  HCardHeader,
  HCardFooter,
  HCardTitle,
  HCardDescription,
  HCardContent,
};
