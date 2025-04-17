// --- START OF FILE ./components/sections/Roadmap.tsx ---

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Target, Rocket, ListChecks, CalendarClock, Activity } from "lucide-react"; // Added Activity as another option for list bullets
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Roadmap Data (Unchanged from previous refined version)
const roadmapPhases = [
  { id: "phase1", title: "Phase 1: Foundation & Audit", status: "Completed", icon: CheckCircle2, items: [ "Developed Core SPL Token & 5-Tier System", "Implemented 4-Hour Market Tracking Logic", "Completed CertiK Security Audit", "Launched Website V1 & Initial Community Channels", "Conducted Successful Private Presale ($35k)", ], color: "green", },
  { id: "phase2", title: "Phase 2: Launch & Market Entry", status: "In Progress", icon: Zap, items: [ "Executing Public Presale Strategy (Target $65k+)", "Establishing Initial Raydium Liquidity Pool", "Finalizing LP Token Lock/Burn Procedure", "Distributing Tokens to Presale Participants", "Submitting CoinGecko & CoinMarketCap Applications", "Deploying Initial Marketing & KOL Campaigns", "Developing Holder Dashboard V1", ], color: "blue", },
  { id: "phase3", title: "Phase 3: Ecosystem Growth & Expansion", status: "Upcoming", icon: Rocket, items: [ "Research & Develop Automated Buyback/Stability Features", "Explore Strategic Solana Ecosystem Partnerships", "Initiate Tier 2 Centralized Exchange (CEX) Outreach", "Seek Listings on Additional DEX Platforms", "Investigate Utility Integrations (e.g., Staking, NFTs)", "Enhance Holder Analytics & Tools (Dashboard V2)", "Formulate Long-Term Governance Framework", ], color: "purple", }, // Changed upcoming icon
];

