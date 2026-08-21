import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "gold";
}

export function Eyebrow({
  children,
  className,
  variant = "blue",
  ...props
}: EyebrowProps) {
  const variantStyles = {
    blue: "text-primary-blue bg-blue-50/90 border-blue-200/60",
    navy: "text-primary-navy bg-slate-100 border-slate-200",
    gold: "text-amber-900 bg-amber-50 border-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full border shadow-2xs w-fit",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
      {children}
    </span>
  );
}

export default Eyebrow;
