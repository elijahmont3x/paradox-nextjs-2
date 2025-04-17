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
import { Menu, X } from "lucide-react"; // Use Lucide icons
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";

// Constants for links - Easier to manage
const SWAP_LINK = "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // Jupiter example

const menuItems = [
    // Order revised slightly for narrative flow
    { name: "Concept", href: "#antifragile-edge" }, // Changed label, points to core explanation
    { name: "How it Works", href: "#mechanics" },
    { name: "Performance", href: "#market-scenarios" }, // Changed label
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Security", href: "#security" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // MemeToggle and useMemeMode removed

    // Scroll effect logic remains the same
    useEffect(() => {
        const handleScroll = () => {
          const scrolled = window.scrollY > 10;
          // Check if state needs update to avoid unnecessary re-renders
           if (scrolled !== isScrolled) {
             setIsScrolled(scrolled);
           }
         };
        window.addEventListener("scroll", handleScroll, { passive: true }); // Added passive option
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolled]); // Added isScrolled dependency

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "shadow-md bg-background/95 backdrop-blur-md border-b border-border/50" // Slightly stronger blur/border when scrolled
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 mr-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    <CockroachMascot size="sm" className="text-primary/90" />
                    <span className="text-xl font-bold hidden sm:inline">
                        $ROACH
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex flex-1 justify-center">
                    <NavigationMenuList>
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent hover:bg-accent/80 hover:text-accent-foreground focus:bg-accent/80 focus:text-accent-foreground data-[active]:bg-accent/50", // Standard Shadcn nav link styles
                                            "text-sm font-medium h-9" // Consistent sizing/weight
                                        )}
                                    >
                                        {item.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Side Actions (Desktop) - Get $ROACH Button */}
                <div className="hidden lg:flex items-center gap-2 ml-auto">
                     {/* MemeToggle removed */}
                     <Button size="sm" asChild className="shadow-sm hover:shadow-md transition-shadow">
                        <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer">
                            Get $ROACH
                        </a>
                     </Button>
                </div>

                {/* Mobile Menu Trigger & Sheet */}
                <div className="flex items-center gap-2 lg:hidden ml-auto">
                    {/* MemeToggle removed */}
                     <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                aria-label="Toggle menu"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open Menu</span>
                             </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] pt-10 px-4 bg-background flex flex-col">
                             {/* Optional Close Button inside sheet */}
                            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </SheetClose>
                            <div className="mb-6 flex items-center gap-2">
                                 <CockroachMascot size="sm" className="text-primary/90" />
                                 <span className="text-lg font-bold">$ROACH</span>
                             </div>
                             <nav className="flex flex-col space-y-2 flex-grow">
                                {menuItems.map((item) => (
                                     <SheetClose key={item.href} asChild>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <a className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
                                                // Close menu on click
                                                 onClick={() => setIsMobileMenuOpen(false)} >
                                                {item.name}
                                            </a>
                                        </Link>
                                    </SheetClose>
                                ))}
                             </nav>
                             {/* Action Button at bottom */}
                            <div className="mt-auto border-t pt-4">
                                <Button className="w-full" asChild>
                                     <a href={SWAP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                        Get $ROACH
                                    </a>
                                </Button>
                             </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
// --- END OF FILE ./components/layout/Header.tsx ---