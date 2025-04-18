// --- START OF FILE components/ui/skeleton.tsx ---
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted dark:bg-accent/50", className)} // Use themed colors
      {...props}
    />
  )
}

export { Skeleton }
// --- END OF FILE components/ui/skeleton.tsx ---