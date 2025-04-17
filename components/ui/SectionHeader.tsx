// --- START OF FILE ./components/ui/SectionHeader.tsx ---

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode; // Often used for a thematic badge/category icon
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
  alignment = 'center',
  className,
  titleClassName,
  descriptionClassName,
  subtitleClassName,
  ...props
}: SectionHeaderProps) {
    // Removed useMemeMode

    return (
        <div
            className={cn(
                "mb-12 md:mb-16 max-w-3xl", // Standard margin and width constraints
                 // Alignment classes
                {
                    'mx-auto text-center': alignment === 'center',
                    'text-right ml-auto': alignment === 'right', // Ensure proper auto margin for alignment
                    'text-left mr-auto': alignment === 'left', // Ensure proper auto margin for alignment
                 },
                className
            )}
            {...props}
        >
            {/* Subtitle (Badge) */}
            {subtitle && (
                <Badge
                    variant="outline" // Subtle outline variant often works well
                    className={cn(
                         "mb-3 inline-flex items-center gap-1.5 border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1", // Theme coloring, adjusted padding/size
                        subtitleClassName
                     )}
                 >
                    {subtitle}
                </Badge>
             )}

            {/* Main Title (h2) */}
            <h2
                className={cn(
                     // Using slightly larger sizes and ensuring line height is tight for headings
                    "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl !leading-tight mb-4",
                    titleClassName
                )}
            >
                {title}
            </h2>

            {/* Description Paragraph */}
            {description && (
                <p
                    className={cn(
                         // Consistent sizing and relaxed leading for readability
                        "text-lg text-muted-foreground md:text-xl leading-relaxed",
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