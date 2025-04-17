// --- START OF FILE ./components/sections/SecuritySection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, FileCode, Users, ExternalLink } from "lucide-react"; // Using consistent icons
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function SecuritySection() {
    // Removed useMemeMode

    // Refined Security Features data for clarity and unified tone
    const securityFeatures = [
        {
            icon: ShieldCheck,
            title: "Comprehensive Security Audit",
            description: "Independently audited by CertiK, confirming contract integrity and identifying no critical or major vulnerabilities. Your security is paramount.",
            status: "CertiK Passed",
            link: "#", // REPLACE with actual link to audit report
            color: "green",
        },
        {
            icon: Lock,
            title: "Locked Initial Liquidity",
            description: "The initial liquidity pool (LP) tokens are verifiably locked for 12 months via PinkLock, preventing rug pulls and ensuring market stability.",
            status: "12-Month Lock",
            link: "#", // REPLACE with actual link to PinkLock proof
            color: "blue",
        },
        {
            icon: FileCode,
            title: "Immutable Fixed Supply",
            description: "A fixed total supply of 1 billion $ROACH with minting permanently disabled in the contract code. Ensures scarcity and prevents inflation.",
            status: "Verified on Solscan",
            link: `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f#verified-contract`, // REPLACE ADDR - Link to verified contract
            color: "purple",
        },
        {
            icon: Users,
            title: "Vested Team Allocation",
            description: "Team tokens follow a strict 6-month linear vesting schedule, demonstrating long-term project commitment and aligning incentives with the community.",
            status: "6-Month Linear Vesting",
            link: "#roadmap", // Link to roadmap section
            color: "amber",
        },
    ];

    // Tailwind color mapping - Refined for better contrast/accessibility where needed
    const colorMap = {
        green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-500/20', border: 'border-green-500/30 dark:border-green-500/40', hoverBg: 'hover:bg-green-500/20 dark:hover:bg-green-500/30' },
        blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30 dark:border-blue-500/40', hoverBg: 'hover:bg-blue-500/20 dark:hover:bg-blue-500/30' },
        purple: { text: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-500/10 dark:bg-purple-500/20', border: 'border-purple-500/30 dark:border-purple-500/40', hoverBg: 'hover:bg-purple-500/20 dark:hover:bg-purple-500/30' },
        amber: { text: 'text-amber-700 dark:text-amber-400', bg: 'bg-amber-500/10 dark:bg-amber-500/20', border: 'border-amber-500/30 dark:border-amber-500/40', hoverBg: 'hover:bg-amber-500/20 dark:hover:bg-amber-500/30' },
    };

    // Animation Variants - Remain the same
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <Section id="security" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/10"> {/* Adjusted background */}
            <SectionHeader
                title="Fortified Security & Trust" // Clearer Title
                description="We prioritize a secure and trustworthy foundation for the $ROACH ecosystem. Key measures ensure transparency and protect holder interests." // Refined Description
                subtitle={<><ShieldCheck className="inline h-4 w-4 mr-1" /> Foundational Safety</>}
                alignment="center"
                className="mb-16"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
                {securityFeatures.map((feature, index) => { // Added index for animation delay
                    const colors = colorMap[feature.color as keyof typeof colorMap];
                    return (
                        <motion.div
                            key={feature.title} // Use title as key
                            variants={itemVariants}
                            transition={{ delay: index * 0.05 }} // Add slight stagger delay
                        >
                             {/* Card now includes Link as a wrapper if link exists */}
                            <Link
                                href={feature.link}
                                target={feature.link === "#roadmap" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg" // Make card itself linkable, improve focus state
                            >
                                <Card className={cn(
                                    "h-full border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col",
                                    colors.border,
                                    colors.hoverBg, // Using hover background color for interaction
                                    "group-hover:border-primary/50" // Enhance border on hover of link wrapper
                                )}>
                                    <CardContent className="p-5 sm:p-6 flex-grow flex flex-col"> {/* Adjusted padding */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={cn("p-2 rounded-full shrink-0", colors.bg)}>
                                                <feature.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", colors.text)} />
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle className="text-base sm:text-lg font-semibold leading-tight mb-1">{feature.title}</CardTitle>
                                                <Badge variant="secondary" size="sm" className={cn(
                                                     "w-fit text-xs",
                                                     colors.bg, colors.text, colors.border.replace('border-','border-')
                                                )}>
                                                    {feature.status}
                                                 </Badge>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground flex-grow mb-3">{feature.description}</p>
                                        {/* Removed button, action is card click now */}
                                         <div className="mt-auto pt-2 text-right text-xs font-medium flex items-center justify-end gap-1 group-hover:text-primary transition-colors duration-200"
                                               aria-hidden="true">
                                            {feature.link === "#roadmap" ? "View Details" : "Verify Proof"}
                                             <ExternalLink className="h-3 w-3 " />
                                         </div>
                                    </CardContent>
                                </Card>
                             </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                   Transparency builds trust. We encourage you to independently verify these security claims using the provided links. Click any card above to view the corresponding proof.
                </p>
            </motion.div>
             {/* Optional Placeholder for Visual */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2, delay: 0.2 }}
                 className="mt-10 max-w-md mx-auto bg-gradient-to-tr from-green-500/10 via-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-border/10 aspect-video flex items-center justify-center">
                 <p className="text-xs text-muted-foreground/80 italic text-center p-2">
                   AI Prompt: A composite image or illustration showing interconnected shield icons (for audit), lock icons (for LP), file/code icons (for supply), and group/user icons (for team vesting), visually representing layers of security. Clean, tech-inspired aesthetic using site's theme colors.
                 </p>
             </motion.div> */}
        </Section>
    );
}

// --- END OF FILE ./components/sections/SecuritySection.tsx ---