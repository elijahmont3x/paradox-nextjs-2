// --- START OF FILE components/ui/Section.tsx ---
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  // New prop to disable default min-height and centering for connectors etc.
  disableDefaultHeight?: boolean;
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  disableDefaultHeight = false, // Default to applying height/centering
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full relative scroll-snap-align-start",
        // Conditionally apply height and centering
        !disableDefaultHeight && "min-h-screen flex flex-col justify-center py-16 md:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      <div className={cn(
        "container mx-auto px-4 md:px-6 w-full",
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}
// --- END OF FILE components/ui/Section.tsx ---