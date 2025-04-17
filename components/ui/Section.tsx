import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean; // New prop to control full-height behavior
}

export function Section({ id, className, children, fullHeight = true, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        // Apply min-height:100vh instead of padding when fullHeight is true
        fullHeight ? "min-h-screen flex flex-col justify-center" : "py-16 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      <div className={cn(
        "container mx-auto px-4 md:px-6",
        // Add padding when in full-height mode to prevent content from touching edges
        fullHeight && "py-16 md:py-24"
      )}>
        {children}
      </div>
    </section>
  );
}