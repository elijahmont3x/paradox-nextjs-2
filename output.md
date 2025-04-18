```typescript
// --- START OF FILE PARADOX_Whitepaper_v2.txt ---

// Contents of PARADOX_Whitepaper_v2.txt remain unchanged as it's source material, not generated code.

// --- END OF FILE PARADOX_Whitepaper_v2.txt ---
```

```typescript
// --- START OF FILE app/layout.tsx ---
import { Inter } from "next/font/google";
import { MemeModeProvider } from "@/hooks/use-meme-mode"; // Assume hook exists for context
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$ROACH - The Antifragile Token",
  description:
    "Engineered resilience. $ROACH thrives on market pressure, converting volatility into holder rewards. Experience antifragility on Solana.",
  keywords: ["cryptocurrency", "$ROACH", "PARADOX", "antifragile", "Solana", "SPL", "DeFi", "tokenomics", "dynamic tax", "volatility", "crypto investment", "cockroach"],
  authors: [{ name: "$ROACH Protocol Team" }],
  openGraph: {
    title: "$ROACH - Gain Strength from Chaos",
    description: "The unique SPL token that strengthens during sell pressure. Learn about its adaptive antifragile mechanics.",
    type: "website",
    url: "https://example-roach-domain.com", // Replace with actual URL
    images: [
      {
        url: "https://example-roach-domain.com/og-image-roach-v2.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "$ROACH Antifragile Token on Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$ROACH - Antifragile Tokenomics on Solana",
    description: "Engineered to thrive under pressure. Dynamic taxes reward holders during volatility. #Solana #Antifragile #Crypto",
    images: ["https://example-roach-domain.com/twitter-image-roach-v2.png"], // Replace with actual Twitter image URL
    // site: "@YourTwitterHandle", // Optional: Add Twitter handle
  },
  // Add viewport for responsiveness and theme color
  viewport: "width=device-width, initial-scale=1",
  themeColor: [ // Provide theme colors for browsers/OS
      { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0.002 250)" }, // Near White (from globals.css light)
      { media: "(prefers-color-scheme: dark)", color: "oklch(0.12 0.01 250)" }, // Very Dark Desat Blue (from globals.css dark)
    ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}> {/* Added font smoothing */}
        <ThemeProvider defaultTheme="system" enableSystem>
          <MemeModeProvider> {/* Provides context if meme mode toggle is used */}
              {children}
          </MemeModeProvider>
          <Toaster position="bottom-right" richColors theme="system" /> {/* Use rich colors, sync theme */}
        </ThemeProvider>
      </body>
    </html>
  );
}
// --- END OF FILE app/layout.tsx ---
```

```typescript
// --- START OF FILE app/theme-provider.tsx ---
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
// --- END OF FILE app/theme-provider.tsx ---
```

```css
/* --- START OF FILE app/globals.css --- */

/* Import Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Define theme configuration using CSS variables and OKLCH for wide gamut colors */
@layer base {
  :root {
    /* Base Configuration (DARK MODE = Default) using OKLCH */
    --color-background: oklch(10% 0.015 255);      /* Slightly lighter dark blue/purple */
    --color-foreground: oklch(96% 0.01 255);     /* Very light gray/blue */
    --color-card: oklch(13% 0.02 255);           /* Card darker than background */
    --color-card-foreground: oklch(95% 0.01 255);  /* Slightly less bright than foreground */
    --color-popover: oklch(16% 0.025 255);         /* Darker Popover */
    --color-popover-foreground: oklch(97% 0.008 255); /* Popover text bright */

    /* Roach Resilience Primary: Vibrant Green (shifted slightly towards teal for tech feel) */
    --color-primary: oklch(70% 0.22 155);         /* Vibrant teal-green */
    --color-primary-foreground: oklch(12% 0.02 155); /* Dark teal/green for contrast */
    --color-primary-hover: oklch(72% 0.23 155);      /* Slightly brighter hover */

    /* Neutrals & Accents */
    --color-secondary: oklch(28% 0.015 255);       /* Mid-dark gray */
    --color-secondary-foreground: oklch(88% 0.01 255); /* Light gray for secondary text */
    --color-muted: oklch(20% 0.01 255);           /* Darker Gray */
    --color-muted-foreground: oklch(65% 0.01 255);   /* Standard mid-gray text */
    --color-accent: oklch(30% 0.02 255 / 0.6);    /* Subtle accent hover/background with alpha */
    --color-accent-foreground: oklch(96% 0.01 255); /* Accent text = Foreground */

    /* Functional Colors */
    --color-destructive: oklch(65% 0.24 25);         /* Stronger Red */
    --color-destructive-foreground: oklch(98% 0.01 25); /* Light text on red */
    --color-border: oklch(25% 0.015 255 / 0.7);    /* Darker Gray Border with alpha */
    --color-input: oklch(25% 0.015 255 / 0.5);     /* Input BG slightly transparent */
    --color-ring: oklch(70% 0.22 155 / 0.6);      /* Primary Green Ring with alpha */

    /* Radius */
    --radius: 0.5rem;

    /* Fonts (Keep Inter) */
    --font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  /* Define Light Mode Overrides */
  .light {
    /* Inverted Base */
    --color-background: oklch(99% 0.002 250);     /* Near White */
    --color-foreground: oklch(15% 0.01 255);      /* Very Dark Gray/Blue */
    --color-card: oklch(100% 0 0);                /* White */
    --color-card-foreground: oklch(18% 0.01 255);  /* Slightly darker than base fg */
    --color-popover: oklch(100% 0 0);               /* White */
    --color-popover-foreground: oklch(15% 0.01 255); /* Very Dark Gray/Blue */

    /* Primary: Adjusted Green for Light Mode (Maintain vibrancy) */
    --color-primary: oklch(60% 0.21 150);        /* Strong Green, less neon */
    --color-primary-foreground: oklch(100% 0 0);      /* White Text */
    --color-primary-hover: oklch(58% 0.20 150);     /* Slightly darker hover */

    /* Neutrals & Accents */
    --color-secondary: oklch(96% 0.01 255);      /* Very Light Gray */
    --color-secondary-foreground: oklch(35% 0.01 255); /* Dark Gray */
    --color-muted: oklch(94% 0.01 255);          /* Light Gray */
    --color-muted-foreground: oklch(50% 0.01 255); /* Mid Gray */
    --color-accent: oklch(94% 0.01 255 / 0.8);    /* Light Gray with Alpha */
    --color-accent-foreground: oklch(20% 0.01 255); /* Dark Text on Accent */

    /* Functional */
    --color-destructive: oklch(62% 0.25 25);         /* Bright, clear Red */
    --color-destructive-foreground: oklch(100% 0 0);    /* White text */
    --color-border: oklch(90% 0.01 255);      /* Lighter Gray Border */
    --color-input: oklch(97% 0.005 250 / 0.9);   /* Very Light Input BG */
    --color-ring: oklch(60% 0.21 150 / 0.5);     /* Primary Light Ring */
  }

  /* Shadcn UI Variable Mapping */
  :root {
    --background: var(--color-background);
    --foreground: var(--color-foreground);
    --card: var(--color-card);
    --card-foreground: var(--color-card-foreground);
    --popover: var(--color-popover);
    --popover-foreground: var(--color-popover-foreground);
    --primary: var(--color-primary);
    --primary-foreground: var(--color-primary-foreground);
    --secondary: var(--color-secondary);
    --secondary-foreground: var(--color-secondary-foreground);
    --muted: var(--color-muted);
    --muted-foreground: var(--color-muted-foreground);
    --accent: var(--color-accent);
    --accent-foreground: var(--color-accent-foreground);
    --destructive: var(--color-destructive);
    --destructive-foreground: var(--color-destructive-foreground);
    --border: var(--color-border);
    --input: var(--color-input);
    --ring: var(--color-ring);
    --radius: var(--radius);
  }

  /* Dark Mode explicit for Tailwind compatibility */
  .dark {
    --background: var(--color-background);
    --foreground: var(--color-foreground);
    --card: var(--color-card);
    --card-foreground: var(--color-card-foreground);
    --popover: var(--color-popover);
    --popover-foreground: var(--color-popover-foreground);
    --primary: var(--color-primary);
    --primary-foreground: var(--color-primary-foreground);
    --secondary: var(--color-secondary);
    --secondary-foreground: var(--color-secondary-foreground);
    --muted: var(--color-muted);
    --muted-foreground: var(--color-muted-foreground);
    --accent: var(--color-accent);
    --accent-foreground: var(--color-accent-foreground);
    --destructive: var(--color-destructive);
    --destructive-foreground: var(--color-destructive-foreground);
    --border: var(--color-border);
    --input: var(--color-input);
    --ring: var(--color-ring);
    /* --radius defined in :root */
  }

  /* Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
    border-width: 0; /* Reset Tailwind border width default */
    border-style: solid;
    border-color: var(--color-border); /* Use themed border color */
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem; /* Offset for sticky header */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  body {
    font-family: var(--font-sans);
    background-color: var(--color-background);
    color: var(--color-foreground);
    min-height: 100%;
    line-height: 1.6; /* Readability */
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }

  main > section {
    /* Ensure scroll-snap-align works correctly */
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  /* Headings adjusted for visual hierarchy */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em; /* Subtle tightening */
    text-wrap: balance; /* Improves readability */
    margin-bottom: 0.75em; /* Slightly more space */
  }
  h1 { font-size: 2.5rem; /* Example sizes, adjust as needed */ }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.125rem; font-weight: 600;}


  /* Animation keyframes from shadcn/ui (keep for compatibility) */
  @keyframes accordion-down { from { height: 0px; } to { height: var(--radix-accordion-content-height); } }
  @keyframes accordion-up { from { height: var(--radix-accordion-content-height); } to { height: 0px; } }

  .animate-accordion-down { animation: accordion-down 0.2s ease-out; }
  .animate-accordion-up { animation: accordion-up 0.2s ease-out; }

}

@layer utilities {
   /* Custom utility for subtle text glow (example) */
   .text-glow-primary {
       text-shadow: 0 0 8px oklch(var(--color-primary) / 0.6);
   }
    /* Hide scrollbar utility */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
}


/* --- END OF FILE app/globals.css --- */
```

```typescript
// --- START OF FILE app/page.tsx ---
"use client";

import React, { Suspense, lazy } from 'react'; // Import React, Suspense, lazy
// Layout Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from '@/components/ui/Section'; // Import the enhanced Section
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'; // Simple spinner for suspense

// Section Components (Use React.lazy for code splitting non-critical sections)
import { Hero } from "@/components/sections/Hero";
const TheAntifragileEdge = lazy(() => import('@/components/sections/TheAntifragileEdge').then(module => ({ default: module.TheAntifragileEdge })));
const CockroachConnection = lazy(() => import('@/components/sections/CockroachConnection').then(module => ({ default: module.CockroachConnection })));
const TokenMechanics = lazy(() => import('@/components/sections/TokenMechanics').then(module => ({ default: module.TokenMechanics })));
const MarketScenarios = lazy(() => import('@/components/sections/MarketScenarios').then(module => ({ default: module.MarketScenarios })));
const Tokenomics = lazy(() => import('@/components/sections/Tokenomics').then(module => ({ default: module.Tokenomics })));
const SecuritySection = lazy(() => import('@/components/sections/SecuritySection').then(module => ({ default: module.SecuritySection })));
const Roadmap = lazy(() => import('@/components/sections/Roadmap').then(module => ({ default: module.Roadmap })));
const HowToBuy = lazy(() => import('@/components/sections/HowToBuy').then(module => ({ default: module.HowToBuy })));
const SocialProof = lazy(() => import('@/components/sections/SocialProof').then(module => ({ default: module.SocialProof })));
const FAQ = lazy(() => import('@/components/sections/FAQ').then(module => ({ default: module.FAQ })));

// UI Components
const SectionConnector = lazy(() => import('@/components/ui/SectionConnector').then(module => ({ default: module.SectionConnector })));


export default function Home() {

  // Smooth scroll handler (Remains efficient)
  const handleScrollTo = React.useCallback((id: string) => {
      const element = document.getElementById(id);
      const headerOffset = 80; // Match header height
      if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
   }, []); // No dependencies, use useCallback

   // Suspense fallback UI
    const sectionFallback = (
        <Section className="flex items-center justify-center">
            <LoadingSpinner size="lg" />
        </Section>
    );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header onScrollTo={handleScrollTo}/> {/* Pass handler */}
      {/* Main content area using mandatory scroll-snap on main element */}
      <main className="flex-grow scroll-smooth snap-y snap-mandatory">
        {/* --- 1. Hero (Eager Load) --- */}
        <Hero onScrollDown={() => handleScrollTo('the-antifragile-edge')} />

         {/* Wrap lazy-loaded components in Suspense */}
         <Suspense fallback={sectionFallback}>
              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Introduction"
                  summary="Conventional tokens often weaken under market pressure."
                  nextConcept="Understanding Antifragility"
                  className="!py-10" // Override padding for density
              />
              {/* --- 2. Antifragility Concept --- */}
              <TheAntifragileEdge id="the-antifragile-edge" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Antifragility: Fragile vs. Resilient vs. Antifragile"
                  summary="Antifragility means actively *gaining* from chaos, unlike resilience (just surviving)."
                  nextConcept="Why the Cockroach Emblem?"
                   className="!py-10"
              />
              {/* --- 3. Cockroach Connection --- */}
              <CockroachConnection id="cockroach-connection"/>

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Nature's Survivor"
                  summary="Specific cockroach traits (resilience, defense, adaptation) inspired $ROACH's adaptive mechanics."
                  nextConcept="Core Engine: How $ROACH Adapts"
                  className="!py-10"
              />
              {/* --- 4. Token Mechanics (5-Tier System) --- */}
              <TokenMechanics id="mechanics" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Dynamic 5-Tier System"
                  summary="The system auto-adjusts taxes and rewards based on real-time sell/buy pressure (4hr window)."
                  nextConcept="Performance Simulation: Stress Tests"
                   className="!py-10"
              />
              {/* --- 5. Market Scenarios Comparison --- */}
              <MarketScenarios id="market-scenarios" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Scenario Simulation"
                  summary="$ROACH's adaptive model aims to leverage volatility, potentially outperforming static systems under stress."
                  nextConcept="Token Supply & Allocation Strategy"
                   className="!py-10"
              />
              {/* --- 6. Tokenomics --- */}
              <Tokenomics id="tokenomics" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Tokenomics & Supply"
                  summary="Fixed supply strategically allocated for liquidity, growth, security, and future expansion."
                  nextConcept="Security Measures & Trust"
                  className="!py-10"
              />
              {/* --- 7. Security --- */}
              <SecuritySection id="security" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Security & Trust Pillars"
                  summary="Audited contract, locked liquidity, vested team, and fixed supply establish a secure foundation."
                  nextConcept="Project Development Trajectory"
                   className="!py-10"
              />
              {/* --- 8. Roadmap --- */}
              <Roadmap id="roadmap" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Development Roadmap"
                  summary="Phased development focuses on launch, stabilization, ecosystem growth, and feature expansion."
                  nextConcept="How to Acquire $ROACH"
                   className="!py-10"
              />
              {/* --- 9. How To Buy --- */}
              <HowToBuy id="how-to-buy" />

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Secure Acquisition Guide"
                  summary="Acquire $ROACH safely via trusted Solana wallets and DEX aggregators like Jupiter."
                  nextConcept="Community Strength & Voice"
                  className="!py-10"
              />
              {/* --- 10. Social Proof --- */}
              <SocialProof id="social-proof"/>

              {/* --- Connector --- */}
              <SectionConnector
                  prevSection="Community Voices"
                  summary="Join a rapidly growing, engaged community supporting the antifragile vision."
                  nextConcept="Common Questions Answered"
                   className="!py-10"
              />
              {/* --- 11. FAQ --- */}
              <FAQ id="faq"/>
          </Suspense>
      </main>
      <Footer />
    </div>
  );
}
// --- END OF FILE app/page.tsx ---
```

```typescript
// --- START OF FILE hooks/use-meme-mode.tsx ---
"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface MemeModeContextType {
  memeMode: boolean;
  toggleMemeMode: () => void;
}

// Provide a default context value matching the type structure
const defaultContextValue: MemeModeContextType = {
  memeMode: false, // Default to professional mode
  toggleMemeMode: () => { console.warn("MemeModeProvider not found"); } // Placeholder toggle
};

const MemeModeContext = createContext<MemeModeContextType>(defaultContextValue);

export const MemeModeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [memeMode, setMemeMode] = useState<boolean>(false); // Default state

  const toggleMemeMode = useCallback(() => {
    setMemeMode(prevMode => !prevMode);
    // Optionally, add logic here to persist the mode (e.g., localStorage)
    // localStorage.setItem('memeMode', JSON.stringify(!memeMode));
  }, []); // Removed memeMode dependency, rely on functional update

  // Initialize mode from localStorage on mount (optional persistence)
  // useEffect(() => {
  //   const persistedMode = localStorage.getItem('memeMode');
  //   if (persistedMode) {
  //     setMemeMode(JSON.parse(persistedMode));
  //   }
  // }, []);

  const contextValue = React.useMemo(() => ({ memeMode, toggleMemeMode }), [memeMode, toggleMemeMode]);


  return (
    <MemeModeContext.Provider value={contextValue}>
      {children}
    </MemeModeContext.Provider>
  );
};

export const useMemeMode = (): MemeModeContextType => {
  const context = useContext(MemeModeContext);
  // No check needed if default value is provided in createContext
  // if (!context) {
  //   throw new Error("useMemeMode must be used within a MemeModeProvider");
  // }
  return context;
};
// --- END OF FILE hooks/use-meme-mode.tsx ---
```

```typescript
// --- START OF FILE components/layout/Header.tsx ---
"use client";

import React, { useState, useEffect, useCallback, memo } from "react"; // Import memo
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, ShieldCheck, Coins, Activity, ListChecks, Info } from "lucide-react"; // Relevant icons
import { CockroachMascot } from "@/components/ui/CockroachMascot"; // Ensure this path is correct
import { cn } from "@/lib/utils";

// Constants for links - USE YOUR ACTUAL LINKS
const SWAP_LINK = "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f";
const WHITEPAPER_LINK = "/PARADOX_Whitepaper_v2.txt"; // Link to static asset

// --- Menu Items (Ensure IDs match section IDs in page.tsx) ---
const menuItems = [
    { name: "Concept", href: "#the-antifragile-edge", icon: ShieldCheck },
    { name: "Mechanics", href: "#mechanics", icon: Activity },
    { name: "Tokenomics", href: "#tokenomics", icon: Coins },
    { name: "Security", href: "#security", icon: ShieldCheck },
    { name: "Roadmap", href: "#roadmap", icon: ListChecks },
    { name: "FAQ", href: "#faq", icon: Info },
];

interface HeaderProps {
  onScrollTo: (id: string) => void; // Function to handle smooth scroll
}

// Memoize Header to prevent re-renders if props don't change
export const Header = memo(function Header({ onScrollTo }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Removed MemeToggle and useMemeMode as per focus request

    // --- Efficient Scroll Effect Logic ---
    useEffect(() => {
        let lastKnownScrollPosition = 0;
        let ticking = false;

        const handleScroll = () => {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = lastKnownScrollPosition > 10;
                    if (scrolled !== isScrolled) { // Update state only if changed
                       setIsScrolled(scrolled);
                     }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolled]); // Depend only on isScrolled

    // Callback for handling navigation clicks
    const handleNavClick = useCallback((href: string, closeMobileMenu = false) => (e: React.MouseEvent) => {
      if (href.startsWith('#')) {
         e.preventDefault(); // Prevent default jump
         const id = href.substring(1);
         onScrollTo(id);
         if (closeMobileMenu) {
           setIsMobileMenuOpen(false);
         }
      }
      // Let external links behave normally
    }, [onScrollTo]);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
                // Apply subtle blur and border effect when scrolled
                 isScrolled
                    ? "shadow-md bg-background/90 backdrop-blur-sm border-b border-border/30"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo Area */}
                 <Link href="/" className="flex items-center gap-2 mr-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" onClick={handleNavClick('/')}>
                    <CockroachMascot size="sm" className="text-primary transition-transform hover:scale-110" />
                    <span className="text-xl font-bold hidden sm:inline tracking-tight">
                        $ROACH
                    </span>
                </Link>

                {/* Desktop Navigation */}
                 <NavigationMenu className="hidden lg:flex flex-1 justify-center">
                    <NavigationMenuList>
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                 {/* Use Button component styled as link for consistency and accessibility */}
                                <Button
                                    variant="ghost"
                                    className={cn(
                                      navigationMenuTriggerStyle(),
                                      "bg-transparent h-9 px-3 text-sm font-medium", // Adjusted padding
                                      "hover:bg-accent/70 hover:text-accent-foreground",
                                       "focus:bg-accent/70 focus:text-accent-foreground data-[active]:bg-accent/50"
                                     )}
                                    onClick={handleNavClick(item.href)} // Use callback for click
                                 >
                                    <item.icon className="mr-1.5 h-4 w-4 opacity-80" /> {/* Add icon */}
                                    {item.name}
                                 </Button>
                            </NavigationMenuItem>
                        ))}
                        {/* Whitepaper link added */}
                         <NavigationMenuItem>
                             <Link href={WHITEPAPER_LINK} target="_blank" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent h-9 px-3 text-sm font-medium hover:bg-accent/70")}>
                                  Whitepaper
                                 </NavigationMenuLink>
                             </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Side Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-2 ml-auto">
                     {/* Main CTA */}
                     <Button size="sm" asChild className="shadow-sm hover:shadow-md transition-shadow bg-primary hover:bg-primary-hover">
                        <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer">
                            Get $ROACH
                        </a>
                     </Button>
                </div>

                {/* Mobile Menu Trigger & Sheet */}
                <div className="flex items-center gap-2 lg:hidden ml-auto">
                     <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-foreground/80 hover:text-foreground"
                                aria-label="Toggle navigation menu"
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                             </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] pt-10 px-0 bg-background flex flex-col border-l border-border/50">
                            {/* Mobile Menu Header */}
                             <div className="px-4 mb-6 flex items-center justify-between">
                               <div className="flex items-center gap-2">
                                    <CockroachMascot size="sm" className="text-primary" />
                                     <span className="text-lg font-bold">$ROACH</span>
                                </div>
                                <SheetClose asChild>
                                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
                                      <X className="h-4 w-4" />
                                      <span className="sr-only">Close menu</span>
                                  </Button>
                                 </SheetClose>
                             </div>

                             {/* Mobile Navigation Links */}
                             <nav className="flex flex-col space-y-1 flex-grow px-4 overflow-y-auto">
                                {menuItems.map((item) => (
                                    <SheetClose key={item.href} asChild>
                                         <Button
                                              variant="ghost" // Use ghost buttons for mobile nav links
                                              className="w-full justify-start text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent px-3 py-2 h-auto"
                                              onClick={handleNavClick(item.href, true)} // Pass true to close menu
                                          >
                                              <item.icon className="mr-2 h-4 w-4 opacity-80"/>
                                              {item.name}
                                         </Button>
                                    </SheetClose>
                                ))}
                                 <SheetClose asChild>
                                    <Link href={WHITEPAPER_LINK} target="_blank" legacyBehavior passHref>
                                         <a className={cn(
                                            buttonVariants({ variant: "ghost", size: "lg"}), // Use Button styles via variants
                                            "w-full justify-start text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent px-3 py-2 h-auto" // Custom padding/height
                                        )}>
                                            Whitepaper
                                         </a>
                                    </Link>
                                 </SheetClose>
                             </nav>

                             {/* Mobile Action Button at bottom */}
                            <div className="mt-auto border-t border-border/30 p-4">
                                 <Button className="w-full shadow-md bg-primary hover:bg-primary-hover" size="lg" asChild>
                                     <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                        Get $ROACH Now
                                    </a>
                                </Button>
                             </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
});
// --- END OF FILE components/layout/Header.tsx ---
```

