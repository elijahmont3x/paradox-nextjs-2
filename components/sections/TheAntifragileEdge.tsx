// --- START OF FILE ./components/sections/TheAntifragileEdge.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using Card for the main container
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { TrendingDown, Shield, TrendingUp, ShieldX, ShieldCheck, Zap, HelpCircle, BookOpen, AlertTriangle } from "lucide-react"; // More specific icons
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge"; // For highlighting points

export function TheAntifragileEdge() {
  const { memeMode } = useMemeMode();

  return (
    <Section id="problem-solution" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background"> {/* Renamed ID for clarity */}
      <SectionHeader
        // Title directly states the core concept comparison
        title={memeMode ? "Glass vs Turtle vs ROACH" : "Beyond Resilience: The Antifragile Edge"}
        description={memeMode
            ? "Most tokens shatter or just survive. $ROACH gets *stronger* from the chaos. Learn the difference."
            : "Understanding the spectrum from fragile to antifragile reveals why $ROACH's design offers a fundamental advantage in volatile markets."
        }
        // Subtitle sets the theoretical context
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1"/> Inspired by Taleb</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto" // Wider container
      >
        {/* Using a Card to frame the Tabs component */}
        <Card className="shadow-xl overflow-hidden border-2 border-border/10">
          <CardContent className="p-0">
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto bg-muted gap-1">
                 {/* Tab Triggers with enhanced styling */}
                 <TabsTrigger
                  value="fragile"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                     "data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive data-[state=active]:font-semibold", // Destructive theme
                     "hover:bg-destructive/5 hover:text-destructive/90 transition-colors duration-200",
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <ShieldX className="h-4 w-4 shrink-0" /> Fragile
                </TabsTrigger>
                 <TabsTrigger
                  value="resilient"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                     "data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:font-semibold", // Amber/Yellow theme
                     "hover:bg-amber-500/5 hover:text-amber-600/90 transition-colors duration-200",
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" /> Resilient
                </TabsTrigger>
                 <TabsTrigger
                  value="antifragile"
                  className={cn(
                    "py-3 data-[state=active]:shadow-inner text-xs sm:text-sm flex-col sm:flex-row h-auto gap-1.5 sm:gap-2 font-medium",
                    "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-semibold", // Primary theme
                    "hover:bg-primary/5 hover:text-primary/90 transition-colors duration-200",
                    memeMode && "font-mission tracking-wide"
                  )}
                >
                  <Zap className="h-4 w-4 shrink-0" /> Antifragile <span className={cn(!memeMode && "hidden")}>($ROACH)</span>
                </TabsTrigger>
              </TabsList>

              {/* Content Area with Animation */}
              <div className="p-6 md:p-8 min-h-[450px] flex items-center justify-center bg-gradient-to-br from-card to-muted/20">
                <AnimatePresence mode="wait">
                  <TabsContent key="fragile" value="fragile" className="w-full">
                    <ConceptContent
                      icon={<ShieldX className="h-16 w-16 text-destructive mx-auto mb-5 animate-pulse" />} // Pulsing icon
                      title={memeMode ? "Glass Jaw Crew" : "Fragile Systems"}
                      colorTheme="destructive"
                      definition={memeMode
                        ? "These things HATE chaos. One wrong move, one angry whale, one bad tweet = INSTANT SHATTER."
                        : "Systems or entities that are harmed or broken by volatility, randomness, errors, and stressors. They require predictability to function or survive."}
                      characteristics={[
                        "Weakened by shocks",
                        "Fear volatility",
                        "Require stable conditions",
                        "Prone to sudden collapse",
                      ]}
                      cryptoExample={memeMode ? "99% of pump.fun launches, shitcoins with zero utility." : "Tokens with no economic model beyond hype, highly leveraged positions, un-audited contracts."}
                      analogy={memeMode ? '"It looked bullish bro... *rugpull sound*"' : '"What doesn\'t kill me... delivers the final blow."'}
                    />
                  </TabsContent>

                  <TabsContent key="resilient" value="resilient" className="w-full">
                     <ConceptContent
                      icon={<ShieldCheck className="h-16 w-16 text-amber-500 mx-auto mb-5" />}
                      title={memeMode ? "Tough Turtles (Still Boring)" : "Resilient Systems"}
                      colorTheme="amber"
                      definition={memeMode
                        ? "Takes a punch, doesn't die. Great. But it doesn't LEARN. Doesn't GET STRONGER. Just... endures. Yawn."
                        : "Systems that resist shocks and stressors, aiming to return to their original state after disruption. They endure volatility but do not benefit from it."}
                      characteristics={[
                        "Withstands shocks",
                        "Returns to baseline",
                        "Doesn't improve from stress",
                        "Often relies on static defenses",
                      ]}
                      cryptoExample={memeMode ? "Your average 'safe' coin that still bleeds in a dump, tokens with basic locked LP." : "Tokens with static buyback mechanisms, fixed tax rates, or protocols focused solely on maintaining a peg."}
                      analogy={memeMode ? '"Survived another dump... cool. Now back to crabbing."' : '"What doesn\'t kill me... leaves me exactly the same."'}
                    />
                  </TabsContent>

                  <TabsContent key="antifragile" value="antifragile" className="w-full">
                     <ConceptContent
                      icon={<Zap className="h-16 w-16 text-primary mx-auto mb-5 animate-bounce" />} // Bouncing icon for energy
                      title={memeMode ? "$ROACH - Apex Predator Mode" : "Antifragile Systems ($ROACH)"}
                      colorTheme="primary"
                      definition={memeMode
                        ? "This is the ROACH way. It FEASTS on chaos, FUD, and panic. Stress isn't a threat, it's ROCKET FUEL. Gets stronger."
                        : "Systems that gain strength, capability, and robustness from volatility, randomness, errors, and stressors. They benefit and improve when exposed to disorder. This is the principle behind $ROACH."}
                      characteristics={[
                        "Benefits from shocks",
                        "Improves with volatility",
                        "Loves randomness & stress",
                        "$ROACH's Dynamic System", // Explicitly link
                      ]}
                      cryptoExample={memeMode ? "THIS TOKEN! Dynamic taxes go BRRR, reflections EXPLODE when FUD hits." : "$ROACH's adaptive 5-tier tax and reflection system designed to harness market pressure."}
                      analogy={memeMode ? '"FUD? DUMP? Bring it ON! More FOOD!"' : '"What doesn\'t kill me makes me stronger." - Literally.'}
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
         className="mt-10 text-center max-w-2xl mx-auto text-sm text-muted-foreground"
        >
         <BookOpen className="inline-block h-4 w-4 mr-1.5 align-[-2px]"/>
         Antifragility concept defined by <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Nassim Nicholas Taleb</Link>. $ROACH applies this powerful idea to crypto tokenomics.
       </motion.div>
    </Section>
  );
}

