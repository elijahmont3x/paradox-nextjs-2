// --- START OF FILE ./components/sections/Roadmap.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Target, Rocket, ListChecks } from "lucide-react"; // Zap(Phase1), Target(Phase2), Rocket(Phase3), ListChecks(Generic)
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Define Roadmap Data based on Whitepaper v2
const roadmapPhases = [
  {
    id: "phase1",
    title: (memeMode: boolean) => memeMode ? "Phase 1: Genesis Roach (BUILD)" : "Phase 1: Foundation & Launch Prep",
    status: "Completed", // Assume Phase 1 is done based on context
    icon: Zap,
    items: [
      "Core SPL Token Contract Developed",
      "5-Tier Antifragile Tax System Implemented",
      "4-Hour Market Tracking Mechanism Built",
      "CertiK Security Audit Passed",
      "Website V1 & Community Channels (TG/X) Launched",
      "Private Presale Completed ($35k Raised)",
    ],
    color: "green", // Completed status color
  },
  {
    id: "phase2",
    title: (memeMode: boolean) => memeMode ? "Phase 2: Infestation Begins (LAUNCH)" : "Phase 2: Launch & Initial Growth",
    status: "In Progress", // Assume launch is current focus
    icon: Target,
    items: [
      "Public Presale (PinkSale - Target $65k)", // Target DEX/Platform
      "Raydium Liquidity Pool Creation & LP Burn",
      "Token Distribution to Presale Participants",
      "CoinGecko & CoinMarketCap Listing Applications",
      "Targeted KOL Marketing Campaign Initiation",
      "Community Growth Initiatives & Contests",
      "Holder Dashboard V1 Development", // Added from post-launch goals
    ],
     color: "blue", // In Progress status color
  },
  {
    id: "phase3",
    title: (memeMode: boolean) => memeMode ? "Phase 3: World Domination (EXPAND)" : "Phase 3: Ecosystem Expansion",
    status: "Upcoming",
    icon: Rocket,
    items: [
      "Explore Automated Buyback Mechanisms",
      "Strategic Partnerships (Solana Ecosystem)",
      "Tier 2 Centralized Exchange (CEX) Listing Strategy",
      "Further Decentralized Exchange (DEX) Listings",
      "$ROACH Utility Exploration (NFTs, Staking)",
      "Advanced Holder Tools & Analytics",
      "Long-Term Governance Model Research",
    ],
     color: "gray", // Upcoming status color
  },
];