```typescript
// --- START OF FILE components/layout/Footer.tsx ---
"use client";

import React from "react"; // Import React
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { FaXTwitter, FaTelegram, FaDiscord, FaGithub, FaRedditAlien } from "react-icons/fa6"; // Added more icons
import { BookOpen, FileText, FlaskConical, GitBranch, Coins, HelpCircle, ExternalLink } from "lucide-react"; // Added relevant icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip


// --- Define Footer Links (REPLACE '#' and addresses with actual URLs) ---
const SOCIAL_LINKS = {
    twitter: "#",
    telegram: "#",
    discord: "#",
    github: "#", // Add link to code repo if public
    reddit: "#", // Add link to subreddit if exists
};
const RESOURCE_LINKS = {
    whitepaper: "/PARADOX_Whitepaper_v2.txt",
    audit: "#", // Link to CertiK report page or PDF
    // Example direct link, replace ROACHaB... part
    contract: "https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f",
    lockedLiquidity: "#", // Link to PinkLock or similar proof
    // Direct Swap Links (Ensure address is correct)
    buyJupiter: "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f",
    buyRaydium: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f",
};
// Navigation mirrored from header (use consistent IDs)
const NAV_LINKS = [
    { name: "Concept", href: "#the-antifragile-edge", icon: FlaskConical },
    { name: "Mechanics", href: "#mechanics", icon: GitBranch }, // Consider a better icon maybe?
    { name: "Tokenomics", href: "#tokenomics", icon: Coins },
    { name: "Security", href: "#security", icon: ShieldCheck }, // Use filled icon for security
    { name: "Roadmap", href: "#roadmap", icon: GitBranch },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
];
const contractAddressShort = "ROACHaB...Xv4V1f"; // For display

// ------------------------------------------------------------

export function Footer() {
    // Removed meme mode hook and related logic

    return (
        <footer className="bg-muted/40 dark:bg-background/30 border-t border-border/50 mt-24">
             <TooltipProvider delayDuration={150}>
                <div className="container mx-auto pt-16 pb-8 px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-6 lg:grid-cols-12 items-start">

                        {/* Brand & Socials (Span 4 cols) */}
                        <div className="md:col-span-3 lg:col-span-4 space-y-4">
                            <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm w-fit group">
                                <CockroachMascot size="sm" className="transition-transform group-hover:scale-110" />
                                <span className="text-xl font-bold">$ROACH</span>
                            </Link>
                            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                               The antifragile SPL token on Solana, engineered to gain strength from market volatility and reward holders during pressure.
                            </p>
                            <div className="flex items-center gap-1.5 pt-2"> {/* Reduced gap */}
                                <SocialLink href={SOCIAL_LINKS.twitter} icon={FaXTwitter} label="Follow $ROACH on X (Twitter)" />
                                <SocialLink href={SOCIAL_LINKS.telegram} icon={FaTelegram} label="Join $ROACH Telegram Community" />
                                <SocialLink href={SOCIAL_LINKS.discord} icon={FaDiscord} label="Join $ROACH Discord Server" />
                                 {SOCIAL_LINKS.github !== "#" && <SocialLink href={SOCIAL_LINKS.github} icon={FaGithub} label="View $ROACH Code on GitHub" />}
                                {SOCIAL_LINKS.reddit !== "#" && <SocialLink href={SOCIAL_LINKS.reddit} icon={FaRedditAlien} label="Visit $ROACH Subreddit" />}
                            </div>
                        </div>

                        {/* Navigate Links (Span 2 cols) */}
                        <div className="md:col-span-3 lg:col-span-2 space-y-3">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-3">Navigate</h4>
                            <ul className="space-y-2 text-sm">
                               {NAV_LINKS.map(link => (
                                   <li key={link.href} className="flex items-center">
                                       <link.icon className="h-3.5 w-3.5 mr-2 text-muted-foreground/70" />
                                       <FooterLink href={link.href}>{link.name}</FooterLink>
                                   </li>
                               ))}
                            </ul>
                        </div>

                        {/* Resource Links (Span 3 cols) */}
                        <div className="md:col-span-3 lg:col-span-3 space-y-3">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-3">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><ResourceLink href={RESOURCE_LINKS.whitepaper} icon={BookOpen}>Whitepaper</ResourceLink></li>
                                {RESOURCE_LINKS.audit !== "#" && <li><ResourceLink href={RESOURCE_LINKS.audit} icon={ShieldCheck}>Security Audit</ResourceLink></li>}
                                <li><ResourceLink href={RESOURCE_LINKS.contract} icon={FileText}>Verified Contract ({contractAddressShort})</ResourceLink></li>
                                {RESOURCE_LINKS.lockedLiquidity !== "#" && <li><ResourceLink href={RESOURCE_LINKS.lockedLiquidity} icon={Lock}>Liquidity Lock Proof</ResourceLink></li>}
                             </ul>
                             {/* Visual Placeholder: Maybe small logos or trust symbols */}
                              <div className="mt-4 flex items-center justify-start gap-2 opacity-60">
                                  <div className="relative w-6 h-6 bg-muted dark:bg-muted/20 border border-dashed rounded-sm flex items-center justify-center" title="CertiK Logo Placeholder">
                                    <p className="text-[0.5rem] italic text-muted-foreground/70">Aud</p>
                                  </div>
                                  <div className="relative w-6 h-6 bg-muted dark:bg-muted/20 border border-dashed rounded-sm flex items-center justify-center" title="Lock Proof Placeholder">
                                    <p className="text-[0.5rem] italic text-muted-foreground/70">Lock</p>
                                  </div>
                              </div>

                        </div>

                        {/* Quick Buy Links (Span 3 cols) */}
                         <div className="md:col-span-3 lg:col-span-3 space-y-3">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-3">Get $ROACH</h4>
                             <ul className="space-y-2 text-sm flex flex-col items-start">
                               <li> <SwapLinkButton href={RESOURCE_LINKS.buyJupiter}>Jupiter Aggregator</SwapLinkButton> </li>
                               <li> <SwapLinkButton href={RESOURCE_LINKS.buyRaydium}>Raydium DEX</SwapLinkButton> </li>
                                <li className="mt-2">
                                   <Button variant="link" size="sm" className="text-xs h-auto p-0 text-primary hover:underline" asChild>
                                       <Link href="#how-to-buy">View Full Buying Guide</Link>
                                   </Button>
                               </li>
                             </ul>
                             {/* Visual Placeholder: Logos for Jupiter/Raydium */}
                              <div className="mt-4 flex items-center justify-start gap-2 opacity-60">
                                  <div className="relative w-10 h-6 bg-muted dark:bg-muted/20 border border-dashed rounded-sm flex items-center justify-center" title="Jupiter Logo Placeholder">
                                    <p className="text-[0.5rem] italic text-muted-foreground/70">JUP</p>
                                  </div>
                                  <div className="relative w-10 h-6 bg-muted dark:bg-muted/20 border border-dashed rounded-sm flex items-center justify-center" title="Raydium Logo Placeholder">
                                    <p className="text-[0.5rem] italic text-muted-foreground/70">RAY</p>
                                  </div>
                              </div>
                         </div>

                    </div>

                    <Separator className="my-10 bg-border/30 dark:bg-border/20" /> {/* More subtle separator */}

                    {/* Bottom Bar: Copyright & Minimal Links */}
                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
                        <p>&copy; {new Date().getFullYear()} $ROACH. All rights reserved.</p>
                        {/* Add simple optional links */}
                        {/* <div className="flex gap-4">
                          <FooterLink href="/terms">Terms</FooterLink>
                          <FooterLink href="/privacy">Privacy</FooterLink>
                        </div> */}
                    </div>

                    {/* Enhanced Disclaimer */}
                    <div className="mt-8 pt-8 border-t border-border/30 dark:border-border/20">
                         <p className="text-[0.75rem] leading-relaxed text-muted-foreground/80 text-center max-w-4xl mx-auto">
                            <span className="font-semibold text-foreground/90">Important Disclaimer:</span> Investing in cryptocurrency involves significant risk and is highly speculative. $ROACH leverages novel, experimental tokenomics based on the 'antifragility' principle and should be considered a high-risk asset. The value of digital assets can fluctuate dramatically; you could lose your entire investment. <strong className="text-foreground/90">This website does not provide financial, investment, or legal advice.</strong> All information is for general informational purposes only. Conduct thorough Due Diligence (DYOR) and consult with qualified financial and legal advisors before making investment decisions. Understand the technology, the market dynamics, and the specific risks associated with $ROACH. <strong className="text-foreground/90">Past performance is not indicative of future results.</strong> Never invest more than you can afford to lose. $ROACH makes no guarantees regarding price appreciation or returns. By interacting with this website or the $ROACH token, you acknowledge and accept these risks.
                        </p>
                    </div>
                </div>
            </TooltipProvider>
        </footer>
    );
}

// --- Helper Components ---

// FooterLink (Focus styles enhanced)
function FooterLink({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) {
    const isExternal = target === "_blank";
    return (
        <Link
            href={href}
            target={target}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
                "text-muted-foreground hover:text-foreground hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm focus-visible:text-foreground transition-colors duration-200",
                "inline-flex items-center gap-1" // Ensure gap for potential icon
            )}
            aria-label={typeof children === 'string' ? children : undefined}
        >
            {children}
            {isExternal && <ExternalLink className="h-3 w-3 opacity-60" />}
        </Link>
    );
}

// ResourceLink (With Icon)
function ResourceLink({ href, icon: Icon, children }: { href: string; icon: React.ElementType, children: React.ReactNode }) {
     return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm",
                "inline-flex items-center gap-1.5 group transition-colors duration-200"
            )}
            aria-label={`View ${children}`}
        >
           <Icon className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
           <span className="group-hover:underline underline-offset-4">{children}</span>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
        </Link>
    );
}


// SocialLink (Includes Tooltip)
function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-accent/20 rounded-full",
                        "focus-visible:ring-offset-muted" // Adjust ring offset for footer bg
                    )}
                    asChild
                >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon className="h-4 w-4" />
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
                <p className="text-xs">{label}</p>
            </TooltipContent>
        </Tooltip>
    );
}

// SwapLinkButton (Specialized Button)
function SwapLinkButton({ href, children }: { href: string; children: React.ReactNode; }) {
     return (
        <Button variant="outline" size="sm" asChild className="w-full sm:w-auto justify-start sm:justify-center shadow-sm hover:border-primary/50 dark:bg-card dark:hover:bg-muted/50">
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                 <span className="flex items-center gap-2"> <Coins className="h-3.5 w-3.5 text-primary"/> </span> {/* Example icon */}
                 {children}
                 <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
        </Button>
    );
}

// --- END OF FILE components/layout/Footer.tsx ---
```

```typescript
// --- START OF FILE components/sections/Hero.tsx ---
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { ArrowDown, TrendingUp, ShieldCheck, Zap, Award, BarChartHorizontalIcon, CircleHelp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip

interface HeroProps {
  onScrollDown?: () => void;
}

// USE YOUR ACTUAL LINKS
const SWAP_LINK = "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f";
const EXPLORER_LINK = `https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f`;
const DOCS_LINK = "/PARADOX_Whitepaper_v2.txt"; // Example link to docs/whitepaper

export function Hero({ onScrollDown }: HeroProps) {
    // Simple parallax effect for the background or mascot (optional)
    const { scrollYProgress } = useScroll();
    const mascotY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]); // Adjust range as needed

  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden !pt-24 !pb-16 md:!pt-28 md:!pb-20 lg:!pt-32 lg:!pb-24 snap-start" // Ensure snapping starts correctly
    >
        {/* Enhanced Background Visual using pseudo-elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background opacity-60 dark:opacity-40"></div>
            {/* Subtle repeating pattern or abstract shape */}
             <div
                 className="absolute inset-0 bg-[url('/path-to-subtle-pattern.svg')] bg-repeat bg-center opacity-[0.02]"
                 // style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }} // Optional fade effect
             >
                {/* Visual Placeholder Comment for Background */}
                {/*
                  AI Prompt for Background SVG ('/path-to-subtle-pattern.svg'):
                  Generate a subtle, seamless tiling background pattern. Geometric, low-contrast lines forming abstract, resilient network structures or hexagonal grids. Use a color like oklch(var(--color-foreground) / 0.05) so it's barely visible. Ensure it tiles perfectly. SVG format. Optimize for minimal file size.
                  Research: Gestalt Principles (Proximity, Similarity), Minimalist Design.
                */}
            </div>
        </div>


      {/* Content */}
      <motion.div
        className="z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.1 }}
      >
         {/* Title Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Badge variant="outline" className="mb-4 py-1 px-3 border-primary/30 bg-primary/10 text-primary font-medium text-sm">
             <Zap className="h-3.5 w-3.5 mr-1.5"/> Antifragile SPL Token
           </Badge>
         </motion.div>

        {/* Main Headline */}
        <motion.h1
           className={cn(
             "text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1] mb-6 max-w-4xl text-balance" // Use text-balance
           )}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
         >
           Don't Just Survive Market Stress. <br className="hidden md:block"/> <span className="text-primary text-glow-primary">Profit From It.</span>
         </motion.h1>

         {/* Sub-headline / Value Proposition */}
        <motion.p
          className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
           Introducing <strong className="font-semibold text-foreground">$ROACH</strong>: The revolutionary token on Solana engineered with dynamic, antifragile tokenomics. It automatically converts sell pressure into <strong className="font-semibold text-foreground">higher holder rewards</strong> and <strong className="font-semibold text-foreground">ecosystem fortification</strong>.
        </motion.p>

         {/* Core Benefit Highlights with Tooltips */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12 max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <BenefitCard icon={TrendingUp} title="Adaptive Rewards" description="Reflection rates scale up during high sell volume." tooltip="Up to 10% of sell tax redistributed to holders in Tier 5." />
          <BenefitCard icon={ShieldCheck} title="Dynamic Defense" description="Rising sell tax deters panic and stabilizes." tooltip="Sell tax increases up to 15% under extreme pressure."/>
          <BenefitCard icon={BarChartHorizontalIcon} title="Volatility Advantage" description="Engineered to strengthen from market chaos." tooltip="Leverages disorder based on Antifragility principles."/>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 justify-center w-full max-w-md"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
           <Button size="lg" asChild className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow font-semibold bg-primary hover:bg-primary-hover text-primary-foreground animate-pulse-slow"> {/* Added pulse */}
             <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer">
                 <Zap className="h-5 w-5 mr-2"/>
                Acquire $ROACH
             </a>
           </Button>
            {/* Secondary actions: Learn More (Whitepaper/Docs) & View Contract */}
            <div className="flex gap-2 w-full sm:w-auto">
               <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                 <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer" title="Read the Whitepaper">
                     <BookOpen className="h-5 w-5"/> {/* Icon only for small button */}
                     {/* <span className="hidden sm:inline ml-2">Learn More</span> */}
                 </a>
               </Button>
               <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                 <a href={EXPLORER_LINK} target="_blank" rel="noopener noreferrer" title="View Contract on Solscan">
                      <FileText className="h-5 w-5"/> {/* Icon only */}
                      {/* <span className="hidden sm:inline ml-2">Contract</span> */}
                  </a>
               </Button>
            </div>

        </motion.div>

         {/* Scroll Down Indicator */}
         {onScrollDown && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
            <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-accent/20 mt-8 sm:mt-10 animate-bounce"
                onClick={onScrollDown}
                aria-label="Scroll down to learn more"
             >
                <ArrowDown className="h-5 w-5" />
            </Button>
           </motion.div>
           )}
      </motion.div>

        {/* Optional: Animated Mascot (If desired) */}
       <motion.div
          className="absolute bottom-[-20px] right-[-30px] md:bottom-[-40px] md:right-[-50px] lg:bottom-[-60px] lg:right-[-60px] opacity-10 dark:opacity-[0.08] pointer-events-none"
          style={{ y: mascotY }} // Apply parallax
           initial={{ scale: 0.8, rotate: -5 }}
           animate={{ scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, delay: 0.5, type: 'spring', stiffness: 50 }}
         >
           <CockroachMascot size="xl" className="text-primary w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80" />
           <div className="relative aspect-[1/1] w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 flex items-center justify-center">
               <p className="text-xs text-muted-foreground/70 italic text-center absolute inset-0 flex items-center justify-center">
                    AI Prompt: Stylized, tech-inspired cockroach mascot with subtle circuit patterns or glowing green highlights. Resilient, slightly forward-leaning pose. Clean vector art, suitable for large display. Theme: Cyberpunk Resilience.
                    <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                        Research: Dual-Coding Theory (Memorable Visual Anchor)
                    </span>
               </p>
            </div>
       </motion.div>
    </Section>
  );
}

// --- BenefitCard Component ---
function BenefitCard({ icon: Icon, title, description, tooltip }: { icon: React.ElementType, title: string, description: string, tooltip?: string }) {
   const content = (
      <div className="flex flex-col items-center gap-3 p-4 md:p-5 rounded-lg bg-background/50 dark:bg-white/5 border border-border/40 shadow-sm text-center h-full backdrop-blur-[3px] transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:bg-background/70 dark:hover:bg-white/10">
         <div className="p-2 bg-primary/10 rounded-full">
             <Icon className="h-6 w-6 text-primary" />
         </div>
         <div className="flex-1">
            <h3 className="font-semibold text-base md:text-lg mb-1 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-normal">{description}</p>
         </div>
          {/* Hidden Visually, used by tooltip */}
          {tooltip && <span className="sr-only">{tooltip}</span>}
      </div>
   );

    if (tooltip) {
        return (
             <TooltipProvider>
                <Tooltip>
                     <TooltipTrigger asChild><div className="h-full">{content}</div></TooltipTrigger>
                     <TooltipContent side="bottom">
                        <p className="text-xs max-w-[200px]">{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
         );
     }

   return <div className="h-full">{content}</div>;
}


@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 oklch(var(--primary) / 0.4);
  }
  50% {
    opacity: 0.95;
    box-shadow: 0 0 0 6px oklch(var(--primary) / 0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}


// --- END OF FILE components/sections/Hero.tsx ---
```

