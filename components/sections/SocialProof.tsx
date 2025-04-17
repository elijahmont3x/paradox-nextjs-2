// --- START OF FILE ./components/sections/SocialProof.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquareText, TrendingUp, ArrowUpRight, ExternalLink, Quote, Sparkles } from "lucide-react"; // Changed GitBranch to TrendingUp or Sparkles maybe? Used TrendingUp in metrics.
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link"; // Use NextLink

// --- Data (Refined Text & Added Placeholders) ---
const metrics = [
    { icon: Users, value: "15k+", label: "Community Size", trend: "+ Active Daily", description: "A rapidly growing network of holders and contributors.", color: "blue", },
    { icon: MessageSquareText, value: "High", label: "Engagement Level", trend: "Multiple Platforms", description: "Active discussions daily across main social channels.", color: "green", },
    { icon: TrendingUp, value: "Consistent", label: "Holder Growth", trend: "+ New Wallets Daily", description: "Steady organic increase in unique token holders.", color: "orange", },
];
const testimonials = [
    // IMPORTANT: Replace placeholder images with actual paths or use fallbacks only.
    { name: "Crypto Investor", handle: "@StrategicHODL", avatarFallback: "CI", image: "/avatars/avatar-1.png", text: "The reflection mechanism performed exactly as described during the last dip, noticeably increasing my $ROACH balance. Validates the antifragile model.", role: "Verified Holder", },
    { name: "DeFi Analyst", handle: "@TokenomicsInsight", avatarFallback: "DA", image: "/avatars/avatar-2.png", text: "$ROACH's dynamic tax is an innovative volatility hedge. It shifts incentives effectively based on market pressure. A genuinely interesting SPL project.", role: "Researcher", },
    { name: "Solana Enthusiast", handle: "@SolEcoWatcher", avatarFallback: "SE", image: "/avatars/avatar-3.png", text: "Transparency is key in this space. Appreciate the locked LP, completed audit, and vested team schedule. Builds necessary trust.", role: "Community Observer", },
];
const socialLinks = [ // Unchanged structure, REPLACE #
    { name: "X (Twitter)", href: "#", icon: FaXTwitter, ariaLabel: "Follow $ROACH on X (Twitter)" },
    { name: "Telegram", href: "#", icon: FaTelegram, ariaLabel: "Join $ROACH Telegram group" },
    { name: "Discord", href: "#", icon: FaDiscord, ariaLabel: "Join $ROACH Discord server" },
];
const colorMap = { // Unchanged
    blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500/30 dark:border-blue-500/40' },
    green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-500/20', border: 'border-green-500/30 dark:border-green-500/40' },
    orange: { text: 'text-orange-700 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/20', border: 'border-orange-500/30 dark:border-orange-500/40' },
};
// ----------------------------------

