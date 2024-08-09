import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full border-[#292729] focus:translate-y-1 ease-out transition-all shadow-[4px_4px_0px_rgba(41,41,39,1)] border-2 p-2.5 focus:outline-none focus:shadow-none focus:bg-[#fff] active:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
