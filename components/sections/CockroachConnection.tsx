// --- START OF FILE ./components/sections/CockroachConnection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Using CardTitle now for semantics
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Zap, Shield, RotateCw, Network, Bug, Link2, Info } from "lucide-react";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function CockroachConnection() {

  const traits = [ // Data unchanged
    { icon: Zap, title: "Extreme Resilience", cockroachFact: "Withstands lethal radiation levels many times over.", tokenLinkTitle: "Parallel: Tier 5 Response", tokenLinkText: "Maximum sell tax (15%) and reflection rewards (10%) activate during severe sell-offs, fiercely protecting the ecosystem akin to radiation resistance.", color: "red", },
    { icon: Shield, title: "Structural Defense", cockroachFact: "Hardened exoskeleton provides robust physical protection.", tokenLinkTitle: "Parallel: Sell Pressure Deterrent", tokenLinkText: "High sell taxes in Tiers 4 (12%) & 5 (15%) create a significant economic barrier, disincentivizing large, destabilizing sell orders.", color: "orange", },
    { icon: RotateCw, title: "Rapid Adaptation", cockroachFact: "Quickly develops resistance to new environmental threats.", tokenLinkTitle: "Parallel: Dynamic Adjustments", tokenLinkText: "The system re-evaluates the Sell/Buy Ratio every 4 hours, allowing tax/reflection tiers to adapt swiftly to market dynamics.", color: "yellow", },
    { icon: Network, title: "Decentralized Strength", cockroachFact: "Can survive headless for weeks due to a distributed nervous system.", tokenLinkTitle: "Parallel: Holder Network Effects", tokenLinkText: "Reflections are distributed network-wide to all holders automatically, enhancing collective resilience without central points of failure.", color: "blue", },
  ];

   const colorMap = { // Data unchanged
      red: { text: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10 dark:bg-red-500/20', border: 'border-red-500/30 dark:border-red-500/40', hoverBorder: 'hover:border-red-500/50 dark:hover:border-red-400/60' },
      orange: { text: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/20', border: 'border-orange-500/30 dark:border-orange-500/40', hoverBorder: 'hover:border-orange-500/50 dark:hover:border-orange-400/60' },
      yellow: { text: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-500/10 dark:bg-yellow-500/20', border: 'border-yellow-500/30 dark:border-yellow-500/40', hoverBorder: 'hover:border-yellow-500/50 dark:hover:border-yellow-400/60' },
      blue: { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30 dark:border-blue-500/40', hoverBorder: 'hover:border-blue-500/50 dark:hover:border-blue-400/60' },
   };

   // Animation Variants - Data unchanged
   const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
   const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
   const cardGridVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 }}};
   const cardItemVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } } };

  return (
    <Section id="cockroach-connection" className="py-20 md:py-28 lg:py-32 bg-muted/20 dark:bg-background/20">
       <SectionHeader
        title="Inspired by Nature's Ultimate Survivor"
        description="The cockroach embodies antifragility. Its biological adaptations directly inform $ROACH's dynamic economic design for resilience and growth under pressure."
        subtitle={<><Bug className="inline h-4 w-4 mr-1" /> Biological Blueprint</>}
        alignment="center"
        className="mb-16"
       />

      {/* Intro Row: Mascot + Text */}
      <motion.div
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-16 md:mb-20" // Increased gap slightly
      >
          {/* Mascot Column */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end lg:col-span-2"> {/* Adjusted span and alignment */}
             <motion.div
                whileHover={{ scale: 1.07, rotate: 1.5, transition: { type: 'spring', stiffness: 250, damping: 10 } }} // Enhanced hover
                whileTap={{ scale: 0.98 }}
                className="cursor-grab" // Indicate potential interaction (even if none)
             >
                <CockroachMascot size="xl" className="text-foreground/80 dark:text-foreground/60"/>
             </motion.div>
          </motion.div>

         {/* Text Column */}
         <motion.div variants={itemVariants} className="lg:col-span-3 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground/90">
                    300 Million Years of Proven Resilience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose"> {/* Added max-w-prose */}
                    Thriving through mass extinctions, the cockroach demonstrates unparalleled survival engineering. $ROACH translates these core principles of adaptation and ruggedness into its unique tokenomic framework.
                </p>
                 {/* Visual Placeholder for Bridging Diagram - UNCOMMENTED */}
                 <div className="mt-6 lg:mt-8 bg-white/5 border border-dashed border-border/30 rounded-lg aspect-[16/5] flex items-center justify-center">
                   <p className="text-xs text-muted-foreground/80 dark:text-muted-foreground/60 italic p-4 text-center">
                     AI Prompt: Diagram showing simple icons of cockroach traits (radiation symbol, shield, cycle, network) connecting via lines/arrows to corresponding $ROACH mechanics (Tier 5 symbol, Tax symbol, 4hr timer, Reflection symbol). Use a clean, slightly technical style consistent with page theme.
                   </p>
                 </div>
          </motion.div>
      </motion.div>

      {/* Trait Cards grid */}
      <motion.div
          variants={cardGridVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto" // Adjusted gap slightly
        >
        {traits.map((trait) => {
            const colors = colorMap[trait.color as keyof typeof colorMap];
            return (
            <motion.div key={trait.title} variants={cardItemVariants}>
              <HoverCard openDelay={100} closeDelay={50}> {/* Slightly faster open */}
                <HoverCardTrigger asChild>
                    <Card className={cn(
                        "h-full border shadow-md transition-all duration-300 flex flex-col cursor-help",
                        "hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 dark:focus-within:ring-offset-background", // Added dark mode offset
                        colors.border, colors.hoverBorder,
                        "dark:bg-card/50" // Make cards slightly transparent in dark mode maybe?
                        )}>
                        <CardContent className="p-5 flex-grow flex flex-col"> {/* Keep padding standard */}
                            {/* Card Header Area */}
                            <div className="flex items-start gap-3 mb-4"> {/* Changed to items-start */}
                                <div className={cn("p-2 rounded-full shrink-0", colors.bg)}>
                                    <trait.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", colors.text)} />
                                </div>
                                <div className="flex-1">
                                    {/* Using CardTitle component */}
                                    <CardTitle className="text-base sm:text-lg font-semibold leading-tight">{trait.title}</CardTitle>
                                </div>
                                <Info className="h-4 w-4 text-muted-foreground/50 shrink-0 group-hover:text-primary transition-colors duration-200" aria-hidden="true" />
                            </div>
                            {/* Cockroach Fact */}
                            <div className="flex items-start gap-2.5 text-sm text-muted-foreground flex-grow mb-4">
                               <Bug className="h-4 w-4 text-muted-foreground/60 mt-[3px] shrink-0"/>
                               <p className="leading-snug"><span className="font-semibold text-foreground/80">Trait:</span> {trait.cockroachFact}</p>
                            </div>
                             {/* Hover Trigger Footer */}
                             <div className="mt-auto pt-2 border-t border-border/30 dark:border-border/20 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                                 <div className="flex items-center justify-end gap-1"> {/* Right align hint */}
                                    (Hover for $ROACH Link) <Link2 className="h-3 w-3"/>
                                 </div>
                             </div>
                        </CardContent>
                    </Card>
                </HoverCardTrigger>
                 {/* HoverCardContent Styling */}
                <HoverCardContent side="top" align="center" className={cn(
                     "w-80 max-w-[calc(100vw-2rem)] shadow-xl border rounded-lg p-4 backdrop-blur-sm", // Added backdrop blur
                     colors.border, colors.bg, // Use themed colors
                      "dark:border dark:shadow-md"
                     )}>
                    <div className="space-y-1.5">
                        <h4 className={cn("text-sm font-semibold flex items-center gap-1.5", colors.text)}>
                           <Link2 className="h-4 w-4"/> $ROACH Parallel
                        </h4>
                         <p className="text-xs font-medium text-foreground/90 mb-1">{trait.tokenLinkTitle}</p>
                         <p className="text-xs text-muted-foreground leading-relaxed">{trait.tokenLinkText}</p>
                    </div>
                </HoverCardContent>
             </HoverCard>
            </motion.div>
            );
        })}
      </motion.div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/CockroachConnection.tsx ---