// --- START OF FILE ./components/ui/Section.tsx ---

import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string; // Classname for the <section> element (outer wrapper)
  containerClassName?: string; // Classname for the inner container <div>
  children: React.ReactNode;
  // fullHeight prop is removed - default is now full height behavior
}

/**
 * A reusable Section component wrapper, defaulting to full viewport height
 * with vertical content centering and standard container padding.
 * Applies scroll-snap alignment.
 */
export function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full relative scroll-snap-align-start", // Default full height setup:
        "min-h-screen flex flex-col justify-center py-16 md:py-20", // Ensures content fits and centers, includes padding
        className // Allow overrides
      )}
      {...props}
    >
      {/* Inner container for max-width and horizontal padding */}
      <div className={cn(
        "container mx-auto px-4 md:px-6 w-full", // Standard container behavior
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}
// --- END OF FILE ./components/ui/Section.tsx ---