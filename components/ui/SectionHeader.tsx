import React from 'react';
import { cn } from '@/lib/utils';
import { useMemeMode } from '@/hooks/use-meme-mode'; // Import hook if needed for styling

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode; // Optional subtitle/badge
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  description,
  subtitle,
  alignment = 'center',
  className,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeaderProps) {
  const { memeMode } = useMemeMode(); // Access memeMode for potential conditional styling

  return (
    <div
      className={cn(
        "mb-10 md:mb-16 max-w-3xl", // Standard bottom margin
        alignment === 'center' && 'mx-auto text-center',
        alignment === 'right' && 'ml-auto text-right',
        alignment === 'left' && 'mr-auto text-left',
        className
      )}
      {...props}
    >
      {subtitle && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {subtitle}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4", // Standard heading sizes
          memeMode && "font-mission", // Apply meme font conditionally
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground md:text-xl", // Standard description size
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}