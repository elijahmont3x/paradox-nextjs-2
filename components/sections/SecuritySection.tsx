// --- START OF FILE ./components/sections/SecuritySection.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, FileCode, Users, ExternalLink } from "lucide-react";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for internal links

export function SecuritySection() {
  const { memeMode } = useMemeMode();

  // Security Features data based on whitepaper and context
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: (memeMode: boolean) => memeMode ? "Audited & Approved" : "Audited Smart Contract",
      description: (memeMode: boolean) => memeMode
        ? "Survived the gauntlet of a CertiK audit. No critical bugs found. Basically un-hackable (probably)."
        : "Comprehensive security audit completed by CertiK, verifying contract integrity and identifying zero critical or major vulnerabilities.",
      status: "CertiK Passed",
      link: "#", // REPLACE with actual link to audit report PDF or page
      color: "green", // Updated color mapping
    },
    {
      icon: Lock,
      title: (memeMode: boolean) => memeMode ? "Liquidity Fortress Knox" : "Locked Liquidity Pool",
      description: (memeMode: boolean) => memeMode
        ? "LP tokens locked tight for 12 months via PinkLock. No rug pulls here, only MOON pulls."
        : "Initial liquidity pool tokens are securely locked for 12 months using the PinkLock service, ensuring stability.",
      status: "12-Month Lock",
       link: "#", // REPLACE with actual link to PinkLock proof
      color: "blue",
    },
    {
      icon: FileCode,
      title: (memeMode: boolean) => memeMode ? "No Magic Print Button" : "Fixed Supply & Verified Code",
      description: (memeMode: boolean) => memeMode
        ? "Can't print more $ROACH out of thin air. Supply is FIXED forever. What you see is what you get."
        : "The contract has a fixed total supply with minting capabilities permanently disabled. Source code is verified on Solana explorers.",
      status: "Verified on Solscan", // Example status
       link: `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f#verified-contract`, // REPLACE ADDR - Link to verified contract tab
       color: "purple",
    },
     {
      icon: Users,
      title: (memeMode: boolean) => memeMode ? "Team Tokens on Lockdown" : "Transparent & Vested Team",
      description: (memeMode: boolean) => memeMode
        ? "Team tokens are vested over 6 months. We're strapped in for the long haul, building the colony, not dumping on you."
        : "Team token allocation is subject to a 6-month linear vesting schedule, demonstrating long-term commitment and aligning incentives.",
      status: "6-Month Vesting",
       link: "#roadmap", // Link to roadmap section which might imply team commitment (or add a dedicated link later)
       color: "amber", // Using amber/yellow
    },
  ];

  // Tailwind color mapping utility
  const colorMap = {
      green: { text: 'text-green-600', bg: 'bg-green-500/10', border: 'border-green-500/30', hoverBg: 'hover:bg-green-500/15' },
      blue: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', hoverBg: 'hover:bg-blue-500/15' },
      purple: { text: 'text-purple-600', bg: 'bg-purple-500/10', border: 'border-purple-500/30', hoverBg: 'hover:bg-purple-500/15' },
      amber: { text: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-500/30', hoverBg: 'hover:bg-amber-500/15' },
  };

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <Section id="security" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-muted/10 to-background"> {/* Subtle gradient */}
      <SectionHeader
        title={memeMode ? "Roach-Proof Security Fortress" : "Security & Trustworthiness"}
        description={memeMode
          ? "We built this thing tougher than a Nokia 3310 wrapped in cockroaches. Security isn't optional, it's survival."
          : "Transparency and robust security measures are fundamental to $ROACH. We prioritize protecting our holders and ensuring ecosystem integrity."}
        subtitle={<><ShieldCheck className="inline h-4 w-4 mr-1"/> Trust & Safety</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {securityFeatures.map((feature) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            return (
            <motion.div
                key={feature.status} // Use status or title as key
                variants={itemVariants}
            >
                <Card className={cn(
                    "h-full border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col", // Ensure flex column
                    colors.border,
                    colors.hoverBg,
                    memeMode && "border-dashed"
                )}>
                <CardContent className="p-6 flex-grow flex flex-col"> {/* Flex grow content */}
                    <div className="flex items-start gap-4 mb-3">
                    <div className={cn("p-2.5 rounded-full shrink-0 mt-1", colors.bg)}>
                        <feature.icon className={cn("h-6 w-6", colors.text)} />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1 gap-y-1">
                            <h3 className={cn("text-lg font-semibold leading-tight", memeMode && "font-mission")}>{feature.title(memeMode)}</h3>
                            <Badge variant="secondary" className={cn(
                                "w-fit text-xs px-2 py-0.5",
                                colors.bg, colors.text, colors.border
                            )}>
                            {feature.status}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description(memeMode)}</p>
                    </div>
                    </div>
                    {/* Action Button - Pushed to bottom */}
                    <div className="mt-auto pt-3">
                        <Button variant="link" size="sm" className={cn("p-0 h-auto text-xs font-medium group", colors.text)} asChild>
                            <a href={feature.link} target={feature.link === "#roadmap" ? "_self" : "_blank"} rel="noopener noreferrer">
                            {memeMode ? "Verify Intel" : "View Proof"}
                            <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
            );
        })}
      </motion.div>
       <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }} // Slight delay after cards
           viewport={{ once: true }}
           className="mt-12 text-center"
        >
         <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            {memeMode ? "Trust, but verify. Always DYOR, even on the unkillable. Links prove we ain't lying." : "Transparency is paramount. We encourage all users to verify these security measures independently using the provided links."}
         </p>
       </motion.div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/SecuritySection.tsx ---