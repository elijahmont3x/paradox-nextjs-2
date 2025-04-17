// --- START OF FILE ./components/sections/MarketScenarios.tsx ---

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // Re-importing Progress
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Activity, ChevronsDown, TrendingDown, ShieldAlert, HelpCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { tierData } from '@/lib/tier-data'; // Tier data for reference

// --- Data and Helper Functions (Keep definitions from previous step) ---
const marketScenarios = [ // Unchanged from previous refined version
  { id: 'stable', label: "Stable Market", icon: Activity, description: "Balanced trading activity, low volatility.", roach: { tier: 2, priceImpact: "Stable", rewardLevel: "Standard", sentiment: "Neutral", outcome: "Standard operations, baseline reflections accrue." }, resilient: { priceImpact: "Stable", rewardLevel: "None", sentiment: "Neutral", outcome: "Static system remains inactive, no change." }, color: "gray" },
  { id: 'dip', label: "Minor Dip", icon: ChevronsDown, description: "Moderate increase in selling, slight price decline.", roach: { tier: 3, priceImpact: "Dip Cushioned", rewardLevel: "Increased", sentiment: "Advantage Identified", outcome: "Higher sell tax applied, reflections increase, buying incentivized." }, resilient: { priceImpact: "Noticeable Dip", rewardLevel: "None", sentiment: "Concerned", outcome: "Price follows market trend down, static defenses offer minimal aid." }, color: "yellow" },
  { id: 'selloff', label: "Significant Sell-off", icon: TrendingDown, description: "High selling volume, strong downward price pressure.", roach: { tier: 4, priceImpact: "Defense Activated", rewardLevel: "High", sentiment: "Confident", outcome: "Sell tax sharply increases, discouraging further panic and significantly rewarding holders." }, resilient: { priceImpact: "Sharp Drop", rewardLevel: "None", sentiment: "Anxious", outcome: "Price drops considerably, lacks adaptive response to mitigate or benefit." }, color: "orange" },
  { id: 'crash', label: "Market Crash", icon: ShieldAlert, description: "Extreme panic selling, likely market-wide disruption.", roach: { tier: 5, priceImpact: "Antifragile Benefit*", rewardLevel: "Maximum", sentiment: "Strengthened", outcome: "*Max sell tax/reflections, lowest buy tax; system uses chaos to fortify & reward." }, resilient: { priceImpact: "Severe Drop", rewardLevel: "None", sentiment: "Distressed", outcome: "System suffers significant loss, survival threatened." }, color: "red" },
];
const scenarioColorMap: { [key: string]: { text: string; bg: string; border: string; indicator: string; darkText?: string; darkBg?: string; darkBorder?: string; } } = { // Added dark variants explicitly
    gray: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500', darkText: 'dark:text-gray-400', darkBg: 'dark:bg-gray-500/20', darkBorder: 'dark:border-gray-500/40'},
    yellow: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500', darkText: 'dark:text-yellow-400', darkBg: 'dark:bg-yellow-500/20', darkBorder: 'dark:border-yellow-500/40' },
    orange: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500', darkText: 'dark:text-orange-400', darkBg: 'dark:bg-orange-500/20', darkBorder: 'dark:border-orange-500/40' },
    red: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500', darkText: 'dark:text-red-400', darkBg: 'dark:bg-red-500/20', darkBorder: 'dark:border-red-500/40' },
};
const mapRewardLevelToVisual = (level: string): { text: string; value: number; colorClass: string } => { /* Unchanged */ switch(level.toLowerCase()){case'none':return{text:"None",value:0,colorClass:"bg-muted"};case'standard':return{text:"Standard",value:25,colorClass:scenarioColorMap['gray'].indicator};case'increased':return{text:"Increased",value:50,colorClass:scenarioColorMap['yellow'].indicator};case'high':return{text:"High",value:75,colorClass:scenarioColorMap['orange'].indicator};case'maximum':return{text:"Maximum",value:100,colorClass:scenarioColorMap['red'].indicator};default:return{text:level,value:0,colorClass:"bg-muted"};}};
const mapPriceImpactToVisual = (impact: string, isRoach: boolean): { text: string; icon: React.ElementType; colorClass: string } => { /* Unchanged */ const iL=impact.toLowerCase(); if(iL==='stable')return{text:"Stable",icon:Activity,colorClass:cn(scenarioColorMap['gray'].text, scenarioColorMap['gray'].darkText)};if(iL==='noticeable dip')return{text:"Dip",icon:ChevronsDown,colorClass:cn(scenarioColorMap['yellow'].text, scenarioColorMap['yellow'].darkText)};if(iL==='sharp drop')return{text:"Sharp Drop",icon:TrendingDown,colorClass:cn(scenarioColorMap['orange'].text, scenarioColorMap['orange'].darkText)};if(iL==='severe drop')return{text:"Severe Drop",icon:TrendingDown,colorClass:cn(scenarioColorMap['red'].text, scenarioColorMap['red'].darkText)};if(isRoach){if(iL==='dip cushioned')return{text:"Cushioned",icon:ShieldCheck,colorClass:cn(scenarioColorMap['yellow'].text, scenarioColorMap['yellow'].darkText)};if(iL==='defense activated')return{text:"Defended",icon:ShieldCheck,colorClass:cn(scenarioColorMap['orange'].text, scenarioColorMap['orange'].darkText)};if(iL.includes('antifragile benefit'))return{text:"Benefit*",icon:Zap,colorClass:"text-green-500 dark:text-green-400"};}return{text:impact,icon:HelpCircle,colorClass:"text-muted-foreground"};};
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; } } = { 1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', indicator: 'bg-blue-500' }, 2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500' }, 3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500' }, 4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500' }, 5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500' }, }; // Needed for ScenarioCard

