// --- START OF FILE ./components/sections/TheAntifragileEdge.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card"; // Keep Card wrapper for consistency
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TrendingDown, Shield, TrendingUp, ShieldX, ShieldCheck, Zap, BookOpen, Activity, CheckCircle, AlertTriangle } from "lucide-react"; // Refined icon set
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function TheAntifragileEdge() {
    // Removed useMemeMode and memeMode variable

  return (
    <Section
      id="antifragile-edge" // Using a slightly more descriptive ID
      className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background"
    >
      <SectionHeader
        // Clearer title focusing on the key advantage
        title="Beyond Survival: The Antifragile Advantage"
        description="Typical crypto tokens break (fragile) or merely withstand (resilient) market stress. $ROACH is built differently – it's designed to gain strength from volatility."
        // Subtitle connecting to the conceptual origin
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1"/> Antifragility Explained</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto" // Container for the card/tabs
      >
        <Card className="shadow-xl overflow-hidden border border-border/10">
          <CardContent className="p-0"> {/* Remove CardContent padding, handled by tabs */}
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto bg-muted gap-1">
                 {/* Fragile Tab Trigger */}
                 <TabsTrigger
                  value="fragile"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                    "data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive data-[state=active]:font-semibold", // Destructive theme
                    "hover:bg-destructive/5 hover:text-destructive/90 transition-colors duration-200",
                    "focus-visible:ring-destructive/50" // Adjust focus ring color
                  )}
                >
                  <ShieldX className="h-4 w-4 shrink-0" /> Fragile
                </TabsTrigger>

                {/* Resilient Tab Trigger */}
                 <TabsTrigger
                  value="resilient"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                     "data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:font-semibold", // Amber theme
                     "hover:bg-amber-500/5 hover:text-amber-600/90 transition-colors duration-200",
                     "focus-visible:ring-amber-500/50"
                  )}
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" /> Resilient
                </TabsTrigger>

                {/* Antifragile Tab Trigger ($ROACH focus) */}
                 <TabsTrigger
                  value="antifragile"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                    "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-semibold", // Primary theme
                    "hover:bg-primary/5 hover:text-primary/90 transition-colors duration-200",
                    "focus-visible:ring-primary/50"
                  )}
                >
                  <Zap className="h-4 w-4 shrink-0" /> Antifragile ($ROACH)
                </TabsTrigger>
              </TabsList>

              {/* Tab Content Area */}
              <div className="p-6 md:p-8 min-h-[500px] flex items-center justify-center bg-gradient-to-br from-card to-muted/10"> {/* Adjusted padding and background */}
                <AnimatePresence mode="wait">
                  {/* Fragile Content */}
                  <TabsContent key="fragile" value="fragile" className="w-full">
                    <ConceptContent
                      icon={<AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-5 opacity-80" />}
                      title="Fragile Systems"
                      colorTheme="destructive"
                      summary="Break Under Pressure"
                      definition="Cannot withstand volatility or unexpected shocks. Require stable environments to survive and function."
                      characteristics={[
                        "Degrades with stress",
                        "Fears volatility",
                        "Needs predictability",
                        "Vulnerable to failure",
                      ]}
                      cryptoExample="Tokens without robust mechanics, leveraged positions without risk management, poorly secured protocols."
                      responseToStress={{
                         label: "Impacted Negatively",
                         icon: TrendingDown
                       }}
                       // Visual Placeholder Suggestion
                       visualPrompt="AI Prompt: Simple line graph showing a stable line that sharply drops and breaks upon encountering a 'stress event' zone. Use red."
                    />
                  </TabsContent>

                   {/* Resilient Content */}
                   <TabsContent key="resilient" value="resilient" className="w-full">
                     <ConceptContent
                      icon={<ShieldCheck className="h-16 w-16 text-amber-500 mx-auto mb-5 opacity-80" />}
                      title="Resilient Systems"
                      colorTheme="amber"
                      summary="Withstand & Recover"
                      definition="Resist shocks and aim to return to their original state after disturbance. They endure stress but do not improve from it."
                      characteristics={[
                        "Tolerates shocks",
                        "Returns to baseline",
                        "Unaffected by stress long-term",
                        "Focuses on stability",
                      ]}
                      cryptoExample="Basic tokens with locked LP, stablecoins maintaining their peg, protocols with static defense mechanisms (e.g., fixed buyback rate)."
                       responseToStress={{
                         label: "Returns to Normal",
                         icon: Activity // Represents returning to baseline activity
                       }}
                        visualPrompt="AI Prompt: Simple line graph showing a stable line that dips upon encountering a 'stress event' zone but recovers back to the original level afterwards. Use amber/yellow."
                    />
                  </TabsContent>

                  {/* Antifragile Content */}
                  <TabsContent key="antifragile" value="antifragile" className="w-full">
                     <ConceptContent
                      icon={<Zap className="h-16 w-16 text-primary mx-auto mb-5 opacity-80 animate-pulse" />} // Subtle pulse for energy
                      title="Antifragile Systems ($ROACH)"
                      colorTheme="primary"
                      summary="Strengthen from Stress"
                      definition="$ROACH's Core: These systems **benefit** from shocks, volatility, and disorder. They don't just survive stress – they use it to improve."
                      characteristics={[
                        "Gains from volatility",
                        "Improves with stressors",
                        "Leverages disorder",
                        "$ROACH Dynamic Tiers",
                      ]}
                      cryptoExample="$ROACH's adaptive 5-tier system automatically converts sell pressure into holder rewards & system fortification."
                       responseToStress={{
                         label: "Improves & Strengthens",
                         icon: TrendingUp // Clear indication of positive gain
                       }}
                        visualPrompt="AI Prompt: Simple line graph showing a stable line that dips upon encountering a 'stress event' zone but then rises *above* its original level afterwards, showing improvement. Use primary/green."
                    />
                  </TabsContent>
                 </AnimatePresence>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

       {/* Link to Academic Origin */}
       <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true }}
         className="mt-10 text-center max-w-2xl mx-auto text-sm text-muted-foreground"
        >
         <BookOpen className="inline-block h-4 w-4 mr-1.5 align-[-2px]"/>
         Antifragility concept from Nassim Nicholas Taleb's <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">influential work</Link>. $ROACH applies this powerful idea to tokenomics.
       </motion.div>
    </Section>
  );
}

