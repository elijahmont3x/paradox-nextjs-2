// --- START OF FILE ./components/sections/SocialProof.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquareText, TrendingUp, ArrowUpRight, ExternalLink, Quote, GitBranch } from "lucide-react"; // Refined icons: TrendingUp instead of Flame, GitBranch for 'Network' aspect.
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6"; // Social icons
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// --- Placeholder Data (Keep structure, refine text) ---
const metrics = [
    {
        icon: Users,
        value: "15k+", // Kept dynamic format potential
        label: "Community Size", // Unified label
        trend: "+ Active Daily", // Refined trend text
        description: "Growing network of $ROACH holders & supporters.", // Added description
        color: "blue",
    },
    {
        icon: MessageSquareText,
        value: "High Engagement", // Status indication
        label: "Discussion Activity", // Unified label
        trend: "Multiple Channels", // More specific detail
        description: "Active conversations on Telegram, Discord, and X.",
        color: "green",
    },
    {
        icon: TrendingUp, // Better represents growth
        value: "Upward Trend", // Status indication
        label: "Holder Growth", // Unified label
        trend: "+ New Wallets Daily", // More specific detail
        description: "Consistent increase in unique $ROACH holders.",
        color: "orange",
    },
];

const testimonials = [
    {
        name: "Crypto Investor", // Generic but credible
        handle: "@StrategicHODL",
        avatarFallback: "CI",
        image: "/avatars/placeholder1.png", // **REPLACE with actual paths later**
        text: "Impressive mechanism. My holdings noticeably increased via reflections during the last market dip. The antifragile concept holds up under pressure.", // Professional but positive
        role: "Early Adopter", // Clear role
    },
    {
        name: "DeFi Analyst",
        handle: "@TokenomicsInsight",
        avatarFallback: "DA",
        image: "/avatars/placeholder2.png", // **REPLACE**
        text: "The dynamic tax system in $ROACH is a novel approach to managing volatility. Provides clear incentives for holding through downturns. Watching closely.", // Analytical perspective
        role: "Researcher",
    },
    {
        name: "Solana Community Member",
        handle: "@SolEcoWatcher",
        avatarFallback: "SC",
        image: "/avatars/placeholder3.png", // **REPLACE**
        text: "Appreciate the transparency: audited contract, locked liquidity, and vested team tokens establish crucial security foundations for a Solana project.", // Focus on trust factors
        role: "Technical Observer",
    },
];

const socialLinks = [
    { name: "X (Twitter)", href: "#", icon: FaXTwitter, ariaLabel: "Follow $ROACH on X (Twitter)" }, // REPLACE #
    { name: "Telegram", href: "#", icon: FaTelegram, ariaLabel: "Join $ROACH Telegram group" }, // REPLACE #
    { name: "Discord", href: "#", icon: FaDiscord, ariaLabel: "Join $ROACH Discord server" }, // REPLACE #
];

// Color Mapping - Adjusted slightly for consistency
const colorMap = {
    blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30 dark:border-blue-500/40' },
    green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-500/20', border: 'border-green-500/30 dark:border-green-500/40' },
    orange: { text: 'text-orange-700 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/20', border: 'border-orange-500/30 dark:border-orange-500/40' },
};

