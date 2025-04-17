// --- START OF FILE ./components/sections/FAQ.tsx ---

"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

// Structure FAQ data (Adapted from prompt for $ROACH)
const faqData = {
  general: [
    {
      q: "What exactly is $ROACH?",
      q_meme: "WTF is this $ROACH thing?",
      a: "$ROACH is a unique SPL token on the Solana blockchain featuring 'antifragile' tokenomics. It's designed to strengthen its ecosystem and reward holders, particularly during market sell-offs, by dynamically adjusting transaction taxes.",
      a_meme: "$ROACH is the token that eats FUD for breakfast and craps out rewards for HODLers. When markets bleed, it gets STRONGER. Built different.",
    },
    {
      q: "Why the cockroach theme?",
      q_meme: "Cockroaches? Really?",
      a: "Cockroaches are nature's ultimate survivors, embodying resilience and the ability to thrive under extreme pressure. This perfectly symbolizes the antifragile nature of $ROACH's tokenomics – gaining strength from chaos.",
      a_meme: "Because they're UNKILLABLE LEGENDS! Survived dinosaurs, nukes... probably even your crypto portfolio. $ROACH is built like them: gets stronger when attacked.",
    },
     {
      q: "Is this just another meme coin?",
      q_meme: "Smells like a meme rug...",
      a: "While $ROACH embraces the cockroach meme for its powerful symbolism and branding, it's built on innovative, serious tokenomics designed for long-term sustainability and holder benefit. Security measures like audits and locked liquidity underpin the project.",
      a_meme: "It's a meme with an INDESTRUCTIBLE core. Funny face, serious tech. Liquidity's locked, contract's audited. Not your average pump & dump.",
    },
  ],
  mechanics: [
    {
      q: "How does the 5-tier dynamic system work?",
      q_meme: "Explain the 5-tier FUD defense levels.",
      a: "The smart contract monitors the ratio of sell volume to buy volume over rolling 4-hour periods. Based on this ratio, it automatically adjusts the token's operational 'tier', which changes the buy/sell taxes and the percentage of sell tax distributed as reflections to holders.",
      a_meme: "Contract watches the charts 24/7. Lots of selling = HIGHER TIER. Higher tier = OUCH taxes for sellers, YUMMY reflections for HODLers, and CHEAPER buys for new roaches joining the colony.",
    },
    {
      q: "How do I earn reflection rewards?",
      q_meme: "How do I get free $ROACH tendies?",
      a: "Simply hold $ROACH tokens in your Solana wallet. A percentage of every sell transaction (ranging from 3% in Tier 1 up to 10% in Tier 5) is automatically redistributed proportionally to all existing holders.",
      a_meme: "Just HODL! When paper hands dump their bags, you automatically get a cut of their sell tax dropped into your wallet. The more they panic, the more you stack. EZ.",
    },
     {
      q: "How does $ROACH handle large whale dumps?",
      q_meme: "Can whales dump on us and crush the price?",
      a: "Large sell volumes trigger higher tiers (Tier 4 & 5). This significantly increases the sell tax (up to 15%) making large dumps expensive, while simultaneously maximizing reflection rewards (up to 10%) for remaining holders. This disincentivizes sudden large sell-offs and helps stabilize the ecosystem.",
      a_meme: "Let 'em try! Big dumps = INSTANT Tier 5 = MEGA taxes for the whale, MAX reflections for the Colony, and SUPER CHEAP buys for reinforcements. Their dump becomes our fuel.",
    },
  ],
  technical: [
    {
      q: "Is the smart contract audited?",
      q_meme: "Is this code safe or sketchy?",
      a: "Yes, the $ROACH smart contract has undergone a comprehensive security audit by CertiK. The audit confirmed the absence of critical or major vulnerabilities. The full audit report is publicly available.",
      a_meme: "Audited by the pros at CertiK. Passed with flying colors. Safer than Fort Knox guarded by cyber-cockroaches.",
    },
    {
      q: "What about the liquidity pool?",
      q_meme: "Is the liquidity locked or can devs run off?",
      a: "The initial liquidity provided on Raydium during the launch is locked for a minimum of 12 months using the PinkLock service, preventing removal by the team. Proof of lock is publicly verifiable.",
      a_meme: "Locked for 1 year solid. Can't be rugged. Team can't touch it. Your funds are safer than a roach in a fallout shelter.",
    },
     {
      q: "Where can I view the contract code?",
      q_meme: "Show me the code, nerd!",
      a: "The $ROACH contract address is [ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f] (Replace with actual). You can view the verified source code on Solana explorers like Solscan or SolanaFM.",
       a_meme: "It's all public on the blockchain, my dude. Address: [ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f] (Replace). Go peek, no secrets here.", // Remember to replace address
    },
  ],
};

// Define the type for a single FAQ item
interface FAQItemData {
  q: string;
  q_meme: string;
  a: string;
  a_meme: string;
}

export function FAQ() {
  const { memeMode } = useMemeMode();

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-muted/20 via-background to-background">
      <SectionHeader
         title={memeMode ? "Burning Questions? Roach Intel Inside" : "Frequently Asked Questions"}
         description={memeMode
            ? "Everything the aspiring cockroach commando needs to know before joining the unstoppable colony."
            : "Find answers to common questions about $ROACH, its unique mechanics, and project details."}
         subtitle={<><HelpCircle className="inline h-4 w-4 mr-1"/> Common Queries</>}
         alignment="center"
         className="mb-16"
      />

      <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
      >
        <Card className={cn(
            "max-w-3xl mx-auto shadow-lg overflow-hidden",
            memeMode && "border-dashed border-primary/40"
          )}>
          <CardContent className="p-0">
             <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto gap-1 bg-muted">
                <TabsTrigger value="general" className={cn("py-2 data-[state=active]:shadow", memeMode && "font-mission")}>General</TabsTrigger>
                <TabsTrigger value="mechanics" className={cn("py-2 data-[state=active]:shadow", memeMode && "font-mission")}>Mechanics</TabsTrigger>
                <TabsTrigger value="technical" className={cn("py-2 data-[state=active]:shadow", memeMode && "font-mission")}>Technical</TabsTrigger>
              </TabsList>

               {/* Padding applied around the content area */}
               <div className="p-6 md:p-8">
                  <TabsContent value="general">
                    <FAQAccordion items={faqData.general} memeMode={memeMode} />
                  </TabsContent>
                  <TabsContent value="mechanics">
                    <FAQAccordion items={faqData.mechanics} memeMode={memeMode} />
                  </TabsContent>
                   <TabsContent value="technical">
                    <FAQAccordion items={faqData.technical} memeMode={memeMode} />
                  </TabsContent>
               </div>
             </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}

// Local component to render accordion items for a specific category
function FAQAccordion({ items, memeMode }: { items: FAQItemData[]; memeMode: boolean }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2"> {/* Added space-y */}
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border border-border/70 rounded-md shadow-sm bg-background/50 px-4 transition-shadow hover:shadow-md"> {/* Styled item */}
          <AccordionTrigger className={cn(
              "text-left text-base font-medium hover:no-underline py-4", // Adjusted padding
               memeMode && "font-mission tracking-wide"
           )}>
            {memeMode ? item.q_meme : item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground prose prose-sm dark:prose-invert max-w-none pb-4 leading-relaxed"> {/* Adjusted padding */}
             {/* Using dangerouslySetInnerHTML allows simple HTML like <strong> if needed later, otherwise just use <p> */}
             <p dangerouslySetInnerHTML={{ __html: memeMode ? item.a_meme : item.a }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
// --- END OF FILE ./components/sections/FAQ.tsx ---