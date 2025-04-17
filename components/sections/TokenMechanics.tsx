// --- START OF FILE ./components/sections/TokenMechanics.tsx ---

"use client";

import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Using Progress bar for animation visual
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { tierData, Tier } from "@/lib/tier-data";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Users, Activity, Info, Percent, Droplets, Megaphone, Timer, Play, Pause } from "lucide-react"; // Added Play/Pause
import { Button } from "@/components/ui/button"; // For Play/Pause button
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

// Simulation Constants
const CYCLE_INTERVAL_MS = 2500; // Time spent displaying each tier before moving to next
const TRANSITION_DURATION_MS = 500; // Duration of the progress bar transition

export function TokenMechanics({ fullHeight = false }: { fullHeight?: boolean }) { // Accept fullHeight prop
  const { memeMode } = useMemeMode();
  const [activeTierIndex, setActiveTierIndex] = useState<number>(1); // Start at Tier 2
  const [progressValue, setProgressValue] = useState<number>(25); // Initial progress for Tier 2 (approx)
  const [isPlaying, setIsPlaying] = useState(true); // Animation state
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store interval ID

  const activeTier = tierData[activeTierIndex];
  const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; } } = {
      1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', indicator: 'bg-blue-500' },
      2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500' },
      3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500' },
      4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500' },
      5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500' },
   };
   const currentTierColors = tierColorMap[activeTier.id as keyof typeof tierColorMap];


  // Animation Logic Effect
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTierIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % tierData.length; // Cycle through 0-4
           // Map index to approximate progress bar value (0-100)
          // Tier 1 (index 0) ~ 5%, Tier 2 (1) ~ 25%, Tier 3 (2) ~ 50%, Tier 4 (3) ~ 75%, Tier 5 (4) ~ 95%
          let nextProgress = 5;
          if (nextIndex === 1) nextProgress = 25;
          else if (nextIndex === 2) nextProgress = 50;
          else if (nextIndex === 3) nextProgress = 75;
          else if (nextIndex === 4) nextProgress = 95;
          setProgressValue(nextProgress);
          return nextIndex;
        });
      }, CYCLE_INTERVAL_MS);
    } else {
      // Clear interval if paused
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // Cleanup function to clear interval on component unmount or when isPlaying changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]); // Rerun effect when isPlaying changes

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

   // Function to manually set tier (e.g., from clicking table row)
  const setManualTier = (index: number) => {
      setIsPlaying(false); // Pause animation on manual selection
      setActiveTierIndex(index);
      let nextProgress = 5;
      if (index === 1) nextProgress = 25;
      else if (index === 2) nextProgress = 50;
      else if (index === 3) nextProgress = 75;
      else if (index === 4) nextProgress = 95;
      setProgressValue(nextProgress);
  };


  const displayVariants = { /* ... keep as before ... */
       initial: { opacity: 0.5, scale: 0.98 },
       animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
       exit: { opacity: 0.5, scale: 0.98, transition: { duration: 0.2, ease: 'easeIn' } }
   };


  return (
    <Section id="mechanics" fullHeight={fullHeight} className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background">
      <SectionHeader
        title={memeMode ? "Roach Brain: Tactical Switching" : "Dynamic Mechanics: The 5-Tier System"}
        description={memeMode
          ? "$ROACH ain't static. It watches, learns, adapts. See the animation below - that's the Roach Brain cycling through combat modes based on FUD levels."
          : "Witness $ROACH's adaptive core in action. The system cycles through operational tiers based on simulated market pressure, dynamically adjusting taxes and rewards."
        }
        subtitle={<><Activity className="inline h-4 w-4 mr-1"/> Live System Simulation</>}
        alignment="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {/* Interactive Tier Selector & Display */}
        <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
        >
          <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300", memeMode && "border-dashed border-primary/30")}>
            <CardHeader className="border-b pb-4"> {/* Reduced bottom padding */}
              <div className="flex justify-between items-center">
                  <div>
                     <CardTitle className={cn("text-xl md:text-2xl", memeMode && "font-mission")}>
                     {memeMode ? "Roach Combat Simulator" : "Tier Effect Visualizer"}
                     </CardTitle>
                     <CardDescription className="mt-1">
                     {memeMode ? "Watch the Roach Brain shift tactics automatically." : "Animation cycles through tiers, showing adaptive changes."}
                     </CardDescription>
                 </div>
                  {/* Play/Pause Button */}
                   <TooltipProvider delayDuration={100}>
                     <Tooltip>
                       <TooltipTrigger asChild>
                         <Button variant="outline" size="icon" onClick={togglePlayPause} className="h-8 w-8">
                           {isPlaying ? <Pause className="h-4 w-4"/> : <Play className="h-4 w-4"/>}
                         </Button>
                       </TooltipTrigger>
                       <TooltipContent side="left">
                         <p>{isPlaying ? "Pause" : "Play"} Animation</p>
                       </TooltipContent>
                     </Tooltip>
                   </TooltipProvider>
              </div>

             {/* Animated Progress Bar representing Market Pressure/Tier Cycle */}
              <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground">
                     <span>Calm Market (Tier 1)</span>
                     <span>Max Pressure (Tier 5)</span>
                  </div>
                  {/* Applying transition directly for smoothness */}
                  <Progress
                      value={progressValue}
                      className="h-3"
                      indicatorClassName={cn(currentTierColors.indicator, 'transition-all ease-out')}
                      style={{transitionDuration: `${isPlaying ? TRANSITION_DURATION_MS : 300}ms` }} // Apply transition duration
                    />
              </div>
            </CardHeader>

            {/* Central Dynamic Display Area */}
            <CardContent className="pt-6 min-h-[380px] md:min-h-[420px]"> {/* Added min-height */}
              {/* AnimatePresence still useful for content switching */}
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeTierIndex} // Key change triggers animation
                    variants={displayVariants}
                    initial="initial" animate="animate" exit="exit"
                  >
                    {/* Mascot & Current Tier Badge */}
                    <div className="text-center mb-6">
                       <CockroachMascot size="lg" className="mb-2 mx-auto" />
                       <Badge variant="secondary" className={cn(
                           "text-base px-4 py-1 shadow-sm", // Larger badge
                           currentTierColors.bg, currentTierColors.text, currentTierColors.border,
                           memeMode && "font-mission tracking-wider"
                        )}>
                          Tier {activeTier.id}: {memeMode ? activeTier.name : activeTier.status.split(',')[0]}
                       </Badge>
                        <p className="text-xs text-muted-foreground mt-1.5">Condition: {activeTier.condition}</p>
                    </div>

                      {/* Key Metrics */}
                      <div className="w-full max-w-md mx-auto space-y-3.5 mb-8">
                           <MetricDisplay label={memeMode ? "Sell Tax (PANIC TAX)" : "Sell Tax"} value={`${activeTier.taxes.sell}%`} progressValue={(activeTier.taxes.sell / 15) * 100} colorClass="bg-red-500" icon={TrendingDown} tooltip={`Required for Tier ${activeTier.id} activation.`} />
                           <MetricDisplay label={memeMode ? "Buy Tax (DISCOUNT)" : "Buy Tax"} value={`${activeTier.taxes.buy}%`} progressValue={100 - ((activeTier.taxes.buy - 2) / 2) * 100} colorClass="bg-green-500" icon={TrendingUp} tooltip={`Required for Tier ${activeTier.id} activation.`} />
                           <MetricDisplay label={memeMode ? "HODLer PAYDAY" : "Sell Reflections"} value={`${activeTier.distribution.sell.reflection}%`} progressValue={(activeTier.distribution.sell.reflection / 10) * 100} colorClass="bg-primary" icon={Users} tooltip={memeMode ? "Your reward from SELL taxes. Bigger reward = More FUD!" : "% of sell tax redistributed to holders."} />
                      </div>

                     {/* Tax Distribution - Simplified View (Accordion might be too much with animation) */}
                     <div className="border-t pt-4 mt-6">
                          <h4 className={cn("text-base font-semibold mb-3 text-center", memeMode && "font-mission")}>
                             Tier {activeTier.id} Tax Allocation:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2 rounded-lg border border-green-500/20 p-3 bg-green-500/5 text-xs">
                               <p className="font-semibold text-green-700 mb-1">Buy Tax ({activeTier.taxes.buy}%):</p>
                               <DistributionItem icon={Users} label="Reflect." value={activeTier.distribution.buy.reflection} color="text-primary" />
                               <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.buy.liquidity} color="text-blue-500" />
                               <DistributionItem icon={Megaphone} label="Marketing" value={activeTier.distribution.buy.marketing} color="text-orange-500"/>
                            </div>
                             <div className="space-y-2 rounded-lg border border-red-500/20 p-3 bg-red-500/5 text-xs">
                               <p className="font-semibold text-red-700 mb-1">Sell Tax ({activeTier.taxes.sell}%):</p>
                               <DistributionItem icon={Users} label="Reflect." value={activeTier.distribution.sell.reflection} color="text-primary" />
                               <DistributionItem icon={Droplets} label="Liquidity" value={activeTier.distribution.sell.liquidity} color="text-blue-500" />
                               <DistributionItem icon={Megaphone} label="Marketing" value={activeTier.distribution.sell.marketing} color="text-orange-500" />
                            </div>
                          </div>
                     </div>

                 </motion.div>
               </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Static Tier Reference Table Card - Remains mostly the same */}
         <motion.div
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}
             className="sticky top-24" // Make table sticky for reference while viewing main animation
         >
          <Card className={cn("shadow-lg", memeMode && "border-dashed border-primary/30")}>
            <CardHeader>
              <CardTitle className={cn("text-xl", memeMode && "font-mission")}>Tier Quick Reference</CardTitle>
              <CardDescription className="text-xs">Click row to pause animation on selected tier.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 sm:px-4 pb-4">
              <Table>
                 {/* ... TableHeader ... */}
                <TableHeader>
                   <TableRow>
                    <TableHead className="w-[30px] text-center">Tier</TableHead>
                    <TableHead className="text-center text-green-600 px-1">Buy</TableHead>
                    <TableHead className="text-center text-red-600 px-1">Sell</TableHead>
                    <TableHead className="text-center text-primary px-1">Refl.</TableHead>
                   </TableRow>
                </TableHeader>
                <TableBody>
                  {tierData.map((tier, index) => {
                     const colors = tierColorMap[tier.id as keyof typeof tierColorMap];
                    return (
                        <TableRow
                            key={tier.id}
                            className={cn(
                                "text-xs transition-colors duration-300 text-center cursor-pointer hover:bg-muted/50",
                                index === activeTierIndex && `bg-primary/10 font-bold ${colors.text}`
                            )}
                            onClick={() => setManualTier(index)} // Allow manual selection
                        >
                            <TableCell className="font-medium">{tier.id}</TableCell>
                            <TableCell className="text-green-600 px-1">{tier.taxes.buy}%</TableCell>
                            <TableCell className="text-red-600 px-1">{tier.taxes.sell}%</TableCell>
                            <TableCell className="text-primary px-1">{tier.distribution.sell.reflection}%</TableCell>
                        </TableRow>
                    );
                   })}
                </TableBody>
              </Table>
              {/* ... 4-Hour Tooltip ... */}
              <TooltipProvider> <Tooltip> <TooltipTrigger asChild>
                    <p className="text-xs text-muted-foreground mt-4 px-4 sm:px-0 italic flex items-center gap-1.5 cursor-help">
                      <Timer className="h-3.5 w-3.5 shrink-0"/> Tiers auto-update based on 4-hour Sell/Buy ratio.
                    </p>
               </TooltipTrigger> <TooltipContent> <p className="max-w-[250px] text-xs">
                     Ratio thresholds: T1 &lt; 0.8 | T2 0.8-1.2 | T3 1.2-2.0 | T4 2.0-3.0 | T5  &gt; 3.0
                    </p> </TooltipContent> </Tooltip> </TooltipProvider>
            </CardContent>
          </Card>
         </motion.div>
      </div>
    </Section>
  );
}

