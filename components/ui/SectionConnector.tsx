// --- START OF FILE components/ui/SectionConnector.tsx ---
"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section"; // Use updated Section

interface SectionConnectorProps {
  prevSection?: string;
  summary?: React.ReactNode;
  nextConcept?: React.ReactNode;
  className?: string; // Applied to the <Section> wrapper
}

export function SectionConnector({
  prevSection,
  summary,
  nextConcept,
  className,
}: SectionConnectorProps) {

    const cardVariants = {
        hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
    };

    if (!prevSection && !summary && !nextConcept) {
        return null;
    }

  return (
    // Use the updated Section, disable its default height/padding behavior
    <Section
       disableDefaultHeight={true} // Important: Allows this section to be less tall
       className={cn(
           "bg-transparent", // Transparent background to see page gradient
           "!py-12 md:!py-16", // Custom padding for connector density
           className
           )}
       aria-hidden="true"
    >
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-lg mx-auto" // Narrower card for transition
        >
            {/* Card with backdrop blur and subtle border */}
             <Card className={cn(
                 "bg-card/50 dark:bg-card/30 border border-border/20 shadow-sm text-center backdrop-blur-sm rounded-xl",
                 "dark:border-border/30"
             )}>
                <CardContent className="p-5 md:p-6 space-y-3 md:space-y-4">
                     {/* Summary Section */}
                     {summary && (
                         <div className="text-center">
                             {prevSection && (
                               <p className="text-[11px] font-medium text-muted-foreground mb-0.5 uppercase tracking-wider">
                                  Previously: <span className="font-semibold text-foreground/80">{prevSection}</span>
                               </p>
                             )}
                             <p className="text-base md:text-lg text-foreground/95 font-medium">{summary}</p>
                         </div>
                     )}

                    {/* Separator */}
                     {summary && nextConcept && (
                        <div className="relative flex justify-center items-center my-1">
                           <div className="absolute inset-0 flex items-center" aria-hidden="true">
                              <div className="w-full border-t border-dashed border-border/40"></div>
                            </div>
                             <div className="relative bg-background/30 dark:bg-background/50 p-1.5 rounded-full border border-border/30">
                                <ArrowDown className="h-4 w-4 text-primary/80"/>
                             </div>
                         </div>
                     )}

                    {/* Next Concept Section */}
                     {nextConcept && (
                         <div className="flex flex-col items-center gap-0.5 text-sm">
                            <span className="font-semibold tracking-wide text-primary">Coming Up:</span>
                             <span className="text-foreground/95 text-base font-medium">{nextConcept}</span>
                         </div>
                    )}
                 </CardContent>
            </Card>
        </motion.div>
    </Section>
  );
}
// --- END OF FILE components/ui/SectionConnector.tsx ---