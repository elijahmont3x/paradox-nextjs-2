import { Inter } from "next/font/google";
import { MemeModeProvider } from "@/hooks/use-meme-mode";
import { Toaster } from "@/components/ui/sonner"; // Use the sonner component from ui
import { ThemeProvider } from "./theme-provider"

import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$ROACH - The Antifragile Token",
  description:
    "The token that gets stronger under market pressure — the more you try to kill it, the stronger it becomes.",
  keywords: ["cryptocurrency", "token", "antifragile", "Solana", "DeFi", "meme token", "cockroach", "$ROACH"],
  authors: [{ name: "ROACH Protocol" }],
  openGraph: {
    title: "$ROACH - The Antifragile Token",
    description: "The token that gets stronger under market pressure.",
    type: "website",
    // Add URL and image later
    // url: "https://your-roach-domain.com",
    // images: [
    //   {
    //     url: "https://your-roach-domain.com/og-image.png", // Replace with your OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "$ROACH - The Antifragile Token",
    //   },
    // ],
  },
  // Add twitter card metadata later
  // twitter: {
  //   card: "summary_large_image",
  //   title: "$ROACH - The Antifragile Token",
  //   description: "The token that gets stronger under market pressure.",
  //   images: ["https://your-roach-domain.com/twitter-image.png"], // Replace
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font directly to body */}
      <body className={inter.className}>
        <ThemeProvider>
          <MemeModeProvider> {/* Wrap content with the provider */}
              {children}
          </MemeModeProvider>
          <Toaster position="bottom-right" /> {/* Position the toaster */}
        </ThemeProvider>
      </body>
    </html>
  );
}