export function Roadmap() {

    const statusColors: { [key: string]: { badge: string; dot: string; text: string; icon: React.ElementType; listIcon?: React.ElementType; } } = { // Added listIcon
        Completed: { badge: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30", dot: "bg-green-500 border-white dark:border-card", text: "text-green-700 dark:text-green-400", icon: CheckCircle2, listIcon: CheckCircle2 },
        "In Progress": { badge: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30", dot: "bg-blue-500 border-white dark:border-card ring-4 ring-blue-500/30 animate-pulse", text: "text-blue-700 dark:text-blue-400", icon: Zap, listIcon: Activity }, // Use Activity for ongoing items
        "Upcoming": { badge: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30", dot: "bg-muted border-border", text: "text-purple-700 dark:text-purple-400", icon: CalendarClock, listIcon: ListChecks }, // Use ListChecks for upcoming
    };
    const timelineItemVariants = { /* Unchanged */ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } } };
    const listItemVariants = { /* Unchanged */ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } };
    const cardVariants = { /* Unchanged */ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } };

    // Find the index of the "In Progress" phase for mobile default tab
     const defaultTabIndex = roadmapPhases.findIndex(p => p.status === "In Progress");


    return (
        <Section id="roadmap" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/10 dark:to-background/10">
            <SectionHeader title="Project Roadmap: Building an Antifragile Future" description="Our strategic roadmap outlines key milestones for development, launch, and the long-term growth of the $ROACH ecosystem, adapting as needed." subtitle={<><Rocket className="inline h-4 w-4 mr-1" /> Development Journey</>} alignment="center" className="mb-16" />

            <div className="relative max-w-4xl mx-auto">
                {/* Desktop Timeline */}
                <div className="hidden md:block">
                     {/* AUDIT FIX: Made line slightly thicker, ensure positioning centers it better */}
                     <div className="absolute left-[1.6rem] top-0 h-full w-1 bg-border/30 dark:bg-border/20 -z-10" aria-hidden="true" />
                    {roadmapPhases.map((phase, index) => {
                        const colors = statusColors[phase.status as keyof typeof statusColors];
                        const ListIcon = phase.listIcon || ListChecks; // Fallback icon

                        return (
                            <motion.div key={phase.id} className="relative pl-20 pb-12 last:pb-0" // Adjusted pl, used pb for spacing
                                variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} >
                                {/* Dot */}
                                <div className={cn( "absolute left-[0.8rem] top-[0.3rem] flex items-center justify-center w-8 h-8 rounded-full border-4 shadow-sm z-10", colors.dot )}>
                                     <phase.icon className={cn("h-4 w-4", phase.status === "Upcoming" ? "text-muted-foreground/60" : "text-white")}/>
                                </div>
                                {/* Card */}
                                <Card className="border border-border/10 dark:border-border/20 shadow-md hover:shadow-lg focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300 overflow-hidden"> {/* Added overflow-hidden */}
                                    <CardHeader className="pb-3 border-b border-border/10 dark:border-border/20">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                             <CardTitle className={cn("text-lg sm:text-xl font-semibold", colors.text)}>{phase.title}</CardTitle>
                                             <Badge className={cn("w-fit self-start sm:self-center text-xs font-medium px-2.5 py-0.5", colors.badge)}> <colors.icon className="h-3 w-3 mr-1.5" /> {phase.status} </Badge>
                                        </div>
                                     </CardHeader>
                                     <CardContent className="pt-4 px-5 pb-5">
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                             {phase.items.map((item, itemIndex) => (
                                                 <motion.li key={itemIndex} variants={listItemVariants} className="flex items-start gap-2.5">
                                                     <ListIcon className={cn("h-4 w-4 mt-[3px] shrink-0", phase.status === "Completed" ? "text-green-500" : phase.status === "In Progress" ? "text-blue-500 animate-spin" : "text-muted-foreground/50" )} // Used status color, added spin for active
                                                        style={{ animationDuration: phase.status === 'In Progress' ? '2s' : undefined }} // Slow spin
                                                        />
                                                     <span>{item}</span>
                                                 </motion.li>))}
                                         </ul>
                                         {/* Visual Placeholder Activation (Example for 'In Progress') */}
                                          {phase.status === "In Progress" && ( // Only show for Phase 2 (or In Progress)
                                            <div className="mt-4 border-t border-border/10 dark:border-border/20 pt-3">
                                              <div className="aspect-[16/4] bg-muted/30 dark:bg-muted/10 border border-dashed rounded flex items-center justify-center">
                                                 <p className="text-[0.65rem] leading-tight text-muted-foreground/70 dark:text-muted-foreground/50 italic p-1 text-center">
                                                    AI Prompt: Minimalist Gantt chart visualization for the key tasks listed in Phase 2 (Market Entry). Use theme colors.
                                                </p>
                                              </div>
                                            </div>
                                          )}
                                     </CardContent>
                                </Card>
                            </motion.div>); })}
                </div>

                 {/* Mobile Tabs View */}
                 <div className="md:hidden">
                     <Tabs defaultValue={roadmapPhases[defaultTabIndex]?.id || roadmapPhases[0].id} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-6 gap-1 p-1 bg-muted dark:bg-background/30 rounded-lg h-auto">
                            {roadmapPhases.map((phase) => {
                                const colors = statusColors[phase.status as keyof typeof statusColors];
                                return (
                                    <TabsTrigger key={phase.id} value={phase.id} className={cn( "flex-col items-center h-auto py-2.5 px-1 text-[0.7rem] leading-tight rounded-md data-[state=active]:shadow transition-colors duration-200 relative focus-visible:z-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1", "data-[state=active]:font-semibold data-[state=active]:bg-card", // Common active state
                                         phase.status === "Completed" && "data-[state=active]:text-green-700 dark:data-[state=active]:text-green-400", phase.status === "In Progress" && "data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400", phase.status === "Upcoming" && "data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-400", // Status specific active colors
                                         "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-accent/70" // Inactive state
                                        )}>
                                        <phase.icon className="h-4 w-4 mb-0.5"/> Phase {phase.id.replace('phase','')} ({phase.status === 'In Progress' ? 'Current' : phase.status}) {/* Clarified text */}
                                     </TabsTrigger>); })}
                         </TabsList>
                         {roadmapPhases.map((phase) => {
                             const colors = statusColors[phase.status as keyof typeof statusColors];
                            const ListIcon = phase.listIcon || ListChecks;
                             return (
                                <TabsContent key={phase.id} value={phase.id} className="mt-0">
                                    <motion.div variants={cardVariants} initial="hidden" animate="visible">
                                         <Card className="border border-border/10 dark:border-border/20 shadow-sm">
                                             <CardHeader className="pb-3 pt-4 px-4 border-b border-border/10 dark:border-border/20"> {/* Adjusted padding */}
                                                 <div className="flex flex-col xs:flex-row justify-between xs:items-center gap-2">
                                                     <CardTitle className={cn("text-base sm:text-lg font-semibold flex items-center gap-2", colors.text)}> <phase.icon className="h-5 w-5"/> {phase.title} </CardTitle>
                                                     <Badge className={cn("w-fit self-start xs:self-center text-xs font-medium px-2.5 py-0.5", colors.badge)}> <colors.icon className="h-3 w-3 mr-1.5" /> {phase.status} </Badge>
                                                  </div>
                                             </CardHeader>
                                             <CardContent className="pt-4 px-4 pb-4">
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                     {phase.items.map((item, itemIndex) => ( <li key={itemIndex} className="flex items-start gap-2.5"> <ListIcon className={cn("h-4 w-4 mt-[3px] shrink-0", phase.status === "Completed" ? "text-green-500" : phase.status === "In Progress" ? "text-blue-500" : "text-muted-foreground/50" )} /> <span>{item}</span> </li> ))}
                                                 </ul>
                                                 {/* Placeholder for mobile if needed */}
                                                  {/* {phase.status === "In Progress" && (<div className="mt-4 border-t border-border/10 dark:border-border/20 pt-3"><div className="aspect-[16/4] bg-muted/30 dark:bg-muted/10 border border-dashed rounded flex items-center justify-center"><p className="text-[0.65rem] ...">...</p></div></div>)} */}
                                             </CardContent>
                                         </Card>
                                    </motion.div>
                                </TabsContent>); })}
                     </Tabs>
                 </div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mt-12 text-center text-xs text-muted-foreground max-w-xl mx-auto italic"> Note: This roadmap is a directional guide. Specific timelines and features may adapt based on development progress, market dynamics, and community feedback. </motion.div>
        </Section>
    );
}


// --- END OF FILE ./components/sections/Roadmap.tsx ---