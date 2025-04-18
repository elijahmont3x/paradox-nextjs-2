// --- START OF FILE components/ui/SectionHeader.tsx ---
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleClassName?: string;
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

    return (
        <div
            className={cn(
                "mb-12 md:mb-16 max-w-4xl", // Wider max-width
                {
                    'mx-auto text-center': alignment === 'center',
                    'text-right ml-auto': alignment === 'right',
                    'text-left mr-auto': alignment === 'left',
                 },
                className
            )}
            {...props}
        >
            {/* Subtitle */}
            {subtitle && (
                 <Badge
                    variant="outline"
                    className={cn(
                        "mb-3 inline-flex items-center gap-1.5 border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 shadow-sm", // Enhanced subtitle badge
                        subtitleClassName
                     )}
                 >
                     {subtitle}
                 </Badge>
             )}

            {/* Main Title */}
            <h2
                className={cn(
                    "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.8rem] !leading-tight mb-4 text-balance", // Adjusted size, text-balance
                     titleClassName
                )}
             >
                 {title}
            </h2>

            {/* Description */}
            {description && (
                <p
                    className={cn(
                        "text-lg text-muted-foreground md:text-xl lg:text-[1.18rem] leading-relaxed", // Slightly larger description
                        descriptionClassName
                    )}
                >
                     {description}
                 </p>
            )}
        </div>
    );
}
// --- END OF FILE components/ui/SectionHeader.tsx ---