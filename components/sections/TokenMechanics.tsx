// --- START OF FILE ./components/sections/TokenMechanics.tsx ---

"use client";

import React, { useState, useEffect } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { tierData, Tier } from "@/lib/tier-data"; // Import tier data and interface
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Users, Activity, Info, Percent, Droplets, Megaphone, Timer } from "lucide-react"; // Added Timer
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function TokenMechanics() {
  const { memeMode } = useMemeMode();
  // Default to Tier 2 (Equilibrium) for initial display
  const [marketPressure, setMarketPressure] = useState(50);
  const [activeTier, setActiveTier] = useState<Tier>(tierData[1]);

  // Determine active tier based on simulated pressure
  useEffect(() => {
    let tierIndex = 1; // Default to Tier 2
    if (marketPressure < 15) tierIndex = 0; // Tier 1 threshold
    else if (marketPressure < 45) tierIndex = 1; // Tier 2 threshold
    else if (marketPressure < 65) tierIndex = 2; // Tier 3 threshold
    else if (marketPressure < 85) tierIndex = 3; // Tier 4 threshold
    else tierIndex = 4; // Tier 5
    setActiveTier(tierData[tierIndex]);
  }, [marketPressure]);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };


  return (
    <Section id="mechanics" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <SectionHeader
        title={memeMode ? "The 5-Tier Roach Defense System™" : "How $ROACH Adapts: The 5-Tier System"}
        description={memeMode
          ? "This ain't static garbage. $ROACH shifts its strategy AUTOMATICALLY based on market FUD levels. Here’s the breakdown:"
          : "The core of $ROACH's antifragility lies in its dynamic 5-tier system. It adjusts transaction taxes and reward distributions based on observed market pressure, turning volatility into strength."
        }
        subtitle={<><Activity className="inline h-4 w-4 mr-1"/> Core Mechanism</>}
        alignment="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Interactive Visualizer Card */}
        <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300", memeMode && "border-dashed border-primary/30")}>
            <CardHeader>
                <CardTitle className={cn("text-xl md:text-2xl", memeMode && "font-mission")}>
                {memeMode ? "FUD Gauge & Roach Response" : "Market Pressure Simulator"}
                </CardTitle>
                <CardDescription>
                {memeMode ? "Slide the FUD-O-Meter to see how the Roach adapts." : "Adjust the slider to simulate market pressure and see how taxes and rewards change."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Slider */}
                <div className="mb-10">
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="pressure-slider" className="text-sm font-medium flex items-center gap-1.5">
                        <TrendingDown className="h-4 w-4 text-red-500"/>
                        {memeMode ? "Simulated FUD Level" : "Market Sell Pressure"}
                        <TrendingUp className="h-4 w-4 text-green-500"/>
                    </label>
                    {/* Current Tier Display */}
                    <Badge variant="outline" className={cn(
                        "font-semibold px-3 py-1 text-sm transition-colors duration-300",
                        activeTier.id === 1 ? "border-blue-500/50 text-blue-600 bg-blue-500/10" :
                        activeTier.id === 2 ? "border-gray-500/50 text-gray-600 bg-gray-500/10" :
                        activeTier.id === 3 ? "border-yellow-500/50 text-yellow-600 bg-yellow-500/10" :
                        activeTier.id === 4 ? "border-orange-500/50 text-orange-600 bg-orange-500/10" :
                        "border-red-500/50 text-red-600 bg-red-500/10",
                        memeMode && "font-mission tracking-wider"
                        )}>
                        Tier {activeTier.id}: {memeMode ? activeTier.name : activeTier.status.split(',')[0]} {/* Show short status */}
                    </Badge>
                </div>
                <Slider
                    id="pressure-slider" min={0} max={100} step={1}
                    value={[marketPressure]} onValueChange={(v) => setMarketPressure(v[0])}
                    className="my-4 [&_[data-slot=slider-thumb]]:bg-primary [&_[data-slot=slider-range]]:bg-primary/80" // Style slider
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Calm Seas</span>
                    <span>Panic Dump</span>
                </div>
                </div>

                {/* Mascot & Metrics display */}
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around mb-10">
                {/* Cockroach Mascot */}
                <div className="text-center">
                    <CockroachMascot size="lg" className="mb-2" /> {/* Use default size */}
                    <p className="text-sm font-semibold">
                    {memeMode ? `Mode: ${activeTier.name}` : `Status: ${activeTier.status.split(',')[0]}`}
                    </p>
                    <p className="text-xs text-muted-foreground">{activeTier.condition}</p>
                </div>
                {/* Metric Displays */}
                <div className="w-full max-w-xs space-y-4">
                    <MetricDisplay
                    label={memeMode ? "Sell Tax (Punishment)" : "Sell Tax"}
                    value={`${activeTier.taxes.sell}%`}
                    progressValue={(activeTier.taxes.sell / 15) * 100} // Max sell tax is 15
                    colorClass="bg-red-500"
                    icon={TrendingDown}
                    tooltip={memeMode ? "Higher tax punishes panic sellers HARD." : "Tax applied to sell transactions, increases with pressure."}
                    />
                    <MetricDisplay
                    label={memeMode ? "Buy Tax (Dip Discount)" : "Buy Tax"}
                    value={`${activeTier.taxes.buy}%`}
                    progressValue={100 - ((activeTier.taxes.buy - 2) / 2) * 100} // Max buy tax is 4, min is 2 (range of 2)
                    colorClass="bg-green-500"
                    icon={TrendingUp}
                    tooltip={memeMode ? "Lower tax rewards CHADS buying the blood." : "Tax applied to buy transactions, decreases with pressure."}
                    />
                    <MetricDisplay
                    label={memeMode ? "HODLer Payday (Reflections)" : "Holder Reflections"}
                    value={`${activeTier.distribution.sell.reflection}%`}
                    progressValue={(activeTier.distribution.sell.reflection / 10) * 100} // Max reflection is 10
                    colorClass="bg-primary"
                    icon={Users}
                    tooltip={memeMode ? "Your cut from the paper hands' tears (comes from Sell Tax)." : "Percentage of sell tax volume automatically distributed to all holders."}
                    />
                </div>
                </div>

                {/* Tax Distribution Accordion */}
                <Accordion type="single" collapsible className="w-full mt-6 border-t pt-6">
                <AccordionItem value="tax-distribution">
                    <AccordionTrigger className={cn("text-base hover:no-underline font-semibold", memeMode && "font-mission")}>
                    {memeMode ? `Tier ${activeTier.id}: Where's the Tax Loot Go?` : `Tier ${activeTier.id}: Tax Allocation`}
                    </AccordionTrigger>
                    <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        {memeMode
                            ? `Here's how the spoils are divided in "${activeTier.name}" mode:`
                            : `Collected taxes are allocated to strengthen the ecosystem. In Tier ${activeTier.id}, the distribution is:`
                        }
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Buy Tax Distribution */}
                        <div className="space-y-2.5 rounded-lg border p-4 bg-green-500/5">
                        <h4 className="font-semibold text-sm flex items-center gap-2 border-b pb-2 mb-2 text-green-700">
                            <TrendingUp className="h-4 w-4"/> Buy Tax ({activeTier.taxes.buy}%) Allocation
                        </h4>
                        <DistributionItem icon={Users} label={memeMode ? "Reflections" : "Reflections"} value={activeTier.distribution.buy.reflection} color="text-primary" tooltip="Distributed to existing token holders." />
                        <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.buy.liquidity} color="text-blue-500" tooltip="Added to the Raydium liquidity pool to deepen market depth."/>
                        <DistributionItem icon={Megaphone} label="Marketing/Treasury" value={activeTier.distribution.buy.marketing} color="text-orange-500" tooltip="Funds growth, development, and awareness initiatives."/>
                        </div>
                        {/* Sell Tax Distribution */}
                        <div className="space-y-2.5 rounded-lg border p-4 bg-red-500/5">
                        <h4 className="font-semibold text-sm flex items-center gap-2 border-b pb-2 mb-2 text-red-700">
                            <TrendingDown className="h-4 w-4"/> Sell Tax ({activeTier.taxes.sell}%) Allocation
                        </h4>
                        <DistributionItem icon={Users} label={memeMode ? "Reflections" : "Reflections"} value={activeTier.distribution.sell.reflection} color="text-primary" tooltip="Distributed to existing token holders. Gets bigger in high tiers!" />
                        <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.sell.liquidity} color="text-blue-500" tooltip="Added to the Raydium liquidity pool."/>
                        <DistributionItem icon={Megaphone} label="Marketing/Treasury" value={activeTier.distribution.sell.marketing} color="text-orange-500" tooltip="Funds growth, development, and awareness initiatives."/>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                        {memeMode
                            ? `Key takeaway: When FUD hits Tier 5, HODLers get the biggest slice (10% reflection!) from panic sellers.`
                            : `Note: Distribution priorities shift with tiers. Higher tiers increasingly favor holder reflections from sell taxes.`
                        }
                    </p>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

            </CardContent>
            </Card>
        </motion.div>

        {/* Tier Reference Table Card */}
         <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300", memeMode && "border-dashed border-primary/30")}>
            <CardHeader>
                <CardTitle className={cn("text-xl md:text-2xl", memeMode && "font-mission")}>Tier Quick Reference</CardTitle>
                <CardDescription>Overview of tax rates and primary rewards per tier.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[30px] text-center">Tier</TableHead>
                    <TableHead className="text-center text-green-600">Buy Tax</TableHead>
                    <TableHead className="text-center text-red-600">Sell Tax</TableHead>
                    <TableHead className="text-center text-primary">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-help border-b border-dashed border-primary/50">Sell Reflect.</TooltipTrigger>
                                <TooltipContent><p>Reflections from Sell Tax</p></TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tierData.map((tier) => (
                    <TableRow
                        key={tier.id}
                        className={cn(
                        "text-xs transition-colors duration-200 text-center",
                        tier.id === activeTier.id && "bg-primary/10 font-semibold"
                        )}
                    >
                        <TableCell className="font-medium text-foreground">{tier.id}</TableCell>
                        <TableCell className="text-green-600">{tier.taxes.buy}%</TableCell>
                        <TableCell className="text-red-600">{tier.taxes.sell}%</TableCell>
                        <TableCell className="text-primary">{tier.distribution.sell.reflection}%</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                {/* 4-Hour Check Explanation */}
                <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p className="text-xs text-muted-foreground mt-5 italic flex items-center gap-1.5 cursor-help">
                            <Timer className="h-3.5 w-3.5 shrink-0"/> Tiers update automatically every 4 hours based on the Sell/Buy volume ratio.
                        </p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="max-w-[250px]">
                           The smart contract calculates the ratio of sell volume to buy volume over the preceding 4-hour window to determine the current tier.
                           <br/><br/>
                           <span className="font-semibold">Tier Ratios:</span><br/>
                           T1: &lt; 0.8 | T2: 0.8-1.2 | T3: 1.2-2.0 | T4: 2.0-3.0 | T5: &gt; 3.0
                        </p>
                    </TooltipContent>
                </Tooltip>
                </TooltipProvider>
            </CardContent>
            </Card>
         </motion.div>
      </div>
    </Section>
  );
}

