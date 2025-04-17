// --- START OF FILE ./components/sections/Roadmap.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Target, Rocket, ListChecks, CalendarClock } from "lucide-react"; // Refining icons: CalendarClock for upcoming
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Revised Roadmap Data with Unified Tone
const roadmapPhases = [
  {
    id: "phase1",
    title: "Phase 1: Foundation & Audit", // Unified title
    status: "Completed",
    icon: CheckCircle2, // Clear completion icon
    items: [
      "Developed Core SPL Token & 5-Tier System",
      "Implemented 4-Hour Market Tracking Logic",
      "Completed CertiK Security Audit",
      "Launched Website V1 & Initial Community Channels",
      "Conducted Successful Private Presale ($35k)",
    ],
    color: "green",
  },
  {
    id: "phase2",
    title: "Phase 2: Launch & Market Entry", // Unified title
    status: "In Progress",
    icon: Zap, // Zap indicates active building/launch energy
    items: [
      "Executing Public Presale Strategy (Target $65k+)", // Generic platform target
      "Establishing Initial Raydium Liquidity Pool",
      "Finalizing LP Token Lock/Burn Procedure", // Added detail
      "Distributing Tokens to Presale Participants",
      "Submitting CoinGecko & CoinMarketCap Applications",
      "Deploying Initial Marketing & KOL Campaigns",
      "Developing Holder Dashboard V1",
    ],
    color: "blue",
  },
  {
    id: "phase3",
    title: "Phase 3: Ecosystem Growth & Expansion", // Unified title
    status: "Upcoming",
    icon: Rocket, // Rocket symbolizes future growth/ambition
    items: [
      "Research & Develop Automated Buyback/Stability Features",
      "Explore Strategic Solana Ecosystem Partnerships",
      "Initiate Tier 2 Centralized Exchange (CEX) Outreach",
      "Seek Listings on Additional DEX Platforms",
      "Investigate Utility Integrations (e.g., Staking, NFTs)",
      "Enhance Holder Analytics & Tools (Dashboard V2)",
      "Formulate Long-Term Governance Framework",
    ],
    color: "purple", // Using purple for future/upcoming
  },
];

