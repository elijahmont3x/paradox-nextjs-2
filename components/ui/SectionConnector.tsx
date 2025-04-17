"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Use Card for structure
import { useMemeMode } from "@/hooks/use-meme-mode";
import { Section } from "./Section";

interface SectionConnectorProps {
  prevSection?: string;
  summary?: React.ReactNode;
  nextConcept?: React.ReactNode;
  className?: string;
  // Add onRequestMissionBrief if that feature is kept
}

/**
 * SectionConnector Component - Redesigned for better flow indication.
 */
export function SectionConnector({
  prevSection,
  summary,
  nextConcept,
  className
}: SectionConnectorProps) {
    const { memeMode } = useMemeMode();

  return (
    <Section className={cn("", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <Card className={cn(
            "bg-gradient-to-br from-muted/50 to-background border-border/50 shadow-sm",
            memeMode && "border-dashed border-primary/30 transform rotate-[-0.3deg]"
        )}>
          <CardContent className="p-5 md:p-6">
            {prevSection && (
              <p className="text-xs text-muted-foreground mb-2">
                {memeMode ? `Previously on $ROACH:` : `Following:`} <span className="font-medium text-foreground">{prevSection}</span>
              </p>
            )}

            {summary && (
              <p className="text-base mb-3 font-medium">{summary}</p>
            )}

            {nextConcept && (
              <div className="flex items-center gap-2 text-sm text-primary">
                <ArrowDown className="h-4 w-4 shrink-0"/>
                <span className={cn("font-semibold", memeMode && "font-mission")}>
                  {memeMode ? `Next Mission:` : `Up Next:`}
                </span>
                <span className="text-foreground/90">{nextConcept}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}