// --- Sub Components (Keep as previously defined, they adapt well) ---
interface MetricDisplayProps { /* ... */ label: string; value: string; progressValue: number; colorClass: string; icon: React.ElementType; tooltip: string; }
function MetricDisplay({ label, value, progressValue, colorClass, icon: Icon, tooltip }: MetricDisplayProps) { /* ... */
     const { memeMode } = useMemeMode(); // Use memeMode if needed inside
     // Keep implementation from previous step - added slight style tweak below
      return (
         <TooltipProvider delayDuration={100}> <Tooltip> <TooltipTrigger className="w-full text-left cursor-help">
               <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="font-medium text-muted-foreground flex items-center gap-1.5"> <Icon className={cn("h-4 w-4", colorClass.replace('bg-', 'text-'))} /> {label} </span>
                  <span className="font-semibold text-foreground">{value}</span>
               </div>
                <Progress value={progressValue} className="h-2 [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-out" indicatorClassName={colorClass} />
          </TooltipTrigger> <TooltipContent side="top" align="start"> <p className="max-w-[200px] text-xs">{tooltip}</p> </TooltipContent> </Tooltip> </TooltipProvider>
     );
 }
interface DistributionItemProps { /* ... */ icon: React.ElementType; label: string; value: number; color: string; tooltip?: string; } // Made tooltip optional
function DistributionItem({ icon: Icon, label, value, color, tooltip }: DistributionItemProps) { /* ... */
    // Keep implementation - maybe remove tooltip trigger if simplifying display
    const content = (
         <div className="flex items-center justify-between">
             <span className="flex items-center gap-1.5 text-muted-foreground"> <Icon className={cn("h-3.5 w-3.5", color)} /> {label} </span>
             <span className={cn("font-medium", color)}>{value.toFixed(1)}%</span>
         </div>
    );

     if (!tooltip) return content; // Return directly if no tooltip needed

     return (
       <TooltipProvider delayDuration={100}> <Tooltip> <TooltipTrigger className="w-full text-left cursor-help">
             {content}
       </TooltipTrigger> <TooltipContent side="top" align="start"> <p className="max-w-[180px] text-xs">{tooltip}</p> </TooltipContent> </Tooltip> </TooltipProvider>
     );
 }

// --- END OF FILE ./components/sections/TokenMechanics.tsx ---