// --- Sub Components ---

// Metric Display with Progress Bar and Tooltip
interface MetricDisplayProps {
  label: string;
  value: string;
  progressValue: number;
  colorClass: string; // e.g., "bg-red-500"
  icon: React.ElementType;
  tooltip: string;
}

function MetricDisplay({ label, value, progressValue, colorClass, icon: Icon, tooltip }: MetricDisplayProps) {
    const { memeMode } = useMemeMode();
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-full text-left cursor-help">
                     <div className="flex justify-between items-center mb-1 text-sm">
                         <span className="font-medium text-muted-foreground flex items-center gap-1.5">
                             <Icon className={cn("h-4 w-4", colorClass.replace('bg-', 'text-'))} />
                             {label}
                         </span>
                         <span className="font-semibold text-foreground">{value}</span>
                     </div>
                     <Progress value={progressValue} className={cn("h-2", colorClass)} />
                </TooltipTrigger>
                <TooltipContent side="top" align="start">
                     <p className="max-w-[200px]">{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

// Distribution Item with Tooltip
interface DistributionItemProps {
    icon: React.ElementType;
    label: string;
    value: number;
    color: string; // e.g., "text-primary"
    tooltip: string;
}

function DistributionItem({ icon: Icon, label, value, color, tooltip }: DistributionItemProps) {
    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex items-center justify-between text-xs cursor-help">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Icon className={cn("h-3.5 w-3.5", color)} /> {label}
                    </span>
                    {/* Format value with one decimal place */}
                    <span className={cn("font-medium", color)}>{value.toFixed(1)}%</span>
                </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
                <p className="max-w-[180px] text-xs">{tooltip}</p> {/* Reduced font size */}
            </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
}
// --- END OF FILE ./components/sections/TokenMechanics.tsx ---