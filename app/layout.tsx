// --- START OF FILE app/layout.tsx ---
import { Inter } from "next/font/google";
import { MemeModeProvider } from "@/hooks/use-meme-mode"; // Assume hook exists for context
import { Toaster } from "@/components/ui/Sonner";
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