export function Roadmap() {
    // Removed useMemeMode

    // Revised status color mapping
    const statusColors: { [key: string]: { badge: string; dot: string; text: string; icon: React.ElementType } } = {
        Completed: { badge: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30", dot: "bg-green-500 border-green-300", text: "text-green-700 dark:text-green-400", icon: CheckCircle2 },
        "In Progress": { badge: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30", dot: "bg-blue-500 border-blue-300 ring-4 ring-blue-500/30 animate-pulse", text: "text-blue-700 dark:text-blue-400", icon: Zap },
        "Upcoming": { badge: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30", dot: "bg-muted border-border", text: "text-purple-700 dark:text-purple-400", icon: CalendarClock }, // Use Purple for upcoming, adjusted icon
    };


    // Animation Variants
    const timelineItemVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } } // Added staggerChildren for items inside card
    };

    const listItemVariants = { // Added variants for list items
       hidden: { opacity: 0, x: -10 },
       visible: { opacity: 1, x: 0 }
    };

    const cardVariants = { // Simple fade-in for tab content
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } }
    };


    return (
        <Section id="roadmap" className="py-20 md:py-28 bg-gradient-to-b from-muted/10 to-background">
            <SectionHeader
                title="Project Roadmap: Building an Antifragile Future" // Updated Title
                description="Our strategic roadmap outlines key milestones for development, launch, and the long-term growth of the $ROACH ecosystem, adapting as needed." // Updated Description
                subtitle={<><Rocket className="inline h-4 w-4 mr-1" /> Development Journey</>}
                alignment="center"
                className="mb-16"
            />

            <div className="relative max-w-4xl mx-auto">
                {/* Desktop Timeline View */}
                <div className="hidden md:block">
                    {/* Vertical connecting line */}
                     <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-border/0 via-border/70 to-border/0 -z-10" /> {/* Faded line */}

                    {roadmapPhases.map((phase, index) => {
                        const colors = statusColors[phase.status as keyof typeof statusColors];
                        return (
                            <motion.div
                                key={phase.id}
                                className="relative pl-[4.5rem] pb-12 last:pb-0" // Padding left for dot alignment, bottom padding for spacing
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {/* Phase Dot & Icon on the line */}
                                <div className={cn(
                                    "absolute left-[1.05rem] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 shadow-md", // Adjusted left position and size
                                    colors.dot, // Apply color and pulse from map
                                     "transition-colors duration-300" // Smooth color transition
                                )}>
                                    <phase.icon className={cn(
                                       "h-4 w-4 sm:h-5 sm:w-5",
                                        // White for active/completed, muted for upcoming
                                        phase.status === "Upcoming" ? "text-muted-foreground/70" : "text-white"
                                    )} />
                                </div>

                                {/* Phase Card */}
                                <Card className="ml-4 border border-border/10 shadow-md hover:shadow-lg focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300">
                                    <CardHeader className="pb-3 border-b border-border/10">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                            <CardTitle className="text-lg sm:text-xl font-semibold">{phase.title}</CardTitle>
                                            <Badge className={cn("w-fit self-start sm:self-center text-xs font-medium px-2 py-0.5", colors.badge)}>
                                                <colors.icon className="h-3 w-3 mr-1.5" /> {phase.status}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-4 px-5 pb-5">
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {phase.items.map((item, itemIndex) => (
                                                <motion.li
                                                    key={itemIndex}
                                                    variants={listItemVariants} // Apply variant to each item
                                                    className="flex items-start gap-2.5" // Increased gap
                                                >
                                                   {/* Conditional check icon */}
                                                   {phase.status === "Completed" ? (
                                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-[3px] shrink-0" />
                                                    ) : (
                                                      <div className="h-1.5 w-1.5 bg-muted-foreground/40 rounded-full mt-[7px] shrink-0" /> // Simple dot for pending
                                                   )}
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                         {/* Placeholder for visual inside card? */}
                                          {/* {index === 1 && ( // Example: Add placeholder only to Phase 2 card
                                            <div className="mt-4 border-t border-border/10 pt-3">
                                              <div className="aspect-[16/4] bg-muted/50 border border-dashed rounded flex items-center justify-center">
                                                <p className="text-[0.6rem] text-muted-foreground/70 italic p-1 text-center">AI Prompt: Gantt chart snippet visually representing the 'In Progress' Phase 2 tasks.</p>
                                              </div>
                                            </div>
                                          )} */}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Tabs View - Keeping this structure */}
                <div className="md:hidden">
                    <Tabs defaultValue={roadmapPhases.find(p => p.status === "In Progress")?.id || roadmapPhases[0].id} className="w-full">
                         <TabsList className="grid w-full grid-cols-3 mb-6 gap-1 p-1 bg-muted rounded-lg h-auto">
                            {roadmapPhases.map((phase) => {
                                const colors = statusColors[phase.status as keyof typeof statusColors];
                                const isActive = phase.id === (roadmapPhases.find(p => p.status === "In Progress")?.id || roadmapPhases[0].id); // Logic needs default check
                                return (
                                    <TabsTrigger
                                        key={phase.id}
                                        value={phase.id}
                                        className={cn(
                                             "flex-col items-center h-auto py-2.5 px-1 text-xs rounded-md data-[state=active]:shadow-md transition-all duration-200 relative",
                                             "data-[state=active]:font-semibold", // Bolder text for active tab
                                             isActive ? colors.badge.replace('border-', 'bg-').replace('/30', '/20') + ` ${colors.text}` : "hover:bg-accent/70 text-muted-foreground",
                                             "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:z-10"
                                        )}
                                    >
                                        <phase.icon className={cn("h-4 w-4 mb-1", isActive ? colors.text : "")}/> Phase {phase.id.replace('phase','')}
                                    </TabsTrigger>
                                );
                             })}
                         </TabsList>

                         {roadmapPhases.map((phase) => {
                            const colors = statusColors[phase.status as keyof typeof statusColors];
                            return (
                                <TabsContent key={phase.id} value={phase.id}>
                                     <motion.div variants={cardVariants} initial="hidden" animate="visible" className="mt-0">
                                        <Card className="border border-border/10 shadow-md">
                                             <CardHeader className="pb-3 border-b border-border/10">
                                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                                    <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
                                                         <phase.icon className={cn("h-5 w-5", colors.text)} /> {phase.title}
                                                     </CardTitle>
                                                    <Badge className={cn("w-fit self-start sm:self-center text-xs font-medium px-2 py-0.5", colors.badge)}>
                                                         <colors.icon className="h-3 w-3 mr-1.5" /> {phase.status}
                                                    </Badge>
                                                 </div>
                                             </CardHeader>
                                            <CardContent className="pt-4 px-4 pb-4">
                                                <ul className="space-y-2.5 text-sm text-muted-foreground">
                                                    {phase.items.map((item, itemIndex) => (
                                                         <li key={itemIndex} className="flex items-start gap-2.5">
                                                            {phase.status === "Completed" ? (
                                                               <CheckCircle2 className="h-4 w-4 text-green-500 mt-[3px] shrink-0"/>
                                                             ) : (
                                                               <div className="h-1.5 w-1.5 bg-muted-foreground/40 rounded-full mt-[7px] shrink-0" />
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
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                className="mt-12 text-center text-xs text-muted-foreground max-w-xl mx-auto italic"
            >
                Note: This roadmap provides a directional overview. Timelines and specific items may evolve based on development progress, market conditions, and community input. $ROACH remains adaptive.
            </motion.div>
        </Section>
    );
}


// --- END OF FILE ./components/sections/Roadmap.tsx ---