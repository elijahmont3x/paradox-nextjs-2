// --- START OF FILE components/sections/TheAntifragileEdge.tsx ---
"use client";

import React from "react"; // Import React
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TrendingDown, Activity, TrendingUp, ShieldX, ShieldCheck, Zap, BookOpen, BarChartHorizontalIcon, AlertTriangle, Scale, GitCommitHorizontal } from "lucide-react"; // Relevant icons
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Enhanced Concept Data
const concepts = [
    {
        value: "fragile",
        label: "Fragile",
        icon: ShieldX,
        colorTheme: "destructive",
        summary: "Breaks Under Pressure",
        definition: "Systems harmed or destroyed by volatility, errors, and randomness. They require predictability and stable conditions to function.",
        characteristics: ["Degrades with Stress", "Fears Volatility", "Needs Stability", "Vulnerable to Shocks"],
        cryptoExample: "Over-leveraged positions, meme coins with no utility or defense, protocols lacking security audits.",
        responseToStress: { label: "Weakens / Breaks", icon: TrendingDown },
        metaphor: "Glass Vase",
        talebQuote: '"The fragile wants tranquility." - Nassim Taleb',
        visualPrompt: "AI Prompt: Simple line graph showing a stable line sharply dropping and shattering upon encountering a 'stress event' zone. Use red/destructive theme colors, representing failure. Research: Prospect Theory (Loss Aversion framing)."
    },
    {
        value: "resilient",
        label: "Resilient",
        icon: ShieldCheck,
        colorTheme: "amber", // Using amber for 'warning'/'caution' rather than pure good/bad
        summary: "Withstands & Recovers",
        definition: "Systems that resist shocks and return to their original state after disturbance. They endure stress but do not gain from it.",
        characteristics: ["Tolerates Shocks", "Returns to Baseline", "Static Response", "Focuses on Stability"],
        cryptoExample: "Basic tokens with only locked LP, stablecoins maintaining peg (ideally), protocols with fixed buyback rates.",
        responseToStress: { label: "Recovers to Original State", icon: Activity },
        metaphor: "Steel Beam",
        talebQuote: '"The robust stays the same." - Nassim Taleb',
        visualPrompt: "AI Prompt: Simple line graph showing a stable line dipping during a 'stress event' zone, then recovering *back* to the original level. Use amber/yellow theme colors, representing endurance without improvement. Research: Mental Models (Showing baseline return)."
    },
    {
        value: "antifragile",
        label: "Antifragile ($ROACH)",
        icon: Zap,
        colorTheme: "primary",
        summary: "Strengthens from Stress",
        definition: "$ROACH's Core Principle: Systems that **benefit** from shocks, volatility, randomness, and stressors. They use disorder to improve and become more robust.",
        characteristics: ["Gains from Volatility", "Improves with Stressors", "Leverages Disorder", "$ROACH Dynamic 5-Tier System"],
        cryptoExample: "$ROACH's adaptive tax/reflection system converts sell pressure into increased holder rewards and potential price floor support.",
        responseToStress: { label: "Improves & Strengthens", icon: TrendingUp },
        metaphor: "Immune System (Adapts)",
        talebQuote: '"The antifragile gets better." - Nassim Taleb',
         visualPrompt: "AI Prompt: Simple line graph showing a stable line dipping during a 'stress event', then rising *above* its original level, signifying improvement. Use primary/green theme colors. Reinforce the core value prop. Research: Dual-Coding Theory (Visual + Text Reinforcement)."
    },
];

export function TheAntifragileEdge() {

  return (
    <Section
      id="the-antifragile-edge" // Unique ID for this section
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/5 to-background"
    >
      <SectionHeader
        title="Beyond Survival: The Antifragile Advantage"
        description="Typical crypto assets break (Fragile) or merely withstand (Resilient) market shocks. $ROACH is fundamentally different – engineered to *gain strength* from volatility."
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1.5"/> Core Concept Explained</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <Card className="shadow-xl overflow-hidden border border-border/10 dark:border-border/20">
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1.5 h-auto bg-muted dark:bg-background/40 gap-1.5">
                 {concepts.map((concept) => (
                    <TabsTrigger
                        key={concept.value}
                        value={concept.value}
                         className={cn(
                           "py-2.5 sm:py-3 data-[state=active]:shadow-md text-xs sm:text-sm flex-col sm:flex-row items-center justify-center h-auto gap-1.5 font-medium transition-colors duration-200 rounded-md border border-transparent", // Base styles
                           "focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", // Focus
                           "data-[state=active]:bg-card data-[state=active]:border-border/50 dark:data-[state=active]:border-border/30 data-[state=active]:font-semibold", // Active base
                           concept.colorTheme === 'destructive' && "data-[state=active]:text-destructive hover:bg-destructive/5 hover:text-destructive",
                           concept.colorTheme === 'amber' && "data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400 hover:bg-amber-500/5 hover:text-amber-600",
                           concept.colorTheme === 'primary' && "data-[state=active]:text-primary hover:bg-primary/5 hover:text-primary",
                           "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-accent/50 data-[state=inactive]:hover:text-foreground/80" // Inactive state
                         )}
                     >
                        <concept.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> {concept.label}
                     </TabsTrigger>
                 ))}
              </TabsList>

              {/* Tab Content Area */}
              <div className="p-6 md:p-8 lg:p-10 min-h-[520px] flex items-center justify-center bg-card relative overflow-hidden">
                 {/* Subtle background icon hinting at the concept */}
                 <AnimatePresence mode="wait">
                     {concepts.map((concept) => (
                        <TabsContent key={concept.value} value={concept.value} className="w-full mt-0">
                             <motion.div
                                key={concept.value} // Add key for AnimatePresence
                                 initial={{ opacity: 0, scale: 0.97 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.97 }}
                                 transition={{ duration: 0.3, ease: "easeInOut" }}
                             >
                                {/* Add the corresponding background icon */}
                                 <concept.icon className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 opacity-[0.03] pointer-events-none", `text-${concept.colorTheme === 'amber' ? 'yellow-500' : concept.colorTheme}`)} />
                                <ConceptContent {...concept} />
                             </motion.div>
                        </TabsContent>
                    ))}
                  </AnimatePresence>
              </div>
            </Tabs>
        </Card>
      </motion.div>

       <motion.div
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
           className="mt-10 text-center max-w-2xl mx-auto"
        >
         <p className="text-sm text-muted-foreground italic">
             Concept derived from <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline focus-visible:ring-1 focus-visible:ring-ring rounded-sm focus-visible:outline-none">Nassim Nicholas Taleb's influential work</Link>. $ROACH translates this principle into practical, adaptive tokenomics on the Solana blockchain.
          </p>
       </motion.div>
    </Section>
  );
}


