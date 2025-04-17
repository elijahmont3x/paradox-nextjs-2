// --- START OF FILE ./components/sections/CockroachConnection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { Zap, Shield, RotateCw, Network, Bug, Link2 } from "lucide-react"; // Added Link2 for connection emphasis
import { motion } from "framer-motion";

export function CockroachConnection() {
  const { memeMode } = useMemeMode();

  const traits = [
    {
      icon: Zap, // Radiation/Energy theme
      title: (memeMode: boolean) => memeMode ? "Survives Nukes" : "Extreme Resilience",
      cockroachFact: "Can withstand radiation levels far exceeding human tolerance.",
      tokenLink: (memeMode: boolean) => memeMode
        ? "Like roaches in fallout, Tier 5 rewards HODLers MAX during market nukes."
        : "Tier 5's maximum reflection rate mirrors this, protecting holders during extreme stress.",
      color: "red",
    },
    {
      icon: Shield,
      title: (memeMode: boolean) => memeMode ? "Hard Exoskeleton" : "Structural Defense",
      cockroachFact: "Tough outer shell provides significant physical protection.",
      tokenLink: (memeMode: boolean) => memeMode
        ? "High sell taxes (Tiers 4/5) act like ARMOR, making big dumps expensive for attackers."
        : "Increasing sell taxes in higher tiers form a protective economic barrier against panic selling.",
       color: "orange",
    },
    {
      icon: RotateCw, // Adaptation/Cycle theme
      title: (memeMode: boolean) => memeMode ? "Adapts Instantly" : "Rapid Adaptation",
      cockroachFact: "Quickly develops resistance to pesticides and environmental threats.",
      tokenLink: (memeMode: boolean) => memeMode
        ? "The 4-hour tier check means $ROACH reacts to FUD faster than most degens check charts."
        : "The 4-hour evaluation cycle allows the tax system to adapt swiftly to changing market dynamics.",
      color: "yellow", // Changed from teal to yellow for visual distinction
    },
     {
      icon: Network, // Decentralized theme
      title: (memeMode: boolean) => memeMode ? "Thrives Anywhere (Decentralized)" : "Decentralized Strength",
      cockroachFact: "Can survive decapitation for weeks due to a distributed nervous system.",
      tokenLink: (memeMode: boolean) => memeMode
        ? "Reflections go to *all* holders. The whole colony eats, not just the devs."
        : "Rewards are distributed network-wide, enhancing collective resilience, not relying on central points.",
      color: "blue",
    },
  ];

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } }
  };


  return (
    // Add some background gradient/texture if desired
    <Section id="cockroach-connection" className="bg-muted/20 py-20 md:py-28">
       <SectionHeader
        title={memeMode ? "Why a Roach? Cuz They're UNKILLABLE." : "The Cockroach: Nature's Antifragile Master"}
        description={memeMode
          ? "It ain't just a meme. Cockroaches literally *invented* antifragility. Here’s how $ROACH copies the homework:"
          : "The cockroach serves as a powerful metaphor for antifragility. Its biological adaptations to extreme stress directly inspire $ROACH's economic design principles."
        }
        subtitle={<><Bug className="inline h-4 w-4 mr-1"/> Symbolic Inspiration</>}
        alignment="center"
        className="mb-16"
       />

      <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16" // Center align grid items
      >
          {/* Mascot */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end" // Center on mobile, align right on large screens
          >
            <CockroachMascot size="xl" className={cn(memeMode && "animate-pulse")} /> {/* Subtle pulse in meme mode */}
          </motion.div>

         {/* Explanatory Text */}
          <motion.div
              variants={itemVariants}
              className="max-w-xl text-center lg:text-left" // Center text on mobile, left on large
          >
                <h3 className={cn("text-2xl font-semibold mb-4", memeMode && "font-mission")}>
                  {memeMode ? "300 Million Years of Not Dying" : "Embodying Antifragility"}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {memeMode
                    ? "Cockroaches have been shrugging off extinction events while dinosaurs were still figuring things out. $ROACH channels that same 'survive-anything' energy into its tokenomics."
                    : "The cockroach has evolved exceptional resilience over millions of years. $ROACH translates these survival strategies into a dynamic economic model designed to benefit from market stress."}
                </p>
          </motion.div>
      </motion.div>

      {/* Trait Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {traits.map((trait, index) => (
          <motion.div
             key={index}
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.4 }} // Trigger animation when card is more visible
             transition={{ delay: index * 0.1 }} // Stagger card animations
          >
            <Card className={cn(
              "h-full border hover:border-foreground/20 transition-colors duration-300 shadow-sm hover:shadow-md", // Subtle hover effect
              `border-${trait.color}-500/20`, // Use dynamic border color based on trait
              memeMode && `border-dashed border-${trait.color}-500/50` // Dashed border in meme mode
            )}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                   <div className={cn(
                      "p-2 rounded-full",
                      `bg-${trait.color}-500/10` // Dynamic background color
                    )}>
                     <trait.icon className={cn("h-6 w-6", `text-${trait.color}-500`)} /> {/* Dynamic text color */}
                   </div>
                   <h3 className={cn("text-xl font-semibold flex-1", memeMode && "font-mission")}>{trait.title(memeMode)}</h3>
                </div>
                <div className="space-y-3 text-sm">
                   {/* Roach Fact */}
                    <div className="flex items-start gap-2">
                      <Bug className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0"/>
                      <p><span className="font-medium text-muted-foreground">Roach Fact:</span> {trait.cockroachFact}</p>
                    </div>
                   {/* Token Link */}
                    <div className="flex items-start gap-2">
                       <Link2 className="h-4 w-4 text-primary mt-0.5 shrink-0"/>
                       <p><span className={cn("font-medium", memeMode && "font-mission")}>$ROACH Link:</span> {trait.tokenLink(memeMode)}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/CockroachConnection.tsx ---