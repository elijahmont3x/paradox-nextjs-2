// --- START OF FILE ./components/ui/CockroachMascot.tsx ---

import React from 'react';
import { cn } from '@/lib/utils';
import { Bug } from 'lucide-react'; // Using Lucide Bug as a placeholder

interface CockroachMascotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // Added 'xs' size
  className?: string;
  // Potential state prop if complex SVG/image with states is added later
  // state?: 'normal' | 'strengthening' | 'strong' | 'powered';
}

export function CockroachMascot({ size = 'md', className }: CockroachMascotProps) {
  const sizeClasses = {
    xs: 'h-5 w-5', // Extra small for inline use (e.g., buttons, badges)
    sm: 'h-8 w-8', // Small, good for header logo
    md: 'h-12 w-12', // Medium
    lg: 'h-20 w-20', // Large
    xl: 'h-28 w-28', // Extra Large for hero/emphasis
  };

  return (
    // Using div allows applying text color and size classes easily
    // Set text-primary as default color, can be overridden via className
    <div className={cn(
        "inline-block text-primary", // Default color
         sizeClasses[size],
         className
    )}>
      {/* --- PLACEHOLDER ICON --- */}
      {/* Replace this with your actual SVG component or Image tag */}
      <Bug className="h-full w-full" />
      {/*
        Image Generation Prompt (for AI Art tool like Midjourney):
        "Flat design, stylized cockroach mascot icon, suitable for a modern tech/crypto brand ($ROACH). Minimalist, geometric, resilient posture. Use primarily `currentColor` for main body fill so color can be controlled by CSS parent text color (e.g., text-primary). Add subtle secondary color accents (e.g., a specific hex like #FFD700 for small antenna highlights) that DON'T use currentColor. Square aspect ratio. Vector style. --ar 1:1 --style raw"

        -> If using an <Image> tag:
           import Image from 'next/image';
           <Image src="/path/to/roach-mascot.svg" alt="$ROACH Mascot" width={112} height={112} className="h-full w-full" />
           (Adjust width/height based on the 'xl' size, or pass size props)

        -> If using an SVG Component:
           import RoachSvg from '@/components/ui/RoachSvg'; // Example import
           <RoachSvg className="h-full w-full" /> // Pass className to potentially style parts of SVG via CSS
      */}
      {/* --- END OF PLACEHOLDER --- */}
    </div>
  );
}
// --- END OF FILE ./components/ui/CockroachMascot.tsx ---