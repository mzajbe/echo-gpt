import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-slate-50 shadow-2xs hover:bg-slate-800",
        secondary:
          "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200/80",
        destructive:
          "border-transparent bg-red-100 text-red-700 hover:bg-red-200",
        outline: "text-slate-700 border-slate-200 bg-white",
        indigo:
          "border-indigo-200/60 bg-indigo-50 text-indigo-700 font-medium",
        emerald:
          "border-emerald-200/60 bg-emerald-50 text-emerald-700 font-medium",
        amber:
          "border-amber-200/60 bg-amber-50 text-amber-700 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