```typescript
// --- START OF FILE components/sections/TheAntifragileEdge.tsx ---
"use client";

import React from "react"; // Import React
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TrendingDown, Activity, TrendingUp, ShieldX, ShieldCheck, Zap, BookOpen, BarChartHorizontalIcon, AlertTriangle, Scale, GitCommitHorizontal } from "lucide-react"; // Relevant icons
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Enhanced Concept Data
const concepts = [
    {
        value: "fragile",
        label: "Fragile",
        icon: ShieldX,
        colorTheme: "destructive",
        summary: "Breaks Under Pressure",
        definition: "Systems harmed or destroyed by volatility, errors, and randomness. They require predictability and stable conditions to function.",
        characteristics: ["Degrades with Stress", "Fears Volatility", "Needs Stability", "Vulnerable to Shocks"],
        cryptoExample: "Over-leveraged positions, meme coins with no utility or defense, protocols lacking security audits.",
        responseToStress: { label: "Weakens / Breaks", icon: TrendingDown },
        metaphor: "Glass Vase",
        talebQuote: '"The fragile wants tranquility." - Nassim Taleb',
        visualPrompt: "AI Prompt: Simple line graph showing a stable line sharply dropping and shattering upon encountering a 'stress event' zone. Use red/destructive theme colors, representing failure. Research: Prospect Theory (Loss Aversion framing)."
    },
    {
        value: "resilient",
        label: "Resilient",
        icon: ShieldCheck,
        colorTheme: "amber", // Using amber for 'warning'/'caution' rather than pure good/bad
        summary: "Withstands & Recovers",
        definition: "Systems that resist shocks and return to their original state after disturbance. They endure stress but do not gain from it.",
        characteristics: ["Tolerates Shocks", "Returns to Baseline", "Static Response", "Focuses on Stability"],
        cryptoExample: "Basic tokens with only locked LP, stablecoins maintaining peg (ideally), protocols with fixed buyback rates.",
        responseToStress: { label: "Recovers to Original State", icon: Activity },
        metaphor: "Steel Beam",
        talebQuote: '"The robust stays the same." - Nassim Taleb',
        visualPrompt: "AI Prompt: Simple line graph showing a stable line dipping during a 'stress event' zone, then recovering *back* to the original level. Use amber/yellow theme colors, representing endurance without improvement. Research: Mental Models (Showing baseline return)."
    },
    {
        value: "antifragile",
        label: "Antifragile ($ROACH)",
        icon: Zap,
        colorTheme: "primary",
        summary: "Strengthens from Stress",
        definition: "$ROACH's Core Principle: Systems that **benefit** from shocks, volatility, randomness, and stressors. They use disorder to improve and become more robust.",
        characteristics: ["Gains from Volatility", "Improves with Stressors", "Leverages Disorder", "$ROACH Dynamic 5-Tier System"],
        cryptoExample: "$ROACH's adaptive tax/reflection system converts sell pressure into increased holder rewards and potential price floor support.",
        responseToStress: { label: "Improves & Strengthens", icon: TrendingUp },
        metaphor: "Immune System (Adapts)",
        talebQuote: '"The antifragile gets better." - Nassim Taleb',
         visualPrompt: "AI Prompt: Simple line graph showing a stable line dipping during a 'stress event', then rising *above* its original level, signifying improvement. Use primary/green theme colors. Reinforce the core value prop. Research: Dual-Coding Theory (Visual + Text Reinforcement)."
    },
];

export function TheAntifragileEdge() {

  return (
    <Section
      id="the-antifragile-edge" // Unique ID for this section
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/5 to-background"
    >
      <SectionHeader
        title="Beyond Survival: The Antifragile Advantage"
        description="Typical crypto assets break (Fragile) or merely withstand (Resilient) market shocks. $ROACH is fundamentally different – engineered to *gain strength* from volatility."
        subtitle={<><BookOpen className="inline h-4 w-4 mr-1.5"/> Core Concept Explained</>}
        alignment="center"
        className="mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <Card className="shadow-xl overflow-hidden border border-border/10 dark:border-border/20">
            <Tabs defaultValue="antifragile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-t-lg rounded-b-none p-1.5 h-auto bg-muted dark:bg-background/40 gap-1.5">
                 {concepts.map((concept) => (
                    <TabsTrigger
                        key={concept.value}
                        value={concept.value}
                         className={cn(
                           "py-2.5 sm:py-3 data-[state=active]:shadow-md text-xs sm:text-sm flex-col sm:flex-row items-center justify-center h-auto gap-1.5 font-medium transition-colors duration-200 rounded-md border border-transparent", // Base styles
                           "focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background", // Focus
                           "data-[state=active]:bg-card data-[state=active]:border-border/50 dark:data-[state=active]:border-border/30 data-[state=active]:font-semibold", // Active base
                           concept.colorTheme === 'destructive' && "data-[state=active]:text-destructive hover:bg-destructive/5 hover:text-destructive",
                           concept.colorTheme === 'amber' && "data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400 hover:bg-amber-500/5 hover:text-amber-600",
                           concept.colorTheme === 'primary' && "data-[state=active]:text-primary hover:bg-primary/5 hover:text-primary",
                           "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-accent/50 data-[state=inactive]:hover:text-foreground/80" // Inactive state
                         )}
                     >
                        <concept.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> {concept.label}
                     </TabsTrigger>
                 ))}
              </TabsList>

              {/* Tab Content Area */}
              <div className="p-6 md:p-8 lg:p-10 min-h-[520px] flex items-center justify-center bg-card relative overflow-hidden">
                 {/* Subtle background icon hinting at the concept */}
                 <AnimatePresence mode="wait">
                     {concepts.map((concept) => (
                        <TabsContent key={concept.value} value={concept.value} className="w-full mt-0">
                             <motion.div
                                key={concept.value} // Add key for AnimatePresence
                                 initial={{ opacity: 0, scale: 0.97 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.97 }}
                                 transition={{ duration: 0.3, ease: "easeInOut" }}
                             >
                                {/* Add the corresponding background icon */}
                                 <concept.icon className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 opacity-[0.03] pointer-events-none", `text-${concept.colorTheme === 'amber' ? 'yellow-500' : concept.colorTheme}`)} />
                                <ConceptContent {...concept} />
                             </motion.div>
                        </TabsContent>
                    ))}
                  </AnimatePresence>
              </div>
            </Tabs>
        </Card>
      </motion.div>

       <motion.div
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
           className="mt-10 text-center max-w-2xl mx-auto"
        >
         <p className="text-sm text-muted-foreground italic">
             Concept derived from <Link href="https://en.wikipedia.org/wiki/Antifragility" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline focus-visible:ring-1 focus-visible:ring-ring rounded-sm focus-visible:outline-none">Nassim Nicholas Taleb's influential work</Link>. $ROACH translates this principle into practical, adaptive tokenomics on the Solana blockchain.
          </p>
       </motion.div>
    </Section>
  );
}


// --- ConceptContent Sub-Component (Enhanced Structure & Styling) ---
interface ConceptContentProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  definition: string;
  characteristics: string[];
  cryptoExample: string;
  responseToStress: { label: string; icon: React.ElementType };
  colorTheme: 'destructive' | 'amber' | 'primary';
  visualPrompt: string;
  metaphor: string;
  talebQuote: string;
}

function ConceptContent({
  icon, title, summary, definition, characteristics, cryptoExample, responseToStress, colorTheme, visualPrompt, metaphor, talebQuote
}: ConceptContentProps) {

    const themes = {
      destructive: { text: "text-destructive", border: "border-destructive/40", bg: "bg-destructive/5", icon: AlertTriangle, iconColor: "text-destructive", responseBadge: "bg-destructive/10 text-destructive border-destructive/20", characteristicIconColor: "text-destructive/70" },
      amber: { text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/40", bg: "bg-amber-500/5", icon: ShieldCheck, iconColor: "text-amber-500", responseBadge: "bg-amber-500/10 text-amber-600 border-amber-500/20", characteristicIconColor: "text-amber-600/70" },
      primary: { text: "text-primary", border: "border-primary/40", bg: "bg-primary/5", icon: Zap, iconColor: "text-primary", responseBadge: "bg-primary/10 text-primary border-primary/20", characteristicIconColor: "text-primary/70" },
    };
    const theme = themes[colorTheme];
    const CharacteristicIcon = theme.icon; // Use concept icon for characteristics too
    const ResponseIcon = responseToStress.icon;

    return (
      <div className="text-center flex flex-col items-center w-full max-w-4xl mx-auto relative z-10"> {/* Ensure content is above potential background icon */}
        {/* Icon & Title Area */}
        <div className={cn("p-2.5 rounded-full mb-4 inline-block", theme.bg)}>
          {React.cloneElement(icon as React.ReactElement, { className: "h-10 w-10 sm:h-12 sm:w-12" })}
        </div>
        <h3 className={cn("text-2xl sm:text-3xl font-bold mb-2", theme.text)}>{title}</h3>
        <Badge variant="secondary" className={cn("mb-6 text-sm font-medium px-4 py-1", theme.responseBadge, "border")}> {summary} </Badge>

        {/* Definition */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">{definition}</p>

        {/* Details Grid: Characteristics & Response */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full mb-8 text-left">
           {/* Characteristics */}
          <div className={cn("p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Key Traits:</h4>
            <ul className="space-y-2 flex-1">
                {characteristics.map((char, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                   <CharacteristicIcon className={cn("h-4 w-4 shrink-0", theme.characteristicIconColor)} />
                   <span>{char}</span>
                  </li>
                ))}
             </ul>
            {/* Metaphor */}
             <p className="text-xs italic text-muted-foreground mt-4 pt-2 border-t border-border/20">Analogy: {metaphor}</p>
          </div>

           {/* Response & Example */}
          <div className={cn("p-4 rounded-lg border h-full flex flex-col", theme.border, theme.bg)}>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Response to Stress:</h4>
              <Badge variant="outline" className={cn("inline-flex w-fit items-center gap-1.5 mb-4 text-xs font-medium", theme.responseBadge, theme.border)}>
                 <ResponseIcon className="h-3.5 w-3.5" /> {responseToStress.label}
               </Badge>

              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 mt-auto pt-3 border-t border-border/20">Crypto Parallel:</h4>
              <p className="text-sm text-foreground/90 flex-1">{cryptoExample}</p>
              {/* Quote */}
               <blockquote className="text-xs italic text-muted-foreground mt-4 pt-2 border-t border-border/20">{talebQuote}</blockquote>
          </div>

          {/* Visual Placeholder Area */}
          <div className={cn("relative aspect-square bg-gradient-to-br border border-dashed rounded-lg p-3 flex items-center justify-center", theme.border, theme.bg)}>
              <p className="text-xs text-muted-foreground/70 italic text-center">
                   {visualPrompt}
              </p>
          </div>
        </div>
      </div>
    );
}


// --- END OF FILE components/sections/TheAntifragileEdge.tsx ---
```

```typescript
// --- START OF FILE components/sections/CockroachConnection.tsx ---
"use client";

import React from "react"; // Import React
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Zap, Shield, RotateCw, Network, Bug, Link2, Info, Dna, Atom } from "lucide-react"; // Added Dna, Atom for bio/tech link
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "../ui/badge"; // Import Badge

// Updated Trait Data with Clearer Connections
const traits = [
    {
        icon: Zap, // Extreme resilience / Energy Absorption
        title: "Extreme Stress Tolerance",
        cockroachFact: "Can withstand high radiation doses, survive decapitation for weeks, and endure extreme environments.",
        tokenLinkTitle: "Parallel: Tier 5 'Recovery' Mode",
        tokenLinkText: "Max sell tax (15%) & reflection (10%) engage under extreme duress, mirroring inherent survivability. Low buy tax (2%) incentivizes recovery.",
        color: "red",
    },
    {
        icon: Shield, // Defense / Exoskeleton
        title: "Structural Defense",
        cockroachFact: "Possesses a hardened exoskeleton providing significant physical protection against external forces.",
        tokenLinkTitle: "Parallel: High-Tier Sell Pressure Deterrence",
        tokenLinkText: "Steeply increased sell taxes in Tiers 4 (12%) & 5 (15%) create an economic 'exoskeleton' discouraging large, destabilizing sell-offs.",
        color: "orange",
    },
    {
        icon: RotateCw, // Adaptation / Resistance
        title: "Rapid Adaptation",
        cockroachFact: "Populations can quickly develop behavioral or physiological resistance to pesticides and threats.",
        tokenLinkTitle: "Parallel: Dynamic 4-Hour Adjustment Cycle",
        tokenLinkText: "The system re-evaluates the Sell/Buy Ratio every 4 hours, enabling swift tier adjustments to adapt to changing market conditions.",
        color: "yellow",
    },
    {
        icon: Network, // Decentralized function / Resilience
        title: "Distributed Functionality",
        cockroachFact: "Can operate with a decentralized nervous system; breathing occurs through body spiracles.",
        tokenLinkTitle: "Parallel: Automated Reflection Distribution",
        tokenLinkText: "Reflections are automatically sent network-wide to all holders via the smart contract, enhancing collective benefit without central bottlenecks.",
        color: "blue",
    },
];

// Color map remains useful
const colorMap = {
    red: { text: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10 dark:bg-red-500/15', border: 'border-red-500/30 dark:border-red-500/35', hoverBorder: 'hover:border-red-500/50 dark:hover:border-red-400/50' },
    orange: { text: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/15', border: 'border-orange-500/30 dark:border-orange-500/35', hoverBorder: 'hover:border-orange-500/50 dark:hover:border-orange-400/50' },
    yellow: { text: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-500/10 dark:bg-yellow-500/15', border: 'border-yellow-500/30 dark:border-yellow-500/35', hoverBorder: 'hover:border-yellow-500/50 dark:hover:border-yellow-400/50' },
    blue: { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/15', border: 'border-blue-500/30 dark:border-blue-500/35', hoverBorder: 'hover:border-blue-500/50 dark:hover:border-blue-400/50' },
};

// Animation Variants (using standard variants)
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export function CockroachConnection() {

  return (
    <Section
        id="cockroach-connection"
        className="py-20 md:py-28 lg:py-32 bg-muted/10 dark:bg-background/10"
    >
       <SectionHeader
            title="Bio-Inspired Engineering: The Roach Resilience Model"
            description="Nature's ultimate survivor meets cutting-edge tokenomics. The cockroach's proven antifragility isn't just a metaphor—it's the blueprint for $ROACH's adaptive economic design."
            subtitle={<><Dna className="inline h-4 w-4 mr-1.5" /> Nature Meets Tech</>}
            alignment="center"
            className="mb-16"
       />

      {/* Intro Row: Mascot + Text + Diagram Placeholder */}
      <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-6xl mx-auto mb-16 md:mb-20"
      >
           {/* Mascot & Text Column */}
          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left">
             <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.98 }}>
                 <CockroachMascot size="xl" className="mb-6 text-foreground/70 dark:text-foreground/60 transition-transform" />
             </motion.div>
             <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground/95">
                 Modelled on 300 Million Years of Survival
             </h3>
             <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                  Thriving through cataclysms, the cockroach embodies unparalleled antifragile engineering. $ROACH translates these principles of extreme adaptation and distributed strength into a dynamic tokenomic framework designed for the volatile crypto landscape.
              </p>
          </motion.div>

         {/* Diagram Placeholder Column */}
         <motion.div variants={itemVariants}>
              <div className="relative aspect-[4/3] bg-muted/20 dark:bg-white/5 border border-dashed border-border/30 rounded-lg p-4 flex items-center justify-center shadow-inner">
                  <p className="text-xs text-muted-foreground/70 italic max-w-md text-center">
                      AI Prompt: Create a clean, schematic diagram linking Cockroach traits to $ROACH mechanics. Left side: icons for cockroach traits (Radiation Tolerance [Zap/Atom], Exoskeleton [Shield], Adaptation [RotateCw], Decentralized Nervous System [Network]). Right side: simplified icons for corresponding $ROACH mechanics (Tier 5 badge, High Sell Tax symbol [%↑], 4hr Clock icon, Reflection Distribution [Users icon]). Connect with subtle, styled arrows. Use theme colors (primary for $ROACH side, neutral/trait-colors for biology side). Title: Bio-Mimetic Mapping.
                       <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                           Research: Dual-Coding Theory (Visual Mapping), Cognitive Load Reduction (Clear Analogy)
                       </span>
                  </p>
              </div>
           </motion.div>
      </motion.div>

      {/* Trait Cards grid */}
      <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto"
        >
        {traits.map((trait) => {
            const colors = colorMap[trait.color as keyof typeof colorMap];
            return (
            <motion.div key={trait.title} variants={itemVariants}>
               <HoverCard openDelay={150} closeDelay={100}>
                 <HoverCardTrigger asChild>
                    <Card className={cn(
                        "h-full border shadow-md transition-all duration-300 flex flex-col group cursor-help overflow-hidden", // Group for hover effect
                        "hover:shadow-lg hover:scale-[1.02] hover:border-primary/30", // Hover styling
                        "focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 dark:focus-within:ring-offset-background",
                        colors.border, "dark:bg-card/60" // Dark mode slight transparency
                        )}>
                        <CardContent className="p-5 flex-grow flex flex-col">
                            {/* Card Header Area */}
                             <div className="flex items-start justify-between gap-3 mb-4">
                                 <div className="flex items-start gap-3">
                                    <div className={cn("p-2 rounded-lg shrink-0 border", colors.bg, colors.border)}>
                                        <trait.icon className={cn("h-6 w-6", colors.text)} />
                                    </div>
                                    <CardTitle className="text-base sm:text-lg font-semibold leading-snug pt-1">{trait.title}</CardTitle>
                                </div>
                                 <Info className="h-4 w-4 text-muted-foreground/40 shrink-0 group-hover:text-primary transition-colors duration-200 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                             </div>
                             {/* Cockroach Fact */}
                             <div className="flex items-start gap-2.5 text-sm text-muted-foreground flex-grow mb-4">
                               <Bug className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0"/>
                                <p><span className="font-semibold text-foreground/80">Biological Inspiration:</span> {trait.cockroachFact}</p>
                            </div>
                             {/* Footer Hover Hint */}
                             <div className="mt-auto pt-3 border-t border-border/20 text-xs text-muted-foreground text-right group-hover:text-primary transition-colors duration-200">
                                 Hover to see $ROACH Parallel <Link2 className="inline h-3 w-3 ml-0.5"/>
                             </div>
                        </CardContent>
                    </Card>
                </HoverCardTrigger>
                 {/* HoverCard Content Styling */}
                 <HoverCardContent side="top" align="center" className={cn(
                      "w-80 max-w-[calc(100vw-2rem)] shadow-xl border rounded-lg p-4 backdrop-blur-md",
                      colors.border, colors.bg, "dark:shadow-lg"
                     )}>
                    <div className="space-y-1.5">
                        <h4 className={cn("text-sm font-semibold flex items-center gap-1.5", colors.text)}>
                            <Atom className="h-4 w-4"/> $ROACH Mechanic Link
                        </h4>
                         <p className="text-xs font-medium text-foreground/90 mb-1">{trait.tokenLinkTitle}</p>
                         <p className="text-xs text-muted-foreground leading-relaxed">{trait.tokenLinkText}</p>
                    </div>
                </HoverCardContent>
             </HoverCard>
            </motion.div>
            );
        })}
      </motion.div>
    </Section>
  );
}
// --- END OF FILE components/sections/CockroachConnection.tsx ---
```

