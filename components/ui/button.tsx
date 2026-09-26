import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 shadow-xs hover:bg-slate-800 active:bg-slate-950",
        destructive:
          "bg-red-500 text-white shadow-xs hover:bg-red-600 active:bg-red-700",
        outline:
          "border border-slate-200/90 bg-white shadow-2xs hover:bg-slate-50 hover:text-slate-900 active:bg-slate-100",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200/80 active:bg-slate-200",
        ghost:
          "hover:bg-slate-100/80 hover:text-slate-900 active:bg-slate-200/60",
        link: "text-slate-900 underline-offset-4 hover:underline",
        accent:
          "bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 active:bg-indigo-700",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-lg px-6 text-base",
        icon: "h-9 w-9 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-xs": "h-7 w-7 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
