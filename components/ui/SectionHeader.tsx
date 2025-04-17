// --- START OF FILE ./components/ui/SectionHeader.tsx ---

import React from 'react';
import { cn } from '@/lib/utils';
import { useMemeMode } from '@/hooks/use-meme-mode';
import { Badge } from "@/components/ui/badge"; // Use Badge for subtitle

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode; // Meant for short, thematic text/badge like content
  alignment?: 'left' | 'center' | 'right';
  className?: string; // Applied to the wrapper div
  titleClassName?: string; // Applied to the h2 title
  descriptionClassName?: string; // Applied to the p description
  subtitleClassName?: string; // Applied to the subtitle div/badge
}

export function SectionHeader({
  title,
  description,
  subtitle,
  alignment = 'center', // Default to center alignment
  className,
  titleClassName,
  descriptionClassName,
  subtitleClassName,
  ...props
}: SectionHeaderProps) {
  const { memeMode } = useMemeMode(); // Access memeMode for conditional styling

  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl", // Standard bottom margin and max-width
        {
            'mx-auto text-center': alignment === 'center',
            'ml-auto text-right': alignment === 'right',
            'mr-auto text-left': alignment === 'left',
        },
        className
      )}
      {...props}
    >
      {/* Subtitle - Rendered as a Badge for emphasis */}
      {subtitle && (
        <Badge
          variant="outline"
          className={cn(
            "mb-3 inline-flex items-center gap-1.5 border-primary/30 bg-primary/5 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1", // Specific styling for subtitle badge
             memeMode && "font-mission border-dashed",
            subtitleClassName
          )}
         >
          {subtitle}
        </Badge>
      )}

      {/* Title */}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl !leading-tight mb-4", // Use !leading-tight for heading override if needed
           memeMode && "font-mission", // Apply meme font conditionally
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground md:text-xl leading-relaxed", // Standard description size with relaxed leading
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
// --- END OF FILE ./components/ui/SectionHeader.tsx ---