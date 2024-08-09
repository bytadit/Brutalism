import * as React from "react";
import { cn } from "@/lib/utils";

const TagCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group p-3 overflow-hidden border-[#292729] border-2 ease-out transition-all bg-white", // Adjust colors as needed
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TagCard.displayName = "TagCard";

export {
    TagCard
  };