import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full border-[#292729] ease-out focus:translate-y-1 transition-all shadow-[4px_4px_0px_rgba(41,41,39,1)] border-2 p-2.5 focus:outline-none focus:shadow-none focus:bg-[#fff] active:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
