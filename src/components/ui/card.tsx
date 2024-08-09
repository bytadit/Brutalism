import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-full flex flex-col flex-wrap justify-between border-[#292729] border-2 ease-out hover:translate-y-1 transition-all shadow-[8px_8px_0px_rgba(41,41,39,1)] hover:shadow-[0px_0px_0px_rgba(41,41,39,1)] bg-white", // Adjust colors as needed
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, children, src, alt, ...props }, ref) => (
    <figure
      ref={ref}
      className={cn(
        "w-full h-1/2 border-[#292729] border-b-2", 
        className
      )}
      {...props}
    >
      <Image src={src} quality={100} alt={alt} width={500} height={500} objectFit="cover" style={{ position:"relative", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent" }}/>
    </figure>
  )
);
CardImage.displayName = "CardImage";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-3", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "sm:text-md h-auto font-semibold tracking-tight line-clamp-2",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs h-auto text-gray-600 line-clamp-2", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4", className)} // Adjust padding as needed
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-4 flex-row gap-2", className)} // Adjust padding and layout as needed
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardImage,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
