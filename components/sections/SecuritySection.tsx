// --- START OF FILE ./components/sections/SecuritySection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// No CardHeader/Desc needed if we structure within CardContent
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, FileCode, Users, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link"; // Using NextLink

export function SecuritySection() {

    const securityFeatures = [ // Data unchanged
        { icon: ShieldCheck, title: "Comprehensive Security Audit", description: "Independently audited by CertiK, confirming contract integrity and identifying no critical or major vulnerabilities. Your security is paramount.", status: "CertiK Passed", link: "#", color: "green", },
        { icon: Lock, title: "Locked Initial Liquidity", description: "The initial liquidity pool (LP) tokens are verifiably locked for 12 months via PinkLock, preventing rug pulls and ensuring market stability.", status: "12-Month Lock", link: "#", color: "blue", },
        { icon: FileCode, title: "Immutable Fixed Supply", description: "A fixed total supply of 1 billion $ROACH with minting permanently disabled in the contract code. Ensures scarcity and prevents inflation.", status: "Verified on Solscan", link: `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f#verified-contract`, color: "purple", },
        { icon: Users, title: "Vested Team Allocation", description: "Team tokens follow a strict 6-month linear vesting schedule, demonstrating long-term project commitment and aligning incentives with the community.", status: "6-Month Linear Vesting", link: "#roadmap", color: "amber", },
    ];
    const colorMap = { // Unchanged
        green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-500/20', border: 'border-green-500/30 dark:border-green-500/40', hoverBg: 'hover:bg-green-500/15 dark:hover:bg-green-500/25' },
        blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30 dark:border-blue-500/40', hoverBg: 'hover:bg-blue-500/15 dark:hover:bg-blue-500/25' },
        purple: { text: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-500/10 dark:bg-purple-500/20', border: 'border-purple-500/30 dark:border-purple-500/40', hoverBg: 'hover:bg-purple-500/15 dark:hover:bg-purple-500/25' },
        amber: { text: 'text-amber-700 dark:text-amber-400', bg: 'bg-amber-500/10 dark:bg-amber-500/20', border: 'border-amber-500/30 dark:border-amber-500/40', hoverBg: 'hover:bg-amber-500/15 dark:hover:bg-amber-500/25' },
    };
    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }; // Unchanged
    const itemVariants = { hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }; // Unchanged

    return (
        <Section id="security" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/10 dark:from-background dark:to-background/10"> {/* Adjusted bg, increased padding */}
            <SectionHeader title="Fortified Security & Trust" description="We prioritize a secure and trustworthy foundation. Key measures ensure transparency and protect holder interests." subtitle={<><ShieldCheck className="inline h-4 w-4 mr-1" /> Foundational Safety</>} alignment="center" className="mb-16" />

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto" >
                {securityFeatures.map((feature, index) => {
                    const colors = colorMap[feature.color as keyof typeof colorMap];
                    return (
                        <motion.div key={feature.title} variants={itemVariants} transition={{ delay: index * 0.05 }} >
                            <Link
                                href={feature.link} target={feature.link === "#roadmap" ? "_self" : "_blank"} rel="noopener noreferrer"
                                // AUDIT FIX: Enhanced hover/focus styles on the Link wrapper (group)
                                className="block h-full group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background focus-visible:shadow-lg"
                                aria-label={`Learn more about ${feature.title}`} // Added aria-label
                            >
                                <Card className={cn( "h-full border shadow-md group-hover:shadow-lg group-hover:border-primary/40 dark:group-hover:border-primary/60 transition-all duration-300 flex flex-col", colors.border, colors.bg // Use normal BG, hover effect on link controls visual change
                                )}>
                                    <CardContent className="p-5 sm:p-6 flex-grow flex flex-col gap-3"> {/* Standardized gap */}
                                        {/* Top Section: Icon, Title, Badge */}
                                        <div className="flex items-start justify-between gap-3">
                                             <div className="flex items-start gap-3">
                                                 <div className={cn("p-2 rounded-full shrink-0", colors.bg)}>
                                                      {/* AUDIT FIX: Standardized Icon Size */}
                                                     <feature.icon className={cn("h-5 w-5", colors.text)} />
                                                 </div>
                                                <CardTitle className="text-base sm:text-lg font-semibold leading-tight pt-1">{feature.title}</CardTitle>
                                             </div>
                                            <Badge variant="secondary" size="sm" className={cn( "w-fit text-[0.7rem] shrink-0", colors.bg, colors.text, colors.border )}> {feature.status} </Badge>
                                         </div>
                                         {/* Description */}
                                        <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
                                        {/* Link Indicator Footer */}
                                         <div className={cn("mt-auto pt-2 text-xs font-medium flex items-center justify-end gap-1 text-primary/80 group-hover:text-primary dark:text-primary/70 dark:group-hover:text-primary", colors.text?.replace('700','600').replace('400','500'))} // Use themed color for link hint
                                            aria-hidden="true" >
                                             {feature.link === "#roadmap" ? "View Details" : "Verify Proof"} <ExternalLink className="h-3 w-3 " />
                                         </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

             <motion.div initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mt-12 text-center">
                <p className="text-muted-foreground text-sm max-w-xl mx-auto"> Transparency builds trust. We encourage you to verify these security measures independently using the links provided on each card.</p>
             </motion.div>

             {/* Composite Visual Placeholder - UNCOMMENTED */}
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2, delay: 0.2 }}
                 className="mt-10 max-w-md mx-auto bg-gradient-to-tr from-green-500/10 via-blue-500/10 to-purple-500/10 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-border/10 aspect-[16/6] flex items-center justify-center" >
                  <p className="text-xs text-muted-foreground/80 dark:text-muted-foreground/60 italic text-center p-2">
                   AI Prompt: A composite illustration showing interconnected shield icons (audit), lock icons (LP), file/code icons (supply), and user group icons (team vesting), visually representing layers of security. Clean, slightly technical aesthetic using page theme colors.
                 </p>
            </motion.div>
        </Section>
    );
}

// --- END OF FILE ./components/sections/SecuritySection.tsx ---