// --- ConceptContent Sub-Component ---
interface ConceptContentProps {
  icon: React.ReactNode;
  title: string;
  definition: string;
  characteristics: string[];
  cryptoExample: string;
  analogy: string;
  colorTheme: 'destructive' | 'amber' | 'primary';
}

function ConceptContent({ icon, title, definition, characteristics, cryptoExample, analogy, colorTheme }: ConceptContentProps) {
  const { memeMode } = useMemeMode();

  // Mapping theme names to Tailwind classes
  const themes = {
    destructive: {
      text: "text-destructive",
      border: "border-destructive/50",
      bg: "bg-destructive/5",
      iconAccent: "text-destructive-foreground", // For text inside icon if needed
      badgeBorder: "border-destructive/20",
      badgeText: "text-destructive",
      badgeBg: "bg-destructive/10",
      alertIcon: AlertTriangle, // Use Alert for Fragile
    },
    amber: { // Using Amber for Resilient
      text: "text-amber-600",
      border: "border-amber-500/50",
      bg: "bg-amber-500/5",
      iconAccent: "text-amber-700",
      badgeBorder: "border-amber-500/20",
      badgeText: "text-amber-600",
      badgeBg: "bg-amber-500/10",
      alertIcon: ShieldCheck, // ShieldCheck implies survival
    },
    primary: {
      text: "text-primary",
      border: "border-primary/50",
      bg: "bg-primary/5",
      iconAccent: "text-primary-foreground",
      badgeBorder: "border-primary/20",
      badgeText: "text-primary",
      badgeBg: "bg-primary/10",
      alertIcon: Zap, // Zap implies energy/gain
    },
  };
  const theme = themes[colorTheme];
  const AlertIcon = theme.alertIcon;


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-center flex flex-col items-center w-full max-w-2xl mx-auto" // Ensure content takes width
    >
      {icon}
      <h3 className={cn("text-3xl font-bold mb-4", theme.text, memeMode && "font-mission")}>{title}</h3>
      <p className={cn("text-base md:text-lg text-muted-foreground mb-6 leading-relaxed")}>{definition}</p>

      {/* Grid for characteristics and example */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        {/* Characteristics */}
        <div className={cn("text-left p-4 rounded-lg border", theme.border, theme.bg)}>
          <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Key Traits:</h4>
          <ul className="space-y-1">
            {characteristics.map((char, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                <AlertIcon className={cn("h-3.5 w-3.5 shrink-0", theme.text)} />
                {char}
              </li>
            ))}
          </ul>
        </div>

         {/* Crypto Example */}
         <div className={cn("text-left p-4 rounded-lg border", theme.border, theme.bg)}>
            <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Crypto Parallel:</h4>
             <p className="text-sm text-foreground/90">{cryptoExample}</p>
         </div>
      </div>

      {/* Analogy */}
      <Badge variant="outline" className={cn(
          "p-3 px-5 rounded-lg border text-base italic font-medium w-full", // Ensure badge takes full width
          theme.badgeBorder, theme.badgeBg, theme.badgeText
        )}>
        {analogy}
      </Badge>
    </motion.div>
  );
}


// --- END OF FILE ./components/sections/TheAntifragileEdge.tsx ---