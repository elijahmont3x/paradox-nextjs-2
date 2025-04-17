import React from 'react';
import { cn } from '@/lib/utils';
import { Bug } from 'lucide-react'; // Using Lucide Bug as a placeholder

interface CockroachMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  // Add state props later if needed: state?: 'normal' | 'strong' | 'powered';
}

export function CockroachMascot({ size = 'md', className }: CockroachMascotProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  return (
    <div className={cn("text-primary", sizeClasses[size], className)}>
      {/* Replace with actual SVG or Image later */}
      <Bug className="h-full w-full" />
      {/*
        Placeholder for a more stylized cockroach SVG or Image component.
        Image generation prompt:
        "Stylized, slightly geometric cockroach mascot icon for a crypto project.
        Should look modern, resilient, maybe with subtle tech elements.
        Color should be adaptable via parent's text color (e.g., use currentColor)."
        Dimensions: Square aspect ratio appropriate for icon usage.
      */}
    </div>
  );
}