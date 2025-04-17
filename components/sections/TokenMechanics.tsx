// --- START OF FILE ./components/sections/TokenMechanics.tsx ---

"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { tierData, Tier } from "@/lib/tier-data"; // Assuming tier-data.ts is correct
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Users, Activity, Info, Percent, Droplets, Megaphone, Timer, Play, Pause, Settings2 } from "lucide-react"; // Added Settings2
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// Simulation Constants
const CYCLE_INTERVAL_MS = 3000; // Slightly longer interval
const TRANSITION_DURATION_MS = 600; // Smooth transition

// Utility to map Sell/Buy Ratio to a Progress Bar value (0-100)
// This is conceptual, showing higher ratios mean higher pressure/tier
const mapRatioToProgress = (ratioCondition: string): number => {
    // Rough mapping based on tier conditions
    if (ratioCondition.includes('< 0.8')) return 10;
    if (ratioCondition.includes('0.8 - 1.2')) return 30;
    if (ratioCondition.includes('1.2 - 2.0')) return 50;
    if (ratioCondition.includes('2.0 - 3.0')) return 70;
    if (ratioCondition.includes('> 3.0')) return 90;
    return 50; // Default fallback
};

export function TokenMechanics() {
    // Removed useMemeMode hook

    // State management for simulation
    const [activeTierIndex, setActiveTierIndex] = useState<number>(1); // Default to Tier 2 (Equilibrium)
    const [progressValue, setProgressValue] = useState<number>(mapRatioToProgress(tierData[1].condition)); // Initialize progress based on Tier 2
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const activeTier = tierData[activeTierIndex];
    const currentTierColors = tierColorMap[activeTier.id as keyof typeof tierColorMap];

    // Animation cycling logic
    const cycleTier = useCallback(() => {
        setActiveTierIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % tierData.length;
            setProgressValue(mapRatioToProgress(tierData[nextIndex].condition));
            return nextIndex;
        });
    }, []); // No dependencies needed

    // Start/stop the animation interval
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(cycleTier, CYCLE_INTERVAL_MS);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, cycleTier]);

    // Toggle Play/Pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Manually set a tier
    const setManualTier = (index: number) => {
        setIsPlaying(false); // Pause animation
        setActiveTierIndex(index);
        setProgressValue(mapRatioToProgress(tierData[index].condition));
    };

    // Animation variants for content switching
    const displayVariants = {
       initial: { opacity: 0.8, y: 10 },
       animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
       exit: { opacity: 0.8, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
   };

    return (
        <Section id="mechanics" className="py-20 md:py-28 bg-gradient-to-b from-muted/20 via-background to-muted/10">
            <SectionHeader
                title="The $ROACH Engine: Dynamic 5-Tier System"
                description="This isn't a static token. $ROACH actively adapts its transaction taxes and reward distribution based on real-time market conditions (Sell/Buy Ratio), creating an antifragile feedback loop."
                subtitle={<><Settings2 className="inline h-4 w-4 mr-1" /> Adaptive Core</>}
                alignment="center"
                className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                {/* Interactive Tier Visualizer Card */}
                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10">
                        <CardHeader className="border-b pb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl md:text-2xl">System Response Visualizer</CardTitle>
                                    <CardDescription className="mt-1 text-sm">
                                        Simulates how $ROACH adapts to market pressure (Sell/Buy Ratio).
                                    </CardDescription>
                                </div>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon" onClick={togglePlayPause} className="h-8 w-8">
                                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="left"><p>{isPlaying ? "Pause" : "Play"} Simulation</p></TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            {/* Market Pressure Visualization */}
                            <div className="mt-5 space-y-1">
                                <label htmlFor="marketPressure" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                                     Market Pressure (Sell/Buy Ratio Driven)
                                     <TooltipProvider delayDuration={100}><Tooltip><TooltipTrigger className="cursor-help"><Info className="h-3 w-3"/></TooltipTrigger><TooltipContent><p>Higher ratio = more selling pressure.</p></TooltipContent></Tooltip></TooltipProvider>
                                </label>
                                <Progress
                                    id="marketPressure"
                                    value={progressValue}
                                    className="h-2.5 transition-all ease-out" // Removed inline duration, relies on indicator
                                    indicatorClassName={cn(currentTierColors.indicator, 'transition-all ease-out')}
                                    style={{ transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Lower Pressure (Buy Dom.)</span>
                                    <span>Higher Pressure (Sell Dom.)</span>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-6 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTier.id} // Re-renders on tier change
                                    variants={displayVariants}
                                    initial="initial" animate="animate" exit="exit"
                                >
                                    {/* Tier Details Display */}
                                    <div className="text-center mb-6">
                                        <CockroachMascot size="md" className={cn("mx-auto mb-2 opacity-80", currentTierColors.text)} />
                                        <Badge variant="secondary" className={cn(
                                            "text-base px-4 py-1 shadow-sm font-semibold", // Made text bolder
                                            currentTierColors.bg, currentTierColors.text, currentTierColors.border
                                        )}>
                                            Tier {activeTier.id}: {activeTier.name}
                                        </Badge>
                                        <p className="text-sm text-muted-foreground mt-1.5">
                                            Activated when <strong className={cn(currentTierColors.text)}>{activeTier.condition}</strong>
                                        </p>
                                        <p className="text-xs italic text-muted-foreground mt-1">{activeTier.status}</p>
                                    </div>

                                    {/* Primary Taxes & Rewards Display */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                        {/* Buy Tax Card */}
                                         <MetricCard
                                             label="Buy Tax"
                                             value={`${activeTier.taxes.buy}%`}
                                             icon={TrendingUp}
                                             iconColor="text-green-600"
                                             bgColor="bg-green-500/5"
                                             borderColor="border-green-500/20"
                                             tooltip="Tax applied to buy transactions. Lower in high-pressure tiers to encourage entry."
                                        />
                                         {/* Sell Tax Card */}
                                         <MetricCard
                                             label="Sell Tax"
                                             value={`${activeTier.taxes.sell}%`}
                                             icon={TrendingDown}
                                             iconColor="text-red-600"
                                             bgColor="bg-red-500/5"
                                             borderColor="border-red-500/20"
                                             tooltip="Tax applied to sell transactions. Higher in high-pressure tiers to deter panic selling."
                                         />
                                         {/* Reflection Card */}
                                          <MetricCard
                                             label="Sell Reflections"
                                             value={`${activeTier.distribution.sell.reflection}%`}
                                             icon={Users}
                                             iconColor="text-primary"
                                             bgColor="bg-primary/5"
                                             borderColor="border-primary/20"
                                             tooltip="Percentage of sell tax redistributed to all $ROACH holders."
                                        />
                                    </div>

                                    {/* Detailed Distribution Breakdown (Optional) */}
                                    <div className="text-center text-xs text-muted-foreground mb-4">
                                        (<span className="font-medium">Tax Distribution for Tier {activeTier.id}</span>:
                                        Buy: {activeTier.distribution.buy.reflection}% Reflect / {activeTier.distribution.buy.liquidity}% LP / {activeTier.distribution.buy.marketing}% Marketing |
                                        Sell: {activeTier.distribution.sell.reflection}% Reflect / {activeTier.distribution.sell.liquidity}% LP / {activeTier.distribution.sell.marketing}% Marketing)
                                    </div>

                                     {/* Potential Diagram Placeholder */}
                                    <div className="mt-6 bg-muted/30 border border-dashed rounded-lg aspect-[16/7] flex items-center justify-center p-4">
                                       <p className="text-xs text-muted-foreground italic text-center">
                                            AI Prompt: Create a clean flowchart diagram illustrating the $ROACH feedback loop. Show 'Market Activity' -> 'Sell/Buy Ratio Calculation (4hr)' -> 'Tier Determination (1-5)' -> 'Dynamic Tax/Reflection Adjustment' -> influencing back to 'Market Activity'. Use simple icons and themed colors.
                                        </p>
                                     </div>

                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Static Tier Reference Table */}
                <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="sticky top-24" // Keep sticky for reference
                >
                    <Card className="shadow-lg border border-border/10">
                        <CardHeader>
                            <CardTitle className="text-xl">Tier Reference</CardTitle>
                            <CardDescription className="text-xs">Core tax rates per tier. Click row to view details.</CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 sm:px-4 pb-4">
                            <Table className="table-fixed w-full"> {/* Ensure fixed layout */}
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[20%] text-center px-1">Tier</TableHead>
                                        <TableHead className="w-[25%] text-center px-1">Condition</TableHead>
                                        <TableHead className="w-[18%] text-center text-green-600 px-1">Buy%</TableHead>
                                        <TableHead className="w-[18%] text-center text-red-600 px-1">Sell%</TableHead>
                                        <TableHead className="w-[19%] text-center text-primary px-1">Reflect%</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tierData.map((tier, index) => {
                                        const colors = tierColorMap[tier.id as keyof typeof tierColorMap];
                                        return (
                                            <TableRow
                                                key={tier.id}
                                                className={cn(
                                                    "text-[0.7rem] sm:text-xs transition-colors duration-200 text-center cursor-pointer hover:bg-muted/50 h-10", // Reduced font size
                                                    index === activeTierIndex && `bg-primary/5 font-medium border-l-2 ${colors.border}`, // Highlight active tier row more subtly
                                                )}
                                                onClick={() => setManualTier(index)}
                                            >
                                                <TableCell className={cn("font-semibold py-1 px-1", colors.text)}>{tier.id}</TableCell>
                                                <TableCell className="py-1 px-1 text-muted-foreground">{tier.condition.replace('Sell/Buy Ratio ','')}</TableCell> {/* Shortened text */}
                                                <TableCell className="py-1 px-1 text-green-600 font-medium">{tier.taxes.buy}%</TableCell>
                                                <TableCell className="py-1 px-1 text-red-600 font-medium">{tier.taxes.sell}%</TableCell>
                                                <TableCell className="py-1 px-1 text-primary font-medium">{tier.distribution.sell.reflection}%</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <p className="text-xs text-muted-foreground mt-4 px-4 sm:px-0 italic flex items-center gap-1.5 cursor-help">
                                            <Timer className="h-3.5 w-3.5 shrink-0" /> System checks Sell/Buy Ratio every 4 hours to determine active tier.
                                        </p>
                                    </TooltipTrigger>
                                    <TooltipContent><p className="text-xs">Updates automatically based on protocol logic.</p></TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}

// --- MetricCard Sub-Component ---
// Replaces the previous MetricDisplay for better visual grouping
interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  tooltip: string;
}
function MetricCard({ label, value, icon: Icon, iconColor, bgColor, borderColor, tooltip }: MetricCardProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className={cn(
             "border rounded-lg p-3 text-left w-full h-full cursor-help", // Added h-full
             borderColor, bgColor
        )}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
               <Icon className={cn("h-4 w-4", iconColor)} /> {label}
            </span>
            <Info className="h-3 w-3 text-muted-foreground/50"/>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-foreground">{value}</p>
        </TooltipTrigger>
        <TooltipContent side="top" align="center"><p className="max-w-[180px] text-xs">{tooltip}</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


// Tier color map - remains the same
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; } } = {
    1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', indicator: 'bg-blue-500' },
    2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500' },
    3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500' },
    4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500' },
    5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500' },
};


// --- END OF FILE ./components/sections/TokenMechanics.tsx ---