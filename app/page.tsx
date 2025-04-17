// --- START OF FILE ./app/page.tsx ---

"use client";

import React from 'react';
// Layout Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Section Components
import { Hero } from "@/components/sections/Hero";
import { TheAntifragileEdge } from "@/components/sections/TheAntifragileEdge";
import { CockroachConnection } from "@/components/sections/CockroachConnection";
import { TokenMechanics } from "@/components/sections/TokenMechanics";
import { MarketScenarios } from "@/components/sections/MarketScenarios";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { Roadmap } from "@/components/sections/Roadmap";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";

// UI Components
import { SectionConnector } from "@/components/ui/SectionConnector";

export default function Home() {

  // Smooth scroll handler (keep as is)
  const handleScrollTo = (id: string) => {
      const element = document.getElementById(id);
      const headerOffset = 80;
      if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
   };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      {/* Main content area with scroll snapping */}
      <main className="flex-grow scroll-smooth" style={{ scrollSnapType: 'y mandatory' }}>
        {/* 1. Hero - Defaults to full height */}
        <Hero onScrollDown={() => handleScrollTo('the-antifragile-edge')} />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Introduction"
            summary="Existing tokens often fail under pressure."
            nextConcept="The Core Concept: Antifragility"
        />
        {/* 2. Problem / Solution / Antifragility Concept - Defaults to full height */}
        <TheAntifragileEdge id="the-antifragile-edge" /> {/* Added ID here */}

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Antifragility Explained"
            summary="Antifragility means gaining from chaos, unlike resilience (surviving) or fragility (breaking)."
            nextConcept="Why the Cockroach?"
        />
        {/* 3. Link to Mascot - Defaults to full height */}
        <CockroachConnection />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="The Cockroach Metaphor"
            summary="Specific cockroach traits inspire $ROACH's adaptive mechanics."
            nextConcept="Core $ROACH Mechanics (How it Works)"
        />
        {/* 4. Detail the 5-tier system - Defaults to full height */}
        <TokenMechanics />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Core $ROACH Mechanics"
            summary="The 5-tier system dynamically adjusts taxes and rewards based on market pressure."
            nextConcept="How $ROACH Performs Differently"
        />
        {/* 5. Compare performance - Defaults to full height */}
        <MarketScenarios />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Market Scenario Comparison"
            summary="$ROACH leverages volatility for potential gain, outperforming static models."
            nextConcept="Token Supply & Allocation"
        />
        {/* 6. Show token distribution - Defaults to full height */}
        <Tokenomics />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Tokenomics Breakdown"
            summary="A fixed supply strategically allocated for growth and security."
            nextConcept="Security & Trust Measures"
        />
        {/* 7. Build trust - Defaults to full height */}
        <SecuritySection />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Security Measures"
            summary="Audited contract, locked liquidity, and vested team ensure a safe foundation."
            nextConcept="Project Development Roadmap"
        />
        {/* 8. Outline future plans - Defaults to full height */}
        <Roadmap />

        {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Roadmap"
            summary="Phased development focusing on launch, growth, and ecosystem expansion."
            nextConcept="How to Acquire $ROACH"
        />
        {/* 9. Provide buying instructions - Defaults to full height */}
        <HowToBuy />

         {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="How to Buy Guide"
            summary="Acquire $ROACH easily via Solana wallets and decentralized exchanges."
            nextConcept="Community Strength & Social Proof"
        />
        {/* 10. Show community strength - Defaults to full height */}
        <SocialProof />

         {/* Connector - Uses its own padding */}
        <SectionConnector
            prevSection="Community & Social Proof"
            summary="Join a rapidly growing and active community supporting the $ROACH vision."
            nextConcept="Frequently Asked Questions"
        />
        {/* 11. Answer common questions - Defaults to full height */}
        <FAQ />

      </main>
      <Footer />
    </div>
  );
}
// --- END OF FILE ./app/page.tsx ---