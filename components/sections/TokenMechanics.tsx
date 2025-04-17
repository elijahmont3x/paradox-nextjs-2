// --- START OF FILE ./components/sections/TokenMechanics.tsx ---

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { tierData } from "@/lib/tier-data";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Users, Activity, Info, Percent, Droplets, Megaphone, Timer, Play, Pause, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// --- Constants and Helpers (Unchanged) ---
const CYCLE_INTERVAL_MS = 3000;
const TRANSITION_DURATION_MS = 600;
const mapRatioToProgress = (ratioCondition: string): number => {
    if (ratioCondition.includes('< 0.8')) return 10; if (ratioCondition.includes('0.8 - 1.2')) return 30; if (ratioCondition.includes('1.2 - 2.0')) return 50; if (ratioCondition.includes('2.0 - 3.0')) return 70; if (ratioCondition.includes('> 3.0')) return 90; return 50;
};
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; darkBorder?: string } } = { // Added darkBorder optional
    1: { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30', indicator: 'bg-blue-500', darkBorder: 'dark:border-blue-500/40' },
    2: { text: 'text-gray-600 dark:text-gray-400', bg: 'bg-gray-500/10 dark:bg-gray-500/20', border: 'border-gray-500/30', indicator: 'bg-gray-500', darkBorder: 'dark:border-gray-500/40' },
    3: { text: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-500/10 dark:bg-yellow-500/20', border: 'border-yellow-500/30', indicator: 'bg-yellow-500', darkBorder: 'dark:border-yellow-500/40' },
    4: { text: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/20', border: 'border-orange-500/30', indicator: 'bg-orange-500', darkBorder: 'dark:border-orange-500/40' },
    5: { text: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10 dark:bg-red-500/20', border: 'border-red-500/30', indicator: 'bg-red-500', darkBorder: 'dark:border-red-500/40' },
};
// ------------------------------------------

export function TokenMechanics() {
    const [activeTierIndex, setActiveTierIndex] = useState<number>(1);
    const [progressValue, setProgressValue] = useState<number>(mapRatioToProgress(tierData[1].condition));
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const activeTier = tierData[activeTierIndex];
    const currentTierColors = tierColorMap[activeTier.id as keyof typeof tierColorMap];

    const cycleTier = useCallback(() => { /* Unchanged */ setActiveTierIndex((prevIndex) => { const nextIndex = (prevIndex + 1) % tierData.length; setProgressValue(mapRatioToProgress(tierData[nextIndex].condition)); return nextIndex; }); }, []);
    useEffect(() => { /* Unchanged */ if (isPlaying) { intervalRef.current = setInterval(cycleTier, CYCLE_INTERVAL_MS); } else { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } } return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; }, [isPlaying, cycleTier]);
    const togglePlayPause = () => setIsPlaying(!isPlaying);
    const setManualTier = (index: number) => { /* Unchanged */ setIsPlaying(false); setActiveTierIndex(index); setProgressValue(mapRatioToProgress(tierData[index].condition)); };

    const displayVariants = { initial: { opacity: 0.8, y: 10 }, animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }, exit: { opacity: 0.8, y: -10, transition: { duration: 0.2, ease: 'easeIn' } } };

    return (
        <Section id="mechanics" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/20 via-background to-background/70"> {/* Adjusted BG, increased padding */}
            <SectionHeader
                title="The $ROACH Engine: Dynamic 5-Tier System"
                description="This isn't static. $ROACH actively adapts transaction taxes and rewards based on real-time market conditions (Sell/Buy Ratio), creating an antifragile feedback loop."
                subtitle={<><Settings2 className="inline h-4 w-4 mr-1" /> Adaptive Core</> }
                alignment="center" className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                {/* Interactive Tier Visualizer Card */}
                <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} >
                    <Card className="shadow-lg border border-border/10 dark:border-border/20 overflow-hidden"> {/* Added overflow-hidden */}
                        <CardHeader className="border-b pb-4 border-border/10 dark:border-border/20"> {/* Header styles */}
                            <div className="flex justify-between items-start gap-2"> {/* Ensure gap and items-start */}
                                <div>
                                    <CardTitle className="text-xl md:text-2xl font-semibold">System Response Visualizer</CardTitle>
                                    <CardDescription className="mt-1 text-sm"> Simulating adaptation to market pressure.</CardDescription>
                                </div>
                                <TooltipProvider delayDuration={100}> 
                                    <Tooltip> 
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon" onClick={togglePlayPause} className="h-8 w-8 shrink-0">
                                                <span>{isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</span>
                                            </Button>
                                        </TooltipTrigger> 
                                        <TooltipContent side="left"><p>{isPlaying ? "Pause" : "Play"} Simulation</p></TooltipContent>
                                    </Tooltip> 
                                </TooltipProvider>
                            </div>
                            {/* Progress Bar Section */}
                            <div className="mt-5 space-y-1 relative">
                                <label htmlFor="marketPressure" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"> Market Pressure Meter <TooltipProvider><Tooltip><TooltipTrigger className="cursor-help"><span className="flex items-center gap-2"><Info className="h-3 w-3"/></span></TooltipTrigger><TooltipContent><p>Driven by Sell/Buy Ratio. Higher = More Selling Pressure.</p></TooltipContent></Tooltip></TooltipProvider> </label>
                                {/* Active Tier Indicator positioned over the progress bar */}
                                <div
                                    className={cn(
                                        "absolute bottom-[calc(100%+4px)] z-10 transition-all ease-out duration-300 transform -translate-x-1/2", // Positioning
                                        "px-1.5 py-0.5 rounded-full text-[0.6rem] font-bold whitespace-nowrap leading-none", // Badge styling
                                        currentTierColors.bg, currentTierColors.text, // Tier-specific colors
                                    )}
                                    style={{ left: `${progressValue}%`, transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
                                > TIER {activeTier.id}
                                </div>
                                <Progress id="marketPressure" value={progressValue} className="h-2.5 transition-all ease-out" indicatorClassName={cn(currentTierColors.indicator, 'transition-all ease-out')} style={{ transitionDuration: `${TRANSITION_DURATION_MS}ms` }} />
                                <div className="flex justify-between text-xs text-muted-foreground pt-0.5"> <span>Low Pressure</span> <span>High Pressure</span> </div>
                            </div>
                        </CardHeader>

                         {/* AUDIT FIX: Added padding to the motion.div inside CardContent instead of CardContent itself */}
                         <CardContent className="pt-0 pb-0"> {/* Remove padding from CardContent */}
                           <AnimatePresence mode="wait">
                               <motion.div key={activeTier.id} variants={displayVariants} initial="initial" animate="animate" exit="exit" className="p-6 min-h-[450px] flex flex-col"> {/* Apply padding and min-height here */}
                                     {/* Top Section: Mascot & Tier Info */}
                                    <div className="text-center mb-6">
                                         <CockroachMascot size="md" className={cn("mx-auto mb-2 opacity-80 transition-colors duration-300", currentTierColors.text)} />
                                         <Badge variant="secondary" className={cn( "text-sm md:text-base px-4 py-1 shadow-sm font-semibold transition-colors duration-300", currentTierColors.bg, currentTierColors.text, currentTierColors.border, currentTierColors.darkBorder )}> Tier {activeTier.id}: {activeTier.name} </Badge>
                                         <p className="text-sm text-muted-foreground mt-1.5"> Trigger: <strong className={cn("transition-colors duration-300", currentTierColors.text)}>{activeTier.condition}</strong> </p>
                                         <p className="text-xs italic text-muted-foreground/80 mt-1">{activeTier.status}</p>
                                     </div>

                                     {/* Middle Section: Key Metric Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                                         <MetricCard label="Buy Tax" value={`${activeTier.taxes.buy}%`} icon={TrendingUp} iconColor="text-green-600 dark:text-green-400" bgColor="bg-green-500/5 dark:bg-green-500/10" borderColor="border-green-500/20 dark:border-green-500/30" tooltip="Tax on buy transactions. Lower in high-pressure tiers." />
                                         <MetricCard label="Sell Tax" value={`${activeTier.taxes.sell}%`} icon={TrendingDown} iconColor="text-red-600 dark:text-red-400" bgColor="bg-red-500/5 dark:bg-red-500/10" borderColor="border-red-500/20 dark:border-red-500/30" tooltip="Tax on sell transactions. Higher in high-pressure tiers." />
                                         <MetricCard label="Sell Reflections" value={`${activeTier.distribution.sell.reflection}%`} icon={Users} iconColor="text-primary" bgColor="bg-primary/5 dark:bg-primary/10" borderColor="border-primary/20 dark:border-primary/30" tooltip="% of sell tax redistributed to holders." />
                                    </div>

                                     {/* Distribution Breakdown - Visually Improved */}
                                     <div className={cn("border rounded-lg p-3 text-xs space-y-2 mb-6 transition-colors duration-300", currentTierColors.border, currentTierColors.darkBorder, currentTierColors.bg)}>
                                        <h4 className="font-semibold text-center text-foreground/80">Tier {activeTier.id} Tax Distribution Breakdown</h4>
                                         <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <p className="font-medium text-green-700 dark:text-green-400">Buy ({activeTier.taxes.buy}%):</p>
                                                 <DistributionItem icon={Users} label="Reflection" value={activeTier.distribution.buy.reflection} color="text-primary" />
                                                 <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.buy.liquidity} color="text-blue-600 dark:text-blue-400" />
                                                 <DistributionItem icon={Megaphone} label="Marketing" value={activeTier.distribution.buy.marketing} color="text-orange-600 dark:text-orange-400" />
                                             </div>
                                             <div className="space-y-1 border-l border-border/30 pl-3">
                                                <p className="font-medium text-red-700 dark:text-red-400">Sell ({activeTier.taxes.sell}%):</p>
                                                 <DistributionItem icon={Users} label="Reflection" value={activeTier.distribution.sell.reflection} color="text-primary" />
                                                 <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.sell.liquidity} color="text-blue-600 dark:text-blue-400" />
                                                 <DistributionItem icon={Megaphone} label="Marketing" value={activeTier.distribution.sell.marketing} color="text-orange-600 dark:text-orange-400" />
                                             </div>
                                         </div>
                                    </div>

                                    {/* Visual Placeholder */}
                                    <div className="mt-auto pt-4 border-t border-border/10 dark:border-border/20"> {/* Push placeholder to bottom */}
                                        <div className="bg-muted/30 dark:bg-muted/10 border border-dashed rounded-md aspect-[16/5] flex items-center justify-center p-2">
                                           <p className="text-xs text-muted-foreground/70 dark:text-muted-foreground/50 italic text-center">
                                                 AI Prompt: Clean flowchart: 'Market Activity' -> 'Sell/Buy Ratio (4hr)' -> 'Tier (1-5)' -> 'Adjust Tax/Reflect %' -> (loops back to 'Market Activity'). Use theme colors & simple icons.
                                            </p>
                                         </div>
                                    </div>
                                </motion.div>
                           </AnimatePresence>
                        </CardContent>
                    </Card>
                </motion.div>

                 {/* Static Tier Reference Table Card */}
                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }} className="sticky top-24">
                    <Card className="shadow-lg border border-border/10 dark:border-border/20">
                         <CardHeader className="pb-3">
                            <CardTitle className="text-lg sm:text-xl font-semibold">Tier Quick Reference</CardTitle>
                             <CardDescription className="text-xs">Click row to pause simulation & view details.</CardDescription>
                         </CardHeader>
                         <CardContent className="px-0 sm:px-3 pb-4"> {/* Adjusted padding */}
                            <div className="overflow-x-auto"> {/* Allow horizontal scroll on small screens */}
                                <Table className="min-w-[340px]"> {/* Minimum width */}
                                     <TableHeader>
                                         <TableRow className="text-xs uppercase tracking-wider">{/* Remove any whitespace between opening and closing tags */}
                                            <TableHead className="w-[15%] text-center px-1 h-9">Tier</TableHead>
                                             <TableHead className="w-[25%] text-left px-1 h-9">Condition</TableHead>{/* Left align condition */}
                                            <TableHead className="w-[15%] text-center text-green-600 px-1 h-9">Buy</TableHead>
                                             <TableHead className="w-[15%] text-center text-red-600 px-1 h-9">Sell</TableHead>
                                             <TableHead className="w-[30%] text-center text-primary px-1 h-9">Reflection</TableHead>{/* Wider reflection column */}
                                         </TableRow>
                                     </TableHeader>
                                     <TableBody>
                                        {tierData.map((tier, index) => {
                                             const colors = tierColorMap[tier.id as keyof typeof tierColorMap];
                                            return (
                                                 <TableRow key={tier.id} onClick={() => setManualTier(index)} className={cn("text-[0.7rem] sm:text-xs text-center cursor-pointer hover:bg-muted/50 dark:hover:bg-muted/10 h-10 transition-colors", index === activeTierIndex && `bg-primary/5 dark:bg-primary/10 border-l-2 ${colors.border}`)}>{/* Make sure to keep tags next to each other */}
                                                    <TableCell className={cn("font-semibold py-1 px-1", colors.text)}>{tier.id}</TableCell>
                                                    <TableCell className="py-1 px-1 text-left text-muted-foreground">{tier.condition.replace('Sell/Buy Ratio ','')}</TableCell>
                                                     <TableCell className="py-1 px-1 text-green-700 dark:text-green-400 font-medium">{tier.taxes.buy}%</TableCell>
                                                     <TableCell className="py-1 px-1 text-red-700 dark:text-red-400 font-medium">{tier.taxes.sell}%</TableCell>
                                                     <TableCell className="py-1 px-1 text-primary font-medium">{tier.distribution.sell.reflection}% <span className="text-muted-foreground/70">(of Sell Tax)</span></TableCell>{/* Clarification */}
                                                 </TableRow> ); })}
                                     </TableBody>
                                </Table>
                            </div>
                             <TooltipProvider> <Tooltip> <TooltipTrigger asChild> 
                                <p className="text-[0.65rem] sm:text-xs text-muted-foreground/80 mt-3 px-4 sm:px-1 italic flex items-center gap-1 cursor-help">
                                    <span>
                                        <span className="flex items-center gap-2 inline-flex">
                                            <Timer className="h-3.5 w-3.5 shrink-0"/>
                                        </span> 
                                        Tier evaluated automatically every 4 hours based on ratio.
                                    </span>
                                </p>
                            </TooltipTrigger> <TooltipContent><p className="text-xs">System tracks Sell vs Buy volume to determine active tier.</p></TooltipContent> </Tooltip> </TooltipProvider>
                         </CardContent>
                    </Card>
                 </motion.div>
            </div>
        </Section>
    );
}

