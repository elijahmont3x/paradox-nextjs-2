// --- START OF FILE ./components/sections/ProblemSolution.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingDown, Shield, ShieldAlert, ShieldCheck, ArrowRightLeft, Users, Zap } from "lucide-react"; // Replaced ArrowUpDown with ArrowRightLeft for swap/change implication
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ProblemSolutionSection() {
  const { memeMode } = useMemeMode();

  // Problem Points: Fragile & Resilient Limitations
  const problemPoints = [
    {
      icon: TrendingDown,
      category: memeMode ? "Glass Cannons" : "Fragile Tokens",
      title: memeMode ? "Shatter Easily" : "Collapse Under Pressure",
      description: memeMode
        ? "One whale dump, one FUD storm = INSTANT REKT. Zero defense, pure hopium."
        : "Lack mechanisms to handle volatility. Highly susceptible to market swings and negative sentiment.",
      example: memeMode ? "99% of meme coins." : "E.g., Basic tokens with no utility or adaptive mechanics."
    },
    {
      icon: Shield,
      category: memeMode ? "Turtles / Tanks" : "Resilient Tokens",
      title: memeMode ? "Survive... Kinda Boring?" : "Survive, But Don't Thrive",
      description: memeMode
        ? "Might not die in a crash, but they don't *profit* from it. Just hide in their shell."
        : "Withstand market stress using static defenses (like locked LP, basic buybacks) but don't fundamentally benefit or improve from it.",
       example: memeMode ? "Your average 'safe' low-cap." : "E.g., Tokens with only locked liquidity or fixed tax/buyback rates."
    },
     {
      icon: ShieldAlert,
      category: memeMode ? "The Real Problem" : "The Core Issue",
      title: memeMode ? "Market Chaos = PAIN (Usually)" : "Volatility Often Destructive",
      description: memeMode
        ? "For most tokens, dumps mean bagholders cry and the token bleeds value."
        : "Standard models lack ways to convert market pressure into ecosystem strength or holder value.",
       example: memeMode ? "Fragile breaks, Resilient tanks the hit. Neither *eats* the chaos." : "Neither fragility nor simple resilience leverages disorder."
    },
  ];

   // $ROACH Solution Points
   const solutionPoints = [
    {
      icon: ArrowRightLeft, // More dynamic icon for tax shift
      title: memeMode ? "Shape-Shifting Taxes" : "Dynamic Tax System",
      description: memeMode
        ? "Auto-adjusts to FUD levels. Makes panic selling $$$, rewards dip buying."
        : "Responsive 5-tier system adapts taxes based on real-time market pressure.",
    },
    {
      icon: Users,
      title: memeMode ? "Free Roach Drops (Reflections)" : "Enhanced Reflections",
      description: memeMode
        ? "Chaos hits -> HODLers get PAID from sell taxes. Up to 10% cut!"
        : "Increased portion of sell volume redistributed to holders during market stress.",
    },
    {
      icon: Zap, // Icon implying energy/gain from chaos
      title: memeMode ? "Eats FUD for Breakfast" : "Gains from Disorder",
      description: memeMode
        ? "$ROACH doesn't just tank hits, it absorbs the energy & gets STRONGER."
        : "Uniquely designed to convert market pressure into ecosystem strength and holder value.",
    },
  ];

  // Animation Variants
   const cardVariants = {
     hidden: { opacity: 0, y: 50 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: "easeOut" }
     }
   };

  return (
    <Section id="problem-solution" className="bg-gradient-to-b from-background via-muted/10 to-background py-20 md:py-28 lg:py-32"> {/* Adjusted padding */}
       <SectionHeader
        title={memeMode ? "Crypto's Big Weakness (& How $ROACH Crushes It)" : "The Crypto Fragility Problem & The $ROACH Solution"}
        description={memeMode
            ? "Most tokens are glass cannons or boring turtles. $ROACH is the apex predator that evolves."
            : "Understanding the limitations of fragile and merely resilient tokens highlights the unique advantage of $ROACH's antifragile design."
        }
        subtitle="Why $ROACH is Different"
        alignment="center" // Center align header
        className="mb-16" // Increased margin
       />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto"> {/* Wider max-width, larger gap */}

        {/* Problem Card */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card className="border-destructive/50 border-2 bg-destructive/5 h-full shadow-lg hover:shadow-destructive/10 transition-shadow duration-300"> {/* Destructive theme, added hover shadow */}
            <CardHeader className="text-center pb-4"> {/* Centered header */}
                 <div className="inline-block p-3 rounded-full bg-destructive/10 mb-3">
                    <ShieldAlert className="h-8 w-8 text-destructive" /> {/* Larger icon */}
                 </div>
                <CardTitle className={cn("text-2xl font-bold", memeMode ? "font-mission text-destructive" : "text-destructive-foreground")}>
                   {memeMode ? "Why Other Tokens Fold" : "The Limits of Fragility & Resilience"}
                </CardTitle>
                <CardDescription className={cn("text-sm", memeMode ? "text-destructive/80" : "text-destructive-foreground/70")}>
                  {memeMode ? "They can't handle the heat." : "Typical vulnerabilities in volatile markets."}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-6 pb-6"> {/* Padding adjustments */}
                {problemPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50 shadow-sm"> {/* Use background/50 for contrast */}
                     <div className="p-1.5 rounded-full bg-destructive/10 mt-1 flex-shrink-0"> {/* Ensure icon doesn't shrink */}
                        <point.icon className="h-5 w-5 text-destructive" />
                     </div>
                    <div className="flex-grow"> {/* Allow text to take space */}
                       <Badge variant="secondary" className="mb-1.5 text-xs bg-destructive/10 text-destructive border-destructive/20">
                         {point.category}
                       </Badge>
                       <h4 className="font-semibold text-base leading-tight">{point.title}</h4> {/* Adjusted size/leading */}
                       <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
                       <p className="text-xs text-muted-foreground/70 mt-1.5 italic">{point.example}</p>
                    </div>
                </div>
                ))}
            </CardContent>
            </Card>
        </motion.div>

        {/* Solution Card */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, delay: 0.15 }}>
            <Card className="border-primary/50 border-2 bg-primary/5 h-full shadow-lg hover:shadow-primary/10 transition-shadow duration-300"> {/* Primary theme */}
            <CardHeader className="text-center pb-4"> {/* Centered header */}
                 <div className="inline-block p-3 rounded-full bg-primary/10 mb-3">
                    <CockroachMascot size="md" /> {/* Using mascot */}
                 </div>
                <CardTitle className={cn("text-2xl font-bold", memeMode ? "font-mission text-primary" : "text-primary-foreground")}>
                   {memeMode ? "$ROACH: Built Different" : "The $ROACH Antifragile Advantage"}
                </CardTitle>
                 <CardDescription className={cn("text-sm", memeMode ? "text-primary/80" : "text-primary-foreground/70")}>
                  {memeMode ? "It thrives where others die." : "Turning market stress into strength."}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-6 pb-6"> {/* Padding adjustments */}
                {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50 shadow-sm"> {/* Use background/50 */}
                     <div className="p-1.5 rounded-full bg-primary/10 mt-1 flex-shrink-0">
                        <point.icon className="h-5 w-5 text-primary" />
                     </div>
                    <div className="flex-grow">
                    <h4 className="font-semibold text-base leading-tight">{point.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
                    </div>
                </div>
                ))}
                {/* Quote block */}
                <blockquote className="border-l-4 border-primary/60 pl-4 mt-6 text-sm italic text-muted-foreground">
                  {memeMode ? "$ROACH doesn't just survive the storm, it absorbs its power." : "By converting market stress into strength, $ROACH offers a fundamentally different, potentially more robust model."}
                </blockquote>
            </CardContent>
            </Card>
        </motion.div>
      </div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/ProblemSolution.tsx ---