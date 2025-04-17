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
import { Card, CardContent } from "@/components/ui/card"; // Removed unused CardHeader etc.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { HelpCircle, MessageCircleQuestion } from "lucide-react"; // Swapped HelpCircle for a Q&A style icon
import { motion } from "framer-motion";

// Re-using the defined FAQ data structure
const faqData = {
  general: [
    {
      q: "What exactly is $ROACH?",
      q_meme: "WTF is $ROACH?!",
      a: "$ROACH is a unique SPL token on the Solana blockchain featuring 'antifragile' tokenomics. It's designed to strengthen its ecosystem and reward holders, particularly during market sell-offs, by dynamically adjusting transaction taxes.",
      a_meme: "$ROACH = The token that eats FUD for breakfast & rewards HODLers. When markets bleed, it gets STRONGER. Built different.",
    },
    {
      q: "Why use the cockroach theme?",
      q_meme: "Cockroaches? Gross, dude.",
      a: "Cockroaches symbolize ultimate survival and adaptation—thriving under pressure. This perfectly represents $ROACH's antifragile design, which gains strength from market chaos.",
      a_meme: "Because they're UNKILLABLE LEGENDS! Survived dinosaurs & nukes. $ROACH = Built like them: gets stronger when attacked. Plus, memes.",
    },
     {
      q: "Is $ROACH just another meme coin?",
      q_meme: "Rugpull alert? Smells like meme...",
      a: "While $ROACH leverages the powerful symbolism of the cockroach meme, it's fundamentally built on innovative, serious tokenomics designed for long-term sustainability. Audits and locked liquidity provide a secure foundation.",
      a_meme: "It's a meme with an INDESTRUCTIBLE soul. Funny face, serious tech inside. Liquidity LOCKED TIGHT, contract AUDITED. Not your average pump & dump trash.",
    },
  ],
  mechanics: [
    {
      q: "How does the 5-tier dynamic system work?",
      q_meme: "Explain the 5 levels of Roach Fu.",
      a: "The contract monitors sell vs. buy volume over 4-hour periods. Based on this ratio, it auto-adjusts to one of five tiers, changing buy/sell taxes and reflection percentages distributed to holders.",
      a_meme: "Contract is always watching. Lots of selling = HIGH TIER ACTIVATED. Higher tier = OUCH tax for sellers, YUMMY reflections for HODLers, CHEAP entry for new roaches.",
    },
    {
      q: "How do reflection rewards work?",
      q_meme: "How do I get FREE $ROACH?",
      a: "Hold $ROACH in your wallet. A portion of every sell transaction (3% to 10%, depending on the active tier) is automatically redistributed to all holders proportionally.",
      a_meme: "Just HODL, genius! When paper hands DUMP, you auto-magically get a cut of their SELL TAX air-dropped to your wallet. More panic = more stacks for you. Simple.",
    },
     {
      q: "How does $ROACH deter whale dumps?",
      q_meme: "Wen whale dump crushes us?",
      a: "Large sell volume pushes the system into higher tiers (4 & 5), dramatically increasing the sell tax (up to 15%) and reflections (up to 10%). This makes sudden large dumps financially punishing for the seller and highly rewarding for remaining holders.",
      a_meme: "Let 'em try! Big dump = INSTANT TIER 5 = MEGA OUCH taxes for Mr. Whale, MAX FREE ROACH for the Colony, and a BIG DISCOUNT for new buyers. Their dump is literally our pump fuel.",
    },
  ],
  technical: [
    {
      q: "Has the smart contract been audited?",
      q_meme: "Is the code legit or nah?",
      a: "Yes, CertiK conducted a comprehensive security audit of the $ROACH smart contract. No critical or major issues were found. The full report link can be found in the footer/resources.",
      a_meme: "CHECKED by CertiK pros. Passed ✅ No critical flaws. Safer than your grandma's knitting club.",
    },
    {
      q: "Is the liquidity pool locked?",
      q_meme: "Rug incoming? Where's the LP lock?",
      a: "Yes, initial liquidity provided on Raydium is locked for 12 months via PinkLock, verifiable on the blockchain. This prevents the team from removing liquidity.",
      a_meme: "LP LOCKED 1 year MINIMUM via PinkLock. PROOF in the footer. Team CAN'T touch it. Zero rug potential.",
    },
     {
      q: "Where can I view the verified contract?",
      q_meme: "Code or it didn't happen!",
      // REMEMBER TO REPLACE ADDRESS IN BOTH STRINGS
      a: "The verified source code for the $ROACH contract (ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f) is available on Solana explorers like Solscan. Check the links in the footer.",
       a_meme: "See for yourself, nerd! Contract: ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f. Look it up on Solscan. Full transparency.",
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
    <Section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/10">
      <SectionHeader
         title={memeMode ? "Need-to-Know Roach Intel" : "Frequently Asked Questions"}
         description={memeMode
            ? "Your burning questions answered. Read this before you ape... or ask stupid questions in TG."
            : "Find clear answers to common inquiries about the $ROACH token, its unique mechanics, and overall project details."}
         subtitle={<><MessageCircleQuestion className="inline h-4 w-4 mr-1"/> Answers & Clarifications</>} // Changed Icon
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
            "max-w-3xl mx-auto shadow-xl overflow-hidden border border-border/10", // Subtle border
            memeMode && "border-dashed border-primary/40"
          )}>
          {/* CardContent is not needed here as Tabs handle padding */}
           <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1 h-auto gap-1 bg-muted">
                <TabsTrigger value="general" className={cn("py-2 data-[state=active]:shadow data-[state=active]:bg-background data-[state=active]:text-primary font-medium", memeMode && "font-mission data-[state=active]:font-bold")}>
                  General
                </TabsTrigger>
                <TabsTrigger value="mechanics" className={cn("py-2 data-[state=active]:shadow data-[state=active]:bg-background data-[state=active]:text-primary font-medium", memeMode && "font-mission data-[state=active]:font-bold")}>
                  Mechanics
                </TabsTrigger>
                <TabsTrigger value="technical" className={cn("py-2 data-[state=active]:shadow data-[state=active]:bg-background data-[state=active]:text-primary font-medium", memeMode && "font-mission data-[state=active]:font-bold")}>
                  Technical
                </TabsTrigger>
            </TabsList>

             {/* Padding applied around the Accordion content area */}
             <div className="p-6 md:p-8 bg-card">
                <TabsContent value="general" className="mt-0"> {/* Remove default TabsContent margin */}
                  <FAQAccordion items={faqData.general} memeMode={memeMode} />
                </TabsContent>
                <TabsContent value="mechanics" className="mt-0">
                  <FAQAccordion items={faqData.mechanics} memeMode={memeMode} />
                </TabsContent>
                 <TabsContent value="technical" className="mt-0">
                  <FAQAccordion items={faqData.technical} memeMode={memeMode} />
                 </TabsContent>
             </div>
           </Tabs>
        </Card>
      </motion.div>
       <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
           className="mt-8 text-center text-sm text-muted-foreground max-w-lg mx-auto"
        >
          {memeMode ? "Still confused? Hop in the Telegram, but try not to ask stuff answered here, yeah?" : "Have more questions? Join our community channels linked in the footer for further assistance."}
       </motion.p>
    </Section>
  );
}

// FAQAccordion Sub-Component (Slightly refined styling)
function FAQAccordion({ items, memeMode }: { items: FAQItemData[]; memeMode: boolean }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3"> {/* Increased space */}
      {items.map((item, index) => (
        <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border/50 rounded-lg shadow-sm bg-background/70 px-4 data-[state=open]:border-primary/30 transition-all duration-200 overflow-hidden" // Added background, overflow-hidden for animation
        >
          <AccordionTrigger className={cn(
              "text-left text-sm sm:text-base font-medium hover:no-underline py-3.5 text-foreground/90", // Adjusted padding/size
               memeMode && "font-mission tracking-wide"
           )}>
            {memeMode ? item.q_meme : item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed [&_p]:m-0"> {/* Reset paragraph margin */}
             {/* Using paragraph tag directly */}
             <p>{memeMode ? item.a_meme : item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
// --- END OF FILE ./components/sections/FAQ.tsx ---