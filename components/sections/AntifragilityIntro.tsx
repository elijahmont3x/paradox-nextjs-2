// --- START OF FILE ./components/sections/AntifragilityIntro.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingDown, Shield, TrendingUp, ShieldX, ShieldCheck, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge"; // Import Badge

export function AntifragilityIntro() {
  const { memeMode } = useMemeMode();

  return (
    // Changed ID slightly to avoid conflict with potential future full 'antifragility' section
    <Section id="antifragility-concept" className="bg-background">
      <SectionHeader
        title={memeMode ? "Fragile vs Resilient vs ANTIFRAGILE" : "Understanding Antifragility"}
        description={memeMode
            ? "Know the difference. Most things are fragile glass. Some are tough turtles. $ROACH is the apex predator."
            : "Inspired by Nassim Nicholas Taleb, understanding these concepts is key to grasping $ROACH's unique design."
        }
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1"/> The Core Idea</>}
        alignment="center"
        className="mb-12" // Add margin bottom
      />

      {/* Use framer-motion for the card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-lg overflow-hidden"> {/* Added overflow-hidden for rounded corners with tabs */}
          <CardContent className="p-0">
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto bg-muted gap-1">
                <TabsTrigger
                  value="fragile"
                  className={cn(
                    "py-2.5 data-[state=active]:shadow-md text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1 sm:gap-2",
                     "data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-destructive", // Destructive theme for fragile
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <ShieldX className="h-4 w-4 shrink-0" /> Fragile
                </TabsTrigger>
                 <TabsTrigger
                  value="resilient"
                  className={cn(
                    "py-2.5 data-[state=active]:shadow-md text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1 sm:gap-2",
                     "data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-600 data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-yellow-500", // Yellow theme for resilient
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" /> Resilient
                </TabsTrigger>
                 <TabsTrigger
                  value="antifragile"
                  className={cn(
                    "py-2.5 data-[state=active]:shadow-md text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1 sm:gap-2",
                    "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary", // Primary theme for antifragile
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <TrendingUp className="h-4 w-4 shrink-0" /> Antifragile
                </TabsTrigger>
              </TabsList>

              {/* Content Area with fixed height for consistent layout */}
              <div className="p-6 md:p-8 min-h-[400px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <TabsContent value="fragile" className="w-full">
                    <ComparisonContent
                      key="fragile"
                      icon={<TrendingDown className="h-12 w-12 md:h-16 md:w-16 text-destructive mx-auto mb-4" />}
                      title={memeMode ? "Glass Jaw" : "Fragile Systems"}
                      description={memeMode
                        ? "Hates chaos, randomness, and mean tweets. Folds like a cheap suit when things get spicy."
                        : "Weakened or destroyed by volatility, errors, and stressors. Prefers stability and predictability."
                      }
                      examples={["Glass vase", "Over-leveraged trades", "Most unaudited meme coins"]}
                      analogy={memeMode ? '"Handle with care... *CRACK*"' : '"What doesn\'t kill me... actually kills me."'}
                      color="destructive" // Use theme color name
                    />
                  </TabsContent>

                  <TabsContent value="resilient" className="w-full">
                    <ComparisonContent
                      key="resilient"
                      icon={<Shield className="h-12 w-12 md:h-16 md:w-16 text-yellow-500 mx-auto mb-4" />}
                      title={memeMode ? "Tough Turtle" : "Resilient Systems"}
                      description={memeMode
                        ? "Takes a hit and doesn't die (usually). Bounces back to normal, but learns *nothing*. Gains *nothing*."
                        : "Withstands shocks and stress, aiming to return to its original state. Resists disorder but does not benefit from it."
                      }
                      examples={["Steel beam", "Stablecoins (ideally)", "Tokens with static tax/buybacks"]}
                      analogy={memeMode ? '"Phew, still alive. Now back to boring."' : '"What doesn\'t kill me... leaves me unchanged."'}
                      color="yellow" // Use descriptive color name
                    />
                  </TabsContent>

                  <TabsContent value="antifragile" className="w-full">
                    <ComparisonContent
                      key="antifragile"
                      icon={<TrendingUp className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />}
                      title={memeMode ? "The Chad $ROACH" : "Antifragile Systems"}
                      description={memeMode
                        ? "Actively *EATS* dumps, FUD, and volatility. Uses stress as rocket fuel. Gets stronger with every attack."
                        : "Gains strength, capability, and robustness from volatility, errors, and stressors. Improves through exposure to disorder."
                      }
                      examples={["Immune system (via vaccines)", "Evolution by natural selection", "$ROACH's dynamic tax & reward system"]}
                      analogy={memeMode ? '"MORE! FEED ME MORE FUD!"' : '"What doesn\'t kill me makes me stronger."'}
                      color="primary" // Use theme color name
                    />
                  </TabsContent>
                   </AnimatePresence>
                </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

       {/* Academic Reference */}
       <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true }}
         className="mt-8 text-center max-w-2xl mx-auto text-sm text-muted-foreground"
        >
         <BookOpen className="inline-block h-4 w-4 mr-1.5 align-[-2px]"/>
         Concept defined by <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Nassim Nicholas Taleb</Link> in his work "Antifragile". $ROACH aims to be a practical application of this principle in tokenomics.
       </motion.div>
    </Section>
  );
}

// Sub-component for Tab Content with Framer Motion
import { AnimatePresence } from "framer-motion";

function ComparisonContent({ icon, title, description, examples, analogy, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
  analogy: string;
  color: 'destructive' | 'yellow' | 'primary'; // Use theme color names
}) {
  const { memeMode } = useMemeMode();

  // Map color names to Tailwind classes
  const colorClasses = {
    destructive: {
        border: "border-destructive/50",
        bg: "bg-destructive/5",
        text: "text-destructive",
        iconText: "text-destructive",
        badgeBg: "bg-destructive/10",
        badgeText: "text-destructive/90",
        badgeBorder: "border-destructive/20",
    },
    yellow: {
        border: "border-yellow-500/50",
        bg: "bg-yellow-500/5",
        text: "text-yellow-600",
        iconText: "text-yellow-500",
        badgeBg: "bg-yellow-500/10",
        badgeText: "text-yellow-700",
        badgeBorder: "border-yellow-500/20",
    },
    primary: {
        border: "border-primary/50",
        bg: "bg-primary/5",
        text: "text-primary",
        iconText: "text-primary",
        badgeBg: "bg-primary/10",
        badgeText: "text-primary/90",
        badgeBorder: "border-primary/20",
    },
  };
  const theme = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-center flex flex-col items-center w-full"
    >
      {/* Apply color to icon text */}
      <div className={cn(theme.iconText)}>{icon}</div>
      <h3 className={cn("text-2xl font-bold mb-3", memeMode && "font-mission")}>{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      <div className="mb-6 text-left max-w-sm w-full bg-muted/30 p-4 rounded-lg border border-border/30">
         <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Examples:</p>
         <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {examples.map((ex, i) => <li key={i}>{ex}</li>)}
         </ul>
      </div>
      {/* Analogy styled like a badge/quote */}
      <Badge variant="outline" className={cn(
          "p-3 px-4 rounded-lg border text-base italic font-medium w-full max-w-md",
          theme.border, theme.bg, theme.text
        )}>
        {analogy}
      </Badge>
    </motion.div>
  );
}
// --- END OF FILE ./components/sections/AntifragilityIntro.tsx ---