```typescript
// --- START OF FILE components/sections/TokenMechanics.tsx ---
"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { tierData, Tier } from "@/lib/tier-data"; // Import Tier type
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Users, Droplets, Megaphone, Timer, Play, Pause, Settings2, HelpCircle, Percent, RefreshCw, Info, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// --- Constants and Helpers ---
const CYCLE_INTERVAL_MS = 4000; // Slower cycle for better observation
const TRANSITION_DURATION_MS = 800; // Smoother progress transition

// Calculate ratio for visualization - map tier condition to a %
const mapConditionToRatio = (condition: string): number => {
  // Example: "< 0.8" -> maybe 0.6; "0.8 - 1.2" -> 1.0; "> 3.0" -> 3.5
  if (condition.includes('< 0.8')) return 0.6;
  if (condition.includes('0.8 - 1.2')) return 1.0;
  if (condition.includes('1.2 - 2.0')) return 1.6;
  if (condition.includes('2.0 - 3.0')) return 2.5;
  if (condition.includes('> 3.0')) return 3.5;
  return 1.0; // Default for Equilibrium
};

// Map ratio to progress bar value (0-100 scale, non-linear)
const mapRatioToProgress = (ratio: number): number => {
  if (ratio < 0.8) return 15;    // Tier 1 Area
  if (ratio <= 1.2) return 35;   // Tier 2 Area
  if (ratio <= 2.0) return 55;   // Tier 3 Area
  if (ratio <= 3.0) return 75;   // Tier 4 Area
  return 90;                    // Tier 5 Area
};

const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; darkText?: string; darkBg?: string; darkBorder?: string } } = {
    1: { text: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30', indicator: 'bg-blue-500', darkText: 'dark:text-blue-400', darkBg: 'dark:bg-blue-500/20', darkBorder: 'dark:border-blue-500/40' },
    2: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500', darkText: 'dark:text-gray-400', darkBg: 'dark:bg-gray-500/20', darkBorder: 'dark:border-gray-500/40' },
    3: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500', darkText: 'dark:text-yellow-400', darkBg: 'dark:bg-yellow-500/20', darkBorder: 'dark:border-yellow-500/40' },
    4: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500', darkText: 'dark:text-orange-400', darkBg: 'dark:bg-orange-500/20', darkBorder: 'dark:border-orange-500/40' },
    5: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500', darkText: 'dark:text-red-400', darkBg: 'dark:bg-red-500/20', darkBorder: 'dark:border-red-500/40' },
};


// ------------------------------------------

export function TokenMechanics() {
    const [activeTierIndex, setActiveTierIndex] = useState<number>(1); // Start at Tier 2 (Equilibrium)
    const [currentRatio, setCurrentRatio] = useState<number>(mapConditionToRatio(tierData[1].condition));
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const activeTier: Tier = useMemo(() => tierData[activeTierIndex], [activeTierIndex]);
    const progressValue = useMemo(() => mapRatioToProgress(currentRatio), [currentRatio]);
    const currentTierColors = useMemo(() => tierColorMap[activeTier.id], [activeTier]);

    // Simulation Cycle Logic
    const cycleTier = useCallback(() => {
        setActiveTierIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % tierData.length;
            setCurrentRatio(mapConditionToRatio(tierData[nextIndex].condition));
            return nextIndex;
        });
    }, []);

    // Manage simulation playback
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(cycleTier, CYCLE_INTERVAL_MS);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isPlaying, cycleTier]);

    const togglePlayPause = () => setIsPlaying(!isPlaying);

    // Allow manual tier selection (stops simulation)
    const setManualTier = (index: number) => {
        setIsPlaying(false);
        setActiveTierIndex(index);
        setCurrentRatio(mapConditionToRatio(tierData[index].condition));
    };

    // Animation variant for content transitions
    const displayVariants = {
        initial: { opacity: 0.6, y: 15, filter: 'blur(2px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0.6, y: -15, filter: 'blur(2px)', transition: { duration: 0.3, ease: 'easeIn' } }
    };

    return (
        <TooltipProvider>
            <Section id="mechanics" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/10 via-background to-background/70 dark:from-background/10 dark:via-background dark:to-background/50">
                <SectionHeader
                    title="The $ROACH Engine: Adaptive 5-Tier System"
                    description={
                        `Observe how $ROACH dynamically adjusts transaction taxes and rewards based on real-time market conditions (Sell/Buy Volume Ratio). This active adaptation forms its antifragile core.`
                    }
                    subtitle={<><Settings2 className="inline h-4 w-4 mr-1.5" /> Core Mechanics </>}
                    alignment="center" className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 max-w-7xl mx-auto items-start">
                    {/* --- Interactive Tier Visualizer Card (Span 5 columns) --- */}
                    <motion.div
                        className="lg:col-span-5" // Takes more space
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="shadow-xl border border-border/10 dark:border-border/20 overflow-hidden h-full flex flex-col">
                            <CardHeader className="border-b pb-4 border-border/10 dark:border-border/20">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                    <div>
                                        <CardTitle className="text-xl md:text-2xl font-semibold">Dynamic System Visualizer</CardTitle>
                                        <CardDescription className="mt-1 text-sm flex items-center">
                                             Simulating response to market Sell / Buy Ratio
                                            <Tooltip delayDuration={100}>
                                                <TooltipTrigger className="ml-1.5 cursor-help"><Info className="h-3.5 w-3.5 text-muted-foreground"/></TooltipTrigger>
                                                <TooltipContent><p className="max-w-[200px] text-xs">Ratio calculated over rolling 4-hour windows by the smart contract.</p></TooltipContent>
                                            </Tooltip>
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 self-start sm:self-center">
                                        <span className="text-xs font-medium text-muted-foreground mr-1 hidden sm:inline">Simulation:</span>
                                        <Button variant="outline" size="icon" onClick={togglePlayPause} className="h-8 w-8 shrink-0">
                                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                            <span className="sr-only">{isPlaying ? "Pause" : "Play"} Simulation</span>
                                        </Button>
                                    </div>
                                </div>
                                {/* Progress Bar Section */}
                                <div className="mt-6 space-y-2 relative">
                                     <div className="flex justify-between items-center mb-1">
                                        <label htmlFor="marketPressure" className="text-xs font-medium text-muted-foreground">Market Pressure (Sell/Buy Ratio)</label>
                                        {/* Display Current Ratio */}
                                         <Badge variant="secondary" className={cn("font-mono text-xs px-1.5 py-0.5 transition-colors", currentTierColors.bg, currentTierColors.text, currentTierColors.border)}>
                                            {currentRatio.toFixed(1)}x
                                         </Badge>
                                     </div>
                                    <div className="relative h-3"> {/* Wrapper for progress and indicator */}
                                        <Progress
                                            id="marketPressure"
                                            value={progressValue}
                                            className="h-3 absolute inset-0 transition-all ease-out"
                                            indicatorClassName={cn('transition-all ease-out', currentTierColors.indicator)}
                                            style={{ transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
                                        />
                                        {/* Active Tier Bubble Indicator */}
                                        <motion.div
                                             key={`bubble-${activeTier.id}`} // Ensure re-animation
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 15, duration: 0.3 }}
                                            className={cn(
                                                "absolute bottom-[calc(100%+6px)] z-10 transition-all ease-out transform -translate-x-1/2",
                                                "px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap leading-none shadow-md",
                                                "flex items-center gap-1",
                                                currentTierColors.bg, currentTierColors.text, currentTierColors.border
                                            )}
                                            style={{ left: `${progressValue}%`, transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
                                         >
                                            Tier {activeTier.id}
                                           <HelpCircle className="h-3 w-3 opacity-70 cursor-help" onClick={(e) => { e.stopPropagation(); setManualTier(activeTier.id - 1); }}/> {/* Click to view details */}
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-muted-foreground/80 pt-0.5 px-0.5">
                                        <span>Accumulation</span>
                                        <span>Equilibrium</span>
                                        <span>Pressure</span>
                                        <span>Defense</span>
                                        <span>Recovery</span>
                                    </div>
                                </div>
                            </CardHeader>

                             <CardContent className="pt-6 pb-6 px-6 flex-grow flex flex-col overflow-hidden"> {/* Padding handled here */}
                               <AnimatePresence mode="wait">
                                   <motion.div
                                       key={activeTier.id} // Key drives the animation change
                                       variants={displayVariants} initial="initial" animate="animate" exit="exit"
                                       className="flex flex-col flex-grow"
                                   >
                                        {/* --- Top: Mascot & Tier Info --- */}
                                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center sm:text-left">
                                             <motion.div
                                                 key={`mascot-${activeTier.id}`}
                                                 initial={{ scale: 0.9, opacity: 0.8 }}
                                                 animate={{ scale: 1, opacity: 1 }}
                                                 transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1}}
                                              >
                                                  <CockroachMascot size="md" className={cn("transition-colors duration-300 flex-shrink-0", currentTierColors.text)} />
                                              </motion.div>
                                              <div className="flex-1">
                                                 <Badge variant="secondary" className={cn("text-base md:text-lg px-4 py-1 shadow-md font-semibold transition-colors duration-300", currentTierColors.bg, currentTierColors.text, currentTierColors.border, currentTierColors.darkBorder )}>
                                                     Tier {activeTier.id}: {activeTier.name}
                                                  </Badge>
                                                  <p className="text-sm text-muted-foreground mt-2">
                                                     Triggered when Sell/Buy Ratio is <strong className={cn("transition-colors duration-300", currentTierColors.text)}>{activeTier.condition.replace('Sell/Buy Ratio ', '')}</strong>
                                                  </p>
                                                  <p className="text-xs italic text-muted-foreground/80 mt-1">{activeTier.status}</p>
                                              </div>
                                         </div>

                                         {/* --- Middle: Key Metrics Grid --- */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                                             <MetricCard label="Buy Tax" value={`${activeTier.taxes.buy}%`} delta={activeTier.taxes.buy - tierData[1].taxes.buy} icon={TrendingUp} iconColor="text-green-600 dark:text-green-400" tooltip={`Tax paid on buy transactions. Lower tax encourages buying during high sell pressure (Tiers ${tierData.length - 1}, ${tierData.length}).`} />
                                             <MetricCard label="Sell Tax" value={`${activeTier.taxes.sell}%`} delta={activeTier.taxes.sell - tierData[1].taxes.sell} icon={TrendingDown} iconColor="text-red-600 dark:text-red-400" tooltip={`Tax paid on sell transactions. Higher tax discourages selling during downturns and funds reflections.`} />
                                             <MetricCard label="Sell Reflections" value={`${activeTier.distribution.sell.reflection}%`} delta={activeTier.distribution.sell.reflection - tierData[1].distribution.sell.reflection} icon={Users} iconColor="text-primary" tooltip={`Percentage of the SELL tax automatically redistributed to all $ROACH holders. Maximized in high-pressure tiers.`} />
                                         </div>

                                        {/* --- Tax Distribution Breakdown --- */}
                                         <div className={cn("border rounded-lg p-4 text-xs space-y-3 mb-6 transition-colors duration-300 shadow-sm", currentTierColors.border, currentTierColors.darkBorder, currentTierColors.bg)}>
                                            <h4 className="font-semibold text-center text-sm text-foreground/90 mb-2">Tier {activeTier.id}: Tax Allocation Details</h4>
                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* Buy Side Allocation */}
                                                <div className="space-y-1.5">
                                                    <p className="font-medium text-green-700 dark:text-green-400 border-b border-green-500/20 pb-1 mb-2">Buy Tax Allocation ({activeTier.taxes.buy}%)</p>
                                                    <DistributionItem icon={Users} label="Reflections" value={activeTier.distribution.buy.reflection} tooltip="Share of buy tax distributed to holders." color="text-primary" />
                                                     <DistributionItem icon={Droplets} label="Liquidity Pool" value={activeTier.distribution.buy.liquidity} tooltip="Share of buy tax added to the DEX liquidity pool for stability." color="text-blue-600 dark:text-blue-400" />
                                                     <DistributionItem icon={Megaphone} label="Marketing/Dev" value={activeTier.distribution.buy.marketing} tooltip="Share of buy tax allocated to the marketing and development treasury." color="text-orange-600 dark:text-orange-400" />
                                                 </div>
                                                 {/* Sell Side Allocation */}
                                                 <div className="space-y-1.5 md:border-l md:border-border/40 md:pl-4">
                                                     <p className="font-medium text-red-700 dark:text-red-400 border-b border-red-500/20 pb-1 mb-2">Sell Tax Allocation ({activeTier.taxes.sell}%)</p>
                                                     <DistributionItem icon={Users} label="Reflections" value={activeTier.distribution.sell.reflection} tooltip="Share of sell tax distributed to holders (major reward mechanism)." color="text-primary" />
                                                     <DistributionItem icon={Droplets} label="Liquidity Pool" value={activeTier.distribution.sell.liquidity} tooltip="Share of sell tax added to the DEX liquidity pool." color="text-blue-600 dark:text-blue-400" />
                                                    <DistributionItem icon={Megaphone} label="Marketing/Dev" value={activeTier.distribution.sell.marketing} tooltip="Share of sell tax allocated to the marketing and development treasury." color="text-orange-600 dark:text-orange-400" />
                                                 </div>
                                             </div>
                                         </div>

                                        {/* --- Visual Placeholder for Flowchart --- */}
                                        <div className="mt-auto pt-4 border-t border-border/10 dark:border-border/20">
                                             <div className="relative aspect-[16/6] bg-muted/30 dark:bg-muted/10 border border-dashed border-border/30 rounded-lg p-3 flex items-center justify-center">
                                                 <p className="text-xs text-muted-foreground/70 italic max-w-md text-center">
                                                    AI Prompt: Create a clean, horizontal flowchart illustrating the $ROACH feedback loop. Start: [Market Activity (Icon: Network)]. Arrow to -> [Sell/Buy Ratio Calculation (Icon: Scale/Timer - 4hr)]. Arrow to -> [Tier Determination (1-5) (Icon: 5 segment bar)]. Arrow to -> [Tax/Reflection Adjustment (Icon: Settings2/Percent)]. Arrow points back to Market Activity. Use theme colors (Primary for ROACH logic, muted for market). Label arrows (e.g., 'Triggers', 'Adapts').
                                                     <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                                                         Research: Cognitive Load (Simplify Process), Visual Hierarchy (Guide Flow)
                                                     </span>
                                                </p>
                                             </div>
                                        </div>
                                    </motion.div>
                               </AnimatePresence>
                             </CardContent>
                        </Card>
                    </motion.div>

                    {/* --- Static Tier Reference Table Card (Span 2 columns) --- */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}
                         className="lg:col-span-2 sticky top-20" // Span 2 cols, sticky for reference
                    >
                        <Card className="shadow-lg border border-border/10 dark:border-border/20 max-h-[80vh] overflow-hidden flex flex-col">
                            <CardHeader className="pb-3 flex-shrink-0 border-b border-border/10">
                                <CardTitle className="text-lg sm:text-xl font-semibold">Tier Reference</CardTitle>
                                <CardDescription className="text-xs">Tax & Reflection levels per tier. Click row to focus visualizer.</CardDescription>
                            </CardHeader>
                            <CardContent className="px-0 pt-0 pb-2 flex-grow overflow-y-auto scrollbar-hide"> {/* Scrollable content */}
                                <Table className="min-w-[360px]"> {/* Ensure table fits */}
                                    <TableHeader className="sticky top-0 bg-card z-10 shadow-sm">
                                        <TableRow className="text-[10px] uppercase tracking-wider">
                                            <TableHead className="w-[12%] text-center px-1 py-1 h-8 font-semibold">Tier</TableHead>
                                            <TableHead className="w-[28%] text-left px-1 py-1 h-8 font-semibold">S/B Ratio</TableHead>
                                            <TableHead className="w-[15%] text-center text-green-600 px-1 py-1 h-8 font-semibold">Buy Tax</TableHead>
                                            <TableHead className="w-[15%] text-center text-red-600 px-1 py-1 h-8 font-semibold">Sell Tax</TableHead>
                                            <TableHead className="w-[30%] text-center text-primary px-1 py-1 h-8 font-semibold">Sell Reflect</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                     <TableBody>
                                        {tierData.map((tier, index) => {
                                            const colors = tierColorMap[tier.id];
                                            const isActive = index === activeTierIndex;
                                             return (
                                                 <TableRow
                                                     key={tier.id}
                                                     onClick={() => setManualTier(index)}
                                                     className={cn(
                                                        "text-xs text-center cursor-pointer hover:bg-muted/50 dark:hover:bg-muted/10 h-11 transition-colors duration-150",
                                                         isActive && `bg-primary/10 dark:bg-primary/15 border-l-4 ${colors.border}`,
                                                         !isActive && "opacity-80"
                                                     )}
                                                     aria-current={isActive ? 'step' : undefined}
                                                 >
                                                    <TableCell className={cn("font-bold py-1 px-1", colors.text)}>{tier.id}</TableCell>
                                                     <TableCell className="py-1 px-1 text-left font-mono text-muted-foreground text-[11px]">{tier.condition.replace('Sell/Buy Ratio ','')}</TableCell>
                                                    <TableCell className="py-1 px-1 text-green-700 dark:text-green-400 font-semibold">{tier.taxes.buy}%</TableCell>
                                                    <TableCell className="py-1 px-1 text-red-700 dark:text-red-400 font-semibold">{tier.taxes.sell}%</TableCell>
                                                     <TableCell className={cn("py-1 px-1 font-semibold", colors.text)}>{tier.distribution.sell.reflection}%</TableCell>
                                                 </TableRow>
                                             );
                                         })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                             <div className="p-3 border-t border-border/10 text-center flex-shrink-0">
                                 <p className="text-[11px] text-muted-foreground/80 italic flex items-center justify-center gap-1">
                                    <Timer className="h-3 w-3"/> System evaluates & adapts tiers every 4 hours.
                                 </p>
                             </div>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </TooltipProvider>
    );
}

// --- MetricCard Sub-Component ---
interface MetricCardProps { label: string; value: string; delta: number; icon: React.ElementType; iconColor: string; tooltip: string; }

function MetricCard({ label, value, delta, icon: Icon, iconColor, tooltip }: MetricCardProps) {
    const deltaSign = delta > 0 ? '+' : delta < 0 ? '' : '';
    const deltaColor = delta > 0 ? 'text-red-600 dark:text-red-400' : delta < 0 ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground';
    const deltaText = delta !== 0 ? `${deltaSign}${delta}%` : '-';

    return (
        <Tooltip delayDuration={100}>
             <TooltipTrigger asChild>
                 <Card className="p-3 sm:p-4 text-left w-full h-full cursor-help transition-all duration-300 border border-border/20 hover:border-border/40 dark:bg-card/50 shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                             <Icon className={cn("h-4 w-4", iconColor)} /> {label}
                         </span>
                        <Info className="h-3.5 w-3.5 text-muted-foreground/50"/>
                     </div>
                    <div className="flex items-baseline justify-between gap-2">
                       <p className="text-xl sm:text-2xl font-bold text-foreground">{value}</p>
                        {/* Show delta vs. Tier 2 (Equilibrium) */}
                        <p className={cn("text-xs font-semibold", deltaColor)}>{deltaText}</p>
                    </div>
                 </Card>
             </TooltipTrigger>
            <TooltipContent side="top" align="center" className="max-w-[200px]"><p className="text-xs">{tooltip}</p></TooltipContent>
        </Tooltip>
    );
}


// --- DistributionItem Sub-Component ---
interface DistributionItemProps { icon: React.ElementType; label: string; value: number; tooltip: string; color: string; }

function DistributionItem({ icon: Icon, label, value, tooltip, color }: DistributionItemProps) {
    return (
        <Tooltip delayDuration={150}>
            <TooltipTrigger className="w-full text-left cursor-help group">
                 <div className="flex items-center justify-between text-xs hover:bg-black/5 dark:hover:bg-white/5 px-1 py-0.5 rounded transition-colors">
                     <span className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Icon className={cn("h-3.5 w-3.5 group-hover:scale-110 transition-transform", color)} /> {label}
                     </span>
                    <span className={cn("font-semibold text-foreground/90")}>{value.toFixed(1)}%</span>
                 </div>
             </TooltipTrigger>
            <TooltipContent side="left" align="start"><p className="text-xs max-w-[180px]">{tooltip}</p></TooltipContent>
        </Tooltip>
    );
}

// --- END OF FILE components/sections/TokenMechanics.tsx ---
```

