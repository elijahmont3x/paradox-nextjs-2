// --- START OF FILE ./components/sections/SocialProof.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquareText, Flame, ArrowUpRight, ExternalLink, Quote } from "lucide-react"; // Added Quote icon
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function SocialProof() {
  const { memeMode } = useMemeMode();

  // Placeholder Data - REPLACE WITH ACTUAL OR DYNAMIC DATA LATER
  const metrics = [
    {
      icon: Users,
      value: "15,000+", // Example value
      label: (memeMode: boolean) => memeMode ? "Roach Colony Size" : "Community Members",
      change: "+20% This Week", // Example trend
      color: "blue",
    },
    {
      icon: MessageSquareText,
      value: "Buzzing", // Status instead of number
      label: (memeMode: boolean) => memeMode ? "Chatter Level: HIGH" : "Discussion Activity",
      change: "Daily Active",
      color: "green",
    },
    {
      icon: Flame,
      value: "Growing Fast", // Status
      label: (memeMode: boolean) => memeMode ? "Hype Meter" : "Holder Growth",
      change: "Trending Up",
      color: "orange",
    },
  ];

  const testimonials = [
    {
      name: "CryptoChadMax",
      handle: "@BasedRoachEnjoyer",
      avatarFallback: "CM",
      image: "/avatars/chad.png", // Placeholder path
      text: (memeMode: boolean) => memeMode
        ? "Legit printed free $ROACH during the last dump just for HODLing. This ain't your grandma's dog coin. We are so back."
        : "The antifragile mechanism is effective. My holdings measurably increased during the recent dip due to reflections. Impressive execution.",
      role: (memeMode: boolean) => memeMode ? "Diamond Hand Roach" : "Early Adopter",
    },
    {
      name: "DeFi Danielle",
      handle: "@AntifragileAlpha",
      avatarFallback: "DD",
      image: "/avatars/danielle.png", // Placeholder path
      text: (memeMode: boolean) => memeMode
        ? "Finally, a token that actually BENEFITS from idiots panic selling. Devs cooked something special here. LFG!"
        : "Analyzing $ROACH's dynamic tax system reveals a novel approach to volatility management and holder incentives. A project worth watching.",
      role: (memeMode: boolean) => memeMode ? "Gigabrain Analyst" : "DeFi Researcher",
    },
     {
      name: "Solana Sensei",
      handle: "@SolanaDeepDive",
      avatarFallback: "SS",
      image: "/avatars/sensei.png", // Placeholder path
      text: (memeMode: boolean) => memeMode
        ? "Audit passed ✔️ LP locked ✔️ Team vested ✔️ Looks solid AF for a 'meme'. Might actually survive the cycle."
        : "From a technical perspective, the audited contract, locked liquidity, and vested team tokens provide essential security foundations.",
      role: (memeMode: boolean) => memeMode ? "Due Diligence Dude" : "Technical Reviewer",
    },
  ];

  const socialLinks = [
     { name: "Twitter / X", href: "#", icon: FaXTwitter }, // REPLACE #
     { name: "Telegram", href: "#", icon: FaTelegram }, // REPLACE #
     { name: "Discord", href: "#", icon: FaDiscord }, // REPLACE #
  ];

   // Tailwind color mapping utility
  const colorMap = {
      blue: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
      green: { text: 'text-green-600', bg: 'bg-green-500/10', border: 'border-green-500/30' },
      orange: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  };

   // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="social-proof" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-muted/20">
      <SectionHeader
        title={memeMode ? "The Colony is Growing STRONG" : "Join Our Thriving Community"}
        description={memeMode
            ? "Don't just take our word for it. See the swarm intelligence in action. The Roach Army is real."
            : "Connect with fellow holders, engage in discussions, stay updated on developments, and witness the power of the $ROACH ecosystem firsthand."}
        subtitle={<><Users className="inline h-4 w-4 mr-1"/> Community Power</>}
        alignment="center"
        className="mb-16"
      />

      {/* Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
      >
        {metrics.map((metric) => {
            const colors = colorMap[metric.color as keyof typeof colorMap];
            return (
            <motion.div key={metric.label(false)} variants={itemVariants}>
                <Card className={cn(
                    "text-center shadow-md hover:shadow-lg transition-shadow duration-300",
                    colors.border,
                    memeMode && "border-dashed"
                    )}>
                <CardContent className="p-6">
                    <div className={cn("p-3 rounded-full inline-block mb-3", colors.bg)}>
                        <metric.icon className={cn("h-6 w-6", colors.text)} />
                    </div>
                    <div className={cn("text-3xl font-bold", colors.text)}>{metric.value}</div>
                    <p className="text-sm text-muted-foreground mt-1 mb-2 font-medium">{metric.label(memeMode)}</p>
                    <Badge variant="secondary" className={cn("text-xs px-2 py-0.5", colors.bg, colors.text, colors.border)}>
                        {metric.change} <ArrowUpRight className="h-3 w-3 ml-1"/>
                    </Badge>
                </CardContent>
                </Card>
            </motion.div>
            );
        })}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-16 max-w-5xl mx-auto"
      >
          <h3 className={cn("text-2xl font-bold text-center mb-10", memeMode && "font-mission")}>
             {memeMode ? "Voices from the Roach Trenches" : "What Our Community Says"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
               <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }} // Stagger testimonial cards
               >
                  <Card className={cn(
                      "h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300",
                      memeMode ? "border-primary/30 bg-primary/5" : "bg-card"
                      )}>
                    <CardContent className="p-5 flex-1 flex flex-col"> {/* Slightly reduced padding */}
                       {/* Header */}
                       <div className="flex items-center gap-3 mb-4">
                          <Avatar className="h-9 w-9 border"> {/* Slightly smaller avatar */}
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="text-xs">{testimonial.avatarFallback}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm leading-tight">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                          </div>
                       </div>
                       {/* Quote */}
                       <blockquote className="relative text-sm italic text-foreground/80 border-l-2 border-border pl-4 py-2 flex-1 mb-4">
                         <Quote className="absolute top-0 left-0 h-4 w-4 text-muted-foreground/30 transform -translate-x-1/2 -translate-y-1/2" />
                         {testimonial.text(memeMode)}
                       </blockquote>
                       {/* Role Badge */}
                       <Badge variant="outline" className="mt-auto w-fit text-xs font-medium">
                         {testimonial.role(memeMode)}
                       </Badge>
                    </CardContent>
                  </Card>
               </motion.div>
            ))}
          </div>
      </motion.div>

      {/* CTA to Join */}
      <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h3 className={cn("text-xl font-semibold mb-5", memeMode && "font-mission")}>
             {memeMode ? "Ready to Join the Infestation?" : "Connect with the $ROACH Community"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4"> {/* Added flex-wrap */}
            {socialLinks.map(link => (
               <Button key={link.name} variant="default" size="lg" className={cn("shadow-md hover:shadow-lg transition-shadow", memeMode && "font-mission")} asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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