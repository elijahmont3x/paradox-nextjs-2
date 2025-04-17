// --- START OF FILE ./components/sections/MarketScenarios.tsx ---

"use client";

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingUp, ChevronsDown,  ShieldAlert, Shield, Activity, HelpCircle, Zap, ShieldCheck, TrendingDown } from "lucide-react"; // Include Zap, ShieldCheck
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { tierData } from '@/lib/tier-data'; // Keep tier data for reference if needed, though tier number is main thing here

// Define Scenario Data - Refining outcomes for clarity
const marketScenarios = [
  {
    id: 'stable',
    label: (memeMode: boolean) => memeMode ? "Smooth Sailing" : "Stable Market", // Adjusted meme text
    icon: Activity,
    description: "Balanced buy/sell activity, low volatility. Business as usual.",
    // $ROACH Response (Tier 2 default)
    roach: { tier: 2, priceImpact: "Stable", rewards: "Standard", holderSentiment: "Neutral 🙂", outcome: "Normal operation, standard reflections." },
    // Resilient Token Response
    resilient: { priceImpact: "Stable", rewards: "None", holderSentiment: "Neutral 🙂", outcome: "No change, static system inactive." },
    color: "gray"
  },
  {
    id: 'dip',
    label: (memeMode: boolean) => memeMode ? "Bit of FUD" : "Minor Correction", // Adjusted meme text
    icon: ChevronsDown,
    description: "Slightly increased selling pressure, minor price dip begins.",
    // $ROACH Response (Moves to Tier 3)
    roach: { tier: 3, priceImpact: "Buffered Dip", rewards: "Increased", holderSentiment: "Buying Ops 👀", outcome: "Sell tax rises, reflections increase, dip softened." },
    // Resilient Token Response
    resilient: { priceImpact: "Noticeable Dip", rewards: "None", holderSentiment: "Concerned 😟", outcome: "Price declines, static defenses offer little help." },
    color: "yellow"
  },
  {
    id: 'panic',
    label: (memeMode: boolean) => memeMode ? "SELL! SELL! SELL!" : "Significant Sell-off", // Adjusted meme text
    icon: TrendingDown,
    description: "High selling volume, significant price pressure.",
    // $ROACH Response (Moves to Tier 4)
    roach: { tier: 4, priceImpact: "Defended", rewards: "High", holderSentiment: "Reflections go BRRR 😎", outcome: "High sell tax punishes panic, rewards holders substantially." },
    // Resilient Token Response
    resilient: { priceImpact: "Sharp Drop", rewards: "None", holderSentiment: "Panicking 😨", outcome: "Price drops significantly, simple defenses insufficient." },
    color: "orange"
  },
  {
    id: 'crash',
    label: (memeMode: boolean) => memeMode ? "Apocalypse NOW" : "Market Crash Scenario", // Adjusted meme text
    icon: ShieldAlert,
    description: "Extreme panic selling, market-wide cascade likely.",
    // $ROACH Response (Moves to Tier 5)
    roach: { tier: 5, priceImpact: "Antifragile Gain*", rewards: "MAXIMUM", holderSentiment: "This is fine 🔥🗿", outcome: "*Lowest buy tax, highest sell tax & reflections actively benefit holders & ecosystem." },
    // Resilient Token Response
    resilient: { priceImpact: "Severe Damage", rewards: "None", holderSentiment: "Rekt 💀", outcome: "System takes heavy losses, survival uncertain." },
    color: "red"
  },
];

// Tailwind Tier Color Mapping (from TokenMechanics)
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; } } = {
    1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
    3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
    4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
    5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30' },
};


