// --- START OF FILE components/layout/Header.tsx ---
"use client";

import React, { useState, useEffect, useCallback, memo } from "react"; // Import memo
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/Navigation-Menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/Sheet";
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