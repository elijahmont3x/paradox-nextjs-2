// --- START OF FILE ./components/sections/FAQ.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { HelpCircle, Info } from "lucide-react"; // Using HelpCircle or Info
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link

// --- Revised FAQ Data with Unified Tone ---
const faqData = {
  general: [
    {
      q: "What is the core concept behind $ROACH?",
      a: "$ROACH is an SPL token on Solana built around the principle of 'antifragility'. Its unique 5-tier dynamic tax system is designed to reward holders and strengthen the ecosystem, particularly during periods of market volatility and sell pressure.",
    },
    {
      q: "Why the 'cockroach' theme?",
      a: "The cockroach is a powerful symbol of extreme resilience and adaptation through chaos. This directly reflects $ROACH's design philosophy – gaining strength and stability precisely when faced with market stressors that harm fragile tokens.",
    },
     {
      q: "Is $ROACH primarily a 'meme coin'?",
      a: "While utilizing strong symbolism, $ROACH is fundamentally driven by innovative tokenomics engineered for sustainability and holder benefit. Its value proposition lies in its unique antifragile mechanics, backed by security measures like audits and locked liquidity.",
    },
     {
       q: "What problem does $ROACH aim to solve?",
       a: "$ROACH addresses the fragility seen in many crypto assets that suffer disproportionately during market downturns. Its adaptive system turns sell pressure from a weakness into a potential strength for the ecosystem and its long-term holders.",
     },
  ],
  mechanics: [
    {
      q: "How does the 5-tier dynamic system function?",
      a: "The smart contract monitors the ratio of sell volume to buy volume over rolling 4-hour periods. Based on predefined thresholds of this ratio, it automatically adjusts the buy/sell taxes and reflection distribution percentages to one of five distinct tiers, optimizing for current market conditions.",
    },
    {
      q: "Explain the 'reflection' rewards.",
      a: "A variable percentage (defined by the active tier, ranging from 3% up to 10%) of every sell transaction tax is automatically redistributed proportionally to all $ROACH holders directly in their wallets. Higher market stress (sell pressure) results in higher reflection rates.",
    },
     {
      q: "How does the system deter large 'whale dumps'?",
      a: "Significant sell volume rapidly pushes the system into higher tiers (Tier 4 & 5). This dramatically increases the sell tax (up to 15%), making large, sudden sell-offs economically less attractive for the seller, while simultaneously maximizing reflection rewards for remaining holders.",
    },
     {
      q: "Why does the Buy Tax decrease in higher tiers?",
      a: "Reducing the buy tax during periods of high sell pressure (Tiers 4 & 5) creates a stronger incentive for new participants to enter the ecosystem or existing holders to accumulate, counterbalancing the sell pressure and aiding price floor stability.",
     },
  ],
  technical: [
    {
      q: "Has the smart contract been audited?",
      a: "Yes, the $ROACH smart contract underwent a comprehensive security audit by CertiK. The audit confirmed the contract's integrity with no critical or major vulnerabilities identified. A link to the full report is available in the footer.", // Encourage checking footer
    },
    {
      q: "Is the project's liquidity secured?",
      a: "Initial liquidity provided on Raydium is locked for 12 months using PinkLock, a verifiable on-chain service. This prevents the team from removing liquidity and provides foundational market stability. Verification link available in the footer.", // Encourage checking footer
    },
     {
      q: "Is the token supply fixed?",
      a: "Absolutely. The total supply of $ROACH is permanently fixed at 1 billion tokens. The contract's minting function has been disabled, ensuring no further tokens can be created.",
    },
     {
      q: "How can I view the verified contract details?",
      a: "The $ROACH contract is verified on Solana explorers like Solscan. You can examine the source code and token details directly. The contract address and explorer link are provided in the website footer.", // Encourage checking footer
     }
  ],
};

// Define the type for a single FAQ item (simplified)
interface FAQItemData {
  q: string;
  a: string;
}

export function FAQ() {
  // Removed useMemeMode hook

  // Animation Variants
  const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-muted/10 to-background"> {/* Adjusted background */}
        <SectionHeader
            title="Frequently Asked Questions" // Direct Title
            description="Find clear answers to common questions about $ROACH, its mechanics, and security features. If your question isn't here, join our community channels."
            subtitle={<><HelpCircle className="inline h-4 w-4 mr-1" /> Clarity & Information</>}
            alignment="center"
            className="mb-16"
        />

        <motion.div
            variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
            <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden border border-border/10">
                <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto gap-1 bg-muted">
                        {/* Refined Tab Styling */}
                        <TabsTrigger value="general" className={cn(
                            "py-2 data-[state=active]:shadow data-[state=active]:bg-card data-[state=active]:text-primary font-medium",
                            "text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1"
                         )}>
                            General
                        </TabsTrigger>
                        <TabsTrigger value="mechanics" className={cn(
                             "py-2 data-[state=active]:shadow data-[state=active]:bg-card data-[state=active]:text-primary font-medium",
                             "text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1"
                         )}>
                            Mechanics
                        </TabsTrigger>
                        <TabsTrigger value="technical" className={cn(
                             "py-2 data-[state=active]:shadow data-[state=active]:bg-card data-[state=active]:text-primary font-medium",
                             "text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1"
                        )}>
                            Technical
                        </TabsTrigger>
                    </TabsList>

                    {/* Accordion content padding */}
                    <div className="p-6 md:p-8 bg-card">
                        <TabsContent value="general" className="mt-0">
                            <FAQAccordion items={faqData.general} />
                        </TabsContent>
                        <TabsContent value="mechanics" className="mt-0">
                            <FAQAccordion items={faqData.mechanics} />
                        </TabsContent>
                        <TabsContent value="technical" className="mt-0">
                            <FAQAccordion items={faqData.technical} />
                        </TabsContent>
                    </div>
                </Tabs>
            </Card>
        </motion.div>

        <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 text-center text-sm text-muted-foreground max-w-lg mx-auto"
        >
           Still have questions? Join our official <Link href="#" className="text-primary hover:underline font-medium">Telegram</Link> or <Link href="#" className="text-primary hover:underline font-medium">Discord</Link> communities (links in footer) for more support. {/* Add actual links in footer later */}
        </motion.p>
    </Section>
  );
}

// --- FAQAccordion Sub-Component (Refined Styling) ---
function FAQAccordion({ items }: { items: FAQItemData[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
        {items.map((item, index) => (
            <AccordionItem
                key={index}
                value={`item-${index}`}
                // Improved item styling for clarity
                 className="border border-border/20 rounded-lg shadow-sm bg-background/30 transition-colors hover:border-border/40 data-[state=open]:border-primary/30"
            >
                 {/* Ensure trigger padding is sufficient and consistent */}
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline px-4 py-3.5 text-foreground/90 data-[state=open]:text-primary">
                     {item.q}
                 </AccordionTrigger>
                 {/* Add padding only to the content panel */}
                <AccordionContent className="text-muted-foreground text-sm px-4 pb-4 pt-0 leading-relaxed">
                    {/* Direct rendering of answer text */}
                     <p>{item.a}</p>
                 </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  );
}

// --- END OF FILE ./components/sections/FAQ.tsx ---