"use client";

import { Button } from "@/components/ui/button";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { Bug, User } from "lucide-react"; // Using Lucide icons
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Ensure Tooltip is added via shadcn

interface MemeToggleProps extends React.ComponentPropsWithoutRef<typeof Button> {
  showLabel?: boolean; // Prop to control label visibility
}

export function MemeToggle({ className, showLabel = false, size = "icon", ...props }: MemeToggleProps) {
  const { memeMode, toggleMemeMode } = useMemeMode();

  const buttonContent = memeMode ? (
    <>
      <User className="h-4 w-4" />
      {showLabel && <span className="ml-2">Pro Mode</span>}
    </>
  ) : (
    <>
      <Bug className="h-4 w-4" />
      {showLabel && <span className="ml-2">Meme Mode</span>}
    </>
  );

  const tooltipContent = memeMode ? "Switch to Professional Mode" : "Switch to Meme Mode";

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size={showLabel ? (size === "icon" ? "sm" : size) : "icon"} // Adjust size if label shown
            onClick={toggleMemeMode}
            className={cn(memeMode && "font-mission", className)}
            aria-label={tooltipContent}
            {...props}
          >
            {buttonContent}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}