```typescript
// --- START OF FILE components/sections/MarketScenarios.tsx ---
"use client";

import React, { useState, useMemo } from 'react';
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
import { Activity, ChevronsDown, TrendingDown, ShieldAlert, HelpCircle, Zap, ShieldCheck, BarChartHorizontal, Award, MessageCircleWarning, TrendingUp } from "lucide-react"; // Updated icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { tierData } from '@/lib/tier-data'; // Tier data for reference

// --- Scenario Data (Refined descriptions, ROACH tier mapping) ---
const marketScenarios = [
  { id: 'stable', label: "Stable Market", icon: Activity, description: "Balanced buy/sell activity, low volatility, minimal external pressure.", roach: { tier: 2, priceImpact: "Stable Orbit", rewardLevel: "Standard", sentiment: "Neutral", outcome: "Baseline operations. Reflections accrue steadily. System maintains equilibrium." }, resilient: { priceImpact: "Stable", rewardLevel: "None/Fixed", sentiment: "Neutral", outcome: "System remains static. No adaptive response." }, color: "gray" },
  { id: 'dip', label: "Minor Dip", icon: ChevronsDown, description: "Moderate increase in selling pressure, perhaps profit-taking or slight FUD.", roach: { tier: 3, priceImpact: "Dip Cushioned", rewardLevel: "Increased", sentiment: "Opportunistic", outcome: "Higher sell tax (9%) applied, increasing reflection pool (6%). Buy tax reduced slightly (4%). Defenses engage." }, resilient: { priceImpact: "Noticeable Dip", rewardLevel: "None/Fixed", sentiment: "Slight Concern", outcome: "Price follows market trend downward. Fixed defenses provide minimal active benefit." }, color: "yellow" },
  { id: 'selloff', label: "Significant Sell-off", icon: TrendingDown, description: "Strong selling volume, likely due to negative news or broader market downturn.", roach: { tier: 4, priceImpact: "Defense Activated", rewardLevel: "High", sentiment: "Confident / Contrarian", outcome: "Sharp sell tax increase (12%) heavily disincentivizes panic selling, significantly boosting reflections (8%). Lower buy tax (3%) encourages entry." }, resilient: { priceImpact: "Sharp Drop", rewardLevel: "None/Fixed", sentiment: "Anxious", outcome: "Price drops considerably. Lacks adaptive mechanics to mitigate loss or reward holders during stress." }, color: "orange" },
  { id: 'crash', label: "Market Crash", icon: ShieldAlert, description: "Extreme panic selling, potentially correlated with major market disruption.", roach: { tier: 5, priceImpact: "Antifragile Advantage", rewardLevel: "Maximum", sentiment: "Strengthened / Strategic", outcome: "Peak sell tax (15%) & reflections (10%) turn chaos into maximum holder rewards. Lowest buy tax (2%) primes for recovery/accumulation." }, resilient: { priceImpact: "Severe Drop", rewardLevel: "None/Fixed", sentiment: "Distressed", outcome: "System experiences significant value erosion; static defenses overwhelmed. Survival potential reduced." }, color: "red" },
];

// Color mapping utility
const scenarioColorMap: { [key: string]: { text: string; bg: string; border: string; indicator: string; darkText?: string; darkBg?: string; darkBorder?: string; } } = {
    gray: { text: 'text-gray-600', bg: 'bg-gray-500/10', border: 'border-gray-500/30', indicator: 'bg-gray-500', darkText: 'dark:text-gray-400', darkBg: 'dark:bg-gray-500/20', darkBorder: 'dark:border-gray-500/40'},
    yellow: { text: 'text-yellow-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', indicator: 'bg-yellow-500', darkText: 'dark:text-yellow-400', darkBg: 'dark:bg-yellow-500/20', darkBorder: 'dark:border-yellow-500/40' },
    orange: { text: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30', indicator: 'bg-orange-500', darkText: 'dark:text-orange-400', darkBg: 'dark:bg-orange-500/20', darkBorder: 'dark:border-orange-500/40' },
    red: { text: 'text-red-600', bg: 'bg-red-500/10', border: 'border-red-500/30', indicator: 'bg-red-500', darkText: 'dark:text-red-400', darkBg: 'dark:bg-red-500/20', darkBorder: 'dark:border-red-500/40' },
};

// Reward level mapping to visual elements (progress bar value)
const mapRewardLevelToVisual = (level: string): { text: string; value: number; colorClass: string; icon: React.ElementType } => {
  switch(level.toLowerCase()){
    case'none/fixed':return{text:"None / Fixed",value:5,colorClass:"bg-muted", icon: HelpCircle};
    case'standard':return{text:"Standard",value:25,colorClass:scenarioColorMap['gray'].indicator, icon: Activity};
    case'increased':return{text:"Increased",value:55,colorClass:scenarioColorMap['yellow'].indicator, icon: TrendingUp}; // Increased magnitude
    case'high':return{text:"High",value:80,colorClass:scenarioColorMap['orange'].indicator, icon: Award}; // Changed icon
    case'maximum':return{text:"Maximum",value:100,colorClass:scenarioColorMap['red'].indicator, icon: Zap}; // Changed icon
    default:return{text:level,value:0,colorClass:"bg-muted", icon: HelpCircle};
  }
};

// Price impact mapping to visual elements (icon, color)
const mapPriceImpactToVisual = (impact: string, isRoach: boolean): { text: string; icon: React.ElementType; colorClass: string } => {
  const iL=impact.toLowerCase();
  if(iL==='stable' || iL === 'stable orbit')return{text:"Stable",icon:Activity,colorClass:cn(scenarioColorMap['gray'].text, scenarioColorMap['gray'].darkText)};
  if(iL==='noticeable dip')return{text:"Dip",icon:ChevronsDown,colorClass:cn(scenarioColorMap['yellow'].text, scenarioColorMap['yellow'].darkText)};
  if(iL==='sharp drop')return{text:"Sharp Drop",icon:TrendingDown,colorClass:cn(scenarioColorMap['orange'].text, scenarioColorMap['orange'].darkText)};
  if(iL==='severe drop')return{text:"Severe Drop",icon:TrendingDown,colorClass:cn(scenarioColorMap['red'].text, scenarioColorMap['red'].darkText)};

  // $ROACH Specific Responses
  if(isRoach){
    if(iL==='dip cushioned')return{text:"Cushioned",icon:ShieldCheck,colorClass:cn(scenarioColorMap['yellow'].text, scenarioColorMap['yellow'].darkText)};
    if(iL==='defense activated')return{text:"Defended",icon:ShieldCheck,colorClass:cn(scenarioColorMap['orange'].text, scenarioColorMap['orange'].darkText)};
    if(iL.includes('antifragile advantage'))return{text:"Advantage*",icon:TrendingUp,colorClass:"text-primary dark:text-primary"}; // Changed icon
  }
  // Default / Fallback
  return{text:impact,icon:HelpCircle,colorClass:"text-muted-foreground"};
};

// Tier color mapping (needed for badge)
const tierColorMap: { [key: number]: { text: string; bg: string; border: string; indicator: string; darkText?: string; darkBg?: string; darkBorder?: string; } } = tierColorMap;

// ----------------------------------------------------------------------

export function MarketScenarios() {
    const [activeScenarioId, setActiveScenarioId] = useState(marketScenarios[1].id); // Default to Minor Dip scenario
    const activeScenario = useMemo(() => marketScenarios.find(s => s.id === activeScenarioId) || marketScenarios[1], [activeScenarioId]);

    // Animation variant for content fade/slide
    const contentVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } }
    };

    return (
        <Section id="market-scenarios" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/5 via-background to-muted/5 dark:from-background/5 dark:via-background dark:to-background/5">
            <SectionHeader
                title="Performance Under Pressure: $ROACH vs. Static Resilience"
                description="Explore simulated responses during market volatility. See how $ROACH's adaptive 5-tier system aims to turn stress into strength, compared to typical static token models."
                subtitle={<><BarChartHorizontal className="inline h-4 w-4 mr-1.5" /> Scenario Comparison</>}
                alignment="center" className="mb-16"
            />

            <Tabs value={activeScenarioId} onValueChange={setActiveScenarioId} className="max-w-6xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-10 gap-1.5 p-1.5 bg-muted dark:bg-background/40 rounded-lg">
                    {marketScenarios.map((scenario) => {
                        const colors = scenarioColorMap[scenario.color as keyof typeof scenarioColorMap];
                        const isActive = scenario.id === activeScenarioId;
                        return (
                            <TabsTrigger
                                key={scenario.id} value={scenario.id}
                                className={cn(
                                    "flex-col items-center justify-center h-auto py-3 px-1 sm:px-2 rounded-md text-xs sm:text-sm transition-all duration-200 border border-transparent relative group focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background",
                                    // Active State Styling
                                    isActive
                                        ? cn("shadow-md bg-card font-semibold border-border/50 dark:border-border/30 scale-[1.03]", colors.text, colors.darkText)
                                        : cn("text-muted-foreground hover:bg-accent/50 hover:text-foreground scale-100 opacity-80 hover:opacity-100"), // Inactive State
                                     // Unique border bottom for active state
                                    isActive && `border-b-2 ${colors.border.replace('border-','border-b-')}`
                                )}
                            >
                                <scenario.icon className={cn("h-5 w-5 mb-1 transition-colors", isActive ? colors.text : 'text-muted-foreground group-hover:text-foreground/80', isActive && colors.darkText)} />
                                <span className="text-center leading-tight">{scenario.label}</span>
                             </TabsTrigger>
                        );
                    })}
                </TabsList>

                {/* Ensure AnimatePresence wraps the TabsContent */}
                <AnimatePresence mode="wait">
                    <TabsContent key={activeScenarioId} value={activeScenarioId} forceMount className="mt-0 outline-none">
                        <motion.div variants={contentVariants} initial="initial" animate="animate" exit="exit">
                            {/* --- Scenario Context Banner --- */}
                            <div className={cn(
                                "mb-10 p-4 rounded-lg border-l-4 flex items-start sm:items-center gap-3 sm:gap-4 shadow-sm",
                                scenarioColorMap[activeScenario.color].border.replace('border-','border-l-'), // Left border color
                                scenarioColorMap[activeScenario.color].bg, // Background color
                                scenarioColorMap[activeScenario.color].darkBg, // Dark background
                                scenarioColorMap[activeScenario.color].darkBorder?.replace('border-','border-l-') // Dark left border
                            )}>
                                <activeScenario.icon className={cn("h-6 w-6 sm:h-7 sm:w-7 shrink-0 mt-0.5 sm:mt-0", scenarioColorMap[activeScenario.color].text, scenarioColorMap[activeScenario.color].darkText)} />
                                 <div>
                                     <h4 className={cn("font-semibold text-base sm:text-lg", scenarioColorMap[activeScenario.color].text, scenarioColorMap[activeScenario.color].darkText)}>Scenario: {activeScenario.label}</h4>
                                     <p className="text-sm text-muted-foreground">{activeScenario.description}</p>
                                 </div>
                            </div>

                             {/* --- Comparison Grid --- */}
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                                 {/* $ROACH Card */}
                                <ScenarioCard
                                    tokenName="$ROACH Adaptive Response"
                                    tokenIcon={CockroachMascot}
                                    isRoach={true}
                                    tier={activeScenario.roach.tier}
                                    priceData={mapPriceImpactToVisual(activeScenario.roach.priceImpact, true)}
                                    rewardData={mapRewardLevelToVisual(activeScenario.roach.rewardLevel)}
                                    sentiment={activeScenario.roach.sentiment}
                                    outcome={activeScenario.roach.outcome}
                                    scenarioColor={activeScenario.color}
                                     visualPrompt={`AI Prompt: Comparative line graph: Time (X-axis) vs. Price/Value (Y-axis). Line 1 ('Typical Resilient', use amber/muted color) shows price dropping according to '${activeScenario.resilient.priceImpact}' and recovering partially/fully. Line 2 ('$ROACH', use primary green color) shows a response based on '${activeScenario.roach.priceImpact}' (e.g., smaller dip, faster recovery, potential gain post-stress). Shade 'Stress Event' zone. Clean infographic style, match theme colors. Research: Tufte's Principles (Data-Ink Ratio), Visual Comparison Effectiveness.`}
                                 />
                                 {/* Static Resilient Token Card */}
                                 <ScenarioCard
                                    tokenName="Typical Static Response"
                                    tokenIcon={ShieldCheck} // Using Shield icon for static resilience
                                    isRoach={false}
                                    priceData={mapPriceImpactToVisual(activeScenario.resilient.priceImpact, false)}
                                    rewardData={mapRewardLevelToVisual(activeScenario.resilient.rewardLevel)}
                                    sentiment={activeScenario.resilient.sentiment}
                                    outcome={activeScenario.resilient.outcome}
                                    scenarioColor={activeScenario.color} // Base color from scenario
                                    clarification="Represents tokens with fixed mechanics (e.g., static tax/LP lock). Endures stress but lacks dynamic adaptation or benefit generation from chaos."
                                     visualPrompt={`AI Prompt: Focus on the 'Typical Resilient' line from the comparison prompt. Show the line dipping during the 'Stress Event' according to '${activeScenario.resilient.priceImpact}', potentially with slower recovery compared to $ROACH if applicable to the scenario. Use amber/yellow/muted color. Title: Static Resilience Behavior. Research: Mental Models (Illustrate Baseline Behavior).`}
                                 />
                            </div>
                         </motion.div>
                     </TabsContent>
                </AnimatePresence>
            </Tabs>

             <div className="mt-12 text-center text-xs text-muted-foreground/80 max-w-3xl mx-auto border-t pt-5 border-border/20 dark:border-border/15">
                * <span className="font-semibold text-foreground/80">Antifragile Advantage Disclaimer:</span> Performance simulations are illustrative, based on theoretical mechanics. Actual market outcomes depend on numerous complex factors including overall market conditions, liquidity depth, trading volume, and participant behavior. $ROACH's design *aims* to benefit from volatility, but this does not guarantee profit or prevent losses. DYOR.
             </div>
        </Section>
    );
}

// --- ScenarioCard Sub-Component ---
interface ScenarioCardProps { tokenName: string; tokenIcon: React.ElementType; tier?: number; priceData: { text: string; icon: React.ElementType; colorClass: string }; rewardData: { text: string; value: number; colorClass: string; icon: React.ElementType }; sentiment: string; outcome: string; isRoach: boolean; scenarioColor: string; clarification?: string; visualPrompt: string; }

function ScenarioCard({ tokenName, tokenIcon: TokenIcon, tier, priceData, rewardData, sentiment, outcome, isRoach, scenarioColor, clarification, visualPrompt }: ScenarioCardProps) {
    const baseCardColors = isRoach ? tierColorMap[tier ?? 2] : scenarioColorMap['gray']; // Default gray for resilient, tier color for ROACH
    const activeTierColors = isRoach && tier ? tierColorMap[tier] : null; // Specific tier colors for badge/accenting

    return (
        <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 350, damping: 15 }}>
             <Card className={cn(
                "flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden",
                 // Apply subtle border color based on type, maybe tier for ROACH
                 isRoach && activeTierColors ? activeTierColors.border : "border-border/30",
                 isRoach && activeTierColors ? activeTierColors.darkBorder : "dark:border-border/40",
                 "bg-card" // Standard card background
                )}>
                {/* Card Header: Icon, Title, Tier Badge */}
                 <CardHeader className={cn(
                    "pb-3 pt-4 px-4 border-b flex-row items-center justify-between gap-2",
                    // Subtle bg/border matching card type
                    isRoach && activeTierColors ? activeTierColors.bg : "bg-muted/30 dark:bg-muted/10",
                    isRoach && activeTierColors ? activeTierColors.border.replace('border-','border-b-') : "border-b-border/20"
                 )}>
                    <div className="flex items-center gap-2">
                         {isRoach ? <TokenIcon size="xs" className={cn("shrink-0", activeTierColors?.text, activeTierColors?.darkText)}/> : <TokenIcon className={cn("h-5 w-5 shrink-0 text-muted-foreground")} />}
                         <CardTitle className={cn("text-sm sm:text-base font-semibold leading-tight", isRoach && activeTierColors ? cn(activeTierColors.text, activeTierColors.darkText) : 'text-foreground/90')}>{tokenName}</CardTitle>
                    </div>
                     {isRoach && tier && activeTierColors && (
                        <TooltipProvider><Tooltip>
                             <TooltipTrigger asChild>
                                <Badge variant="secondary" className={cn( "text-[0.7rem] sm:text-xs px-2 py-0.5 whitespace-nowrap transition-colors duration-300 shadow-sm", activeTierColors.bg, activeTierColors.text, activeTierColors.border, activeTierColors.darkBorder, activeTierColors.darkText )}>
                                    Tier {tier} Active
                                 </Badge>
                             </TooltipTrigger>
                             <TooltipContent><p className="text-xs">Current simulated tier: {tierData[tier - 1]?.name}</p></TooltipContent>
                        </Tooltip></TooltipProvider>
                    )}
                 </CardHeader>

                {/* Card Content: Metrics, Visual Placeholder, Outcome */}
                 <CardContent className="p-4 space-y-4 flex-grow flex flex-col">
                     {clarification && <p className="text-xs italic text-muted-foreground/80 border-l-2 border-border pl-2">{clarification}</p>}

                     {/* Key Metrics Area */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm flex-grow min-h-[100px]">
                         {/* Price Impact Metric */}
                        <MetricDisplay label="Est. Price Impact" value={priceData.text} icon={priceData.icon} colorClass={priceData.colorClass}/>
                         {/* Holder Rewards Metric (with Progress Bar) */}
                         <div className="space-y-1.5">
                             <MetricDisplay label="Holder Rewards" value={rewardData.text} icon={rewardData.icon} colorClass={isRoach && activeTierColors ? cn(activeTierColors.text, activeTierColors.darkText) : 'text-muted-foreground'}/>
                              <Progress value={rewardData.value} className="h-2" indicatorClassName={cn(rewardData.colorClass, 'transition-all duration-500 ease-out')} aria-label={`Reward level: ${rewardData.text}`}/>
                          </div>
                         {/* Estimated Sentiment Metric */}
                         <MetricDisplay label="Est. Sentiment" value={sentiment} icon={sentiment === 'Neutral' || sentiment === 'Slight Concern' ? MessageCircleWarning : sentiment === 'Strengthened / Strategic' || sentiment === 'Confident / Contrarian' || sentiment === 'Opportunistic' ? Award : TrendingDown} colorClass={isRoach && activeTierColors ? cn(activeTierColors.text, activeTierColors.darkText) : 'text-muted-foreground'}/>
                     </div>

                      {/* Visual Placeholder Area */}
                     <div className="relative mt-4 bg-muted/20 dark:bg-white/5 border border-dashed border-border/40 rounded-lg flex items-center justify-center p-3 aspect-[16/7] min-h-[100px]">
                        <p className="text-[0.7rem] leading-snug text-muted-foreground/70 italic text-center px-2">
                            {visualPrompt}
                         </p>
                     </div>

                     {/* Outcome Footer */}
                    <div className={cn(
                        "mt-auto pt-4 text-center text-sm font-medium leading-snug border-t border-border/20",
                         isRoach && activeTierColors ? cn(activeTierColors.text, activeTierColors.darkText) : "text-foreground/90"
                     )}>
                        {outcome}
                    </div>
                 </CardContent>
            </Card>
        </motion.div>
    );
}

// --- MetricDisplay Sub-Component for Consistency ---
interface MetricDisplayProps { label: string; value: string; icon: React.ElementType; colorClass: string; }
function MetricDisplay({ label, value, icon: Icon, colorClass }: MetricDisplayProps) {
    return (
        <div className="flex flex-col">
             <span className="text-xs font-medium text-muted-foreground mb-0.5 flex items-center gap-1">
                <Icon className={cn("h-4 w-4 opacity-80", colorClass)} /> {label}:
             </span>
             <span className={cn("font-semibold text-base leading-tight", colorClass)}> {value}</span>
         </div>
    );
}


// --- END OF FILE components/sections/MarketScenarios.tsx ---
```

```typescript
// --- START OF FILE components/sections/Tokenomics.tsx ---
"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react"; // Added useCallback, useMemo
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, Sector } from 'recharts';
import { cn } from "@/lib/utils";
import { Copy, Info, Check, PieChart as PieChartIcon, ExternalLink, Lock, FileText, CheckCircle, Users, BarChartHorizontal, MinusCircle, Target, Gift, GitCommitVertical } from "lucide-react"; // Enhanced icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Enhanced Data & Constants ---
interface AllocationItem {
  name: string;
  value: number; // Percentage
  color: string; // Light mode color
  darkColor: string; // Dark mode color
  description: string;
  icon: React.ElementType; // Add icon for each category
}

const distributionData: AllocationItem[] = [
    { name: "Liquidity & Public Sale", value: 40, color: "#8b5cf6", darkColor: "#a78bfa", description: "Ensures initial DEX liquidity on Raydium, locked via PinkLock, and funds potential controlled public sale rounds.", icon: Droplets }, // Violet
    { name: "Ecosystem Growth & Marketing", value: 10, color: "#10b981", darkColor: "#34d399", description: "Powers marketing campaigns, strategic partnerships, community initiatives, and future ecosystem development.", icon: Megaphone }, // Green
    { name: "Team Allocation (Vested)", value: 10, color: "#f59e0b", darkColor: "#fcd34d", description: "Subject to a transparent 6-month linear vesting schedule, aligning team incentives with long-term project success.", icon: Users }, // Amber
    { name: "Exchange Listings & Treasury", value: 40, color: "#3b82f6", darkColor: "#60a5fa", description: "Reserved and securely locked for future CEX/DEX listing fees, market making, and strategic treasury use for long-term stability and expansion.", icon: Target }, // Blue
];

const TOTAL_SUPPLY = 1_000_000_000;
const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // Ensure this is correct
const explorerBaseUrl = "https://solscan.io/token/";
const explorerLink = `${explorerBaseUrl}${contractAddress}`;
const pinkLockLink = "#"; // REPLACE with actual PinkLock URL
const auditLink = "#"; // REPLACE with actual CertiK URL
const vestingContractLink = "#"; // REPLACE with vesting contract link if applicable


const tokenDetails = [
    { key: "Token Name", value: "$ROACH (Antifragile)", icon: Gift }, // Changed icon
    { key: "Ticker", value: "$ROACH", icon: null },
    { key: "Network", value: "Solana (SPL)", icon: GitCommitVertical }, // Changed icon
    { key: "Total Supply", value: TOTAL_SUPPLY.toLocaleString(), icon: BarChartHorizontal, tooltip: "Fixed supply, ensuring scarcity. Mint authority permanently revoked.", immutable: true },
    { key: "Contract Address", value: contractAddress, icon: FileText, isAddress: true, link: explorerLink, tooltip: "View the verified and immutable contract on Solscan.", immutable: true },
    { key: "Security Audit", value: "CertiK (Passed)", icon: CheckCircle, link: auditLink, tooltip: "Comprehensive security audit completed by CertiK. Click for report.", external: true },
    { key: "Initial Liquidity", value: "Locked (12 Months)", icon: Lock, link: pinkLockLink, tooltip: "Raydium LP tokens locked via PinkLock for 12 months. Click to verify.", external: true },
    { key: "Team Vesting", value: "6 Months Linear", icon: Users, link: vestingContractLink, tooltip: "Team tokens unlock gradually over 6 months via smart contract. Click to view.", external: true }, // Added vesting link
    { key: "Mint Authority", value: "Revoked", icon: MinusCircle, tooltip: "No new tokens can ever be created.", immutable: true }, // Explicitly stated
];
// --------------------

// --- Recharts Customizations ---
const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 6) * cos; // Line start point
    const sy = cy + (outerRadius + 6) * sin;
    const mx = cx + (outerRadius + 18) * cos; // Line mid point
    const my = cy + (outerRadius + 18) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 15; // Line end point
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const Icon = payload.icon || PieChartIcon; // Use provided icon or fallback

    return (
        <g className="transition-transform duration-300 ease-out" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))">
          {/* Main Sector */}
          <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} stroke="var(--color-background)" strokeWidth={2} />
          {/* Active Outer Ring */}
          <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 2} outerRadius={outerRadius + 6} fill={fill} opacity={0.7}/>
          {/* Label Line */}
           <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" strokeWidth={1.5} />
           <circle cx={ex} cy={ey} r={3} fill={fill} stroke="var(--color-background)" strokeWidth={1}/>
           {/* Text Label */}
          <text x={ex + (cos >= 0 ? 1 : -1) * 10} y={ey} textAnchor={textAnchor} fill="var(--color-foreground)" dy={-8} className="text-xs font-semibold">{`${payload.name}`}</text>
          <text x={ex + (cos >= 0 ? 1 : -1) * 10} y={ey} textAnchor={textAnchor} fill="var(--color-muted-foreground)" dy={8} className="text-xs font-mono">{`${(percent * 100).toFixed(0)}% (${(value / 100 * TOTAL_SUPPLY).toLocaleString()})`}</text>
          {/* Icon near center */}
           {Icon && <Icon x={cx - 10} y={cy - 10} height="20" width="20" fill={fill} opacity={0.5} />}
        </g>
   );
};

const CustomTooltip = ({ active, payload, theme }: {active?: boolean; payload?: any[]; theme: 'light' | 'dark'}) => {
     if (active && payload && payload.length) {
       const data = payload[0].payload as AllocationItem; // Type assertion
       const color = theme === 'dark' ? data.darkColor || data.color : data.color;
       const Icon = data.icon;
       return (
         <div className="bg-popover text-popover-foreground border border-border rounded-lg shadow-xl p-3 text-xs max-w-[220px] backdrop-blur-sm">
            <div className="flex items-center gap-2 font-bold mb-1.5 border-b border-border/30 pb-1">
                <Icon className="h-4 w-4 shrink-0" style={{ color }}/>
                 {data.name} ({data.value}%)
            </div>
             <p className="text-muted-foreground mb-1.5"><strong className="text-foreground">Tokens:</strong> {(data.value / 100 * TOTAL_SUPPLY).toLocaleString()}</p>
            {data.description && <p className="text-muted-foreground text-balance leading-snug">{data.description}</p>}
         </div>
       );
     }
     return null;
};

