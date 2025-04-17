// --- START OF FILE ./components/sections/HowToBuy.tsx ---

"use client";

import React, { useState } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Wallet, Coins, ArrowRightLeft, ExternalLink, Check, ShoppingCart, Sparkles, AlertTriangle } from 'lucide-react'; // Refined icons
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from "next/link";

// Constants - REPLACE ADDRESS AND LINKS AS NEEDED
const CONTRACT_ADDRESS = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f";
const EXPLORER_LINK = `https://solscan.io/token/${CONTRACT_ADDRESS}`;
const JUPITER_SWAP_LINK = `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`;
const RAYDIUM_SWAP_LINK = `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${CONTRACT_ADDRESS}`;

export function HowToBuy() {
    // Removed useMemeMode hook
    const [copied, setCopied] = useState(false);

    // Copy Handler - remains functionally the same, updated toast message
    const copyAddress = () => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
            setCopied(true);
            toast.success("Contract address copied!");
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error("Failed to copy address:", err);
            toast.error("Could not copy address.");
        });
    };

    // Updated steps data with unified tone and enhanced structure
    const steps = [
        {
            icon: Wallet,
            title: "1. Set Up Your Solana Wallet",
            description: "You'll need a Solana-compatible wallet to hold $ROACH. Phantom and Solflare are popular, user-friendly options available as browser extensions and mobile apps.",
            links: [
                { name: "Phantom", href: "https://phantom.app/", icon: Sparkles }, // Example icons
                { name: "Solflare", href: "https://solflare.com/", icon: Sparkles },
            ],
            // Optional Placeholder for Wallet Logos
             visualPrompt: "AI Prompt: Logos for Phantom Wallet and Solflare Wallet side-by-side, clean and recognizable."
        },
        {
            icon: Coins,
            title: "2. Acquire SOL Tokens",
            description: "Purchase SOL (Solana's native token) from a major cryptocurrency exchange like Coinbase or Binance. You'll need SOL to swap for $ROACH and cover minimal network fees.",
            links: [
                { name: "Coinbase", href: "https://www.coinbase.com/" },
                { name: "Binance", href: "https://www.binance.com/" },
                 // Add more if needed
            ],
             visualPrompt: "AI Prompt: Logos for Coinbase and Binance exchanges, suitable for small display."
        },
        {
            icon: ArrowRightLeft,
            title: "3. Swap SOL for $ROACH",
            description: "Connect your wallet to a trusted Solana Decentralized Exchange (DEX) like Jupiter Aggregator or Raydium. Use the official contract address below to ensure you're trading for the correct token.",
            action: ( // Action refined for better UX
                <div className="space-y-3">
                    <label htmlFor="contract-address-input" className="text-xs font-medium text-muted-foreground">Official $ROACH Contract Address:</label>
                    <div className="flex items-center gap-2 rounded-md border bg-background p-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-1">
                        <Input
                            id="contract-address-input"
                            readOnly
                            value={CONTRACT_ADDRESS}
                            className="flex-1 h-6 font-mono text-[0.7rem] sm:text-xs bg-transparent border-0 shadow-none px-1 selection:bg-primary/20 focus-visible:ring-0 focus-visible:ring-offset-0"
                            aria-label="Contract Address"
                        />
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 shrink-0 text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-1"
                                        onClick={copyAddress}
                                        aria-label="Copy Contract Address"
                                    >
                                        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Copy Address</p></TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    {/* Primary Swap Button */}
                     <Button className="w-full shadow-sm" asChild>
                        <a href={JUPITER_SWAP_LINK} target="_blank" rel="noopener noreferrer">
                            Swap on Jupiter <ExternalLink className="ml-1.5 h-4 w-4" />
                        </a>
                     </Button>
                    {/* Secondary Swap Button */}
                     <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                        <a href={RAYDIUM_SWAP_LINK} target="_blank" rel="noopener noreferrer">
                           or Swap on Raydium <ExternalLink className="ml-1.5 h-3 w-3" />
                        </a>
                     </Button>
                </div>
            ),
            visualPrompt: "AI Prompt: Logos for Jupiter Aggregator (JUP) and Raydium DEX."
        },
        {
            icon: Check,
            title: "4. Confirm & Hold",
            description: "Approve the transaction in your wallet. Once confirmed, your $ROACH balance will appear. Welcome to the Colony!",
            action: ( // Action to encourage checking contract/FAQ
                <div className="flex flex-col gap-2">
                     <Button variant="secondary" size="sm" className="w-full" asChild>
                         <a href={EXPLORER_LINK} target="_blank" rel="noopener noreferrer">
                             Verify on Solscan <ExternalLink className="ml-1.5 h-3 w-3" />
                         </a>
                     </Button>
                     <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="#faq"> {/* Link to FAQ */}
                           Need Help? See FAQ
                        </Link>
                    </Button>
                </div>
            )
        },
    ];

    // Animation Variants
    const containerVariants = { /* Remains the same */
        hidden: {}, visible: { transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = { /* Remains the same */
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <Section id="how-to-buy" className="py-20 md:py-28 bg-gradient-to-b from-muted/10 to-background">
            <SectionHeader
                title="Acquiring $ROACH: A Simple Guide"
                description="Follow these steps to securely purchase $ROACH tokens and join our adaptive ecosystem on the Solana blockchain."
                subtitle={<><ShoppingCart className="inline h-4 w-4 mr-1" /> Getting Started</>}
                alignment="center"
                className="mb-16"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch" // Added items-stretch
            >
                {steps.map((step, index) => (
                    <motion.div key={`step-${index}`} variants={itemVariants}>
                        <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
                            <CardHeader className="pb-4 flex-row items-start gap-3"> {/* Use flex-row for header layout */}
                                <div className="p-2 bg-primary/10 rounded-full mt-1">
                                    <step.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-base sm:text-lg font-semibold leading-tight">{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="px-5 pb-5 flex-1 flex flex-col gap-4"> {/* Main content area */}
                                <p className="text-sm text-muted-foreground flex-1">{step.description}</p> {/* Flex-1 to push actions down */}

                                {/* Render suggested links if they exist */}
                                {step.links && (
                                    <div className="flex flex-wrap gap-2">
                                        {step.links.map((link, linkIndex) => (
                                            <Button
                                                key={`link-${index}-${linkIndex}`}
                                                variant="outline" size="xs"
                                                className="text-xs font-medium gap-1" asChild
                                            >
                                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                    {link.icon && <link.icon className="h-3 w-3"/>}
                                                    {link.name} <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                )}

                                 {/* Optional Placeholder for Visual */}
                                {step.visualPrompt && (
                                   <div className="my-2 bg-muted/30 border border-dashed rounded h-10 flex items-center justify-center p-1">
                                      <p className="text-[0.6rem] text-muted-foreground/70 italic text-center">{step.visualPrompt}</p>
                                    </div>
                                 )}


                                {/* Render the primary action/swap area if it exists */}
                                {step.action && <div className="mt-auto pt-2">{step.action}</div>}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* Security Disclaimer */}
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                className="mt-10 text-center"
            >
                <Card className="inline-block max-w-3xl mx-auto border-amber-500/30 bg-amber-500/5 p-4 shadow-sm">
                     <CardContent className="p-0 flex items-start gap-3">
                         <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                         <div>
                            <p className="text-sm font-semibold text-amber-700 dark:text-amber-500 text-left">Important Security Reminder:</p>
                             <p className="text-xs text-muted-foreground text-left mt-1 leading-relaxed">
                                Always <strong className="text-foreground">verify the official contract address ({CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-6)})</strong> before swapping. Use trusted DEX platforms like Jupiter or Raydium. Beware of impersonators and fake tokens. Never share your private keys or seed phrase. DYOR.
                             </p>
                         </div>
                     </CardContent>
                </Card>
            </motion.div>
        </Section>
    );
}


// --- END OF FILE ./components/sections/HowToBuy.tsx ---