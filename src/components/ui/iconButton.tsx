import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconVariants = cva(
  "flex items-center justify-center text-center m-0 w-10 transition-all",
  {
    variants: {
      variant: {
        default:
          "h-10 border-[#292729] border-2 p-2.5 ease-out hover:translate-y-1 transition-all hover:shadow-none shadow-[4px_4px_0px_rgba(41,41,39,1)]",
        revDefault:
          "h-10 border-[#292729] border-2 p-2.5 ease-out hover:-translate-y-1 transition-all hover:shadow-[4px_4px_0px_rgba(41,41,39,1)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      shape: {
        default: "",
        rmd: "rounded-md",
        rfull: "rounded-full",
      },
      bgColor: {
        default: "bg-[#2C2C2C] text-primary-foreground",
        primary: "bg-[#9723C9] text-primary-foreground",
        danger: "bg-[#EE3317] text-destructive-foreground",
        secondary: "bg-[#FEF7ED] text-secondary-foreground",
        info: "bg-[#6172FC] text-info-foreground",
        success: "bg-[#07BE05] text-success-foreground",
        warning: "bg-[#FDCA00] text-success-foreground",
        theme: "text-[#522528]",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
      bgColor: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, shape, bgColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconVariants({ shape, bgColor, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconVariants };
