// --- START OF FILE ./components/sections/CockroachConnection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Zap, Shield, RotateCw, Network, Bug, Link2, Info } from "lucide-react"; // Keeping Info for HoverCard trigger clarity
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function CockroachConnection() {
  // Removed useMemeMode hook and memeMode variable

  const traits = [
    {
      icon: Zap, // Radiation/Energy theme
      title: "Extreme Resilience", // Unified tone
      cockroachFact: "Withstands lethal radiation levels many times over.",
      tokenLinkTitle: "Parallel: Tier 5 Response", // Unified tone
      tokenLinkText: "Maximum sell tax (15%) and reflection rewards (10%) activate during severe sell-offs, fiercely protecting the ecosystem akin to radiation resistance.", // Professional explanation
      color: "red",
    },
    {
      icon: Shield,
      title: "Structural Defense", // Unified tone
      cockroachFact: "Hardened exoskeleton provides robust physical protection.",
      tokenLinkTitle: "Parallel: Sell Pressure Deterrent", // Unified tone
      tokenLinkText: "High sell taxes in Tiers 4 (12%) & 5 (15%) create a significant economic barrier, disincentivizing large, destabilizing sell orders.", // Professional explanation
       color: "orange",
    },
    {
      icon: RotateCw, // Adaptation/Cycle theme
      title: "Rapid Adaptation", // Unified tone
      cockroachFact: "Quickly develops resistance to new environmental threats.",
       tokenLinkTitle: "Parallel: Dynamic Adjustments", // Unified tone
       tokenLinkText: "The system re-evaluates the Sell/Buy Ratio every 4 hours, allowing tax/reflection tiers to adapt swiftly to market dynamics.", // Professional explanation
      color: "yellow",
    },
     {
      icon: Network, // Decentralized theme
      title: "Decentralized Strength", // Unified tone
      cockroachFact: "Can survive headless for weeks due to a distributed nervous system.",
      tokenLinkTitle: "Parallel: Holder Network Effects", // Unified tone
      tokenLinkText: "Reflections are distributed network-wide to all holders automatically, enhancing collective resilience without central points of failure.", // Professional explanation
      color: "blue",
    },
  ];

   // Tailwind color mapping utility - Remains the same
   const colorMap = {
      red: { text: 'text-red-600 dark:text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', hoverBorder: 'hover:border-red-500/50' },
      orange: { text: 'text-orange-600 dark:text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30', hoverBorder: 'hover:border-orange-500/50' },
      yellow: { text: 'text-yellow-600 dark:text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', hoverBorder: 'hover:border-yellow-500/50' },
      blue: { text: 'text-blue-600 dark:text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30', hoverBorder: 'hover:border-blue-500/50' },
   };

   // Animation Variants - Remain the same
   const sectionVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
   };
   const itemVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
   };
   const cardGridVariants = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 }}
   };
   const cardItemVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } }
   };

  return (
    <Section id="cockroach-connection" className="py-20 md:py-28 bg-muted/20">
       <SectionHeader
        title="Inspired by Nature's Ultimate Survivor" // Updated title
        description="The cockroach embodies antifragility. Its biological adaptations are not just a metaphor – they directly inform $ROACH's dynamic economic design for resilience and growth under pressure." // Updated description
        subtitle={<><Bug className="inline h-4 w-4 mr-1"/> Biological Blueprint</>}
        alignment="center"
        className="mb-16"
       />

      {/* Intro Row: Mascot + Text */}
      <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-16 md:mb-20" // Increased bottom margin
      >
          {/* Mascot Column */}
          <motion.div variants={itemVariants} className="flex justify-center lg:col-span-1">
             <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }} // Simplified hover effect
                transition={{ type: 'spring', stiffness: 300 }}
             >
                <CockroachMascot size="xl" className="text-primary/90"/>
             </motion.div>
          </motion.div>

         {/* Text Column */}
         <motion.div variants={itemVariants} className="lg:col-span-2 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground/90">
                    300 Million Years of Adaptation
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Thriving through mass extinctions and environmental upheaval, the cockroach demonstrates unparalleled survival engineering. $ROACH translates these core principles of adaptation and resilience into its tokenomic framework.
                </p>
                {/* Optional Placeholder for a Bridging Visual */}
                {/* <div className="mt-8 bg-muted/50 border border-dashed rounded-lg aspect-[16/6] flex items-center justify-center">
                  <p className="text-xs text-muted-foreground italic p-4">
                     AI Prompt: Diagram showing simple icons of cockroach traits (radiation symbol, shield, cycle, network) connecting via lines/arrows to corresponding $ROACH mechanics (Tier 5 symbol, Tax symbol, 4hr timer, Reflection symbol). Visual theme consistent with page style.
                   </p>
                </div> */}
          </motion.div>
      </motion.div>

      {/* Trait Cards grid */}
      <motion.div
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto" // Switched to sm:grid-cols-2 for potentially better mobile/tablet layout
        >
        {traits.map((trait) => {
            const colors = colorMap[trait.color as keyof typeof colorMap];
            return (
            <motion.div key={trait.title} variants={cardItemVariants}>
              <HoverCard openDelay={150} closeDelay={50}>
                <HoverCardTrigger asChild>
                    <Card className={cn(
                    "h-full border shadow-md transition-all duration-300 flex flex-col cursor-help", // Added cursor-help
                    "hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-offset-2", // Added focus ring indication for accessibility
                    colors.border,
                    colors.hoverBorder,
                    'focus-within:ring-primary/50' // Standard focus ring
                    )}>
                    <CardContent className="p-5 md:p-6 flex-grow flex flex-col"> {/* Adjusted padding slightly */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className={cn("p-2 rounded-full", colors.bg)}>
                                <trait.icon className={cn("h-6 w-6", colors.text)} />
                            </div>
                            {/* Changed Title tag for semantics */}
                            <CardTitle className="text-base sm:text-lg font-semibold flex-1 leading-tight">{trait.title}</CardTitle>
                             {/* Clearer Hover Hint */}
                             <Info className="h-4 w-4 text-muted-foreground/60 shrink-0 group-hover:text-primary transition-colors duration-200" aria-hidden="true"/>
                        </div>
                        {/* Cockroach Fact */}
                        <div className="flex items-start gap-2 text-sm text-muted-foreground flex-grow mb-3">
                           <Bug className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0"/>
                           <p><span className="font-semibold text-foreground/80">Biological Trait:</span> {trait.cockroachFact}</p>
                        </div>
                        {/* Link Indicator */}
                        <div className="flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary mt-auto pt-2 border-t border-dashed border-border">
                           <Link2 className="h-3 w-3" /> How it links to $ROACH (Hover)
                        </div>
                    </CardContent>
                    </Card>
                </HoverCardTrigger>
                {/* HoverCardContent Styling - Slightly refined */}
                <HoverCardContent side="top" align="center" className={cn("w-80 shadow-xl border-2 rounded-lg p-4", colors.border, colors.bg)}>
                    <div className="space-y-2">
                        <h4 className={cn("text-sm font-semibold flex items-center gap-1.5", colors.text)}>
                           <Link2 className="h-4 w-4"/> {trait.tokenLinkTitle}
                        </h4>
                        <p className="text-xs text-foreground/90 leading-snug">
                           {trait.tokenLinkText}
                        </p>
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