export function MarketScenarios() {
  const { memeMode } = useMemeMode();
  const [activeScenarioId, setActiveScenarioId] = useState(marketScenarios[0].id);

  const activeScenario = marketScenarios.find(s => s.id === activeScenarioId) || marketScenarios[0];

  // Refined Price Impact Visuals
   const getPriceVisuals = (impact: string, isRoach: boolean) => {
       switch(impact.toLowerCase()) {
           // Neutral
           case 'stable': return { text: "Stable", icon: Activity, color: "text-gray-500" };
           // Negative - Resilient baseline
           case 'noticeable dip': return { text: "Dip", icon: ChevronsDown, color: "text-yellow-600" };
           case 'sharp drop': return { text: "Sharp Drop", icon: TrendingDown, color: "text-orange-600" };
           case 'severe damage': return { text: "Severe Damage", icon: TrendingDown, color: "text-red-600" };
           // Different Outcomes for Roach
           case 'buffered dip': return { text: "Buffered", icon: ShieldCheck, color: "text-yellow-500" }; // Shows buffering
           case 'defended': return { text: "Defended", icon: ShieldCheck, color: "text-orange-500" }; // Stronger defense
           case 'antifragile gain*': return { text: "Antifragile Gain*", icon: Zap, color: "text-green-500" }; // Shows potential benefit
           default: return { text: impact, icon: HelpCircle, color: "text-muted-foreground" };
       }
   };


  // Reward Level Visuals (Map to progress bar value and color)
   const getRewardVisuals = (level: string) => {
     switch(level.toLowerCase()) {
         case 'none': return { text: "None", value: 0, color: "bg-muted" };
         case 'standard': return { text: "Standard", value: 25, color: "bg-blue-500" };
         case 'increased': return { text: "Increased", value: 50, color: "bg-yellow-500" };
         case 'high': return { text: "High", value: 75, color: "bg-orange-500" };
         case 'maximum': return { text: "MAXIMUM", value: 100, color: "bg-primary" }; // Use primary for max $ROACH reward
         default: return { text: level, value: 0, color: "bg-muted" };
     }
  };


  const contentVariants = { /* ... same as before ... */
     initial: { opacity: 0, y: 10 },
     animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
     exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <Section id="market-scenarios" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/10">
      <SectionHeader
         title={memeMode ? "$ROACH vs Sad Normie Coin™ (Market Crisis)" : "Comparative Performance: $ROACH vs Resilient"}
         description={memeMode
            ? "Simulation: Watch how $ROACH mops the floor with basic 'resilient' tokens when the FUD hits the fan."
            : "Illustrating how $ROACH's dynamic antifragile system contrasts with the behavior of typical resilient (but static) tokens under different market pressures."
         }
         subtitle={<><Activity className="inline h-4 w-4 mr-1"/> Performance Simulation</>} // Changed icon
         alignment="center"
         className="mb-16"
      />

      <Tabs value={activeScenarioId} onValueChange={setActiveScenarioId} className="max-w-6xl mx-auto">
        {/* Tabs List Styling - Matches TokenMechanics Tier Selector */}
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-10 gap-1 p-1 bg-muted rounded-lg">
          {marketScenarios.map((scenario) => {
              const colors = tierColorMap[(scenario.roach.tier || 2) as keyof typeof tierColorMap] || tierColorMap[2]; // Use default tier 2 colors if needed
               // Map scenario color name to Tailwind classes for active state
               const activeColorMapping: { [key: string]: string } = {
                  gray: "data-[state=active]:bg-gray-500/10 data-[state=active]:text-gray-600 data-[state=active]:border-gray-500/30",
                  yellow: "data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-600 data-[state=active]:border-yellow-500/30",
                  orange: "data-[state=active]:bg-orange-500/10 data-[state=active]:text-orange-600 data-[state=active]:border-orange-500/30",
                  red: "data-[state=active]:bg-red-500/10 data-[state=active]:text-red-600 data-[state=active]:border-red-500/30",
               }
               const activeClasses = activeColorMapping[scenario.color] || activeColorMapping['gray'];
              return (
                <TabsTrigger
                key={scenario.id}
                value={scenario.id}
                className={cn(
                    "flex-col items-center justify-center h-auto py-3 px-2 rounded-md text-xs sm:text-sm data-[state=active]:shadow-md transition-all duration-200 border border-transparent data-[state=active]:border", // Base styles
                    activeClasses, // Active state colors
                    `hover:bg-${scenario.color}-500/5 hover:text-${scenario.color}-600`, // Hover state colors
                    memeMode && "font-mission tracking-wider data-[state=active]:font-bold"
                )}
                >
                <scenario.icon className={cn("h-5 w-5 mb-1", `text-${scenario.color}-500`)}/>
                <span className="text-center leading-tight">{scenario.label(memeMode)}</span>
                </TabsTrigger>
             );
          })}
        </TabsList>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
            <TabsContent key={activeScenarioId} value={activeScenarioId} forceMount>
                 <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {/* Scenario Context Card */}
                    <Card className={cn("mb-8 border-l-4 shadow-sm", `border-${activeScenario.color}-500`)}>
                        <CardHeader>
                            <CardTitle className={cn("flex items-center gap-2 text-xl font-semibold", `text-${activeScenario.color}-600`, memeMode && "font-mission")}>
                                <activeScenario.icon className="h-5 w-5"/> Scenario: {activeScenario.label(memeMode)}
                            </CardTitle>
                            <CardDescription className="text-base">Market Condition: <span className="font-medium">{activeScenario.description}</span></CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"> {/* Ensure items stretch */}
                      {/* $ROACH Card */}
                      <ScenarioCard
                          title="$ROACH Response (Antifragile)"
                          memeTitle="The Chad $ROACH 👑"
                          tier={activeScenario.roach.tier}
                          priceData={getPriceVisuals(activeScenario.roach.priceImpact, true)}
                          rewardData={getRewardVisuals(activeScenario.roach.rewards)}
                          sentiment={activeScenario.roach.holderSentiment}
                          outcome={activeScenario.roach.outcome}
                          isRoach={true}
                      />

                      {/* Resilient Token Card */}
                      <ScenarioCard
                          title="Typical Resilient Token Response"
                          memeTitle="The Sad Turtle Coin 🐢"
                          priceData={getPriceVisuals(activeScenario.resilient.priceImpact, false)}
                          rewardData={getRewardVisuals(activeScenario.resilient.rewards)}
                          sentiment={activeScenario.resilient.holderSentiment}
                          outcome={activeScenario.resilient.outcome}
                          isRoach={false}
                          clarification={memeMode
                              ? "Your avg 'safe' coin. Might not die, but it's boring AF and BLEEDS on dumps."
                              : "Represents static defense tokens (e.g., fixed reflections/buybacks). Endures stress but lacks adaptive benefits."
                          }
                      />
                    </div>
                </motion.div>
           </TabsContent>
         </AnimatePresence>
      </Tabs>

      {/* Disclaimer */}
      <div className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
         *Antifragile Gain in extreme scenarios implies the ecosystem strengthens (via high reflections, deep LP additions from sell tax, attractive low buy tax) potentially benefiting long-term holders and price floor, though immediate price action depends on overall market conditions. "Resilient Token" behavior is illustrative. DYOR.
       </div>
    </Section>
  );
}


