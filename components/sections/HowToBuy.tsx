// --- START OF FILE ./components/sections/HowToBuy.tsx ---

"use client";

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Wallet, Coins, ArrowRightLeft, ExternalLink, Check, ShoppingCart } from 'lucide-react'; // Added ShoppingCart icon
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export function HowToBuy() {
  const { memeMode } = useMemeMode();
  const [copied, setCopied] = useState(false);
  const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // REPLACE with actual $ROACH address
  const jupiterSwapLink = `https://jup.ag/swap/SOL-${contractAddress}`; // Pre-filled Jupiter link

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
        setCopied(true);
        toast.success(memeMode ? "Address Copied, Soldier!" : "Contract address copied!");
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        console.error("Failed to copy address:", err);
        toast.error("Could not copy address.");
    });
  };

  const steps = [
    {
      icon: Wallet,
      title: (memeMode: boolean) => memeMode ? "1. Get Your Roach Motel (Wallet)" : "1. Prepare Your Wallet",
      description: (memeMode: boolean) => memeMode
        ? "Need a Solana wallet to store your $ROACH stash. Phantom or Solflare are solid. Guard your keys like they're the last twinkie on earth."
        : "Install a Solana-compatible browser extension or mobile wallet. Phantom and Solflare are popular and secure options.",
      links: [
        { name: "Phantom", href: "https://phantom.app/" },
        { name: "Solflare", href: "https://solflare.com/" },
      ],
    },
    {
      icon: Coins,
      title: (memeMode: boolean) => memeMode ? "2. Load Up on Ammo (Get SOL)" : "2. Acquire SOL Tokens",
      description: (memeMode: boolean) => memeMode
        ? "Buy SOL on an exchange (Coinbase, Binance, etc.). This is what you'll trade for $ROACH. Get enough for the swap + tiny gas fees (Solana is cheap!)."
        : "Purchase SOL (Solana's native token) on a centralized exchange and transfer it to your personal Solana wallet address.",
       links: [
        { name: "Coinbase", href: "https://www.coinbase.com/" },
        { name: "Binance", href: "https://www.binance.com/" },
        // Add more exchange links if relevant
       ],
    },
    {
      icon: ArrowRightLeft,
      title: (memeMode: boolean) => memeMode ? "3. Swap SOL for $ROACH (The Heist)" : "3. Swap on a DEX",
      description: (memeMode: boolean) => memeMode
        ? "Go to a DEX like Jupiter Aggregator (finds best price). Connect wallet, PASTE the official $ROACH address below, swap SOL --> $ROACH. Easy."
        : "Connect your wallet to a Solana Decentralized Exchange (DEX) like Jupiter Aggregator. Use the official $ROACH contract address provided below to swap SOL for $ROACH.",
      action: (
        <div className="space-y-3">
           <div className="flex items-center gap-2 rounded-md border bg-muted p-2 transition-colors focus-within:border-primary/50">
             <Input
                readOnly
                value={contractAddress}
                className="flex-1 h-8 font-mono text-xs bg-transparent border-0 shadow-none px-2 selection:bg-primary/20"
                aria-label="Contract Address"
             />
             <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 shrink-0" 
                          onClick={copyAddress} 
                          aria-label="Copy Address"
                        >
                            <div className="flex items-center justify-center">
                                {copied ? 
                                  <Check className="h-4 w-4 text-green-500" /> : 
                                  <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground"/>
                                }
                            </div>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Copy Address</p>
                    </TooltipContent>
                </Tooltip>
             </TooltipProvider>
           </div>
           <Button className={cn("w-full", memeMode && "font-mission")} asChild>
              <a href={jupiterSwapLink} target="_blank" rel="noopener noreferrer">
                 Swap on Jupiter <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
           </Button>
            <Button variant="outline" size="sm" className="w-full text-xs" asChild>
              <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" target="_blank" rel="noopener noreferrer"> {/* Replace addr */}
                 or Swap on Raydium <ExternalLink className="ml-1.5 h-3 w-3" />
              </a>
           </Button>
        </div>
      ),
    },
     {
      icon: Check,
      title: (memeMode: boolean) => memeMode ? "4. HODL & Chill" : "4. Confirm & Secure",
      description: (memeMode: boolean) => memeMode
        ? "Done! You're officially in the Roach Colony. Your wallet should show your $ROACH balance. Now HODL and watch the reflections roll in during chaos."
        : "After confirming the transaction in your wallet, your $ROACH tokens will appear. Welcome to the antifragile ecosystem!",
      action: (
         <Button variant="outline" className={cn(memeMode && "font-mission")} asChild>
            <a href="#faq"> {/* Link to FAQ */}
               Need Help? Check FAQ
            </a>
         </Button>
      )
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="how-to-buy" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <SectionHeader
        title={memeMode ? "Your Mission: Acquire $ROACH" : "How to Buy $ROACH"}
        description={memeMode
          ? "Follow these simple steps to join the unstoppable Roach Colony. It's easier than killing one."
          : "A step-by-step guide to purchasing $ROACH tokens and becoming part of our growing community."}
        subtitle={<><ShoppingCart className="inline h-4 w-4 mr-1"/> Acquisition Guide</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" // Wider max-width, adjusted gap
      >
        {steps.map((step, index) => (
          <motion.div key={`step-${index}`} variants={itemVariants}>
            <Card className={cn(
                "flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300", // Ensure cards match height
                 memeMode && "border-dashed border-primary/30"
             )}>
              <CardHeader className="pb-4"> {/* Reduced padding */}
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-primary/10 rounded-full">
                     <step.icon className="h-5 w-5 text-primary" /> {/* Slightly smaller icon */}
                   </div>
                   <CardTitle className={cn("text-base font-semibold leading-tight", memeMode && "font-mission")}>{step.title(memeMode)}</CardTitle> {/* Smaller title */}
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-5 flex-1 flex flex-col"> {/* Adjusted padding, flex column */}
                <p className="text-sm text-muted-foreground flex-1 mb-4">{step.description(memeMode)}</p> {/* Flex grow description */}
                {step.links && (
                   <div className="flex flex-wrap gap-2 mb-4">
                      {step.links.map((link, linkIndex) => (
                         <Button 
                           key={`link-${index}-${linkIndex}-${link.name}`}
                           variant="outline" 
                           size="xs" 
                           className="text-xs" 
                           asChild
                         >
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                               {link.name} <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                         </Button>
                      ))}
                   </div>
                )}
                {/* Action pushed to bottom */}
                {step.action && <div className="mt-auto">{step.action}</div>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

       {/* Disclaimer */}
       <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           viewport={{ once: true }}
           className="mt-10 text-center text-xs text-muted-foreground bg-muted/40 p-4 rounded-lg max-w-3xl mx-auto border border-border/50"
        >
          <span className="font-semibold text-foreground/80">⚠️ Important Security Note:</span> Always double-check you are using the <span className="font-bold">official contract address</span> ({contractAddress.slice(0,6)}...{contractAddress.slice(-6)}) before swapping. Use trusted DEX aggregators like Jupiter or directly on Raydium. Be mindful of slippage settings during high volatility. Never share your wallet's private keys or seed phrase with anyone. DYOR.
       </motion.div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/HowToBuy.tsx ---