// --- MetricCard Sub-Component ---
interface MetricCardProps { label: string; value: string; icon: React.ElementType; iconColor: string; bgColor: string; borderColor: string; tooltip: string; }
function MetricCard({ label, value, icon: Icon, iconColor, bgColor, borderColor, tooltip }: MetricCardProps) {
    return (
        <TooltipProvider delayDuration={100}> <Tooltip> <TooltipTrigger className={cn( "border rounded-lg p-2 sm:p-3 text-left w-full h-full cursor-help transition-colors duration-300", borderColor, bgColor )}>
            <div className="flex items-center justify-between mb-1"> <span className="text-[0.65rem] sm:text-xs font-medium text-muted-foreground flex items-center gap-1"> <Icon className={cn("h-3.5 w-3.5", iconColor)} /> {label} </span> <span className="flex items-center gap-2"><Info className="h-3 w-3 text-muted-foreground/50"/></span> </div>
            <p className="text-lg sm:text-xl font-bold text-foreground">{value}</p>
         </TooltipTrigger> <TooltipContent side="top" align="center"><p className="max-w-[160px] text-xs">{tooltip}</p></TooltipContent> </Tooltip> </TooltipProvider>
    );
}

// --- DistributionItem Sub-Component ---
interface DistributionItemProps { icon: React.ElementType; label: string; value: number; color: string; }
function DistributionItem({ icon: Icon, label, value, color }: DistributionItemProps) {
    return ( <div className="flex items-center justify-between text-xs"> <span className="flex items-center gap-1 text-muted-foreground"> <span className="flex items-center gap-2"><Icon className={cn("h-3 w-3", color)} /></span> {label} </span> <span className={cn("font-medium text-foreground/90")}>{value.toFixed(1)}%</span> </div> );
}
// --- END OF FILE ./components/sections/TokenMechanics.tsx ---