// ----------------------------------------------------------------------

export function MarketScenarios() {
    const [activeScenarioId, setActiveScenarioId] = useState(marketScenarios[0].id);
    const activeScenario = marketScenarios.find(s => s.id === activeScenarioId) || marketScenarios[0];
    const contentVariants = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } } };

    return (
        <Section id="market-scenarios" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/20 via-background to-muted/10"> {/* Increased lg padding */}
            <SectionHeader
                title="Performance Under Pressure: $ROACH vs. Static Resilience"
                description="How does $ROACH react differently during market volatility compared to tokens with fixed defenses? This simulation illustrates the impact of its adaptive system."
                subtitle={<><Activity className="inline h-4 w-4 mr-1" /> Scenario Simulation</>}
                alignment="center" className="mb-16"
            />

            <Tabs value={activeScenarioId} onValueChange={setActiveScenarioId} className="max-w-6xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-10 gap-1 p-1 bg-muted dark:bg-background/30 rounded-lg">
                    {marketScenarios.map((scenario) => {
                        const colors = scenarioColorMap[scenario.color as keyof typeof scenarioColorMap];
                        const isActive = scenario.id === activeScenarioId;
                        return (
                            <TabsTrigger key={scenario.id} value={scenario.id} className={cn( "flex-col items-center justify-center h-auto py-2.5 sm:py-3 px-1 sm:px-2 rounded-md text-xs sm:text-sm transition-colors duration-200 border border-transparent relative group focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", isActive ? cn("shadow-sm bg-card font-semibold", colors.text, colors.border, colors.darkText, colors.darkBorder?.replace('border-', 'border-b-2 pb-[0.5rem] pt-[0.6rem] sm:pb-[0.75rem] sm:pt-[0.85rem]') ) : cn("text-muted-foreground hover:bg-accent/50 hover:text-foreground") )}>
                                <scenario.icon className={cn("h-4 w-4 sm:h-5 sm:w-5 mb-1 transition-colors", isActive ? colors.text : 'text-muted-foreground group-hover:text-foreground')} />
                                <span className="text-center leading-tight">{scenario.label}</span>
                            </TabsTrigger> ); })}
                </TabsList>

                <AnimatePresence mode="wait">
                    <TabsContent key={activeScenarioId} value={activeScenarioId} forceMount className="mt-0"> {/* Added mt-0 */}
                        <motion.div variants={contentVariants} initial="initial" animate="animate" exit="exit" >
                            {/* Scenario Context Banner - Refined styling */}
                            <div className={cn("mb-8 p-4 rounded-lg border-l-4 flex items-start sm:items-center gap-3 sm:gap-4 shadow-sm", scenarioColorMap[activeScenario.color].border.replace('border-','border-l-'), scenarioColorMap[activeScenario.color].bg, scenarioColorMap[activeScenario.color].darkBg )}>
                                 <activeScenario.icon className={cn("h-5 w-5 sm:h-6 sm:w-6 shrink-0 mt-0.5 sm:mt-0", scenarioColorMap[activeScenario.color].text)} />
                                 <div>
                                     <h4 className={cn("font-semibold text-base sm:text-lg", scenarioColorMap[activeScenario.color].text)}>Scenario: {activeScenario.label}</h4>
                                     <p className="text-sm text-muted-foreground">{activeScenario.description}</p>
                                 </div>
                            </div>
                            {/* Comparison Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                                 {/* $ROACH Card */}
                                <ScenarioCard tokenName="$ROACH Response" tokenIcon={CockroachMascot} isRoach={true} tier={activeScenario.roach.tier} priceData={mapPriceImpactToVisual(activeScenario.roach.priceImpact, true)} rewardData={mapRewardLevelToVisual(activeScenario.roach.rewardLevel)} sentiment={activeScenario.roach.sentiment} outcome={activeScenario.roach.outcome} scenarioColor={activeScenario.color} visualPrompt={`AI Prompt: Graph comparing '$ROACH' vs 'Typical' in '${activeScenario.label}'. Show Typical dropping/recovering, $ROACH line showing ${activeScenario.roach.priceImpact}. Use theme colors.`} />
                                 {/* Resilient Token Card */}
                                 <ScenarioCard tokenName="Typical Resilient Response" tokenIcon={ShieldCheck} isRoach={false} priceData={mapPriceImpactToVisual(activeScenario.resilient.priceImpact, false)} rewardData={mapRewardLevelToVisual(activeScenario.resilient.rewardLevel)} sentiment={activeScenario.resilient.sentiment} outcome={activeScenario.resilient.outcome} scenarioColor={activeScenario.color} clarification="Represents tokens with static defenses. Endures stress but lacks adaptive benefits." visualPrompt={`AI Prompt: Graph comparing '$ROACH' vs 'Typical' in '${activeScenario.label}'. Show Typical dropping/recovering based on '${activeScenario.resilient.priceImpact}'. Use theme colors.`}/>
                            </div>
                        </motion.div>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>

             <div className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto border-t pt-4 border-border/50 dark:border-border/20"> * <span className="font-semibold">Antifragile Benefit Disclaimer:</span> [...] {/* Keep disclaimer */} </div>
        </Section>
    );
}