export function Roadmap() {
  const { memeMode } = useMemeMode();

  // Tailwind color mapping for status badges and timeline dots
  const statusColors = {
    Completed: { badge: "bg-green-500/10 text-green-600 border-green-500/30", dot: "bg-green-500 border-green-300", text: "text-green-600", icon: CheckCircle2 },
    "In Progress": { badge: "bg-blue-500/10 text-blue-600 border-blue-500/30", dot: "bg-blue-500 border-blue-300 animate-pulse", text: "text-blue-600", icon: Zap /* Using Zap for active phase */ },
    "Upcoming": { badge: "bg-gray-500/10 text-gray-600 border-gray-500/30", dot: "bg-muted border-muted-foreground/50", text: "text-gray-600", icon: ListChecks },
  };

  // Animation Variants
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <Section id="roadmap" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/10">
       <SectionHeader
        title={memeMode ? "Roachmap: Path to Global Infestation" : "Project Roadmap & Milestones"}
        description={memeMode
            ? "Our master plan for ensuring $ROACH outlives cockroaches themselves. We're just getting started."
            : "Outlining our strategic development phases, completed objectives, and future goals for ecosystem growth."}
        subtitle={<><Rocket className="inline h-4 w-4 mr-1"/> Development Trajectory</>}
        alignment="center"
        className="mb-16"
      />

      <div className="relative max-w-4xl mx-auto">
         {/* Desktop Timeline View */}
         <div className="hidden md:block">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/70 -z-10" />
              {roadmapPhases.map((phase, index) => {
                 const colors = statusColors[phase.status as keyof typeof statusColors];
                 return (
                 <motion.div
                    key={phase.id}
                    className="relative pl-[4.5rem] mb-12 last:mb-0" // Adjusted padding left
                    variants={timelineItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                 >
                    {/* Phase Dot & Icon */}
                    <div className={cn(
                      "absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full border-4 shadow-sm",
                       colors.dot
                    )}>
                        <phase.icon className={cn("h-5 w-5",
                          phase.status === "Upcoming" ? "text-muted-foreground" : "text-white"
                        )} />
                    </div>

                    {/* Phase Card */}
                     <Card className={cn(
                        "ml-4 shadow-md hover:shadow-lg transition-shadow duration-300",
                        memeMode && "border-dashed border-primary/30"
                      )}>
                       <CardHeader className="pb-4">
                         <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                            <CardTitle className={cn("text-xl", memeMode && "font-mission")}>{phase.title(memeMode)}</CardTitle>
                            <Badge className={cn("w-fit self-start sm:self-center", colors.badge)}>
                               <colors.icon className="h-3 w-3 mr-1.5"/> {phase.status}
                            </Badge>
                         </div>
                       </CardHeader>
                       <CardContent>
                         {/* Use checkmarks for completed items */}
                         <ul className="space-y-2.5 text-sm text-muted-foreground">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                 {phase.status === "Completed" ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0"/>
                                 ) : phase.status === "In Progress" ? (
                                     <Zap className="h-4 w-4 text-blue-500 mt-0.5 shrink-0 animate-pulse"/>
                                 ) : (
                                    <ListChecks className="h-4 w-4 text-gray-400 mt-0.5 shrink-0"/>
                                 )}
                                 <span>{item}</span>
                              </li>
                            ))}
                         </ul>
                       </CardContent>
                     </Card>
                 </motion.div>
                 );
              })}
         </div>

         {/* Mobile Tabs View */}
         <div className="md:hidden">
           <Tabs defaultValue={roadmapPhases.find(p => p.status === "In Progress")?.id || roadmapPhases[0].id} className="w-full">
             <TabsList className="grid w-full grid-cols-3 mb-8 gap-1 p-1 bg-muted rounded-lg h-auto">
                {roadmapPhases.map((phase) => {
                    const colors = statusColors[phase.status as keyof typeof statusColors];
                    return (
                        <TabsTrigger
                            key={phase.id}
                            value={phase.id}
                            className={cn(
                                "flex-col h-auto py-2.5 px-1 text-xs rounded-md data-[state=active]:shadow-md transition-all duration-200",
                                `data-[state=active]:${colors.badge.replace('border-','bg-').replace('/30','')}`, // Use badge colors for active tab
                                `hover:bg-muted/80`,
                                memeMode && "font-mission tracking-wide"
                            )}
                        >
                           <phase.icon className="h-4 w-4 mb-1"/> Phase {phase.id.replace('phase','')}
                        </TabsTrigger>
                    );
                })}
             </TabsList>
             {roadmapPhases.map((phase) => {
                const colors = statusColors[phase.status as keyof typeof statusColors];
                return (
                    <TabsContent key={phase.id} value={phase.id}>
                        <motion.div variants={cardVariants} initial="hidden" animate="visible">
                            <Card className={cn(memeMode && "border-dashed border-primary/30")}>
                                <CardHeader className="pb-4">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                        <CardTitle className={cn("text-lg flex items-center gap-2", memeMode && "font-mission")}>
                                            <phase.icon className={cn("h-5 w-5", colors.text)} /> {phase.title(memeMode)}
                                        </CardTitle>
                                        <Badge className={cn("w-fit self-start sm:self-center", colors.badge)}>
                                            <colors.icon className="h-3 w-3 mr-1.5"/> {phase.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                                        {phase.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-2">
                                                {phase.status === "Completed" ? (
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0"/>
                                                ) : phase.status === "In Progress" ? (
                                                    <Zap className="h-4 w-4 text-blue-500 mt-0.5 shrink-0 animate-pulse"/>
                                                ) : (
                                                    <ListChecks className="h-4 w-4 text-gray-400 mt-0.5 shrink-0"/>
                                                )}
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                );
             })}
           </Tabs>
         </div>
      </div>
       <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           viewport={{ once: true }}
           className="mt-10 text-center text-xs text-muted-foreground max-w-xl mx-auto italic"
        >
         Roadmap is subject to adaptation based on market conditions and community feedback. We remain agile, like a cockroach avoiding a boot.
       </motion.div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/Roadmap.tsx ---