// --- START OF FILE ./components/sections/MarketScenarios.tsx ---

"use client";

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Activity, ChevronsDown, TrendingDown, ShieldAlert, HelpCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react"; // Refining icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { tierData } from '@/lib/tier-data'; // Still needed for tier reference
import { Progress } from '../ui/progress';

// Updated Scenario Data with Unified Tone and Clearer Outcomes
const marketScenarios = [
  {
    id: 'stable',
    label: "Stable Market", // Unified
    icon: Activity,
    description: "Balanced trading activity, low volatility.",
    // Responses
    roach: { tier: 2, priceImpact: "Stable", rewardLevel: "Standard", sentiment: "Neutral", outcome: "Standard operations, baseline reflections accrue." },
    resilient: { priceImpact: "Stable", rewardLevel: "None", sentiment: "Neutral", outcome: "Static system remains inactive, no change." },
    color: "gray"
  },
  {
    id: 'dip',
    label: "Minor Dip", // Unified
    icon: ChevronsDown,
    description: "Moderate increase in selling, slight price decline.",
    // Responses
    roach: { tier: 3, priceImpact: "Dip Cushioned", rewardLevel: "Increased", sentiment: "Advantage Identified", outcome: "Higher sell tax applied, reflections increase, buying incentivized." },
    resilient: { priceImpact: "Noticeable Dip", rewardLevel: "None", sentiment: "Concerned", outcome: "Price follows market trend down, static defenses offer minimal aid." },
    color: "yellow"
  },
  {
    id: 'selloff', // Changed ID slightly for clarity
    label: "Significant Sell-off", // Unified
    icon: TrendingDown,
    description: "High selling volume, strong downward price pressure.",
    // Responses
    roach: { tier: 4, priceImpact: "Defense Activated", rewardLevel: "High", sentiment: "Confident", outcome: "Sell tax sharply increases, discouraging further panic and significantly rewarding holders." },
    resilient: { priceImpact: "Sharp Drop", rewardLevel: "None", sentiment: "Anxious", outcome: "Price drops considerably, lacks adaptive response to mitigate or benefit." },
    color: "orange"
  },
  {
    id: 'crash',
    label: "Market Crash", // Unified
    icon: ShieldAlert,
    description: "Extreme panic selling, likely market-wide disruption.",
    // Responses
    roach: { tier: 5, priceImpact: "Antifragile Benefit*", rewardLevel: "Maximum", sentiment: "Strengthened", outcome: "*Max sell tax/reflections, lowest buy tax; system uses chaos to fortify & reward." },
    resilient: { priceImpact: "Severe Drop", rewardLevel: "None", sentiment: "Distressed", outcome: "System suffers significant loss, survival threatened." },
    color: "red"
  },
];

// Tailwind Tier/Scenario Color Mapping - Refined for better semantic consistency
const scenarioColorMap: { [key: string]: { text: string; bg: string; border: string; indicator: string; darkText?: string; } } = {
    gray: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500', darkText: 'dark:text-gray-400' },
    yellow: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500', darkText: 'dark:text-yellow-400' },
    orange: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500', darkText: 'dark:text-orange-400' },
    red: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500', darkText: 'dark:text-red-400' },
};

// Map Reward Level to Visual Data
const mapRewardLevelToVisual = (level: string): { text: string; value: number; colorClass: string } => {
     switch(level.toLowerCase()) {
         case 'none': return { text: "None", value: 0, colorClass: "bg-muted" };
         case 'standard': return { text: "Standard", value: 25, colorClass: scenarioColorMap['gray'].indicator };
         case 'increased': return { text: "Increased", value: 50, colorClass: scenarioColorMap['yellow'].indicator };
         case 'high': return { text: "High", value: 75, colorClass: scenarioColorMap['orange'].indicator };
         case 'maximum': return { text: "Maximum", value: 100, colorClass: scenarioColorMap['red'].indicator }; // Use red for max intensity
         default: return { text: level, value: 0, colorClass: "bg-muted" };
     }
};

