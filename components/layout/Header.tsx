// --- START OF FILE ./components/layout/Header.tsx ---

"use client";

import React, { useState, useEffect } from "react";
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
import { Menu } from "lucide-react"; // Use Lucide for menu icon
import { MemeToggle } from "@/components/ui/MemeToggle";
import { CockroachMascot } from "@/components/ui/CockroachMascot"; // Import mascot for logo
import { cn } from "@/lib/utils";
import { useMemeMode } from "@/hooks/use-meme-mode";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { memeMode } = useMemeMode();

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Antifragility", href: "#problem-solution" }, // Link to section explaining the concept
    { name: "How it Works", href: "#mechanics" },
    { name: "Scenarios", href: "#market-scenarios" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Security", href: "#security" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300", // Smooth transition for bg/shadow
        isScrolled
          ? "shadow-md bg-background/95 backdrop-blur-sm border-b" // More pronounced shadow and blur when scrolled
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-4 shrink-0">
          <CockroachMascot size="sm" />
          <span
            className={cn(
              "text-xl font-bold hidden sm:inline",
              memeMode && "font-mission"
            )}
          >
            $ROACH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
          {" "}
          {/* Center nav */}
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/80 hover:text-accent-foreground focus:bg-accent/80 focus:text-accent-foreground data-[active]:bg-accent/50 text-sm font-medium", // Subtle hover, medium font weight
                      memeMode && "font-mission tracking-wide"
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <MemeToggle size="sm" showLabel={false} />
          <Button size="sm" className={cn(memeMode && "font-mission")} asChild>
            <a
              href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" // Example Raydium swap link - REPLACE ADDR
              target="_blank"
              rel="noopener noreferrer"
            >
              {memeMode ? "Get Roach" : "Buy $ROACH"}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden ml-auto">
          <MemeToggle size="sm" showLabel={false} />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] pt-10 px-0">
              {" "}
              {/* Wider sheet */}
              <nav className="flex flex-col space-y-2 px-6">
                {" "}
                {/* Padding for items */}
                {menuItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link href={item.href} legacyBehavior passHref>
                      <a
                        className={cn(
                          "block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground",
                          memeMode && "font-mission tracking-wide"
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </SheetClose>
                ))}
                <Button
                  className={cn("w-full mt-6", memeMode && "font-mission")} // Added margin-top
                  asChild
                >
                  <a
                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" // Example Raydium swap link - REPLACE ADDR
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {memeMode ? "Get Roach" : "Buy $ROACH"}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
// --- END OF FILE ./components/layout/Header.tsx ---