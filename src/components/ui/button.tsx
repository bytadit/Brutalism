import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        outline: "bg-[#522528] border-white text-white",
        default: "border-[#292729] border-2 ease-out hover:translate-y-1 transition-all hover:shadow-none shadow-[4px_4px_0px_rgba(41,41,39,1)]",
        revDefault: "border-[#292729] border-2 ease-out hover:-translate-y-1 transition-all hover:shadow-[4px_4px_0px_rgba(41,41,39,1)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "px-1 py-0.5 text-xs",
        sm: "h-5 px-1",
        md: "h-7 px-2",
        lg: "h-9 px-16",
        icon: "h-5 w-5",
      },
      bgColor:{
        default: "bg-[#555] text-white",
        primary: "bg-[#9723C9] text-white",
        theme: "bg-[#522528] text-white",
        danger: "bg-[#EE3317] text-white",
        secondary: "bg-[#FEF7ED] text-black",
        info: "bg-[#6172FC] text-white",
        success: "bg-[#07BE05] text-white",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      bgColor: "default"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, bgColor, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, bgColor, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