// Map Price Impact to Visual Data
const mapPriceImpactToVisual = (impact: string, isRoach: boolean): { text: string; icon: React.ElementType; colorClass: string } => {
    const impactLower = impact.toLowerCase();
    // Neutral
    if (impactLower === 'stable') return { text: "Stable", icon: Activity, colorClass: scenarioColorMap['gray'].text };
    // Generic Negative (for Resilient)
    if (impactLower === 'noticeable dip') return { text: "Dip", icon: ChevronsDown, colorClass: scenarioColorMap['yellow'].text };
    if (impactLower === 'sharp drop') return { text: "Sharp Drop", icon: TrendingDown, colorClass: scenarioColorMap['orange'].text };
    if (impactLower === 'severe drop') return { text: "Severe Drop", icon: TrendingDown, colorClass: scenarioColorMap['red'].text }; // Consistent name
    // $ROACH Specific Responses
    if (isRoach) {
        if (impactLower === 'dip cushioned') return { text: "Cushioned", icon: ShieldCheck, colorClass: scenarioColorMap['yellow'].text };
        if (impactLower === 'defense activated') return { text: "Defended", icon: ShieldCheck, colorClass: scenarioColorMap['orange'].text };
        if (impactLower.includes('antifragile benefit')) return { text: "Antifragile Benefit*", icon: Zap, colorClass: "text-green-500" }; // Using Green for gain/benefit
    }
    // Fallback
    return { text: impact, icon: HelpCircle, colorClass: "text-muted-foreground" };
};

