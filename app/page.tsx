// --- START OF FILE ./app/page.tsx ---

"use client";

import React from 'react';
// Layout Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Section Components
import { Hero } from "@/components/sections/Hero";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution";
import { AntifragilityIntro } from "@/components/sections/AntifragilityIntro";
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
import { SectionConnector } from "@/components/ui/SectionConnector"; // Import the SectionConnector

// Hooks (optional here, but good practice if needed later)
import { useMemeMode } from '@/hooks/use-meme-mode';

export default function Home() {
  // Hook to potentially customize connector text based on mode,
  // but we'll keep it simple for now and let the connector handle it internally.
  // const { memeMode } = useMemeMode();

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    // Adding a small offset to account for sticky header height (adjust value as needed)
    const headerOffset = 80; // Adjust this based on your header height
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero introduces the token */}
        <Hero onScrollDown={() => handleScrollTo('problem-solution')} />

        {/* Explain the problem $ROACH solves */}
        <ProblemSolutionSection />
        <SectionConnector
            prevSection="Introduction"
            summary="Existing tokens often fail under pressure."
            nextConcept="The Core Concept: Antifragility"
        />

        {/* Define Antifragility vs. Resilience/Fragility */}
        <AntifragilityIntro />
        <SectionConnector
            prevSection="Antifragility Explained"
            summary="Antifragility means gaining from chaos, unlike resilience (surviving) or fragility (breaking)."
            nextConcept="Why the Cockroach?"
        />

        {/* Connect the concept to the mascot */}
        <CockroachConnection />
        <SectionConnector
            prevSection="The Cockroach Metaphor"
            summary="The cockroach embodies the antifragile traits $ROACH implements."
            nextConcept="The $ROACH Core Mechanics"
        />

        {/* Detail the 5-tier system */}
        <TokenMechanics />
        <SectionConnector
            prevSection="Core $ROACH Mechanics"
            summary="A dynamic 5-tier tax system adapts to market pressure, rewarding holders."
            nextConcept="How $ROACH Performs vs Others"
        />

        {/* Compare performance in different scenarios */}
        <MarketScenarios />
        <SectionConnector
            prevSection="Market Scenario Comparison"
            summary="$ROACH leverages volatility, outperforming static models during stress."
            nextConcept="Token Supply & Allocation"
        />

        {/* Show token distribution and details */}
        <Tokenomics />
        <SectionConnector
            prevSection="Tokenomics Breakdown"
            summary="A fixed supply with strategic allocation for growth and security."
            nextConcept="Security & Trust Measures"
        />

        {/* Build trust with security details */}
        <SecuritySection />
        <SectionConnector
            prevSection="Security Measures"
            summary="Audited contract, locked liquidity, and vested team ensure safety."
            nextConcept="Project Development Roadmap"
        />

        {/* Outline future plans */}
        <Roadmap />
        <SectionConnector
            prevSection="Roadmap"
            summary="Phased development ensures continuous growth and feature implementation."
            nextConcept="How to Acquire $ROACH"
        />

        {/* Provide clear buying instructions */}
        <HowToBuy />
         <SectionConnector
            prevSection="How to Buy Guide"
            summary="Simple steps to get $ROACH using Solana wallets and DEXs."
            nextConcept="Community & Social Proof"
        />

        {/* Show community strength and testimonials */}
        <SocialProof />
        <SectionConnector
            prevSection="Community & Social Proof"
            summary="A growing and active community supports $ROACH."
            nextConcept="Frequently Asked Questions"
        />

        {/* Answer common questions */}
        <FAQ />

      </main>
      <Footer />
    </div>
  );
}
// --- END OF FILE ./app/page.tsx ---