// --- ConceptContent Sub-Component (Enhanced Structure & Styling) ---
interface ConceptContentProps {
  icon: React.ElementType;
  label: string; // Changed from title to match the concepts array
  summary: string;
  definition: string;
  characteristics: string[];
  cryptoExample: string;
  responseToStress: { label: string; icon: React.ElementType };
  colorTheme: 'destructive' | 'amber' | 'primary';
  visualPrompt: string;
  metaphor: string;
  talebQuote: string;
}

function ConceptContent({
  icon: Icon, label, summary, definition, characteristics, cryptoExample, responseToStress, colorTheme, visualPrompt, metaphor, talebQuote
}: ConceptContentProps) {

    const themes = {
      destructive: { text: "text-destructive", border: "border-destructive/40", bg: "bg-destructive/5", icon: AlertTriangle, iconColor: "text-destructive", responseBadge: "bg-destructive/10 text-destructive border-destructive/20", characteristicIconColor: "text-destructive/70" },
      amber: { text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/40", bg: "bg-amber-500/5", icon: ShieldCheck, iconColor: "text-amber-500", responseBadge: "bg-amber-500/10 text-amber-600 border-amber-500/20", characteristicIconColor: "text-amber-600/70" },
      primary: { text: "text-primary", border: "border-primary/40", bg: "bg-primary/5", icon: Zap, iconColor: "text-primary", responseBadge: "bg-primary/10 text-primary border-primary/20", characteristicIconColor: "text-primary/70" },
    };
    const theme = themes[colorTheme];
    const CharacteristicIcon = theme.icon; // Use concept icon for characteristics too
    const ResponseIcon = responseToStress.icon;

    return (
      <div className="text-center flex flex-col items-center w-full max-w-4xl mx-auto relative z-10"> {/* Ensure content is above potential background icon */}
        {/* Icon & Title Area */}
        <div className={cn("p-2.5 rounded-full mb-4 inline-block", theme.bg)}>
          <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <h3 className={cn("text-2xl sm:text-3xl font-bold mb-2", theme.text)}>{label}</h3>
        <Badge variant="secondary" className={cn("mb-6 text-sm font-medium px-4 py-1", theme.responseBadge, "border")}> {summary} </Badge>

        {/* Definition */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">{definition}</p>

        {/* Details Grid: Characteristics & Response */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full mb-8 text-left">
           {/* Characteristics */}
          <div className={cn("p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Key Traits:</h4>
            <ul className="space-y-2 flex-1">
                {characteristics.map((char, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                   <CharacteristicIcon className={cn("h-4 w-4 shrink-0", theme.characteristicIconColor)} />
                   <span>{char}</span>
                  </li>
                ))}
             </ul>
            {/* Metaphor */}
             <p className="text-xs italic text-muted-foreground mt-4 pt-2 border-t border-border/20">Analogy: {metaphor}</p>
          </div>

           {/* Response & Example */}
          <div className={cn("p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Response to Stress:</h4>
              <Badge variant="outline" className={cn("inline-flex w-fit items-center gap-1.5 mb-4 text-xs font-medium", theme.responseBadge, theme.border)}>
                 <ResponseIcon className="h-3.5 w-3.5" /> {responseToStress.label}
               </Badge>

              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 mt-auto pt-3 border-t border-border/20">Crypto Parallel:</h4>
              <p className="text-sm text-foreground/90 flex-1">{cryptoExample}</p>
              {/* Quote */}
               <blockquote className="text-xs italic text-muted-foreground mt-4 pt-2 border-t border-border/20">{talebQuote}</blockquote>
          </div>

          {/* Visual Placeholder Area */}
          <div className={cn("relative aspect-square bg-gradient-to-br border border-dashed rounded-lg p-3 flex items-center justify-center", theme.border, theme.bg)}>
              <p className="text-xs text-muted-foreground/70 italic text-center">
                   {visualPrompt}
              </p>
          </div>
        </div>
      </div>
    );
}


// --- END OF FILE components/sections/TheAntifragileEdge.tsx ---