const renderLegend = ({ payload, theme, onMouseEnter, onMouseLeave, activeIndex }: {payload?: any[], theme: 'light' | 'dark', onMouseEnter: Function, onMouseLeave: Function, activeIndex: number | null}) => {
   if (!payload) return null;
   return (
     <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 text-xs px-2">
       {payload.map((entry: any, index: number) => {
          const data = entry.payload as AllocationItem;
          const color = theme === 'dark' ? data.darkColor || data.color : data.color;
          const Icon = data.icon || Circle; // Fallback icon
           const isActive = index === activeIndex;
           return (
             <li key={`item-${index}`}
                 className={cn("flex items-center cursor-pointer transition-all duration-200 transform hover:scale-105", isActive ? "opacity-100 scale-105" : "opacity-70 hover:opacity-100")}
                 onMouseEnter={() => onMouseEnter(data, index)}
                 onMouseLeave={() => onMouseLeave()}
             >
               <Icon className="h-3.5 w-3.5 mr-1.5 shrink-0" style={{ color }} />
                <span className="text-muted-foreground">{data.name} ({data.value}%)</span>
             </li>
           );
       })}
     </ul>
   );
};
// ---------------------------


export function Tokenomics() {
    const [copied, setCopied] = useState<Record<string, boolean>>({}); // Track copied state per item
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    // Theme Detection Effect
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setTheme(isDark ? 'dark' : 'light');
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        // Initial check
        setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        return () => observer.disconnect();
    }, []);


    // --- Copy Handler ---
    const handleCopy = useCallback((textToCopy: string, key: string) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied({ [key]: true }); // Set copied state for this specific item
            toast.success(`${key} copied to clipboard!`);
            setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2500); // Reset after timeout
        }).catch(err => {
            console.error("Copy failed:", err);
            toast.error(`Failed to copy ${key}.`);
        });
    }, []); // Empty dependency array


    // --- Pie Chart Interaction Handlers ---
    const onPieEnter = useCallback((_: any, index: number) => setActiveIndex(index), []);
    const onPieLeave = useCallback(() => setActiveIndex(null), []); // Clear active index on leave

    // Animation Variants
    const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
    const tableRowVariants = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 }};

    return (
        <TooltipProvider>
            <Section id="tokenomics" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/15 to-background dark:from-background/15 dark:to-background">
                <SectionHeader
                    title="Tokenomics: Architected for Antifragility"
                    description="A meticulously planned, fixed-supply structure underpins the $ROACH ecosystem. Allocation balances initial needs with long-term resources for growth, stability, and community benefit."
                    subtitle={<><PieChartIcon className="inline h-4 w-4 mr-1.5" /> Supply & Allocation </>}
                    alignment="center" className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto items-stretch"> {/* Use items-stretch */}
                    {/* --- Distribution Chart Card (Span 3 columns) --- */}
                     <motion.div className="lg:col-span-3" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 dark:border-border/20 h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Token Allocation Breakdown</CardTitle>
                                <CardDescription>Total Fixed Supply: <strong className="text-foreground font-mono">1,000,000,000</strong> $ROACH (Mint Revoked)</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-center"> {/* Allow chart to grow */}
                                <AspectRatio ratio={16 / 11} className="w-full min-h-[350px] md:min-h-[400px]"> {/* Adjusted aspect ratio, ensure min height */}
                                     <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <defs>
                                                {/* Subtle Gradient Definition (Optional) */}
                                                <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                                                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8}/>
                                                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                                                </linearGradient>
                                            </defs>
                                            <RechartsTooltip
                                                content={<CustomTooltip theme={theme}/>}
                                                cursor={{ fill: 'hsl(var(--accent) / 0.2)', stroke: 'hsl(var(--border) / 0.5)', strokeWidth: 1 }}
                                                wrapperStyle={{ zIndex: 50 }}
                                            />
                                            <Pie
                                                 activeIndex={activeIndex ?? -1} // Pass active index or -1 if null
                                                activeShape={renderActiveShape}
                                                data={distributionData}
                                                cx="50%" cy="45%" // Adjust vertical centering
                                                labelLine={false}
                                                outerRadius="75%" innerRadius="50%" // Make donut thicker
                                                 fill="#8884d8" paddingAngle={2} dataKey="value"
                                                stroke="var(--color-card)" strokeWidth={3}
                                                onMouseEnter={onPieEnter}
                                                onMouseLeave={onPieLeave} // Add leave handler
                                            >
                                                 {distributionData.map((entry, index) => (
                                                     <Cell key={`cell-${index}`} fill={theme === 'dark' ? entry.darkColor || entry.color : entry.color} />
                                                 ))}
                                            </Pie>
                                             {/* Render custom legend below */}
                                            <Legend
                                                 content={(props) => renderLegend({...props, theme: theme, onMouseEnter: onPieEnter, onMouseLeave: onPieLeave, activeIndex: activeIndex })}
                                                verticalAlign="bottom"
                                                 wrapperStyle={{ paddingTop: '15px' }}
                                             />
                                        </PieChart>
                                     </ResponsiveContainer>
                                </AspectRatio>
                             </CardContent>
                         </Card>
                    </motion.div>

                    {/* --- Token Details Card (Span 2 columns) --- */}
                    <motion.div className="lg:col-span-2" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, delay: 0.1 }}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 dark:border-border/20 h-full flex flex-col">
                             <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Core Token Attributes</CardTitle>
                                <CardDescription>Immutable properties and security verifications.</CardDescription>
                             </CardHeader>
                             <CardContent className="flex-grow flex flex-col">
                                 <div className="flex-grow">
                                     <Table>
                                        <TableBody>
                                             {tokenDetails.map((item, index) => (
                                                 <motion.tr
                                                    key={item.key}
                                                     className="border-b last:border-b-0 hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors align-top h-[50px]" // Align top for potentially wrapping text
                                                     variants={tableRowVariants}
                                                     initial="hidden"
                                                     whileInView="visible"
                                                     viewport={{ once: true, amount: 0.8 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                 >
                                                     <TableCell className="font-medium text-muted-foreground text-xs align-middle py-2 pr-2 w-[120px] whitespace-nowrap">
                                                         <div className="flex items-center gap-1.5">
                                                             {item.icon && <item.icon className={cn("h-4 w-4 shrink-0", item.immutable ? "text-primary opacity-90" : "opacity-70")} />}
                                                            {item.key}
                                                             {item.tooltip && (
                                                                <Tooltip delayDuration={100}>
                                                                     <TooltipTrigger className="cursor-help flex items-center ml-auto"><Info className="h-3 w-3 text-muted-foreground/60" /></TooltipTrigger>
                                                                    <TooltipContent side="left" align="start"><p className="max-w-[200px] text-xs">{item.tooltip}</p></TooltipContent>
                                                                </Tooltip>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                     <TableCell className="text-sm font-medium py-2 align-middle">
                                                        <div className="flex items-center gap-1">
                                                            {item.link && item.link !== '#' && item.link !== "#roadmap" ? (
                                                                 <Link href={item.link} target={item.external || item.isAddress ? "_blank" : "_self"} rel={item.external || item.isAddress ? "noopener noreferrer" : undefined} className="hover:text-primary hover:underline transition-colors duration-200 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm" title={item.tooltip || `View ${item.key}`}>
                                                                    <span className={item.isAddress ? "font-mono text-xs block truncate max-w-[120px] sm:max-w-[150px]" : ""}>{item.value}</span>
                                                                    {(item.external || item.isAddress) && <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0"/>}
                                                                 </Link>
                                                             ) : item.link === "#roadmap" ? ( // Special case for internal roadmap link
                                                                <Link href="#roadmap" className="hover:text-primary hover:underline transition-colors duration-200 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm" title={item.tooltip || `View ${item.key}`}>
                                                                     {item.value}
                                                                </Link>
                                                             ) : (
                                                                <span className={item.isAddress ? "font-mono text-xs block truncate max-w-[120px] sm:max-w-[150px]" : ""}>{item.value}</span>
                                                            )}
                                                             {item.isAddress && (
                                                                 <Tooltip delayDuration={100}>
                                                                    <TooltipTrigger asChild>
                                                                         <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 text-muted-foreground hover:text-foreground" onClick={() => handleCopy(item.value, item.key)} aria-label={`Copy ${item.key}`}>
                                                                            {copied[item.key] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                                                                        </Button>
                                                                     </TooltipTrigger>
                                                                     <TooltipContent side="top"><p>Copy Address</p></TooltipContent>
                                                                 </Tooltip>
                                                             )}
                                                        </div>
                                                    </TableCell>
                                                 </motion.tr>
                                            ))}
                                         </TableBody>
                                    </Table>
                                </div>

                                {/* Immutable Properties Visual Placeholder */}
                                <div className="mt-auto pt-4 border-t border-border/10 dark:border-border/20 px-1">
                                    <div className="relative bg-muted/30 dark:bg-muted/10 border border-dashed border-primary/30 rounded-md p-3 flex items-center justify-center gap-4 min-h-[60px]">
                                         <FileText className="h-5 w-5 text-primary opacity-70"/>
                                         <MinusCircle className="h-5 w-5 text-primary opacity-70"/>
                                         <BarChartHorizontal className="h-5 w-5 text-primary opacity-70"/>
                                         <p className="text-xs text-muted-foreground/80 italic text-center flex-1">
                                            Illustrating immutability: Fixed Supply, Revoked Mint, Verified Code.
                                             <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                                                 Research: Trust Signals (Cialdini's Authority), Commitment & Consistency
                                             </span>
                                         </p>
                                    </div>
                                </div>
                            </CardContent>
                         </Card>
                    </motion.div>
                 </div>
            </Section>
        </TooltipProvider>
    );
}

// --- END OF FILE components/sections/Tokenomics.tsx ---
```

```typescript
// --- START OF FILE components/sections/SecuritySection.tsx ---
"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Using CardTitle
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, FileCode, Users, ExternalLink, Network, GanttChartSquare } from "lucide-react"; // Updated icons
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip

// Ensure Links are updated
const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f";
const explorerLink = `https://solscan.io/token/${contractAddress}`;
const pinkLockLink = "#"; // REPLACE
const auditLink = "#"; // REPLACE
const vestingInfoLink = "#roadmap"; // Link to roadmap section discussing vesting


// Security Features Data
const securityFeatures = [
    {
        icon: ShieldCheck, title: "Comprehensive Security Audit",
        description: "Rigorous independent audit conducted by CertiK. Confirmed smart contract integrity with zero critical or major vulnerabilities identified.",
        status: "CertiK Audited & Passed", link: auditLink, linkText: "View Audit Report", color: "green",
        tooltip: "Click to view the full security audit report from CertiK.",
    },
    {
        icon: Lock, title: "Locked Initial Liquidity",
        description: "Initial liquidity pool (LP) tokens deployed on Raydium are verifiably locked for 12 months using PinkLock, preventing rug-pulls.",
        status: "12-Month LP Lock", link: pinkLockLink, linkText: "Verify Lock on PinkLock", color: "blue",
        tooltip: "Click to verify the liquidity lock details on the PinkLock platform.",
    },
    {
        icon: FileCode, title: "Immutable Contract & Supply",
        description: "The core $ROACH SPL token contract is non-upgradeable, and the total supply is fixed at 1 billion tokens. Minting authority is permanently revoked.",
        status: "Fixed Supply / Non-Upgradeable", link: explorerLink, linkText: "View Verified Contract", color: "purple",
        tooltip: "View the immutable contract source code and token details on Solscan.",
    },
    {
        icon: Users, title: "Transparent Team Vesting",
        description: "Team token allocation follows a strict 6-month linear vesting schedule, managed on-chain, demonstrating long-term commitment.",
        status: "6-Month Linear Vesting", link: vestingInfoLink, linkText: "See Vesting Schedule", color: "amber", // Use internal link type
        tooltip: "Team tokens unlock gradually over 6 months, view details on the roadmap.",
    },
];

// Color map helper
const colorMap = {
    green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-500/15', border: 'border-green-500/30 dark:border-green-500/35', iconBg: 'bg-green-100 dark:bg-green-900/40' },
    blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-500/15', border: 'border-blue-500/30 dark:border-blue-500/35', iconBg: 'bg-blue-100 dark:bg-blue-900/40' },
    purple: { text: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-500/10 dark:bg-purple-500/15', border: 'border-purple-500/30 dark:border-purple-500/35', iconBg: 'bg-purple-100 dark:bg-purple-900/40' },
    amber: { text: 'text-amber-700 dark:text-amber-500', bg: 'bg-amber-500/10 dark:bg-amber-500/15', border: 'border-amber-500/30 dark:border-amber-500/35', iconBg: 'bg-amber-100 dark:bg-amber-900/40' },
};

// Animation variants
const containerVariants = { hidden: { opacity: 0 }, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } } }; // Smoother ease

export function SecuritySection() {

    return (
        <TooltipProvider>
             <Section id="security" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/5 to-background/20 dark:from-background/5 dark:to-background/20">
                <SectionHeader
                     title="Fortified Security & Transparent Trust"
                     description="Security and transparency are paramount. $ROACH is built on verifiable measures designed to protect holders and foster long-term confidence in the ecosystem."
                     subtitle={<><ShieldCheck className="inline h-4 w-4 mr-1.5" /> Foundation of Trust</>}
                    alignment="center" className="mb-16"
                />

                <motion.div
                    variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto" // Slightly wider max-width
                >
                    {securityFeatures.map((feature) => {
                        const colors = colorMap[feature.color as keyof typeof colorMap];
                        const isInternalLink = feature.link === vestingInfoLink;
                        const LinkComponent = isInternalLink ? 'a' : Link; // Use 'a' for same-page scroll, Link otherwise

                        return (
                            <motion.div key={feature.title} variants={itemVariants}>
                                 <Card className={cn(
                                    "h-full border shadow-md transition-all duration-300 flex flex-col group overflow-hidden",
                                     "hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/50 dark:bg-card/70 backdrop-blur-sm", // Enhanced hover, slight transparency
                                     colors.border
                                )}>
                                     <CardContent className="p-5 sm:p-6 flex-grow flex flex-col gap-4">
                                        {/* Icon & Title Row */}
                                        <div className="flex items-start gap-4">
                                            <div className={cn("p-2.5 rounded-lg shrink-0 border", colors.iconBg, colors.border)}>
                                                <feature.icon className={cn("h-6 w-6", colors.text)} />
                                            </div>
                                             <div className="flex-1">
                                                <CardTitle className="text-lg font-semibold leading-tight">{feature.title}</CardTitle>
                                                 <Badge variant="outline" size="sm" className={cn("mt-1.5 w-fit text-xs font-medium", colors.bg, colors.text, colors.border)}>
                                                     {feature.status}
                                                 </Badge>
                                             </div>
                                        </div>

                                         {/* Description */}
                                        <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{feature.description}</p>

                                         {/* Link / Action */}
                                        <div className="mt-auto pt-3 border-t border-border/20 text-right">
                                             <Button
                                                variant="link"
                                                size="sm"
                                                className={cn("text-primary hover:underline h-auto p-0 text-sm font-medium group/link", colors.text)}
                                                 asChild={!isInternalLink} // Use asChild only for Next Link
                                             >
                                                 <LinkComponent
                                                    href={feature.link}
                                                    target={isInternalLink ? '_self' : '_blank'}
                                                     rel={isInternalLink ? undefined : 'noopener noreferrer'}
                                                    title={feature.tooltip}
                                                     // Handle smooth scroll for internal links manually if needed, or rely on browser behavior
                                                     // onClick={isInternalLink ? (e) => { e.preventDefault(); /* scroll logic */ } : undefined}
                                                >
                                                     {feature.linkText}
                                                      {!isInternalLink && <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70 group-hover/link:opacity-100 transition-opacity"/>}
                                                 </LinkComponent>
                                            </Button>
                                        </div>
                                     </CardContent>
                                </Card>
                             </motion.div>
                        );
                    })}
                 </motion.div>

                <motion.div
                    initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                        We champion transparency. Verify these security cornerstones independently using the provided links.
                    </p>
                 </motion.div>

                {/* Composite Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}
                    className="mt-12 max-w-2xl mx-auto p-4 rounded-lg border border-dashed border-primary/30 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 dark:from-green-900/10 dark:via-blue-900/10 dark:to-purple-900/10 aspect-[16/5] flex items-center justify-center shadow-inner"
                 >
                    <p className="text-xs text-muted-foreground/70 italic text-center">
                         AI Prompt: Illustrate the layers of $ROACH security. Use interconnected shield icons (audit - green), lock icons (liquidity - blue), code file icons (contract immutability - purple), and Gantt chart/user group icons (team vesting - amber). Arrange in a way that suggests overlapping protection. Clean, tech-inspired infographic style using theme palette.
                         <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                            Research: Cialdini's Principles (Authority, Commitment), Trust-Building UI (Fogg)
                         </span>
                    </p>
                 </motion.div>
            </Section>
        </TooltipProvider>
    );
}

// --- END OF FILE components/sections/SecuritySection.tsx ---
```

```typescript
// --- START OF FILE components/sections/Roadmap.tsx ---
"use client";

import React from "react"; // Import React
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Target, Rocket, ListChecks, CalendarClock, Construction, Cpu } from "lucide-react"; // Added Cpu, Construction
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip

// Refined Roadmap Data with more descriptive items and icons
const roadmapPhases = [
  { id: "phase1", title: "Phase 1: Foundation & Fortification", status: "Completed", icon: CheckCircle2, color: "green", items: [
      { text: "Core SPL Token & 5-Tier System Development", completed: true },
      { text: "Implementation of 4-Hour Rolling Window Market Tracking", completed: true },
      { text: "Comprehensive CertiK Security Audit Passed", completed: true, link: "#" }, // Add link to audit
      { text: "Website V1 Launch & Initial Community Setup (Telegram, Twitter)", completed: true },
      { text: "Successful Private Presale ($35k Raised)", completed: true },
    ]},
  { id: "phase2", title: "Phase 2: Launch & Market Entry", status: "In Progress", icon: Zap, color: "blue", items: [
      { text: "Public Presale Execution via Pinksale (Target $65k+)", completed: false, status: 'Active' },
      { text: "Establishment of Initial Raydium Liquidity Pool", completed: false, status: 'Pending Presale' },
      { text: "LP Token Locking/Burning via PinkLock (12 Months)", completed: false, status: 'Pending LP Creation', link: "#" }, // Link to PinkLock
      { text: "Token Distribution to Presale Participants", completed: false, status: 'Pending Presale End' },
      { text: "CoinGecko & CoinMarketCap Listing Applications", completed: false, status: 'Preparing' },
      { text: "Deployment of Launch Marketing & KOL Partnerships", completed: false, status: 'Ongoing' },
      { text: "Launch of Holder Dashboard V1 (Tier Status, Rewards Tracking)", completed: false, status: 'Development' },
    ]},
  { id: "phase3", title: "Phase 3: Ecosystem Growth & Adaptation", status: "Upcoming", icon: Rocket, color: "purple", items: [
      { text: "Research: Automated Buyback & Treasury Management Features", completed: false },
      { text: "Exploration of Strategic Solana Ecosystem Integrations", completed: false },
      { text: "Initiation of Tier 2 Centralized Exchange (CEX) Listing Outreach", completed: false },
      { text: "Integration with Additional DEX Aggregators & Platforms", completed: false },
      { text: "Development of $ROACH Staking Mechanisms (Token/NFT)", completed: false, speculative: true }, // Mark as speculative if uncertain
      { text: "Enhancement of Holder Dashboard V2 (Advanced Analytics, Tools)", completed: false },
      { text: "Community Governance Framework Proposal", completed: false },
    ]},
    { id: "phase4", title: "Phase 4: Long-Term Evolution", status: "Future", icon: Cpu, color: "gray", items: [ // Use gray for distant future
        { text: "Cross-Chain Exploration & Potential Bridging", completed: false, speculative: true },
        { text: "Development of Novel Antifragile Utility Cases", completed: false, speculative: true },
        { text: "Ongoing Protocol Optimization based on Market Data", completed: false },
        { text: "Sustained Community-Driven Development Initiatives", completed: false },
      ]},
];

// Status Color Mapping
const statusColors: { [key: string]: { badge: string; dot: string; text: string; icon: React.ElementType; line: string } } = {
    Completed: { badge: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-300 dark:border-green-600/50", dot: "bg-green-500 border-background", text: "text-green-600 dark:text-green-400", icon: CheckCircle2, line: "border-green-400" },
    "In Progress": { badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-300 dark:border-blue-600/50", dot: "bg-blue-500 border-background ring-4 ring-blue-500/30 animate-pulse", text: "text-blue-600 dark:text-blue-400", icon: Zap, line: "border-blue-400" },
    "Upcoming": { badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-300 dark:border-purple-600/50", dot: "bg-purple-500 border-background", text: "text-purple-600 dark:text-purple-400", icon: CalendarClock, line: "border-purple-400" },
    "Future": { badge: "bg-gray-100 text-gray-600 dark:bg-gray-800/40 dark:text-gray-400 border-gray-300 dark:border-gray-600/50", dot: "bg-gray-400 border-background", text: "text-gray-500 dark:text-gray-400", icon: Cpu, line: "border-gray-400" },
};

// Animation Variants
const timelineVariants = { visible: { transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const listItemVariants = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "linear" } } };


export function Roadmap() {
    const defaultTabIndex = roadmapPhases.findIndex(p => p.status === "In Progress"); // Default to 'In Progress' tab

    return (
        <TooltipProvider>
            <Section id="roadmap" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/10 dark:to-background/10">
                 <SectionHeader
                    title="Project Roadmap: Charting the Antifragile Future"
                    description="Our phased strategy details key milestones for $ROACH's development, market entry, ecosystem expansion, and long-term adaptation."
                    subtitle={<><Rocket className="inline h-4 w-4 mr-1.5" /> Development Trajectory </>}
                    alignment="center" className="mb-16"
                />

                {/* Desktop Vertical Timeline View */}
                <div className="hidden md:block max-w-3xl mx-auto relative">
                    {/* Central timeline line */}
                    <div className="absolute left-5 top-2 h-full w-1 bg-border/20 rounded-full -z-10" aria-hidden="true"/>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={timelineVariants}>
                        {roadmapPhases.map((phase) => {
                             const colors = statusColors[phase.status as keyof typeof statusColors];
                             return (
                                <motion.div key={phase.id} className="relative pl-16 pb-12 last:pb-0" variants={itemVariants}>
                                    {/* Timeline Dot & Icon */}
                                    <div className={cn("absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 shadow-md z-10", colors.dot )}>
                                        <phase.icon className={cn("h-5 w-5", phase.status === 'Completed' ? "text-white" : phase.status === 'Future' ? 'text-gray-700 dark:text-gray-800' : "text-white")}/>
                                    </div>
                                     {/* Card Content */}
                                    <Card className={cn("border shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary/60 transition-all duration-300 overflow-hidden", colors.border, "dark:bg-card/80 backdrop-blur-sm")}>
                                        <CardHeader className="pb-3 pt-4 px-5 border-b border-border/20">
                                             <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                                <CardTitle className={cn("text-lg sm:text-xl font-semibold flex items-center gap-2", colors.text)}>
                                                    <phase.icon className="h-5 w-5 inline sm:hidden" /> {/* Show icon inline on mobile-like card header */}
                                                     {phase.title}
                                                </CardTitle>
                                                <Badge className={cn("w-fit self-start sm:self-center text-xs font-medium px-2.5 py-1 shadow-sm", colors.badge)}>
                                                   {phase.status}
                                                </Badge>
                                             </div>
                                         </CardHeader>
                                         <CardContent className="pt-4 px-5 pb-5">
                                             <motion.ul className="space-y-2.5 text-sm" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
                                                 {phase.items.map((item, itemIndex) => (
                                                     <motion.li key={itemIndex} variants={listItemVariants} className="flex items-start gap-2.5 text-muted-foreground">
                                                          <span className={cn("mt-1 flex-shrink-0 h-4 w-4 flex items-center justify-center")}>
                                                              {item.completed ? (
                                                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                              ) : item.status === 'Active' || item.status === 'Ongoing' ? (
                                                                  <Zap className="h-4 w-4 text-blue-500 animate-pulse"/>
                                                                ) : item.status === 'Development' || item.status === 'Preparing' || item.status === 'Pending Presale' || item.status === 'Pending LP Creation' || item.status === 'Pending Presale End' ? (
                                                                 <Construction className="h-4 w-4 text-amber-500" />
                                                                 ) : (
                                                                  <ListChecks className={cn("h-4 w-4", phase.status === 'Upcoming' ? 'text-purple-500/70' : 'text-gray-400/60')} />
                                                              )}
                                                         </span>
                                                          <div className="flex-1">
                                                             <span>{item.text}</span>
                                                             {item.status && !item.completed && <span className="text-[10px] font-medium text-muted-foreground/80 ml-1.5">({item.status})</span>}
                                                              {item.speculative && <span className="text-[10px] font-medium text-orange-500/80 ml-1.5">(Speculative)</span>}
                                                         </div>
                                                         {item.link && item.link !== '#' && (
                                                             <Tooltip delayDuration={100}>
                                                                <TooltipTrigger asChild>
                                                                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="ml-auto shrink-0">
                                                                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 hover:text-primary transition-colors" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                 <TooltipContent><p className="text-xs">View Details/Proof</p></TooltipContent>
                                                             </Tooltip>
                                                         )}
                                                     </motion.li>
                                                 ))}
                                             </motion.ul>

                                              {/* Visual Placeholder for timeline segment */}
                                             <div className="mt-5 border-t border-border/15 pt-4">
                                                  <div className="relative aspect-[16/3] bg-muted/20 dark:bg-white/5 border border-dashed border-border/30 rounded flex items-center justify-center p-2">
                                                     <p className="text-xs text-muted-foreground/70 italic text-center">
                                                         AI Prompt: Visualize Phase {phase.id.replace('phase','')} ('{phase.title}') as a segment on a timeline. Use key icons from items above. If Phase 2, show a simple Gantt chart for 'In Progress' items. Color-code segment based on phase status ({phase.color}). Minimalist infographic style.
                                                         <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                                                            Research: Information Visualization (Timeline Representation), Cognitive Load (Gantt for clarity)
                                                         </span>
                                                    </p>
                                                 </div>
                                             </div>
                                         </CardContent>
                                     </Card>
                                 </motion.div>
                             );
                         })}
                    </motion.div>
                 </div>

                 {/* Mobile Tabs View */}
                 <div className="md:hidden">
                    <Tabs defaultValue={roadmapPhases[defaultTabIndex]?.id || roadmapPhases[0].id} className="w-full">
                         <TabsList className="grid w-full grid-cols-4 mb-6 gap-1 p-1 bg-muted dark:bg-background/30 rounded-lg h-auto">
                             {roadmapPhases.map((phase) => {
                                 const colors = statusColors[phase.status as keyof typeof statusColors];
                                return (
                                    <TabsTrigger
                                        key={phase.id} value={phase.id}
                                        className={cn(
                                            "flex-col items-center h-auto py-2.5 px-1 text-[0.65rem] leading-tight rounded-md transition-colors duration-200 relative focus-visible:z-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
                                             "data-[state=active]:shadow-md data-[state=active]:font-semibold data-[state=active]:bg-card",
                                             "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-accent/70",
                                             `data-[state=active]:${colors.text}` // Apply active text color based on status
                                        )}
                                     >
                                        <phase.icon className="h-4 w-4 mb-0.5"/> Phase {phase.id.replace('phase','')} <span className="text-[9px] block">({phase.status})</span>
                                     </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        {roadmapPhases.map((phase) => {
                             const colors = statusColors[phase.status as keyof typeof statusColors];
                            return (
                                <TabsContent key={phase.id} value={phase.id} className="mt-0">
                                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration: 0.4}}>
                                        <Card className={cn("border shadow-sm", colors.border, "dark:bg-card/80")}>
                                            <CardHeader className="pb-3 pt-4 px-4 border-b border-border/20">
                                                <div className="flex flex-col xs:flex-row justify-between xs:items-center gap-2">
                                                    <CardTitle className={cn("text-base font-semibold flex items-center gap-2", colors.text)}>
                                                        <phase.icon className="h-5 w-5"/> {phase.title}
                                                     </CardTitle>
                                                    <Badge className={cn("w-fit self-start xs:self-center text-xs font-medium px-2 py-0.5", colors.badge)}>{phase.status}</Badge>
                                                 </div>
                                            </CardHeader>
                                             <CardContent className="pt-4 px-4 pb-4">
                                                 <ul className="space-y-2 text-sm text-muted-foreground">
                                                      {phase.items.map((item, itemIndex) => (
                                                         <li key={itemIndex} className="flex items-start gap-2">
                                                               <span className="mt-0.5 flex-shrink-0">
                                                                   {/* Simplified icons for mobile list */}
                                                                  {item.completed ? <CheckCircle2 className="h-4 w-4 text-green-500"/> : <ListChecks className={cn("h-4 w-4", colors.text, "opacity-70")} />}
                                                               </span>
                                                               <div className="flex-1">
                                                                    {item.text}
                                                                   {item.status && !item.completed && <span className="text-[10px] font-medium text-muted-foreground/80 ml-1">({item.status})</span>}
                                                                    {item.speculative && <span className="text-[10px] font-medium text-orange-500/80 ml-1">(Speculative)</span>}
                                                                   {item.link && item.link !== '#' && <Link href={item.link} target="_blank" rel="noopener noreferrer" className="ml-1 inline-block align-middle"><ExternalLink className="h-3 w-3 text-primary/70"/> </Link>}
                                                               </div>
                                                         </li>
                                                      ))}
                                                 </ul>
                                            </CardContent>
                                         </Card>
                                    </motion.div>
                                 </TabsContent>
                            );
                         })}
                     </Tabs>
                 </div>
            </div>

            <motion.div
                 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                 className="mt-12 text-center text-xs text-muted-foreground max-w-xl mx-auto italic px-4"
             >
                 Disclaimer: This roadmap outlines our strategic direction. Timelines, features, and priorities may adapt based on development progress, technological advancements, market conditions, and community feedback. Items marked (Speculative) are under consideration and not guaranteed.
             </motion.div>
            </Section>
        </TooltipProvider>
    );
}


// --- END OF FILE components/sections/Roadmap.tsx ---
```

```typescript
// --- START OF FILE components/sections/HowToBuy.tsx ---
"use client";

import React, { useState, useCallback } from 'react'; // Added useCallback
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Wallet, Coins, ArrowRightLeft, ExternalLink, Check, ShoppingCart, Sparkles, AlertTriangle, DownloadCloud, HelpCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

// --- Constants - Ensure Accuracy ---
const CONTRACT_ADDRESS = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f";
const CONTRACT_ADDRESS_SHORT = `${CONTRACT_ADDRESS.slice(0, 6)}...${CONTRACT_ADDRESS.slice(-6)}`;
const EXPLORER_LINK = `https://solscan.io/token/${CONTRACT_ADDRESS}`;
// Main swap link (Jupiter recommended for aggregation)
const PRIMARY_SWAP_LINK = `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`;
const PRIMARY_SWAP_NAME = "Jupiter Aggregator";
// Secondary swap link (Direct Raydium)
const SECONDARY_SWAP_LINK = `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${CONTRACT_ADDRESS}`;
const SECONDARY_SWAP_NAME = "Raydium";


// --- Component Definition ---
export function HowToBuy() {
    const [copied, setCopied] = useState(false);

    // Optimized Copy Handler using useCallback
    const copyAddress = useCallback(() => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
            setCopied(true);
            toast.success("$ROACH contract address copied!");
            setTimeout(() => setCopied(false), 2000); // Reset state after 2s
        }).catch(err => {
            console.error("Failed to copy address:", err);
            toast.error("Copy failed. Please copy manually.");
        });
    }, []); // No dependencies

    // --- Steps Data (Enhanced Clarity & Structure) ---
    const steps = [
        {
            icon: DownloadCloud, // Changed Icon
            title: "1. Get a Solana Wallet",
            description: "Secure a Solana-compatible wallet like Phantom or Solflare. Available as browser extensions and mobile apps. Keep your seed phrase safe!",
            links: [
                { name: "Phantom Wallet", href: "https://phantom.app/", icon: Sparkles },
                { name: "Solflare Wallet", href: "https://solflare.com/", icon: Sparkles },
            ],
            visualPrompt: "AI Prompt: Clean logos for Phantom and Solflare wallets, side-by-side. Modern, recognizable. Background slightly blurred. Research: Choice Architecture (Suggesting top options reduces cognitive load)."
        },
        {
            icon: Coins,
            title: "2. Fund Wallet with SOL",
            description: "Purchase SOL (Solana's native token) from a reputable exchange (e.g., Coinbase, Binance, Kraken). Transfer the SOL to your new Solana wallet address.",
            links: [ // Added Kraken
                { name: "Coinbase", href: "https://www.coinbase.com/" },
                { name: "Binance", href: "https://www.binance.com/" },
                { name: "Kraken", href: "https://www.kraken.com/" },
            ],
            visualPrompt: "AI Prompt: Logos for Coinbase, Binance, and Kraken exchanges arranged neatly. Clean, vector style. Research: Authority Principle (Using recognizable exchanges)."
        },
        {
            icon: ArrowRightLeft,
            title: "3. Swap SOL for $ROACH",
            description: `Connect your wallet to a trusted Solana DEX aggregator like Jupiter or Raydium. Always use the official contract address below to avoid scams.`,
            action: (
                 <div className="space-y-3 mt-2">
                    <label htmlFor="contract-address-input-guide" className="text-xs font-medium text-muted-foreground block text-left">Official Contract Address (Verify!):</label>
                    <div className="flex items-center gap-2 rounded-md border bg-background/50 dark:bg-muted/20 p-2 shadow-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-1">
                        <Input
                            id="contract-address-input-guide"
                            readOnly
                            value={CONTRACT_ADDRESS}
                            className="flex-1 h-auto font-mono text-xs bg-transparent border-0 shadow-none px-1 selection:bg-primary/20 focus-visible:ring-0 focus-visible:ring-offset-0 py-1 leading-tight" // Adjust py
                            aria-label="Official ROACH Contract Address"
                         />
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 shrink-0 text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-1"
                                    onClick={copyAddress}
                                    aria-label="Copy Contract Address"
                                >
                                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                                 </Button>
                             </TooltipTrigger>
                            <TooltipContent side="top"><p>Copy Address</p></TooltipContent>
                         </Tooltip>
                    </div>
                     {/* Primary Swap Button (Jupiter recommended) */}
                     <Button className="w-full shadow-md bg-primary hover:bg-primary-hover text-primary-foreground" asChild>
                        <a href={PRIMARY_SWAP_LINK} target="_blank" rel="noopener noreferrer">
                            Swap on {PRIMARY_SWAP_NAME} <ExternalLink className="ml-1.5 h-4 w-4" />
                        </a>
                     </Button>
                    {/* Secondary Swap Button (Raydium) */}
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                             <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                                <a href={SECONDARY_SWAP_LINK} target="_blank" rel="noopener noreferrer">
                                   Swap on {SECONDARY_SWAP_NAME} <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
                                </a>
                             </Button>
                         </TooltipTrigger>
                         <TooltipContent side="bottom"><p className="text-xs">Alternative DEX option</p></TooltipContent>
                    </Tooltip>
                 </div>
            ),
            visualPrompt: "AI Prompt: Logos for Jupiter Aggregator (JUP Cat) and Raydium DEX. Place Jupiter slightly more prominent. Clean vector style. Research: Anchoring (Suggesting Jupiter first)."
        },
        {
            icon: Check,
            title: "4. Confirm & Hold",
            description: "Review and approve the swap transaction in your wallet. Once confirmed on the Solana network, $ROACH will appear in your balance. Welcome aboard!",
             action: (
                 <div className="flex flex-col gap-2 mt-2">
                    <Button variant="secondary" size="sm" className="w-full" asChild>
                         <a href={EXPLORER_LINK} target="_blank" rel="noopener noreferrer" title="Verify on Solscan">
                            View on Solscan <ExternalLink className="ml-1.5 h-3 w-3 opacity-70" />
                         </a>
                     </Button>
                     <Button variant="outline" size="sm" className="w-full text-muted-foreground hover:text-foreground" asChild>
                        <Link href="#faq">
                            <HelpCircle className="h-3.5 w-3.5 mr-1.5 opacity-80"/> Need Help? Read FAQ
                        </Link>
                    </Button>
                </div>
            ),
            visualPrompt: "AI Prompt: A checkmark inside a wallet icon graphic, symbolizing successful acquisition. Simple, clean. Green accent color. Research: Confirmation Bias (Visual success reinforcement)."
        },
    ];

    // --- Animation Variants ---
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } } // Smoother ease-out-expo like
    };

    return (
         <TooltipProvider>
            <Section id="how-to-buy" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/10 dark:from-background/5 dark:to-background/15">
                <SectionHeader
                    title="Acquiring Your $ROACH Stake"
                    description="Follow this secure, step-by-step guide to purchase $ROACH tokens and join the antifragile ecosystem on Solana."
                    subtitle={<><ShoppingCart className="inline h-4 w-4 mr-1.5" /> Simple Purchase Process</>}
                    alignment="center"
                    className="mb-16"
                />

                 {/* Security Reminder First */}
                 <motion.div
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
                    className="mb-10 text-center max-w-3xl mx-auto"
                 >
                     <Card className="inline-block border-amber-500/40 dark:border-amber-600/50 bg-amber-500/10 dark:bg-amber-900/20 p-4 shadow-md">
                         <CardContent className="p-0 flex items-start sm:items-center gap-3">
                              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                             <div className="text-left">
                                 <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Security First: Always Verify Contract Address</p>
                                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                    <strong className="text-foreground">Double-check you are using the official $ROACH address:</strong> <code className="text-xs font-mono bg-muted/50 dark:bg-muted/30 px-1 py-0.5 rounded">{CONTRACT_ADDRESS_SHORT}</code>. Beware of fake tokens and impersonators. Use only trusted DEXs linked here. Never share your private keys.
                                </p>
                            </div>
                         </CardContent>
                    </Card>
                </motion.div>

                 
                 <motion.div
                    variants={containerVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch" // Wider container, items-stretch for equal height feel
                 >
                    {steps.map((step, index) => (
                        <motion.div key={`step-${index}`} variants={itemVariants}>
                             <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/15 dark:border-border/20 overflow-hidden bg-card/80 dark:bg-card/50 backdrop-blur-sm">
                                 <CardHeader className="pb-4 flex items-start gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg mt-0.5 border border-primary/20">
                                        <step.icon className="h-6 w-6 text-primary" />
                                     </div>
                                     <div className="flex-1">
                                         {/* Use CardTitle for semantic structure */}
                                         <CardTitle className="text-lg font-semibold leading-tight">{step.title}</CardTitle>
                                    </div>
                                 </CardHeader>
                                <CardContent className="px-5 pb-5 flex-1 flex flex-col gap-4 justify-between"> {/* Ensure content justifies between */}
                                     <div> {/* Wrapper for description and links */}
                                        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                                         {/* Suggested links */}
                                        {step.links && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                 {step.links.map((link, linkIndex) => (
                                                    <Button
                                                         key={`link-${index}-${linkIndex}`}
                                                         variant="outline" size="xs" // Consistent small size
                                                        className="text-xs font-medium gap-1 h-6 border-border/50 hover:border-primary/40 dark:bg-muted/20" asChild
                                                    >
                                                        <a href={link.href} target="_blank" rel="noopener noreferrer" title={`Visit ${link.name}`}>
                                                            {link.icon && <link.icon className="h-3 w-3 opacity-80"/>}
                                                             {link.name} <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                                                        </a>
                                                    </Button>
                                                ))}
                                             </div>
                                        )}
                                         {/* Visual Placeholder */}
                                        {step.visualPrompt && (
                                           <div className="my-3 bg-muted/30 dark:bg-white/5 border border-dashed border-border/30 rounded h-12 flex items-center justify-center p-1 shadow-inner">
                                               <p className="text-[0.65rem] text-muted-foreground/60 italic text-center leading-tight">{step.visualPrompt}</p>
                                            </div>
                                         )}
                                     </div>

                                     {/* Action area pushed to bottom */}
                                     {step.action && <div className="mt-auto">{step.action}</div>}
                                 </CardContent>
                             </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>
         </TooltipProvider>
    );
}


// --- END OF FILE components/sections/HowToBuy.tsx ---
```

```typescript
// --- START OF FILE components/sections/SocialProof.tsx ---
"use client";

import React from "react"; // Import React
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquareText, LineChart, ExternalLink, Quote, Twitter, Twitch, Facebook, Instagram, Youtube, MessageCircle, CheckCircle } from "lucide-react"; // Enhanced icons
import { FaXTwitter, FaTelegram, FaDiscord, FaRedditAlien, FaGithub } from "react-icons/fa6"; // Added Reddit/Github
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


// --- Refined Data (Ensure data is realistic or clearly placeholder) ---
const metrics = [
    { icon: Users, value: "18k+", label: "Community Members", trend: "+8% This Week", description: "Engaged holders across Telegram, Discord, and Twitter.", color: "blue" },
    { icon: MessageSquareText, value: "9.2/10", label: "Sentiment Score", trend: "Consistently Positive", description: "Community sentiment analyzed from social channels.", color: "green" }, // Example sentiment score
    { icon: LineChart, value: "25k+", label: "Unique Holders", trend: "+ Growing Steadily", description: "Increasing number of wallets holding $ROACH on Solana.", color: "orange" },
];

const testimonials = [
    { name: "Solana Sensei", handle: "@SolSensei", avatarFallback: "SS", image: "/placeholder-avatars/solana-sensei.png", text: "Impressed by $ROACH's antifragile mechanics. The dynamic tax/reflection during the recent volatility was tangible. Watching this closely.", role: "Verified Holder", verified: true },
    { name: "DeFi Degen", handle: "@DegenExplorer", avatarFallback: "DE", image: "/placeholder-avatars/defi-degen.png", text: "The cockroach concept is genius for crypto. Finally, a token designed to benefit from the chaos instead of just surviving it. Team transparency with the audit/LP lock is key.", role: "Trader", verified: false },
    { name: "Crypto Cassie", handle: "@CassieCrypto", avatarFallback: "CC", image: "/placeholder-avatars/crypto-cassie.png", text: "Joined the $ROACH Telegram – very active & helpful community. It's more than a meme; the tech seems solid. Excited to see the roadmap unfold.", role: "Community Member", verified: true },
];

// UPDATE THESE LINKS
const socialLinks = [
    { name: "X (Twitter)", href: "#", icon: FaXTwitter, ariaLabel: "Follow $ROACH on X (Twitter)" },
    { name: "Telegram", href: "#", icon: FaTelegram, ariaLabel: "Join the Official $ROACH Telegram" },
    { name: "Discord", href: "#", icon: FaDiscord, ariaLabel: "Join the Official $ROACH Discord" },
    { name: "Reddit", href: "#", icon: FaRedditAlien, ariaLabel: "Visit the $ROACH Subreddit" },
    { name: "GitHub", href: "#", icon: FaGithub, ariaLabel: "View $ROACH Source Code on GitHub (if applicable)" },
];

// Color map helper
const colorMap = {
    blue: { text: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-900/30', border: 'border-blue-500/30 dark:border-blue-500/40' },
    green: { text: 'text-green-700 dark:text-green-400', bg: 'bg-green-500/10 dark:bg-green-900/30', border: 'border-green-500/30 dark:border-green-500/40' },
    orange: { text: 'text-orange-700 dark:text-orange-500', bg: 'bg-orange-500/10 dark:bg-orange-900/30', border: 'border-orange-500/30 dark:border-orange-500/40' },
};
// ----------------------------------

export function SocialProof() {
    // Animation Variants
    const containerVariants = { hidden: { opacity: 0 }, visible: { transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };

    return (
        <TooltipProvider>
             <Section id="social-proof" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/5 to-background dark:from-background/5 dark:to-background/10">
                <SectionHeader
                    title="Strength in Numbers: The $ROACH Colony"
                    description="Connect with a thriving, rapidly expanding community built around the principles of resilience and antifragility. Explore our metrics and hear from fellow members."
                    subtitle={<><Users className="inline h-4 w-4 mr-1.5" /> Community & Trust Signals </>}
                    alignment="center" className="mb-16"
                />

                {/* Metrics Grid */}
                <motion.div
                     variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                     className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 max-w-4xl mx-auto"
                >
                    {metrics.map((metric, index) => {
                        const colors = colorMap[metric.color as keyof typeof colorMap];
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className={cn("shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden h-full flex flex-col", colors.border, "dark:bg-card/60 backdrop-blur-sm")}>
                                     <CardHeader className={cn("pb-4 pt-5 px-5 flex flex-row items-center gap-4", colors.bg)}>
                                         <div className={cn("p-2 rounded-lg border", colors.border, colors.bg.replace('/10','/20').replace('/30','/40'))}>
                                             <metric.icon className={cn("h-7 w-7", colors.text)} />
                                         </div>
                                         <div className="flex-1">
                                            <CardTitle className={cn("text-2xl sm:text-3xl font-bold tracking-tight", colors.text)}>{metric.value}</CardTitle>
                                            <p className="text-xs font-semibold text-foreground/80 -mt-1">{metric.label}</p>
                                         </div>
                                     </CardHeader>
                                    <CardContent className="p-5 text-center flex flex-col flex-grow justify-between">
                                         <p className="text-sm text-muted-foreground mb-3 leading-normal">{metric.description}</p>
                                         <Badge variant="secondary" size="sm" className={cn("text-xs font-medium mt-auto w-fit mx-auto", colors.bg, colors.text, colors.border)}>
                                            {metric.trend}
                                         </Badge>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                     {/* Metrics Chart Placeholder */}
                     <motion.div
                         className="md:col-span-3 mt-6"
                         initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{delay: 0.3}} viewport={{ once: true }}
                     >
                         <div className="relative aspect-[16/5] bg-muted/20 dark:bg-white/5 border border-dashed border-border/30 rounded-lg p-3 flex items-center justify-center">
                             <p className="text-xs text-muted-foreground/70 italic max-w-md text-center">
                                AI Prompt: Visualize community growth metrics. Could be multi-line chart (members, holders over time) or stacked bars showing engagement sources. Use theme colors corresponding to metrics (blue, green, orange). Title: Ecosystem Growth Trends. Clean, modern data visualization style.
                                 <span className="block mt-1 text-[10px] tracking-wider font-medium uppercase text-muted-foreground/50">
                                     Research: Social Proof (Visualizing Growth), Data Visualization Best Practices
                                 </span>
                            </p>
                         </div>
                     </motion.div>
                 </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true, amount: 0.1 }}
                    className="mb-16 max-w-6xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">Hear from the Colony</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch"> {/* Added items-stretch */}
                        {testimonials.map((testimonial, index) => (
                             <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.08 }}>
                                <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border border-border/15 dark:border-border/20 bg-card overflow-hidden hover:border-primary/30">
                                    <CardHeader className="flex flex-row items-center gap-3 pb-3 pt-4 px-4 border-b border-border/15 dark:border-border/20 bg-muted/20 dark:bg-muted/5">
                                        <Avatar className="h-10 w-10 border-2 border-border/50">
                                            <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
                                            <AvatarFallback className="text-sm font-semibold bg-muted">{testimonial.avatarFallback}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 overflow-hidden">
                                            <div className="flex items-center gap-1">
                                                <p className="font-semibold text-sm leading-tight truncate">{testimonial.name}</p>
                                                {testimonial.verified && <Tooltip delayDuration={100}>
                                                    <TooltipTrigger>
                                                        <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top"><p className="text-xs">Verified Holder/Contributor</p></TooltipContent>
                                                </Tooltip>}
                                             </div>
                                             <p className="text-xs text-muted-foreground truncate">{testimonial.handle}</p>
                                         </div>
                                        {/* Optional: Add Link to original tweet/post if available */}
                                         {/* <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground"><ExternalLink className="h-4 w-4" /></Button> */}
                                     </CardHeader>
                                     <CardContent className="p-4 pt-4 flex-grow flex flex-col justify-between">
                                         <blockquote className="relative text-sm text-foreground/95 italic border-l-3 border-primary/50 pl-3 mb-4 flex-1">
                                             <Quote className="absolute top-0 -left-1 h-8 w-8 text-primary/10 transform -translate-x-1/2" />
                                             <span className="relative z-10">{testimonial.text}</span>
                                         </blockquote>
                                          <p className="text-xs font-medium text-muted-foreground text-right mt-2">
                                             – {testimonial.role}
                                         </p>
                                     </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                     </div>
                 </motion.div>

                 {/* Connect Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <Card className="inline-block p-6 md:p-8 border border-border/20 dark:border-border/25 bg-gradient-to-br from-card via-muted/10 to-card shadow-lg rounded-xl">
                         <CardContent className="p-0 space-y-4">
                             <div className="flex items-center justify-center gap-2 mb-3">
                                <Users className="h-6 w-6 text-primary" />
                                <h3 className="text-xl md:text-2xl font-semibold">Become Part of the Colony</h3>
                             </div>
                             <p className="text-muted-foreground text-base">Join the conversation, get support, and stay updated on the latest developments:</p>
                             {/* Platform Icons Visual */}
                            <div className="flex justify-center gap-3 py-3">
                                {socialLinks.filter(link => link.href !== '#').map(link => (
                                     <Tooltip key={link.name} delayDuration={100}>
                                        <TooltipTrigger asChild>
                                             <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className="text-muted-foreground hover:text-primary transition-colors p-1">
                                                <link.icon className="h-6 w-6"/>
                                            </a>
                                         </TooltipTrigger>
                                         <TooltipContent side="bottom"><p className="text-xs">Join on {link.name}</p></TooltipContent>
                                     </Tooltip>
                                ))}
                            </div>
                            {/* Buttons to Join */}
                             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
                                {socialLinks.filter(link => link.href !== '#').slice(0, 3).map(link => ( // Show first 3 prominent buttons
                                     <Button key={link.name} variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow font-medium bg-primary/90 hover:bg-primary text-primary-foreground flex-grow sm:flex-grow-0" asChild>
                                         <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label={link.ariaLabel}>
                                             <link.icon className="h-5 w-5" /> Join on {link.name}
                                         </a>
                                    </Button>
                                 ))}
                             </div>
                         </CardContent>
                     </Card>
                 </motion.div>
            </Section>
        </TooltipProvider>
    );
}


// --- END OF FILE components/sections/SocialProof.tsx ---
```

```typescript
// --- START OF FILE components/sections/FAQ.tsx ---
"use client";

import React, { useState, useMemo } from "react"; // Import React, useState, useMemo
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Use CardHeader for title area
import { Input } from "@/components/ui/input"; // For search
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { HelpCircle, Search, Network, Settings2, ShieldCheck, Coins, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// --- Enhanced & Categorized FAQ Data ---
interface FAQItemData {
  id: string;
  q: string; // Question
  a: string; // Answer (can include simple markdown like links)
  tags: string[]; // Keywords for searching/filtering
  category: 'general' | 'mechanics' | 'technical' | 'investment'; // Category type
}

const faqData: FAQItemData[] = [
    // General
    { id: "g1", category: 'general', q: "What is $ROACH and its core concept?", a: "$ROACH is an SPL token on Solana built on the principle of 'antifragility'. Its unique 5-tier dynamic tax system is designed to leverage market volatility, rewarding holders and strengthening the ecosystem during sell pressure.", tags: ["concept", "antifragility", "overview", "spl", "solana", "core", "what is"] },
    { id: "g2", category: 'general', q: "Why the 'cockroach' theme?", a: "The cockroach symbolizes extreme resilience and adaptation through chaos. This mirrors $ROACH's design: gaining strength from market stressors that typically harm other tokens.", tags: ["theme", "mascot", "cockroach", "symbolism", "why", "name"] },
    { id: "g3", category: 'general', q: "Is $ROACH just a 'meme coin'?", a: "While leveraging strong symbolism, $ROACH is driven by innovative, antifragile tokenomics engineered for potential long-term viability. Its value lies in its unique mechanics, audit, and locked liquidity, not just memes.", tags: ["meme", "utility", "value", "tokenomics", "joke"] },
    { id: "g4", category: 'general', q: "What problem does $ROACH address?", a: "$ROACH tackles the fragility of many crypto assets that suffer disproportionately during market downturns. Its adaptive system aims to convert sell pressure from a weakness into a strength.", tags: ["problem", "solution", "fragility", "market", "volatility", "downturn"] },
    // Mechanics
    { id: "m1", category: 'mechanics', q: "How does the 5-tier dynamic system work?", a: "The smart contract monitors the Sell/Buy Volume Ratio over 4-hour periods. Based on this ratio crossing predefined thresholds, it automatically adjusts buy/sell taxes and reflection percentages across 5 tiers to respond to market conditions.", tags: ["mechanics", "tiers", "dynamic", "tax", "reflection", "ratio", "how it works", "system"] },
    { id: "m2", category: 'mechanics', q: "What are 'reflections'?", a: "Reflections are rewards distributed to holders. A percentage of the tax from every $ROACH *sell* transaction (ranging from 3% in Tier 1 up to 10% in Tier 5) is automatically sent to all existing holders, proportional to their holdings.", tags: ["reflections", "rewards", "passive income", "holders", "distribution", "tax"] },
    { id: "m3", category: 'mechanics', q: "How does the system deter 'whale dumps'?", a: "Large sell volumes rapidly push the system into higher Tiers (4 & 5). This significantly increases the Sell Tax (up to 15%), making large, abrupt sell-offs costly for the seller while maximizing reflection rewards for those who hold.", tags: ["whales", "dumps", "sell pressure", "tax", "deterrent", "stability"] },
    { id: "m4", category: 'mechanics', q: "Why does the Buy Tax decrease in high-pressure tiers?", a: "Lowering the Buy Tax during intense selling (Tiers 4 & 5, down to 2-3%) creates a strong incentive for buyers to enter or accumulate $ROACH, helping to counterbalance sell pressure and establish potential price support.", tags: ["buy tax", "incentive", "dip buying", "entry", "discount", "mechanics"] },
    // Technical
    { id: "t1", category: 'technical', q: "Is the smart contract audited?", a: "Yes. $ROACH underwent a comprehensive security audit by CertiK, a leading blockchain security firm. The audit confirmed contract integrity with no critical or major vulnerabilities. Link to report in footer/security section.", tags: ["audit", "security", "certik", "contract", "safe", "vulnerabilities"] },
    { id: "t2", category: 'technical', q: "How is liquidity secured?", a: "The initial liquidity pool tokens provided on Raydium are verifiably locked for 12 months using PinkLock. This prevents liquidity removal by the team ('rug pull') and ensures foundational stability. Verification link available.", tags: ["liquidity", "lp", "locked", "rug pull", "secure", "pinklock", "raydium"] },
    { id: "t3", category: 'technical', q: "Is the token supply fixed?", a: "Yes, absolutely. The total supply is fixed at 1 billion $ROACH. The contract's minting function has been permanently disabled, meaning no more tokens can ever be created. This is verifiable on-chain.", tags: ["supply", "total supply", "fixed", "inflation", "mint", "immutable"] },
    { id: "t4", category: 'technical', q: "Where can I view the contract code?", a: "The $ROACH contract is verified on Solana explorers like Solscan. You can examine the code, holders, and transactions directly. The official contract address and link are in the footer and purchase guide.", tags: ["contract", "address", "solscan", "explorer", "verify", "code", "on-chain"] },
    // Investment/Trading
    { id: "i1", category: 'investment', q: "What are the risks of investing in $ROACH?", a: "Like all cryptocurrencies, $ROACH is highly speculative and volatile. Risks include market fluctuations, smart contract vulnerabilities (despite audit), regulatory changes, and potential loss of investment. DYOR.", tags: ["risk", "investment", "speculative", "volatile", "loss", "dyor"] },
    { id: "i2", category: 'investment', q: "Is $ROACH guaranteed to go up?", a: "No. No cryptocurrency guarantees profit. $ROACH's value depends on market adoption, trading volume, overall market conditions, and execution of its roadmap. Its mechanics *aim* to provide advantages during volatility, but price action is never guaranteed.", tags: ["profit", "guarantee", "price", "value", "speculation", "moon"] },
    { id: "i3", category: 'investment', q: "Where can I buy $ROACH?", a: "You can acquire $ROACH on Solana Decentralized Exchanges (DEXs) like Raydium or DEX aggregators like Jupiter. Follow the secure 'How to Buy' guide on this website.", tags: ["buy", "purchase", "acquire", "exchange", "dex", "jupiter", "raydium", "where"] },
];

const categories = [
    { value: 'all', label: 'All Topics', icon: HelpCircle },
    { value: 'general', label: 'General', icon: Info },
    { value: 'mechanics', label: 'Mechanics', icon: Settings2 },
    { value: 'technical', label: 'Technical', icon: ShieldCheck },
    { value: 'investment', label: 'Investment', icon: Coins },
];


export function FAQ() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>('all');

    // --- Filter Logic using useMemo for optimization ---
    const filteredFaqs = useMemo(() => {
        return faqData.filter(item => {
            const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
            const searchMatch = searchTerm === "" ||
                                item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return categoryMatch && searchMatch;
        });
    }, [searchTerm, activeCategory]); // Re-filter only when search or category changes


    // Animation Variants
    const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
    const accordionItemVariants = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 }}; // Subtle slide-in


    return (
        <Section id="faq" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/10 to-background dark:from-background/10 dark:to-background">
             <SectionHeader
                title="Frequently Asked Questions (FAQ)"
                description="Find answers to common inquiries about $ROACH, its antifragile system, technical details, and investment considerations. Use the filters or search below."
                 subtitle={<><HelpCircle className="inline h-4 w-4 mr-1.5" /> Clarity & Information </>}
                alignment="center"
                className="mb-10" // Reduced bottom margin before card
             />

            <motion.div
                variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="max-w-4xl mx-auto" // Increased max-width for better layout
            >
                 <Card className="shadow-xl overflow-hidden border border-border/15 dark:border-border/20">
                    <CardHeader className="p-4 md:p-6 border-b border-border/15 dark:border-border/20 bg-muted/20 dark:bg-card/50">
                        {/* Search and Filter Controls */}
                        <div className="flex flex-col sm:flex-row gap-3">
                             {/* Search Input */}
                             <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search questions or keywords..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                     className="pl-10 pr-8 h-10 text-base sm:text-sm" // Adjust padding and height
                                 />
                                {searchTerm && (
                                    <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground" onClick={() => setSearchTerm('')} aria-label="Clear search">
                                        <X className="h-4 w-4"/>
                                    </Button>
                                )}
                             </div>
                             {/* Category Filters (Buttons) */}
                            <div className="flex flex-wrap gap-1.5 items-center justify-center sm:justify-start">
                                 {categories.map(cat => (
                                    <Button
                                         key={cat.value}
                                         variant={activeCategory === cat.value ? "default" : "outline"}
                                         size="sm"
                                         onClick={() => setActiveCategory(cat.value)}
                                         className={cn(
                                             "text-xs h-9 transition-all",
                                             activeCategory === cat.value && "bg-primary hover:bg-primary/90 text-primary-foreground",
                                             activeCategory !== cat.value && "border-border/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                         )}
                                         aria-pressed={activeCategory === cat.value}
                                    >
                                         <cat.icon className="h-3.5 w-3.5 mr-1.5" />
                                        {cat.label}
                                     </Button>
                                 ))}
                             </div>
                         </div>
                    </CardHeader>

                    <CardContent className="p-4 md:p-6 max-h-[60vh] overflow-y-auto scrollbar-hide"> {/* Constrained height + scroll */}
                         {filteredFaqs.length > 0 ? (
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {/* Stagger animation for items */}
                                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.07 }}>
                                    {filteredFaqs.map((item, index) => (
                                         <motion.div key={item.id} layout variants={accordionItemVariants} initial="hidden" animate="visible">
                                            <AccordionItem
                                                value={`item-${item.id}`}
                                                 className="border border-border/20 dark:border-border/25 rounded-lg shadow-sm bg-background/30 dark:bg-muted/10 transition-colors hover:border-border/40 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                                            >
                                                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline px-4 py-3.5 text-foreground/95 data-[state=open]:text-primary data-[state=open]:font-semibold group">
                                                    <span className="flex items-center gap-2">
                                                        <HelpCircle className="h-4 w-4 text-muted-foreground group-data-[state=open]:text-primary transition-colors shrink-0"/>
                                                        {item.q}
                                                     </span>
                                                 </AccordionTrigger>
                                                 <AccordionContent className="text-muted-foreground text-sm px-4 pb-4 pt-1 leading-relaxed space-y-2">
                                                      {/* Render answer with basic link handling (improve if complex markdown needed) */}
                                                     <p dangerouslySetInnerHTML={{ __html: item.a.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">$1</a>') }} />
                                                    <div className="flex flex-wrap gap-1 pt-2">
                                                        {item.tags.slice(0, 5).map(tag => ( // Show limited tags
                                                            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5 cursor-pointer hover:bg-accent" onClick={() => setSearchTerm(tag)}>#{tag}</Badge>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </motion.div>
                                     ))}
                                </motion.div>
                             </Accordion>
                        ) : (
                            <div className="text-center py-10 text-muted-foreground">
                                <Search className="h-10 w-10 mx-auto mb-3 opacity-50" />
                                No questions found matching "{searchTerm}" {activeCategory !== 'all' && `in the "${categories.find(c => c.value === activeCategory)?.label}" category`}. Try broadening your search.
                             </div>
                        )}
                     </CardContent>
                </Card>
             </motion.div>

            <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-10 text-center text-sm text-muted-foreground max-w-lg mx-auto"
            >
                Can't find your answer? Join our active <Link href="#" className="text-primary hover:underline font-medium focus-visible:ring-1 rounded-sm focus-visible:ring-ring outline-none">Telegram</Link> or <Link href="#" className="text-primary hover:underline font-medium focus-visible:ring-1 rounded-sm focus-visible:ring-ring outline-none">Discord</Link> community (links in footer) for further assistance.
            </motion.p>
        </Section>
    );
}


// --- END OF FILE components/sections/FAQ.tsx ---
```

```typescript
// --- START OF FILE components/ui/accordion.tsx ---
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item" // Added data-slot
    className={cn("border-b", className)} // Default border bottom
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger" // Added data-slot
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background [&[data-state=open]>svg]:rotate-180", // Default styling
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content" // Added data-slot
    className={cn(
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", // Default animation & hidden overflow
      className
    )}
    {...props}
  >
    {/* Added padding div */}
    <div className="pt-0 pb-4">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
// --- END OF FILE components/ui/accordion.tsx ---
```

```typescript
// --- START OF FILE components/ui/alert-dialog.tsx ---
// No changes needed - Retain shadcn version
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

// --- END OF FILE components/ui/alert-dialog.tsx ---
```

```typescript
// --- START OF FILE components/ui/alert.tsx ---
// No changes needed - Retain shadcn version
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

// --- END OF FILE components/ui/alert.tsx ---
```

```typescript
// --- START OF FILE components/ui/aspect-ratio.tsx ---
// No changes needed - Retain shadcn version
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

// --- END OF FILE components/ui/aspect-ratio.tsx ---
```

```typescript
// --- START OF FILE components/ui/avatar.tsx ---
// No changes needed - Retain shadcn version
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

// --- END OF FILE components/ui/avatar.tsx ---
```

```typescript
// --- START OF FILE components/ui/badge.tsx ---
// No changes needed - Retain shadcn version
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

// --- END OF FILE components/ui/badge.tsx ---
```

```typescript
// --- START OF FILE components/ui/button.tsx ---
// No changes needed - Retain shadcn version
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xs: "h-7 rounded px-2 text-xs", // Added xs size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// --- END OF FILE components/ui/button.tsx ---
```

```typescript
// --- START OF FILE components/ui/card.tsx ---
// No changes needed - Retain shadcn version
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

// --- END OF FILE components/ui/card.tsx ---
```

```typescript
// --- START OF FILE components/ui/checkbox.tsx ---
// No changes needed - Retain shadcn version
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

// --- END OF FILE components/ui/checkbox.tsx ---
```

```typescript
// --- START OF FILE components/ui/CockroachMascot.tsx ---
// Simplified - Use this version unless a complex SVG```typescript
// --- START OF FILE components/ui/CockroachMascot.tsx ---
// Simplified - Use this version unless a complex SVG