export function MarketScenarios() {
    // Removed useMemeMode
    const [activeScenarioId, setActiveScenarioId] = useState(marketScenarios[0].id);
    const activeScenario = marketScenarios.find(s => s.id === activeScenarioId) || marketScenarios[0];

    const contentVariants = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
    };

    return (
        <Section id="market-scenarios" className="py-20 md:py-28 bg-gradient-to-b from-muted/10 via-background to-muted/20">
            <SectionHeader
                title="Performance Under Pressure: $ROACH vs. Static Resilience"
                description="How does $ROACH react differently during market volatility compared to tokens with fixed defenses? This simulation illustrates the impact of its adaptive system."
                subtitle={<><Activity className="inline h-4 w-4 mr-1" /> Scenario Simulation</>}
                alignment="center"
                className="mb-16"
            />

            <Tabs value={activeScenarioId} onValueChange={setActiveScenarioId} className="max-w-6xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-10 gap-1 p-1 bg-muted rounded-lg">
                    {marketScenarios.map((scenario) => {
                        const colors = scenarioColorMap[scenario.color as keyof typeof scenarioColorMap];
                        const isActive = scenario.id === activeScenarioId;
                        return (
                            <TabsTrigger
                                key={scenario.id}
                                value={scenario.id}
                                className={cn(
                                    "flex-col items-center justify-center h-auto py-3 px-2 rounded-md text-xs sm:text-sm transition-all duration-200 border border-transparent relative group", // Base
                                    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:z-10", // Focus
                                    isActive
                                        ? cn("shadow-md", colors.bg, colors.text, colors.border, colors.darkText) // Active state using map
                                        : cn("text-muted-foreground hover:bg-accent/50 hover:text-foreground"), // Inactive state
                                     `focus-visible:ring-${scenario.color}-500/50` // Themed focus ring
                                )}
                            >
                                <scenario.icon className={cn("h-5 w-5 mb-1 transition-colors", isActive ? colors.text : 'text-muted-foreground group-hover:text-foreground')} />
                                <span className="text-center leading-tight font-medium">{scenario.label}</span>
                            </TabsTrigger>
                        );
                    })}
                </TabsList>

                <AnimatePresence mode="wait">
                    <TabsContent key={activeScenarioId} value={activeScenarioId} forceMount>
                        <motion.div
                            variants={contentVariants}
                            initial="initial" animate="animate" exit="exit"
                        >
                            {/* Scenario Context Banner */}
                             <motion.div
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: 'auto', transition: { delay: 0.1, duration: 0.4 }}}
                                 className={cn("mb-8 p-4 rounded-lg border-l-4 flex items-center gap-4 shadow-sm",
                                             scenarioColorMap[activeScenario.color].border.replace('border-','border-l-'),
                                             scenarioColorMap[activeScenario.color].bg)}>
                                <activeScenario.icon className={cn("h-6 w-6 shrink-0", scenarioColorMap[activeScenario.color].text)} />
                                <div>
                                    <h4 className={cn("font-semibold text-lg", scenarioColorMap[activeScenario.color].text)}>Scenario: {activeScenario.label}</h4>
                                    <p className="text-sm text-muted-foreground">{activeScenario.description}</p>
                                </div>
                             </motion.div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                                {/* $ROACH Card */}
                                <ScenarioCard
                                    tokenName="$ROACH Response"
                                    tokenIcon={CockroachMascot}
                                    tier={activeScenario.roach.tier}
                                    priceData={mapPriceImpactToVisual(activeScenario.roach.priceImpact, true)}
                                    rewardData={mapRewardLevelToVisual(activeScenario.roach.rewardLevel)}
                                    sentiment={activeScenario.roach.sentiment}
                                    outcome={activeScenario.roach.outcome}
                                    isRoach={true}
                                    scenarioColor={activeScenario.color}
                                    visualPrompt={`AI Prompt: Simple line graph comparing '$ROACH' vs 'Typical' trajectories during a market '${activeScenario.label}' scenario. Show typical line dropping/recovering, while $ROACH line cushions dip / potentially improves. Use themed colors.`}
                                />

                                {/* Resilient Token Card */}
                                <ScenarioCard
                                    tokenName="Typical Resilient Response"
                                    tokenIcon={ShieldCheck} // Using icon for resilience
                                    priceData={mapPriceImpactToVisual(activeScenario.resilient.priceImpact, false)}
                                    rewardData={mapRewardLevelToVisual(activeScenario.resilient.rewardLevel)}
                                    sentiment={activeScenario.resilient.sentiment}
                                    outcome={activeScenario.resilient.outcome}
                                    isRoach={false}
                                    scenarioColor={activeScenario.color} // Pass color for consistency
                                    clarification="Represents tokens with static defenses (e.g., fixed reflections/taxes). They endure stress but lack adaptive benefits."
                                    visualPrompt={`AI Prompt: Simple line graph comparing '$ROACH' vs 'Typical' trajectories during a market '${activeScenario.label}' scenario. Show typical line dropping/recovering, while $ROACH line cushions dip / potentially improves. Use themed colors.`} // Same prompt, focusing on contrast
                                />
                            </div>
                        </motion.div>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>

            <div className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto border-t pt-4">
                * <span className="font-semibold">Antifragile Benefit Disclaimer:</span> In extreme ('Crash') scenarios, $ROACH mechanisms aim to strengthen the ecosystem (high reflections, optimal tax rates for stability/entry) and reward long-term holders significantly. While this may improve the token's relative position and floor price compared to alternatives, immediate price action still depends heavily on broader market sentiment and liquidity dynamics. Comparisons are illustrative. Always DYOR.
            </div>
        </Section>
    );
}


// --- ScenarioCard Sub-Component (Refined for Clarity) ---
interface ScenarioCardProps {
    tokenName: string;
    tokenIcon: React.ElementType; // Pass icon component
    tier?: number; // Optional tier for $ROACH card
    priceData: { text: string; icon: React.ElementType; colorClass: string };
    rewardData: { text: string; value: number; colorClass: string };
    sentiment: string;
    outcome: string;
    isRoach: boolean;
    scenarioColor: string; // For consistent visual cues
    clarification?: string;
    visualPrompt?: string; // For graph placeholder
}