export function SocialProof() {
    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

    return (
        <Section id="social-proof" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
            <SectionHeader
                title="Join the Expanding $ROACH Colony"
                description="Connect with our active community, stay informed on developments, and witness the collective strength of the antifragile ecosystem."
                subtitle={<><Users className="inline h-4 w-4 mr-1" /> Community & Engagement</>}
                alignment="center" className="mb-16"
            />

            {/* Metrics Grid - Enhanced Visuals */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 max-w-4xl mx-auto">
                {metrics.map((metric, index) => {
                    const colors = colorMap[metric.color as keyof typeof colorMap];
                    return (
                        <motion.div key={index} variants={itemVariants}>
                             {/* AUDIT FIX: Using CardHeader and structure for better hierarchy */}
                             <Card className={cn("shadow-md hover:shadow-lg transition-all duration-300 border overflow-hidden h-full", colors.border, "dark:bg-card/30")}>
                                 <CardHeader className={cn("pb-3 pt-4 px-4 flex flex-row items-center gap-3", colors.bg)}>
                                      <metric.icon className={cn("h-6 w-6", colors.text)} />
                                     <div>
                                        <CardTitle className={cn("text-xl sm:text-2xl font-bold", colors.text)}>{metric.value}</CardTitle>
                                         <p className="text-xs font-semibold text-foreground/90 -mt-1">{metric.label}</p>
                                     </div>
                                </CardHeader>
                                <CardContent className="p-4 text-center">
                                    <p className="text-sm text-muted-foreground mb-2 leading-snug">{metric.description}</p>
                                     <Badge variant="secondary" size="sm" className={cn("text-xs font-medium", colors.bg, colors.text, colors.border)}> {metric.trend} <ArrowUpRight className="h-3 w-3 ml-1" /> </Badge>
                                </CardContent>
                             </Card>
                        </motion.div> ); })}
                {/* Metrics Chart Placeholder - UNCOMMENTED */}
                <motion.div className="md:col-span-3 mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{delay: 0.3}} viewport={{ once: true }} >
                     <div className="bg-muted/30 dark:bg-muted/10 border border-dashed rounded-lg aspect-[16/4] flex items-center justify-center">
                        <p className="text-xs text-muted-foreground/70 dark:text-muted-foreground/50 italic p-2 text-center">AI Prompt: Clean line chart visualization showing positive trends for holder count or community members over time (stylized, illustrative data). Use theme colors.</p>
                    </div>
                </motion.div>
            </motion.div>


            {/* Testimonials Grid - Enhanced Layout */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true, amount: 0.1 }} className="mb-16 max-w-5xl mx-auto" >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">Voices from the Ecosystem</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.08 }}>
                            <Card className="h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 border border-border/10 dark:border-border/20 bg-card">
                                 {/* AUDIT FIX: Moved Avatar/Name outside content for header feel */}
                                <CardHeader className="flex flex-row items-center gap-3 pb-3 pt-4 px-4 border-b border-border/10 dark:border-border/20">
                                      <Avatar className="h-10 w-10 border"> <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s avatar`} /> <AvatarFallback className="text-sm">{testimonial.avatarFallback}</AvatarFallback> </Avatar>
                                      <div className="flex-1"> <p className="font-semibold text-sm leading-tight">{testimonial.name}</p> <p className="text-xs text-muted-foreground">{testimonial.handle}</p> </div>
                                      <Badge variant="outline" size="xs" className="text-[0.65rem] leading-tight font-medium border-border/50 text-muted-foreground">{testimonial.role}</Badge> {/* Role moved here */}
                                 </CardHeader>
                                <CardContent className="p-4 pt-3 flex-grow flex flex-col"> {/* Reduced padding */}
                                     <blockquote className="relative text-sm text-foreground/90 italic py-2 flex-1 mb-2"> {/* Focus on quote */}
                                         <Quote className="absolute top-1 -left-1 h-5 w-5 text-primary/10 dark:text-primary/20 transform " />
                                        <span className="relative z-10">{testimonial.text}</span> {/* Ensure text is above quote icon */}
                                     </blockquote>
                                </CardContent>
                            </Card>
                        </motion.div> ))}
                </div>
             </motion.div>

             {/* Connect Section - Visually enhanced */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-center">
                 <Card className="inline-block p-6 border border-border/10 dark:border-border/20 bg-card shadow-sm">
                     <CardContent className="p-0 space-y-3">
                         <h3 className="text-lg sm:text-xl font-semibold mb-3">Connect with the $ROACH Colony</h3>
                        {/* Social Platform Logos Placeholder - UNCOMMENTED */}
                         <div className="mb-4 flex justify-center gap-4 items-center">
                             <div className="w-10 h-10 bg-muted dark:bg-muted/20 border border-dashed rounded-full flex items-center justify-center"><p className="text-xs italic text-muted-foreground/70"><FaXTwitter className="h-5 w-5" /></p></div>
                             <div className="w-10 h-10 bg-muted dark:bg-muted/20 border border-dashed rounded-full flex items-center justify-center"><p className="text-xs italic text-muted-foreground/70"><FaTelegram className="h-5 w-5" /></p></div>
                             <div className="w-10 h-10 bg-muted dark:bg-muted/20 border border-dashed rounded-full flex items-center justify-center"><p className="text-xs italic text-muted-foreground/70"><FaDiscord className="h-5 w-5" /></p></div>
                             {/*<p className="text-[0.6rem] text-muted-foreground/60 absolute -bottom-2 left-0 w-full italic text-center"> Placeholder for Platform Logos</p> */}
                         </div>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            {socialLinks.map(link => ( <Button key={link.name} variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow font-medium" asChild> 
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label={link.ariaLabel}>
                                    <span className="flex items-center gap-2">
                                        <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        {link.name}
                                    </span>
                                </a> 
                            </Button> ))}
                        </div>
                     </CardContent>
                </Card>
            </motion.div>
        </Section>
    );
}

// --- END OF FILE ./components/sections/SocialProof.tsx ---