// --- ScenarioCard Sub-Component ---
interface ScenarioCardProps {
    title: string;
    memeTitle: string;
    tier?: number;
    priceData: { text: string; icon: React.ElementType; color: string };
    rewardData: { text: string; value: number; color: string };
    sentiment: string;
    outcome: string; // Added outcome field
    isRoach: boolean;
    clarification?: string;
}

function ScenarioCard({ title, memeTitle, tier, priceData, rewardData, sentiment, outcome, isRoach, clarification }: ScenarioCardProps) {
    const { memeMode } = useMemeMode();
    const cardClass = isRoach
        ? "border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 shadow-primary/10" // Use gradient/shadow for ROACH
        : "border-border bg-card"; // Standard card for Resilient
    const icon = isRoach
        ? <CockroachMascot size="xs" className="mr-1.5" />
        : <Shield className="h-4 w-4 text-muted-foreground mr-1.5"/>;

    const tierColors = tier ? tierColorMap[tier as keyof typeof tierColorMap] : null;


    return (
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}> {/* Add hover effect */}
            <Card className={cn(
                "flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300", // Ensure full height and transitions
                cardClass,
                memeMode && "border-dashed"
            )}>
                <CardHeader className="pb-3 border-b">
                    <CardTitle className={cn("text-base sm:text-lg flex items-center justify-between", memeMode && "font-mission")}>
                        <span className="flex items-center gap-1.5">
                            {icon}
                            {memeMode ? memeTitle : title}
                        </span>
                        {isRoach && tier && tierColors && (
                           <TooltipProvider>
                             <Tooltip>
                               <TooltipTrigger asChild>
                                   <Badge variant="secondary" className={cn(
                                      "text-xs px-2 py-0.5",
                                       tierColors.bg, tierColors.text, tierColors.border,
                                       memeMode && "font-mission tracking-wider"
                                    )}>
                                       Tier {tier}
                                    </Badge>
                                </TooltipTrigger>
                               <TooltipContent side="top">
                                  <p>Active operational tier under this scenario.</p>
                               </TooltipContent>
                             </Tooltip>
                           </TooltipProvider>
                        )}
                    </CardTitle>
                    {clarification && <CardDescription className="text-xs pt-1.5">{clarification}</CardDescription>}
                </CardHeader>

                <CardContent className="space-y-3 pt-4 px-4 pb-4 flex-1 flex flex-col"> {/* Use flex-1 */}
                    {/* Price Impact */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-muted-foreground">Price Impact:</span>
                        <Badge variant="outline" className={cn("flex items-center gap-1 text-xs font-semibold border", priceData.color.includes('text-') ? priceData.color.replace('text-','border-')+'/30' : '', priceData.color.includes('text-') ? priceData.color.replace('text-','bg-')+'/10' : '')}>
                             <priceData.icon className={cn("h-3.5 w-3.5", priceData.color)} /> <span className={cn(priceData.color)}>{priceData.text}</span>
                        </Badge>
                    </div>

                    {/* Holder Rewards */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-muted-foreground">{memeMode && isRoach ? "Reflections:" : "Rewards:"}</span>
                            <span className="font-semibold text-foreground">{rewardData.text}</span>
                        </div>
                        <Progress value={rewardData.value} className="h-2" indicatorClassName={cn(rewardData.color, "transition-all duration-300 ease-out")} />
                    </div>

                    {/* Holder Sentiment */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-muted-foreground">{memeMode ? "Vibe Check:" : "Sentiment:"}</span>
                        <span className="font-bold text-lg">{sentiment}</span> {/* Made emoji bolder/larger */}
                    </div>

                    {/* Outcome / Key Difference */}
                    <div className={cn(
                        "text-xs p-3 rounded-lg border mt-auto text-center", // Push to bottom, center text
                        isRoach
                            ? "bg-primary/10 border-primary/20 text-primary/90 font-medium"
                            : "bg-muted/50 border-border text-muted-foreground italic"
                        )}>
                        <p><span className={cn("font-semibold not-italic", isRoach && memeMode && "font-mission")}>Result:</span> {outcome}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
// --- END OF FILE ./components/sections/MarketScenarios.tsx ---