function ScenarioCard({ tokenName, tokenIcon: TokenIcon, tier, priceData, rewardData, sentiment, outcome, isRoach, scenarioColor, clarification, visualPrompt }: ScenarioCardProps) {

    const baseBorderColor = isRoach ? scenarioColorMap[scenarioColor]?.border ?? 'border-primary/30' : 'border-border/50';
    const baseBgColor = isRoach ? scenarioColorMap[scenarioColor]?.bg ?? 'bg-primary/5' : 'bg-card';
    const headerTextColor = isRoach ? scenarioColorMap[scenarioColor]?.text ?? 'text-primary' : 'text-foreground';
    const activeTierColors = tier ? tierColorMap[tier as keyof typeof tierColorMap] : null;


    return (
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className={cn( "flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 border overflow-hidden", baseBorderColor, baseBgColor )}>
                <CardHeader className={cn("pb-3 border-b flex-row items-center justify-between gap-2", baseBorderColor.replace('border-','border-b-'))}>
                     <div className="flex items-center gap-2">
                          {/* Differentiate Icon display */}
                          {isRoach ? <TokenIcon size="xs" className="shrink-0" /> : <TokenIcon className="h-4 w-4 shrink-0 text-muted-foreground" /> }
                          <CardTitle className="text-base sm:text-lg font-semibold leading-tight">{tokenName}</CardTitle>
                     </div>
                     {/* Show Tier badge only for ROACH card */}
                     {isRoach && tier && activeTierColors && (
                       <TooltipProvider>
                         <Tooltip>
                           <TooltipTrigger asChild>
                                <Badge variant="secondary" className={cn( "text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 whitespace-nowrap", activeTierColors.bg, activeTierColors.text, activeTierColors.border )}> Tier {tier} </Badge>
                           </TooltipTrigger>
                           <TooltipContent><p>Active Tier {tierData[tier-1]?.name}</p></TooltipContent>
                         </Tooltip>
                       </TooltipProvider>
                     )}
                </CardHeader>

                <CardContent className="p-4 space-y-3 flex-grow flex flex-col">
                    {clarification && <p className="text-xs italic text-muted-foreground mb-1">{clarification}</p>}

                     {/* Comparison Metrics */}
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground font-medium">Price Impact:</span>
                            <span className={cn("font-semibold inline-flex items-center gap-1", priceData.colorClass)}> <priceData.icon className="h-4 w-4"/> {priceData.text}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground font-medium">Holder Rewards:</span>
                             <TooltipProvider><Tooltip>
                               <TooltipTrigger asChild>
                                  {/* Use simplified display, tooltip for progress */}
                                  <span className="font-semibold">{rewardData.text}</span>
                               </TooltipTrigger>
                                <TooltipContent><div className="w-20"><div className="text-xs text-muted-foreground mb-1">{rewardData.value}%</div><Progress value={rewardData.value} className="h-1" indicatorClassName={rewardData.colorClass}/></div></TooltipContent>
                              </Tooltip></TooltipProvider>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground font-medium">Est. Sentiment:</span>
                            <span className="font-semibold">{sentiment}</span>
                        </div>
                    </div>

                     {/* Visual Placeholder Area */}
                    {visualPrompt && (
                        <div className="mt-4 bg-muted/30 border border-dashed rounded flex items-center justify-center p-3 aspect-[16/8] min-h-[100px]">
                            <p className="text-xs text-muted-foreground/70 italic text-center">{visualPrompt}</p>
                        </div>
                    )}


                    {/* Outcome */}
                    <div className={cn( "mt-auto pt-3 border-t text-center", baseBorderColor.replace('border-','border-t-') )}>
                         <p className="text-sm font-semibold text-foreground/90 leading-snug">{outcome}</p>
                    </div>

                </CardContent>
            </Card>
        </motion.div>
    );
}

// Tier color map needs to be defined here as well if not globally accessible
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; } } = {
    1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', indicator: 'bg-blue-500' },
    2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500' },
    3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500' },
    4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500' },
    5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500' },
};


// --- END OF FILE ./components/sections/MarketScenarios.tsx ---