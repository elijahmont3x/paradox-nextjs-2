// --- START OF FILE ./components/ui/SectionConnector.tsx ---

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { Section } from "./Section"; // Re-import Section component

interface SectionConnectorProps {
  prevSection?: string;
  summary?: React.ReactNode;
  nextConcept?: React.ReactNode;
  className?: string; // This className will now be applied to the <Section> wrapper
}

/**
 * SectionConnector Component - Visually links landing page sections.
 * Uses the Section wrapper to ensure full-height presentation like main sections.
 */
export function SectionConnector({
  prevSection,
  summary,
  nextConcept,
  className // Applied to the <Section> element
}: SectionConnectorProps) {
    const { memeMode } = useMemeMode();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Only render if there's meaningful content
    if (!prevSection && !summary && !nextConcept) {
        return null;
    }

  return (
    // Wrap the entire connector content with the Section component
    // This will give it min-h-screen, centering, padding container etc. by default
    <Section className={cn("bg-gradient-to-b from-background via-muted/5 to-background", className)}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-2xl mx-auto" // Keep connector content constrained
      >
        <Card className={cn(
            "bg-gradient-to-br from-muted/30 to-background border border-border/30 shadow-sm text-center", // Reverted card styling (optional)
            memeMode && "border-dashed border-primary/30 transform rotate-[-0.2deg] hover:rotate-0 transition-transform"
        )}>
          <CardContent className="p-5 md:p-6 space-y-3">
            {/* Summary Section */}
            {summary && (
              <div className="border-b pb-3 mb-3 border-border/50">
                 {prevSection && (
                   <p className="text-xs text-muted-foreground mb-1">
                     {memeMode ? `Recap:` : `Previously:`} <span className="font-medium text-foreground">{prevSection}</span>
                   </p>
                 )}
                 <p className="text-base md:text-lg font-medium">{summary}</p>
              </div>
            )}

            {/* Next Concept Section */}
            {nextConcept && (
              <div className="flex flex-col items-center gap-1.5 text-sm text-primary">
                <ArrowDown className="h-5 w-5 shrink-0 animate-bounce"/>
                <span className={cn("font-semibold tracking-wide", memeMode && "font-mission")}>
                  {memeMode ? `Next Mission:` : `Up Next:`}
                </span>
                <span className="text-foreground/90 text-base font-medium">{nextConcept}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Section> // End of Section wrapper
  );
}
// --- END OF FILE ./components/ui/SectionConnector.tsx ---