// --- START OF FILE ./components/ui/SectionConnector.tsx ---

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card"; // Using Card for styling
import { Section } from "./Section"; // Import Section component

interface SectionConnectorProps {
  prevSection?: string;
  summary?: React.ReactNode;
  nextConcept?: React.ReactNode;
  className?: string; // Applied to the <Section> wrapper
}

/**
 * SectionConnector Component: Visually links landing page sections with a summary/preview.
 * Uses the Section wrapper for full-height layout but constrains its own content.
 */
export function SectionConnector({
  prevSection,
  summary,
  nextConcept,
  className // Applied to the outer <Section>
}: SectionConnectorProps) {
    // Removed useMemeMode

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 }, // Slightly different initial state
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Only render if there's meaningful content
    if (!prevSection && !summary && !nextConcept) {
        return null;
    }

  return (
    // Wrap with Section for consistent full-height and snapping behavior
    <Section
       className={cn(
           "bg-gradient-to-b from-background via-muted/5 to-background", // Subtle background gradient
           "!py-10 md:!py-12 lg:!py-16", // Reduced vertical padding for connector density
           className
           )}
       aria-hidden="true" // Hide from assistive tech as it's decorative/transitional
       // containerClassName="flex items-center justify-center" // Optional: if needed to precisely center the card
    >
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-xl mx-auto" // Reduced max-width for connector card
        >
            <Card className={cn(
                 "bg-muted/50 border border-border/30 shadow-sm text-center backdrop-blur-sm", // Use muted bg, subtle border/shadow, add backdrop blur
                 "dark:bg-background/50 dark:border-border/20" // Dark mode adjustments
             )}>
                <CardContent className="p-5 md:p-6 space-y-4"> {/* Slightly increased space */}
                    {/* Summary Section */}
                    {summary && (
                         <div>
                            {prevSection && (
                               <p className="text-xs font-medium text-muted-foreground mb-1">
                                  Recap: <span className="font-semibold text-foreground/90">{prevSection}</span>
                               </p>
                             )}
                            <p className="text-base md:text-lg text-foreground">{summary}</p>
                         </div>
                     )}

                    {/* Separator */}
                    {summary && nextConcept && (
                        <div className="relative flex justify-center">
                           <div className="absolute inset-0 flex items-center" aria-hidden="true">
                              <div className="w-full border-t border-border/50"></div>
                            </div>
                            <div className="relative bg-muted/50 dark:bg-background/50 px-2">
                                <ArrowDown className="h-4 w-4 text-muted-foreground"/>
                             </div>
                         </div>
                     )}

                    {/* Next Concept Section */}
                    {nextConcept && (
                        <div className="flex flex-col items-center gap-1 text-sm">
                            <span className="font-semibold tracking-wide text-primary">Up Next:</span>
                            <span className="text-foreground/90 text-base font-medium">{nextConcept}</span>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    </Section>
  );
}
// --- END OF FILE ./components/ui/SectionConnector.tsx ---