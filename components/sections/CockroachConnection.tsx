// --- START OF FILE ./components/sections/CockroachConnection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card for trait display
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { Zap, Shield, RotateCw, Network, Bug, Link2, HelpCircle, Info } from "lucide-react"; // Using Info for HoverCard trigger
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card" // Import HoverCard

export function CockroachConnection() {
  const { memeMode } = useMemeMode();

  const traits = [
    {
      icon: Zap, // Radiation/Energy theme
      title: (memeMode: boolean) => memeMode ? "Nuke Proof" : "Extreme Resilience",
      cockroachFact: "Withstands radiation levels lethal to humans many times over.",
      tokenLinkTitle: (memeMode: boolean) => memeMode ? "$ROACH Link: Tier 5 Defense" : "Tokenomic Parallel: Tier 5 Response",
      tokenLinkText: (memeMode: boolean) => memeMode
        ? "Just like roaches shrugging off fallout, Tier 5 blasts HODLers with max reflections (10%!) during market nukes."
        : "Tier 5 activation during extreme sell-offs maximizes reflection rewards (10%), protecting long-term holders akin to radiation resistance.",
      color: "red",
    },
    {
      icon: Shield,
      title: (memeMode: boolean) => memeMode ? "Exoskeleton Armor" : "Structural Defense",
      cockroachFact: "Hardened outer shell provides robust protection against physical threats.",
      tokenLinkTitle: (memeMode: boolean) => memeMode ? "$ROACH Link: Expensive Dumps" : "Tokenomic Parallel: Discouraging Sells",
      tokenLinkText: (memeMode: boolean) => memeMode
        ? "High sell taxes in Tiers 4 (12%) & 5 (15%) act like ARMOR, making large panic dumps costly for attackers."
        : "Progressively higher sell taxes in Tiers 4 and 5 create a significant economic barrier, disincentivizing large, destabilizing sell orders.",
       color: "orange",
    },
    {
      icon: RotateCw, // Adaptation/Cycle theme
      title: (memeMode: boolean) => memeMode ? "Lightning Reflexes" : "Rapid Adaptation",
      cockroachFact: "Can quickly develop resistance to new environmental threats like pesticides.",
       tokenLinkTitle: (memeMode: boolean) => memeMode ? "$ROACH Link: 4-Hour Scan" : "Tokenomic Parallel: Swift Adjustments",
       tokenLinkText: (memeMode: boolean) => memeMode
        ? "The contract checks the market vibe every 4 hours. $ROACH adapts to FUD faster than you can type 'sell'."
        : "The system evaluates the sell/buy ratio every 4 hours, allowing the tax and reflection tiers to adapt quickly to changing market dynamics.",
      color: "yellow",
    },
     {
      icon: Network, // Decentralized theme
      title: (memeMode: boolean) => memeMode ? "Zombie Mode (Decentralized)" : "Distributed Strength",
      cockroachFact: "Can survive without a head for weeks due to a decentralized nervous system.",
      tokenLinkTitle: (memeMode: boolean) => memeMode ? "$ROACH Link: Everyone Eats" : "Tokenomic Parallel: Network Effects",
      tokenLinkText: (memeMode: boolean) => memeMode
        ? "Reflections are blasted out to *all* HODLers wallets automatically. The whole colony thrives, not just a central point."
        : "Rewards (reflections) are distributed across the entire network of holders, enhancing collective ecosystem resilience rather than relying on central control points.",
      color: "blue",
    },
  ];

   // Tailwind color mapping utility
   const colorMap = {
      red: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', hoverBorder: 'hover:border-red-500/50' },
      orange: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', hoverBorder: 'hover:border-orange-500/50' },
      yellow: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', hoverBorder: 'hover:border-yellow-500/50' },
      blue: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', hoverBorder: 'hover:border-blue-500/50' },
   };


  // Animation Variants
  const sectionVariants = { /* ... keep as before ... */
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
   };
  const itemVariants = { /* ... keep as before ... */
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
   };
  const cardGridVariants = { /* ... keep as before ... */
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 }}
   };
   const cardItemVariants = { /* ... keep as before ... */
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } }
   };

  return (
    <Section id="cockroach-connection" className="py-20 md:py-28 bg-muted/20">
       <SectionHeader
        title={memeMode ? "Why a Roach? Survival Masterclass" : "The Cockroach: Nature's Antifragile Blueprint"}
        description={memeMode
          ? "It's not random. Cockroaches are nature's OG HODLers. $ROACH learned from the best survivors on Earth:"
          : "The cockroach serves as a powerful metaphor for antifragility. Its biological adaptations directly inspire $ROACH's economic design."
        }
        subtitle={<><Bug className="inline h-4 w-4 mr-1"/> Biological Inspiration</>} // Changed subtitle slightly
        alignment="center"
        className="mb-16"
       />

      {/* Intro Row: Mascot + Text */}
      <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-16" // Adjusted grid cols for layout
      >
          <motion.div variants={itemVariants} className="flex justify-center lg:col-span-1">
             <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }} // Add subtle hover effect to mascot
                transition={{ type: 'spring', stiffness: 300 }}
             >
                <CockroachMascot size="xl" className={cn(memeMode && "animate-pulse")}/>
             </motion.div>
          </motion.div>

         <motion.div variants={itemVariants} className="lg:col-span-2 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                <h3 className={cn("text-2xl lg:text-3xl font-semibold mb-4", memeMode && "font-mission")}>
                  {memeMode ? "300 Million Years of Not Getting Rekt" : "Embodying Antifragility Principles"}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {memeMode
                    ? "These guys were chilling before dinosaurs existed and will probably be here after humans tweet themselves into oblivion. $ROACH copies that unkillable vibe."
                    : "The cockroach's remarkable evolutionary success demonstrates extreme resilience and adaptation. $ROACH translates these survival strategies into dynamic tokenomics."}
                </p>
          </motion.div>
      </motion.div>

      {/* Trait Cards grid */}
      <motion.div
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
        {traits.map((trait) => {
            const colors = colorMap[trait.color as keyof typeof colorMap];
            return (
            <motion.div key={trait.title(false)} variants={cardItemVariants}>
              {/* Wrap Card in HoverCardTrigger */}
              <HoverCard openDelay={150} closeDelay={50}>
                <HoverCardTrigger asChild>
                    <Card className={cn(
                    "h-full border shadow-md transition-all duration-300 flex flex-col cursor-help", // Added cursor-help
                    colors.border,
                    colors.hoverBorder, // Apply hover border color
                    "hover:shadow-lg hover:scale-[1.02]", // Enhanced hover effect
                    memeMode && "border-dashed"
                    )}>
                    <CardContent className="p-6 flex-grow flex flex-col"> {/* Use flex-grow */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className={cn("p-2 rounded-full", colors.bg)}>
                                <trait.icon className={cn("h-6 w-6", colors.text)} />
                            </div>
                            <h3 className={cn("text-lg font-semibold flex-1", memeMode && "font-mission")}>{trait.title(memeMode)}</h3>
                             {/* Info icon visible to hint at hover */}
                             <Info className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                        </div>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground flex-grow mb-3"> {/* Fact takes remaining space */}
                           <Bug className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0"/>
                           <p><span className="font-medium text-foreground/80">Roach Trait:</span> {trait.cockroachFact}</p>
                        </div>
                        {/* Minimal indicator for the link */}
                        <div className="flex items-center gap-1 text-xs text-primary/70 mt-auto pt-2 border-t border-dashed border-border">
                           <Link2 className="h-3 w-3" /> See $ROACH Connection
                        </div>
                    </CardContent>
                    </Card>
                </HoverCardTrigger>
                {/* HoverCardContent to show the Token Link */}
                <HoverCardContent side="top" align="center" className="w-80 shadow-xl border-primary/30">
                    <div className="space-y-2">
                        <h4 className={cn("text-sm font-semibold", colors.text, memeMode && "font-mission")}>
                           {trait.tokenLinkTitle(memeMode)}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                           {trait.tokenLinkText(memeMode)}
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