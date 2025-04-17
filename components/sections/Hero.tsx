"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section"; // Use the Section wrapper
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { ArrowDown, TrendingUp, Shield, Zap } from "lucide-react"; // Added Zap for emphasis
import { motion } from "framer-motion";

interface HeroProps {
  onScrollDown?: () => void; // Optional callback for scroll down button
}

export function Hero({ onScrollDown }: HeroProps) {
  const { memeMode } = useMemeMode();

  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-background via-background to-muted/20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <CockroachMascot size="lg" className="mb-6 mx-auto" />
      </motion.div>

      <motion.h1
        className={cn(
          "text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl",
          memeMode ? "font-mission text-primary" : ""
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {memeMode ? (
          <>The Token That Gets <span className="text-primary">STRONGER</span> When They Panic</>
        ) : (
          <>The Antifragile Token That <span className="text-primary">Thrives</span> Under Pressure</>
        )}
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {memeMode
          ? "$ROACH isn't just hard to kill – it feeds on market chaos. The more FUD, the better it gets for holders."
          : "$ROACH leverages market volatility with a dynamic system designed to reward holders and strengthen the ecosystem during downturns."}
      </motion.p>

      {/* Key Benefits */}
       <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <BenefitCard
          icon={TrendingUp}
          title={memeMode ? "Rewards Surge" : "Increased Rewards"}
          description={memeMode ? "Earn more when paperhands sell" : "Higher reflections during high sell pressure"}
        />
        <BenefitCard
          icon={Shield}
          title={memeMode ? "Defense Up" : "Dynamic Protection"}
          description={memeMode ? "Punishes panic dumps automatically" : "Adaptive taxes stabilize and protect"}
        />
         <BenefitCard
          icon={Zap}
          title={memeMode ? "Chaos Fuel" : "Volatility Advantage"}
          description={memeMode ? "Turns FUD into fuel" : "Leverages market stress for growth"}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button size="lg" className={cn(memeMode && "font-mission")} asChild>
          <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer"> {/* Replace link */}
            Buy $ROACH Now
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className={cn(memeMode && "font-mission")}
          onClick={onScrollDown ?? (() => document.getElementById('antifragility')?.scrollIntoView({ behavior: 'smooth' }))}
        >
          Learn More <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </Section>
  );
}

// Local component for Benefit Cards
function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
   return (
     <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border">
        <Icon className="h-6 w-6 text-primary mt-1 shrink-0" />
        <div>
           <h3 className="font-semibold mb-1">{title}</h3>
           <p className="text-sm text-muted-foreground">{description}</p>
        </div>
     </div>
   );
}