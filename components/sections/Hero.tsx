// --- START OF FILE ./components/sections/Hero.tsx ---

"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { ArrowDown, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  onScrollDown?: () => void;
}

const SWAP_LINK = "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // Jupiter example
const EXPLORER_LINK = `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f`; // Example Solscan link


export function Hero({ onScrollDown }: HeroProps) {
  return (
    <Section
      id="hero"
      // Added lg padding increase
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden !py-16 md:!py-20 lg:!py-28"
    >
       {/* Subtle Background Visual Placeholder - UNCOMMENTED */}
        <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-[0.03]">
             <div className="h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-background">
                {/* Screen Reader Only text for the placeholder */}
                <p className="sr-only text-xs text-muted-foreground italic absolute bottom-2 right-2">
                    Placeholder for abstract background visual: Evokes interconnected, resilient network structures in subtle primary color hues, blending softly into the page background. Minimalist and non-distracting.
                </p>
             </div>
        </div>

      {/* Content */}
      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Using primary color more selectively */}
          <CockroachMascot size="lg" className="mb-6 mx-auto text-foreground/70 dark:text-foreground/50" />
        </motion.div>

        <motion.h1
          className={cn(
            "text-4xl font-extrabold tracking-tighter sm:tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight mb-6 max-w-4xl" // Tighter tracking
          )}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Antifragile Token That <span className="text-primary">Gains Strength</span> From Chaos
        </motion.h1>

        <motion.p
          className="max-w-xl md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground mb-10" // Slightly smaller base size
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
        >
           Meet $ROACH: Engineered to thrive when markets panic. Our dynamic system converts sell pressure into enhanced rewards and ecosystem fortification, embodying true antifragility on Solana.
        </motion.p>

         <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12 max-w-4xl mx-auto" // Increased max-width slightly
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BenefitCard icon={TrendingUp} title="Adaptive Rewards" description="Reflections intensify during sell-offs, directly benefiting holders."/>
          <BenefitCard icon={ShieldCheck} title="Dynamic Defense" description="Rising sell taxes cushion dips and discourage aggressive selling." />
          <BenefitCard icon={Zap} title="Volatility Advantage" description="Turns market stress into ecosystem strength and potential gains." />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button size="lg" asChild className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow font-semibold">
             <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer">
                <span>Get $ROACH</span>
             </a>
           </Button>
           <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
             <a href={EXPLORER_LINK} target="_blank" rel="noopener noreferrer">
                <span>View Contract</span>
             </a>
           </Button>
          {onScrollDown && (
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-accent/20 mt-2 sm:mt-0" onClick={onScrollDown} aria-label="Scroll down">
                <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
            )}
        </motion.div>
      </div>
    </Section>
  );
}

// BenefitCard - slightly adjusted padding and icon alignment
function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
   return (
     <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-background/40 dark:bg-white/5 border border-border/50 shadow-sm text-left h-full backdrop-blur-[2px]">
        <div className="p-1.5 bg-primary/10 rounded-full mt-1"> {/* Reduced icon wrapper padding */}
            <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
        </div>
        <div className="flex-1">
           <h3 className="font-semibold text-sm md:text-base mb-0.5">{title}</h3>
           <p className="text-xs md:text-sm text-muted-foreground leading-snug">{description}</p> {/* Tighter leading */}
        </div>
     </div>
   );
}

// --- END OF FILE ./components/sections/Hero.tsx ---