// --- START OF FILE ./components/sections/Hero.tsx ---

"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { ArrowDown, TrendingUp, ShieldCheck, Zap } from "lucide-react"; // Used Zap for "Advantage"
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  onScrollDown?: () => void; // For smooth scroll button in parent
}

export function Hero({ onScrollDown }: HeroProps) {
  // Removed useMemeMode hook and memeMode variable

  const explorerLink = `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f`; // Example Solscan link

  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
       {/* Subtle Background Visual Placeholder */}
        <div className="absolute inset-0 -z-10 opacity-5">
             <div className="h-full w-full bg-gradient-to-tr from-primary/10 via-transparent to-background">
                <p className="sr-only text-xs text-muted-foreground italic absolute bottom-2 right-2">
                    AI Prompt: Abstract background visual evoking interconnected, resilient network structures in subtle primary color hues, blending softly into the page background. Minimalist and non-distracting.
                </p>
             </div>
        </div>


      {/* Content */}
      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <CockroachMascot size="lg" className="mb-6 mx-auto text-primary/80" />
        </motion.div>

        <motion.h1
          className={cn(
            "text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight mb-6 max-w-4xl"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Antifragile Token That <span className="text-primary">Gains Strength</span> From Chaos
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
           Meet $ROACH: Engineered to thrive when markets panic. Our dynamic system converts sell pressure into enhanced rewards and ecosystem fortification, embodying true antifragility on Solana.
        </motion.p>

        {/* Key Benefits - Simplified and action-oriented */}
         <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BenefitCard
            icon={TrendingUp}
            title="Adaptive Rewards"
            description="Reflections intensify during sell-offs, directly benefiting holders."
          />
          <BenefitCard
            icon={ShieldCheck} // Changed from Shield to ShieldCheck for stronger defense implication
            title="Dynamic Defense"
            description="Rising sell taxes cushion dips and discourage aggressive selling."
          />
           <BenefitCard
            icon={Zap} // More evocative icon for "Advantage"
            title="Volatility Advantage"
            description="Turns market stress into ecosystem strength and potential gains."
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 justify-center" // Center align buttons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button size="lg" asChild className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
             {/* Link directly to a primary swap platform */}
             <a href="https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" target="_blank" rel="noopener noreferrer">
                Get $ROACH
             </a>
           </Button>
            {/* Changed to Contract Link */}
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
             <a href={explorerLink} target="_blank" rel="noopener noreferrer">
                View Contract
             </a>
           </Button>
          {/* Keep scroll down functional if needed */}
          {onScrollDown && (
            <Button
                variant="ghost" // Make less visually prominent than main CTAs
                size="icon"
                className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-accent/50 mt-2 sm:mt-0"
                onClick={onScrollDown}
                aria-label="Scroll down to learn more"
            >
                <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
            )}
        </motion.div>
      </div>
    </Section>
  );
}

// Local component for Benefit Cards (Refined Styling)
function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
   return (
     <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50 shadow-sm text-left h-full"> {/* Added text-left and h-full */}
        <div className="p-2 bg-primary/10 rounded-full">
            <Icon className="h-5 w-5 text-primary shrink-0" />
        </div>
        <div className="flex-1">
           <h3 className="font-semibold mb-0.5 text-sm md:text-base">{title}</h3>
           <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        </div>
     </div>
   );
}

// --- END OF FILE ./components/sections/Hero.tsx ---