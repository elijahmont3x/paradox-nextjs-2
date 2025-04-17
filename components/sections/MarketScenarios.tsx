// --- START OF FILE ./components/sections/MarketScenarios.tsx ---

"use client";

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // Keep Progress for rewards viz
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingUp, ChevronsDown, TrendingDown as PanicIcon, ShieldAlert, Shield, Activity, HelpCircle, TrendingDown } from "lucide-react"; // Specific icons for scenarios
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { tierData } from '@/lib/tier-data'; // Import tier data for reference

// Define Scenario Data
const marketScenarios = [
  {
    id: 'stable',
    label: (memeMode: boolean) => memeMode ? "Chill Times" : "Stable Market",
    icon: Activity, // Neutral activity icon
    description: "Normal buy/sell activity, low volatility, balanced ratio.",
    // $ROACH Response
    roach: { tier: 2, priceImpact: "Stable", rewards: "Standard", holderSentiment: "Neutral 🙂" },
    // Resilient Token Response
    resilient: { priceImpact: "Stable", rewards: "None", holderSentiment: "Neutral 🙂" },
    color: "gray" // Neutral color
  },
  {
    id: 'dip',
    label: (memeMode: boolean) => memeMode ? "Baby Dip" : "Minor Correction",
    icon: ChevronsDown,
    description: "Moderate increase in selling, slight price dip. Pressure rising.",
    roach: { tier: 3, priceImpact: "Resilient Dip", rewards: "Increased", holderSentiment: "Buying 😏" },
    resilient: { priceImpact: "Moderate Dip", rewards: "None", holderSentiment: "Worried 😟" },
    color: "yellow"
  },
  {
    id: 'panic',
    label: (memeMode: boolean) => memeMode ? "Panic Dump!" : "Significant Sell-off",
    icon: PanicIcon, // Specific icon for panic
    description: "High selling pressure, notable price drops. Defenses activate.",
    roach: { tier: 4, priceImpact: "Defended Dip", rewards: "High", holderSentiment: "Feasting 😎" },
    resilient: { priceImpact: "Sharp Drop", rewards: "None", holderSentiment: "Panicking 😨" },
    color: "orange"
  },
  {
    id: 'crash',
    label: (memeMode: boolean) => memeMode ? "Market Nuke!" : "Market Crash",
    icon: ShieldAlert, // Extreme alert icon
    description: "Extreme panic selling, potential cascade effect. Max defense.",
    roach: { tier: 5, priceImpact: "Strengthened*", rewards: "Maximum", holderSentiment: "Unfazed 🗿" },
    resilient: { priceImpact: "Severe Drop", rewards: "None", holderSentiment: "Rekt 💀" },
    color: "red"
  },
];