// --- Refined ConceptContent Sub-Component ---
interface ConceptContentProps {
  icon: React.ReactNode;
  title: string;
  summary: string; // Added short summary
  definition: string;
  characteristics: string[];
  cryptoExample: string;
  responseToStress: { label: string; icon: React.ElementType }; // Added specific response field
  colorTheme: 'destructive' | 'amber' | 'primary';
  visualPrompt?: string; // Optional prompt for a diagram
}

function ConceptContent({ icon, title, summary, definition, characteristics, cryptoExample, responseToStress, colorTheme, visualPrompt }: ConceptContentProps) {

  const themes = {
    destructive: { text: "text-destructive", border: "border-destructive/50", bg: "bg-destructive/5", icon: ShieldX, iconColor: "text-destructive", responseBadge: "bg-destructive/10 text-destructive border-destructive/20" },
    amber: { text: "text-amber-600", border: "border-amber-500/50", bg: "bg-amber-500/5", icon: ShieldCheck, iconColor: "text-amber-500", responseBadge: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    primary: { text: "text-primary", border: "border-primary/50", bg: "bg-primary/5", icon: Zap, iconColor: "text-primary", responseBadge: "bg-primary/10 text-primary border-primary/20" },
  };
  const theme = themes[colorTheme];
  const TraitIcon = theme.icon; // Icon for characteristics list
  const ResponseIcon = responseToStress.icon;

  const contentVariants = {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: 'easeIn' } }
  };


  return (
    <motion.div
      variants={contentVariants} // Use variants here
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-center flex flex-col items-center w-full max-w-3xl mx-auto" // Wider max-width
    >
      {icon}
      <h3 className={cn("text-3xl font-bold mb-2", theme.text)}>{title}</h3>
      {/* Summary Badge */}
       <Badge variant="secondary" className={cn("mb-4 text-sm font-medium", theme.responseBadge)}>
          Key Idea: {summary}
       </Badge>

      <p className={cn("text-base text-muted-foreground mb-8 leading-relaxed")}>{definition}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
        {/* Characteristics List */}
        <div className={cn("text-left p-4 rounded-lg border h-full", theme.border, theme.bg)}>
          <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-3">Characteristics:</h4>
          <ul className="space-y-1.5">
            {characteristics.map((char, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                <TraitIcon className={cn("h-4 w-4 shrink-0", theme.iconColor)} />
                {char}
              </li>
            ))}
          </ul>
        </div>

         {/* Response to Stress & Crypto Example (Combined for better flow) */}
         <div className={cn("text-left p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
             <div>
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Typical Response to Stress:</h4>
                <Badge variant="outline" className={cn("inline-flex items-center gap-1.5 mb-3", theme.responseBadge)}>
                    <ResponseIcon className="h-3.5 w-3.5"/> {responseToStress.label}
                </Badge>
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2 pt-2 border-t border-border/30">Crypto Parallel:</h4>
                <p className="text-sm text-foreground/90">{cryptoExample}</p>
             </div>

             {/* Placeholder for Optional Visual */}
             {visualPrompt && (
                 <div className={cn("mt-auto pt-4 border-t border-border/30", colorTheme === 'destructive' ? 'border-destructive/10' : colorTheme === 'amber' ? 'border-amber-500/10' : 'border-primary/10' )}>
                    <div className="aspect-video bg-muted/50 rounded border border-dashed flex items-center justify-center p-2">
                      <p className="text-xs text-muted-foreground/80 italic text-center">{visualPrompt}</p>
                    </div>
                 </div>
            )}
         </div>
      </div>


    </motion.div>
  );
}

// --- END OF FILE ./components/sections/TheAntifragileEdge.tsx ---