// Animation Variants
const containerVariants = { /* Remains same */ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { /* Remains same */ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export function SocialProof() {
    // Removed useMemeMode

    return (
        <Section id="social-proof" className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background">
            <SectionHeader
                title="Join the Expanding $ROACH Colony" // Engaging Title
                description="Connect with our active community, stay informed on developments, and experience the collective strength of the antifragile ecosystem." // Clear Description
                subtitle={<><Users className="inline h-4 w-4 mr-1" /> Community & Engagement</>}
                alignment="center"
                className="mb-16"
            />

            {/* Metrics Grid - Enhanced Layout */}
            <motion.div
                variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
            >
                {metrics.map((metric, index) => {
                    const colors = colorMap[metric.color as keyof typeof colorMap];
                    return (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className={cn("text-center shadow-md hover:shadow-lg transition-all duration-300 border", colors.border, "hover:border-primary/30")}>
                                <CardContent className="p-5 sm:p-6">
                                    <div className={cn("p-2 sm:p-3 rounded-full inline-block mb-3", colors.bg)}>
                                        <metric.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", colors.text)} />
                                    </div>
                                    {/* Value with larger font */}
                                    <div className={cn("text-2xl sm:text-3xl font-bold", colors.text)}>{metric.value}</div>
                                    {/* Label */}
                                    <p className="text-sm font-semibold text-foreground/90 mt-1">{metric.label}</p>
                                    {/* Description */}
                                     <p className="text-xs text-muted-foreground mt-0.5 mb-2">{metric.description}</p>
                                    {/* Trend Badge */}
                                     <Badge variant="secondary" className={cn("text-xs px-2 py-0.5", colors.bg, colors.text, colors.border.replace('border-','border-'))}>
                                         {metric.trend} <ArrowUpRight className="h-3 w-3 ml-1" />
                                     </Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
                 {/* Optional Placeholder */}
                {/* <div className="md:col-span-3 mt-2 bg-muted/50 border border-dashed rounded aspect-[16/3] flex items-center justify-center">
                   <p className="text-[0.6rem] text-muted-foreground/70 italic p-1 text-center">AI Prompt: Clean line chart visualization showing positive trends for holder count or community members over time (stylized data).</p>
                 </div> */}
            </motion.div>


            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, amount: 0.1 }}
                className="mb-16 max-w-5xl mx-auto"
            >
                <h3 className="text-2xl font-bold text-center mb-10">Voices from the Ecosystem</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                             <Card className="h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/10 bg-card">
                                <CardContent className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Avatar className="h-10 w-10 border">
                                            {/* NOTE: Use actual paths or remove AvatarImage if placeholders aren't available */}
                                            <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
                                            <AvatarFallback className="text-sm">{testimonial.avatarFallback}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-sm leading-tight">{testimonial.name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                                        </div>
                                    </div>
                                    <blockquote className="relative text-sm text-foreground/90 italic border-l-2 border-primary/50 pl-4 py-1 flex-1 mb-4">
                                        <Quote className="absolute -top-1 left-0 h-4 w-4 text-primary/30 transform -translate-x-1/2" />
                                        {testimonial.text}
                                    </blockquote>
                                     <Badge variant="outline" size="sm" className="mt-auto w-fit text-xs font-medium border-border/50 text-muted-foreground">
                                         {testimonial.role}
                                     </Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                 {/* Placeholder for more testimonials / media mentions */}
                {/* <div className="mt-6 text-center">
                  <Button variant="link" size="sm" disabled>More coming soon...</Button>
                </div> */}
            </motion.div>

            {/* Final CTA to Join Socials */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
                className="text-center"
            >
                <h3 className="text-xl font-semibold mb-5">Connect with the $ROACH Colony</h3>
                 {/* Placeholder for social media platform logos */}
                {/* <div className="mb-4 flex justify-center gap-3">
                    <div className="w-12 h-12 bg-muted border border-dashed rounded flex items-center justify-center"><p className="text-xs italic text-muted-foreground">X</p></div>
                    <div className="w-12 h-12 bg-muted border border-dashed rounded flex items-center justify-center"><p className="text-xs italic text-muted-foreground">TG</p></div>
                    <div className="w-12 h-12 bg-muted border border-dashed rounded flex items-center justify-center"><p className="text-xs italic text-muted-foreground">DC</p></div>
                </div> */}

                 <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {socialLinks.map(link => (
                        <Button key={link.name} variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow" asChild>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label={link.ariaLabel}>
                                <link.icon className="h-5 w-5" /> {link.name}
                            </a>
                        </Button>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}

// --- END OF FILE ./components/sections/SocialProof.tsx ---