export function MarketScenarios() {
  const { memeMode } = useMemeMode();
  const [activeScenarioId, setActiveScenarioId] = useState(marketScenarios[0].id);

  const activeScenario = marketScenarios.find(s => s.id === activeScenarioId) || marketScenarios[0];

  // Map Price Impact strings to visual components
  const getPriceVisuals = (impact: string) => {
     switch(impact.toLowerCase()) {
        // Neutral
        case 'stable': return { text: "Stable", icon: Activity, color: "text-gray-500" };
        // Negative - Resilient
        case 'moderate dip': return { text: "Moderate Dip", icon: ChevronsDown, color: "text-yellow-600" };
        case 'sharp drop': return { text: "Sharp Drop", icon: PanicIcon, color: "text-orange-600" };
        case 'severe drop': return { text: "Severe Drop", icon: TrendingDown, color: "text-red-600" };
        // Positive/Defended - Roach
        case 'resilient dip': return { text: "Resilient Dip", icon: ChevronsDown, color: "text-yellow-500" }; // Less severe color
        case 'defended dip': return { text: "Defended Dip", icon: Shield, color: "text-orange-500" }; // Defensive icon
        case 'strengthened*': return { text: "Strengthened*", icon: TrendingUp, color: "text-green-500" }; // Potential gain
        default: return { text: impact, icon: HelpCircle, color: "text-muted-foreground" };
     }
  };

  // Map Reward Level strings to visual components (using Progress)
  const getRewardVisuals = (level: string) => {
     switch(level.toLowerCase()) {
        case 'none': return { text: "None", value: 0, color: "bg-muted" };
        case 'standard': return { text: "Standard", value: 25, color: "bg-blue-500" }; // Tier 2 reflection ~3-4%
        case 'increased': return { text: "Increased", value: 50, color: "bg-yellow-500" }; // Tier 3 reflection ~6%
        case 'high': return { text: "High", value: 75, color: "bg-orange-500" }; // Tier 4 reflection ~8%
        case 'maximum': return { text: "Maximum", value: 100, color: "bg-primary" }; // Tier 5 reflection 10%
        default: return { text: level, value: 0, color: "bg-muted" };
     }
  };

  // Simple mapping for mascot state based on tier for the scenario card
  const getMascotState = (tierId: number): 'normal' | 'strengthening' | 'strong' | 'powered' => {
    if (tierId === 5) return 'powered';
    if (tierId === 4) return 'strong';
    if (tierId === 3) return 'strengthening';
    return 'normal'; // Tiers 1 and 2
  };

  // Animation for TabsContent
  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <Section id="market-scenarios" className="py-20 md:py-28 bg-background">
      <SectionHeader
         title={memeMode ? "$ROACH vs Normie Coins (In a Crisis)" : "Comparative Market Performance"}
         description={memeMode
            ? "Don't compare $ROACH to fragile garbage OR boring 'resilient' coins. See how true Antifragility dominates when the market REEEEs."
            : "Unlike fragile tokens that break or resilient tokens that merely endure, $ROACH is designed to leverage market stress. Here’s a comparison:"
         }
         subtitle={<><TrendingUp className="inline h-4 w-4 mr-1"/> Performance Under Pressure</>}
         alignment="center"
         className="mb-16"
      />

      <Tabs value={activeScenarioId} onValueChange={setActiveScenarioId} className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-10 gap-1 p-1 bg-muted rounded-lg">
          {marketScenarios.map((scenario) => (
            <TabsTrigger
              key={scenario.id}
              value={scenario.id}
              className={cn(
                "flex-col h-auto py-3 px-2 gap-1.5 rounded-md text-xs sm:text-sm data-[state=active]:shadow-md transition-all duration-200",
                `data-[state=active]:bg-${scenario.color}-500/10 data-[state=active]:text-${scenario.color}-600 data-[state=active]:border data-[state=active]:border-${scenario.color}-500/30 data-[state=active]:font-semibold`, // Active state styling
                `hover:bg-${scenario.color}-500/5 hover:text-${scenario.color}-600`, // Hover state
                memeMode && "font-mission tracking-wide"
              )}
            >
               <scenario.icon className={cn("h-5 w-5 mb-1", `text-${scenario.color}-500`)}/>
               <span>{scenario.label(memeMode)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Use AnimatePresence for smooth transition between tab contents */}
        <AnimatePresence mode="wait">
            <TabsContent key={activeScenarioId} value={activeScenarioId} forceMount>
                 <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {/* Scenario Title Card */}
                    <Card className={cn("mb-8 border-l-4 shadow-sm", `border-${activeScenario.color}-500`)}>
                        <CardHeader>
                            <CardTitle className={cn("flex items-center gap-2 text-xl", `text-${activeScenario.color}-600`, memeMode && "font-mission")}>
                                <activeScenario.icon className="h-5 w-5"/> {activeScenario.label(memeMode)}
                            </CardTitle>
                            <CardDescription>{activeScenario.description}</CardDescription>
                        </CardHeader>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* $ROACH Card */}
                    <ScenarioCard
                        title="$ROACH (Antifragile)"
                        memeTitle="The Chad $ROACH"
                        mascotState={getMascotState(activeScenario.roach.tier)}
                        tier={activeScenario.roach.tier}
                        priceData={getPriceVisuals(activeScenario.roach.priceImpact)}
                        rewardData={getRewardVisuals(activeScenario.roach.rewards)}
                        sentiment={activeScenario.roach.holderSentiment}
                        isRoach={true}
                        scenarioColor={activeScenario.color}
                    />

                    {/* Resilient Token Card */}
                    <ScenarioCard
                        title="Typical Resilient Token"
                        memeTitle="The Boring Turtle Coin"
                        // No Tier or Mascot for resilient
                        priceData={getPriceVisuals(activeScenario.resilient.priceImpact)}
                        rewardData={getRewardVisuals(activeScenario.resilient.rewards)}
                        sentiment={activeScenario.resilient.holderSentiment}
                        isRoach={false}
                        clarification={memeMode
                            ? "Like coins with fixed taxes or basic LP locks. They survive, kinda. BORING."
                            : "Represents tokens with static defenses (e.g., fixed reflections, simple buybacks). Resists stress but doesn't gain from it."
                        }
                        scenarioColor={activeScenario.color} // Pass color for consistency
                    />
                    </div>
                </motion.div>
           </TabsContent>
         </AnimatePresence>
      </Tabs>
       <div className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
          *Strengthened performance under extreme stress (Tier 5) depends on factors like reflection volume outweighing price impact for holders and attracting new buyers due to low buy tax. The model aims for net positive ecosystem effect. "Resilient Token" behavior is illustrative. Always DYOR.
       </div>
    </Section>
  );
}


// --- ScenarioCard Sub-Component ---
interface ScenarioCardProps {
    title: string;
    memeTitle: string;
    tier?: number;
    mascotState?: 'normal' | 'strengthening' | 'strong' | 'powered';
    priceData: { text: string; icon: React.ElementType; color: string };
    rewardData: { text: string; value: number; color: string }; // includes value for progress bar
    sentiment: string;
    isRoach: boolean;
    clarification?: string;
    scenarioColor: string; // To match border/theme
}

function ScenarioCard({ title, memeTitle, tier, mascotState, priceData, rewardData, sentiment, isRoach, clarification, scenarioColor }: ScenarioCardProps) {
    const { memeMode } = useMemeMode();
    const cardClass = isRoach
        ? "bg-primary/5 border-primary/20"
        : "bg-muted/50 border-border"; // More neutral resilient card
    const icon = isRoach
        ? <CockroachMascot size="xs" className="mr-1.5" /> // Smaller mascot
        : <Shield className="h-4 w-4 text-muted-foreground mr-1.5"/>; // Resilient icon

    return (
        <Card className={cn(
            "flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300",
            cardClass,
            memeMode && "border-dashed"
        )}>
            <CardHeader className="pb-3 border-b"> {/* Added border bottom */}
                <CardTitle className={cn("text-base sm:text-lg flex items-center justify-between", memeMode && "font-mission")}>
                    <span className="flex items-center gap-1.5">
                        {icon}
                        {memeMode ? memeTitle : title}
                    </span>
                    {isRoach && tier && <Badge variant="secondary" className={cn(
                        "text-xs px-2 py-0.5",
                         tier === 1 ? "border-blue-500/50 text-blue-600 bg-blue-500/10" :
                         tier === 2 ? "border-gray-500/50 text-gray-600 bg-gray-500/10" :
                         tier === 3 ? "border-yellow-500/50 text-yellow-600 bg-yellow-500/10" :
                         tier === 4 ? "border-orange-500/50 text-orange-600 bg-orange-500/10" :
                         "border-red-500/50 text-red-600 bg-red-500/10",
                         memeMode && "font-mission tracking-wider"
                    )}>Tier {tier}</Badge>}
                </CardTitle>
                {clarification && <CardDescription className="text-xs pt-1.5">{clarification}</CardDescription>}
            </CardHeader>
            <CardContent className="space-y-4 pt-4 px-4 pb-4 flex-1 flex flex-col"> {/* Adjusted padding */}
                {/* Price Impact */}
                <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-muted-foreground">Price Impact:</span>
                    <span className={cn("flex items-center gap-1 font-semibold text-xs px-2 py-0.5 rounded", priceData.color, priceData.color.includes('text-') ? 'bg-opacity-10' : '')}> {/* Use bg-opacity for text colors */}
                        <priceData.icon className="h-3.5 w-3.5" /> {priceData.text}
                    </span>
                </div>
                {/* Holder Rewards */}
                <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                         <span className="font-medium text-muted-foreground">{memeMode && isRoach ? "HODLer Rewards:" : "Holder Rewards:"}</span>
                         <span className="font-semibold text-foreground">{rewardData.text}</span>
                    </div>
                     <Progress value={rewardData.value} className="h-2" indicatorClassName={cn(rewardData.color, "transition-all duration-300")} />
                </div>
                 {/* Holder Sentiment */}
                 <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-muted-foreground">{memeMode ? "Holder Vibe:" : "Holder Sentiment:"}</span>
                    <span className="font-semibold text-foreground text-lg">{sentiment}</span> {/* Larger emoji */}
                </div>
                 {/* Key Difference */}
                 <div className={cn(
                     "text-xs italic p-3 rounded border mt-auto", // Pushed to bottom
                      isRoach
                        ? "bg-primary/10 border-primary/20 text-primary/90"
                        : "bg-muted border-border text-muted-foreground"
                    )}>
                     {isRoach
                        ? (memeMode ? `$ROACH uses chaos. Taxes shift, rewards blast.` : `Antifragile system converts stress into stability & rewards.`)
                        : (memeMode ? `Turtle coin hides. Survives (maybe), gains nothing.` : `Static defenses resist stress but don't leverage it for gain.`)
                     }
                 </div>
            </CardContent>
        </Card>
    );
}
// --- END OF FILE ./components/sections/MarketScenarios.tsx ---