// --- ScenarioCard Sub-Component (Bringing back visible Progress) ---
interface ScenarioCardProps { tokenName: string; tokenIcon: React.ElementType; tier?: number; priceData: { text: string; icon: React.ElementType; colorClass: string }; rewardData: { text: string; value: number; colorClass: string }; sentiment: string; outcome: string; isRoach: boolean; scenarioColor: string; clarification?: string; visualPrompt?: string; }

function ScenarioCard({ tokenName, tokenIcon: TokenIcon, tier, priceData, rewardData, sentiment, outcome, isRoach, scenarioColor, clarification, visualPrompt }: ScenarioCardProps) {
    const cardColors = scenarioColorMap[scenarioColor];
    const baseBorderColor = isRoach ? cardColors?.border ?? 'border-primary/30' : 'border-border/30';
    const baseBgColor = isRoach ? cardColors?.bg ?? 'bg-primary/5' : 'bg-card';
    const headerTextColor = isRoach ? cardColors?.text ?? 'text-primary' : 'text-foreground';
    const activeTierColors = isRoach && tier ? tierColorMap[tier as keyof typeof tierColorMap] : null;

    return (
        <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
             <Card className={cn("flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 border overflow-hidden", baseBorderColor, baseBgColor, cardColors.darkBorder, cardColors.darkBg)}>
                <CardHeader className={cn("pb-3 pt-4 px-4 border-b flex-row items-center justify-between gap-2", baseBorderColor.replace('border-','border-b-'))}>
                    <div className="flex items-center gap-2">
                         {isRoach ? <TokenIcon size="xs" className={cn("shrink-0", headerTextColor)}/> : <TokenIcon className={cn("h-4 w-4 shrink-0", headerTextColor)} />}
                         <CardTitle className={cn("text-sm sm:text-base font-semibold leading-tight", headerTextColor)}>{tokenName}</CardTitle>
                    </div>
                     {isRoach && tier && activeTierColors && ( <TooltipProvider><Tooltip><TooltipTrigger asChild><Badge variant="secondary" className={cn("text-[0.65rem] sm:text-xs px-1.5 py-0.5 whitespace-nowrap transition-colors duration-300", activeTierColors.bg, activeTierColors.text, activeTierColors.border)}> Tier {tier} </Badge></TooltipTrigger><TooltipContent><p>Active Tier: {tierData[tier - 1]?.name}</p></TooltipContent></Tooltip></TooltipProvider> )}
                 </CardHeader>

                <CardContent className="p-4 space-y-4 flex-grow flex flex-col"> {/* Use flex-grow */}
                    {clarification && <p className="text-xs italic text-muted-foreground">{clarification}</p>}
                    {/* Metrics Area */}
                    <div className="space-y-3 text-sm flex-grow"> {/* Allow metrics to take space */}
                        <div className="flex justify-between items-center"> <span className="text-muted-foreground font-medium">Price Impact:</span> <span className={cn("font-semibold inline-flex items-center gap-1", priceData.colorClass)}> <priceData.icon className="h-4 w-4"/> {priceData.text}</span> </div>
                         {/* AUDIT FIX: Reverted to showing Progress bar inline */}
                         <div className="space-y-1">
                           <div className="flex justify-between items-center"> <span className="text-muted-foreground font-medium">Holder Rewards:</span> <span className="font-semibold">{rewardData.text}</span> </div>
                            <Progress value={rewardData.value} className="h-1.5" indicatorClassName={cn(rewardData.colorClass, 'transition-all duration-500 ease-out')} />
                         </div>
                         <div className="flex justify-between items-center"> <span className="text-muted-foreground font-medium">Est. Sentiment:</span> <span className="font-semibold">{sentiment}</span> </div>
                    </div>
                     {/* Visual Placeholder Area */}
                    {visualPrompt && ( <div className="mt-4 bg-muted/20 dark:bg-white/5 border border-dashed border-border/50 rounded flex items-center justify-center p-3 aspect-[16/7] min-h-[90px]"> <p className="text-[0.65rem] leading-snug text-muted-foreground/70 italic text-center">{visualPrompt}</p> </div> )}
                    {/* Outcome Footer */}
                    <div className={cn( "mt-auto pt-3 text-center text-sm font-medium leading-snug text-foreground/90", isRoach && headerTextColor )}> {outcome} </div>
                 </CardContent>
            </Card>
        </motion.div>
    );
}


// --- END OF FILE ./components/sections/MarketScenarios.tsx ---