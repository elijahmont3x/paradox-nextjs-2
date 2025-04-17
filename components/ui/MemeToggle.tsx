// --- START OF FILE ./components/ui/MemeToggle.tsx ---

"use client";

import { Button } from "@/components/ui/button";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { Bug, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MemeToggleProps extends React.ComponentPropsWithoutRef<typeof Button> {
  showLabel?: boolean; // Prop to control label visibility (default: false)
  // size prop is inherited from Button props
}

export function MemeToggle({ className, showLabel = false, size = "icon", ...props }: MemeToggleProps) {
  const { memeMode, toggleMemeMode } = useMemeMode();

  const professionalIcon = <User className="h-4 w-4" />;
  const memeIcon = <Bug className="h-4 w-4" />;

  const buttonContent = memeMode ? (
    <>
      {professionalIcon}
      {showLabel && <span className="ml-1.5">Pro Mode</span>} {/* Use consistent spacing */}
    </>
  ) : (
    <>
      {memeIcon}
      {showLabel && <span className="ml-1.5">Meme Mode</span>}
    </>
  );

  const tooltipContent = memeMode ? "Switch to Professional View" : "Switch to Meme View";

  // Adjust button size if showing label and default was icon
  const adjustedSize = (showLabel && size === "icon") ? "sm" : size;

  return (
    <TooltipProvider delayDuration={200}> {/* Slightly longer delay */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline" // Keep consistent variant unless overridden
            size={adjustedSize}
            onClick={toggleMemeMode}
            className={cn(
                // Apply meme font to button text only when mode is ACTIVE
                memeMode ? "" : "font-mission tracking-wide",
                "transition-all duration-300 ease-in-out", // Smooth transition
                "hover:bg-accent/80", // Subtle hover
                // Visual cue for the *target* state on hover (i.e., what clicking will do)
                 memeMode ? "hover:border-border" : "hover:border-primary/50",
                className
            )}
            aria-label={tooltipContent}
            {...props}
          >
            {buttonContent}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center"> {/* Adjust position */}
          <p className="text-xs">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
// --- END OF FILE ./components/ui/MemeToggle.tsx ---