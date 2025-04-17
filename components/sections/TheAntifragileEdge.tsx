// --- START OF FILE ./components/sections/TheAntifragileEdge.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Removed CardContent import, using Card directly for wrapper
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TrendingDown, Shield, TrendingUp, ShieldX, ShieldCheck, Zap, BookOpen, Activity, CheckCircle, AlertTriangle, BarChartHorizontal } from "lucide-react"; // Added BarChartHorizontal
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function TheAntifragileEdge() {

  return (
    <Section
      id="antifragile-edge"
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/10 to-background" // Increased lg padding
    >
      <SectionHeader
        title="Beyond Survival: The Antifragile Advantage"
        description="Typical crypto tokens break (fragile) or merely withstand (resilient) market stress. $ROACH is built differently – it's designed to gain strength from volatility."
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1" /> Antifragility Explained</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
         {/* AUDIT FIX: Removed wrapping CardContent with p-0 */}
         {/* Card acts only as a visual border/background container now */}
        <Card className="shadow-xl overflow-hidden border border-border/10 dark:border-border/20">
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto bg-muted dark:bg-background/30 gap-1">
                 <TabsTrigger
                    value="fragile"
                    className={cn(
                      "py-2 sm:py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row items-center justify-center h-auto gap-1.5 font-medium transition-colors duration-200 rounded-sm", // Shared styles
                      "focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", // Focus styles
                      "data-[state=active]:bg-card data-[state=active]:text-destructive data-[state=active]:font-semibold", // Active: Destructive theme
                      "hover:bg-destructive/5 hover:text-destructive/90" // Hover
                    )}
                 >
                    <ShieldX className="h-4 w-4 shrink-0" /> Fragile
                 </TabsTrigger>
                 <TabsTrigger
                    value="resilient"
                    className={cn(
                      "py-2 sm:py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row items-center justify-center h-auto gap-1.5 font-medium transition-colors duration-200 rounded-sm", // Shared styles
                      "focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", // Focus styles
                      "data-[state=active]:bg-card data-[state=active]:text-amber-600 data-[state=active]:font-semibold", // Active: Amber theme
                      "hover:bg-amber-500/5 hover:text-amber-600/90" // Hover
                    )}
                 >
                    <ShieldCheck className="h-4 w-4 shrink-0" /> Resilient
                 </TabsTrigger>
                 <TabsTrigger
                    value="antifragile"
                     className={cn(
                      "py-2 sm:py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row items-center justify-center h-auto gap-1.5 font-medium transition-colors duration-200 rounded-sm", // Shared styles
                      "focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", // Focus styles
                      "data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:font-semibold", // Active: Primary theme
                      "hover:bg-primary/5 hover:text-primary/90" // Hover
                    )}
                 >
                    <Zap className="h-4 w-4 shrink-0" /> Antifragile ($ROACH)
                 </TabsTrigger>
              </TabsList>

              {/* Tab Content Area */}
              <div className="p-6 md:p-8 lg:p-10 min-h-[480px] flex items-center justify-center bg-card"> {/* Increased padding, adjusted min-height */}
                <AnimatePresence mode="wait">
                    {/* Fragile Content */}
                    <TabsContent key="fragile" value="fragile" className="w-full mt-0"> {/* Added mt-0 */}
                      <ConceptContent
                        icon={<AlertTriangle className="h-12 w-12 sm:h-16 sm:w-16 text-destructive mx-auto mb-5 opacity-80" />} // Adjusted icon size
                        title="Fragile Systems" colorTheme="destructive" summary="Break Under Pressure"
                        definition="Cannot withstand volatility or unexpected shocks. Require stable environments to survive and function."
                        characteristics={[ "Degrades with stress", "Fears volatility", "Needs predictability", "Vulnerable to failure" ]}
                        cryptoExample="Tokens without robust mechanics, leveraged positions without risk management, poorly secured protocols."
                        responseToStress={{ label: "Impacted Negatively", icon: TrendingDown }}
                        visualPrompt="AI Prompt: Simple line graph showing a stable line that sharply drops and breaks upon encountering a 'stress event' zone. Use red accents."
                      />
                    </TabsContent>
                     {/* Resilient Content */}
                     <TabsContent key="resilient" value="resilient" className="w-full mt-0">
                       <ConceptContent
                        icon={<ShieldCheck className="h-12 w-12 sm:h-16 sm:w-16 text-amber-500 mx-auto mb-5 opacity-80" />}
                        title="Resilient Systems" colorTheme="amber" summary="Withstand & Recover"
                        definition="Resist shocks and aim to return to their original state after disturbance. They endure stress but do not improve from it."
                        characteristics={[ "Tolerates shocks", "Returns to baseline", "Static response", "Focuses on stability" ]} // Refined characteristic
                        cryptoExample="Basic tokens with locked LP, stablecoins maintaining their peg, protocols with static defense mechanisms (e.g., fixed buyback rate)."
                        responseToStress={{ label: "Returns to Normal", icon: Activity }}
                        visualPrompt="AI Prompt: Simple line graph showing a stable line that dips upon encountering a 'stress event' zone but recovers back to the original level afterwards. Use amber/yellow accents."
                      />
                    </TabsContent>
                    {/* Antifragile Content */}
                    <TabsContent key="antifragile" value="antifragile" className="w-full mt-0">
                       <ConceptContent
                        icon={<Zap className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-5 opacity-80" />} // Added animate-pulse back
                        title="Antifragile Systems ($ROACH)" colorTheme="primary" summary="Strengthen from Stress"
                        definition="$ROACH's Core: These systems **benefit** from shocks, volatility, and disorder. They don't just survive stress – they use it to improve."
                        characteristics={[ "Gains from volatility", "Improves with stressors", "Leverages disorder", "$ROACH Dynamic Tiers" ]}
                        cryptoExample="$ROACH's adaptive 5-tier system automatically converts sell pressure into holder rewards & system fortification."
                        responseToStress={{ label: "Improves & Strengthens", icon: TrendingUp }}
                         visualPrompt="AI Prompt: Simple line graph showing a stable line that dips upon encountering a 'stress event' zone but then rises *above* its original level afterwards, showing improvement. Use primary/green accents."
                       />
                     </TabsContent>
                 </AnimatePresence>
              </div>
            </Tabs>
        </Card>
      </motion.div>

       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="mt-10 text-center max-w-2xl mx-auto text-sm text-muted-foreground" >
         <BookOpen className="inline-block h-4 w-4 mr-1.5 align-[-2px]"/> Antifragility concept from Nassim Nicholas Taleb's <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">influential work</Link>. $ROACH applies this powerful idea to tokenomics.
       </motion.div>
    </Section>
  );
}

// --- Refined ConceptContent Sub-Component ---
interface ConceptContentProps { icon: React.ReactNode; title: string; summary: string; definition: string; characteristics: string[]; cryptoExample: string; responseToStress: { label: string; icon: React.ElementType }; colorTheme: 'destructive' | 'amber' | 'primary'; visualPrompt?: string; }

function ConceptContent({ icon, title, summary, definition, characteristics, cryptoExample, responseToStress, colorTheme, visualPrompt }: ConceptContentProps) {

    const themes = { // Using hex/rgb for more direct bg/border color control with opacity if needed
      destructive: { text: "text-destructive", border: "border-destructive/30", bg: "bg-destructive/5", icon: AlertTriangle, iconColor: "text-destructive", responseBadge: "bg-destructive/10 text-destructive border-destructive/20 dark:bg-destructive/20 dark:border-destructive/30" },
      amber: { text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5", icon: ShieldCheck, iconColor: "text-amber-500", responseBadge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 dark:bg-amber-500/20 dark:border-amber-500/30" },
      primary: { text: "text-primary", border: "border-primary/30", bg: "bg-primary/5", icon: BarChartHorizontal, iconColor: "text-primary", responseBadge: "bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30" }, // Using BarChartHorizontal for 'improvement' list items
    };
    const theme = themes[colorTheme];
    const TraitIcon = theme.icon;
    const ResponseIcon = responseToStress.icon;

    const contentVariants = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: 'easeIn' } } };

    return (
      <motion.div variants={contentVariants} initial="initial" animate="animate" exit="exit" className="text-center flex flex-col items-center w-full max-w-3xl mx-auto">
        {icon}
        <h3 className={cn("text-2xl sm:text-3xl font-bold mb-2", theme.text)}>{title}</h3>
        <Badge variant="secondary" className={cn("mb-5 text-sm font-medium px-3 py-1", theme.responseBadge)}> {summary} </Badge>
        <p className="text-base text-muted-foreground mb-8 leading-relaxed">{definition}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-8">
          {/* Characteristics List */}
          <div className={cn("text-left p-4 rounded-lg border h-full", theme.border, theme.bg)}>
             <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Characteristics:</h4>
             <ul className="space-y-2">
                {characteristics.map((char, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-foreground/90"> <TraitIcon className={cn("h-4 w-4 shrink-0", theme.iconColor)} /> {char} </li>
                ))}
             </ul>
          </div>
          {/* Response & Example */}
          <div className={cn("text-left p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
              <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Response to Stress:</h4>
                  <Badge variant="outline" className={cn("inline-flex items-center gap-1.5 mb-4 text-xs font-medium", theme.responseBadge)}> <ResponseIcon className="h-3.5 w-3.5" /> {responseToStress.label} </Badge>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 pt-3 border-t border-border/20 dark:border-border/10">Crypto Parallel:</h4>
                  <p className="text-sm text-foreground/90">{cryptoExample}</p>
              </div>
              {/* Visual Placeholder */}
              {visualPrompt && (
                  <div className="mt-auto pt-4"> {/* Push placeholder down */}
                     <div className="aspect-video bg-muted/30 dark:bg-muted/10 border border-dashed rounded-md flex items-center justify-center p-2">
                       <p className="text-[0.65rem] leading-snug text-muted-foreground/70 dark:text-muted-foreground/50 italic text-center">{visualPrompt}</p>
                     </div>
                  </div>
              )}
          </div>
        </div>
      </motion.div>
    );
}

// --- END OF FILE ./components/sections/TheAntifragileEdge.tsx ---