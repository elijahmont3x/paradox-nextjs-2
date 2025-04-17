// --- START OF FILE ./components/layout/Footer.tsx ---

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CockroachMascot } from "@/components/ui/CockroachMascot";
import { cn } from "@/lib/utils";
// Using react-icons for potentially better brand recognition
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

// --- Define Footer Links (REPLACE '#' with actual URLs) ---
const SOCIAL_LINKS = {
    twitter: "#",
    telegram: "#",
    discord: "#",
};
const RESOURCE_LINKS = {
    whitepaper: "#",
    audit: "#", // Link to CertiK report page or PDF
    contract: "https://solscan.io/token/ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f", // Example
    lockedLiquidity: "#", // Link to PinkLock proof
    buyJupiter: "https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f", // Example
    buyRaydium: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f", // Example
};
const NAV_LINKS = [ // Mirror header for consistency
    { name: "Concept", href: "#antifragile-edge" },
    { name: "Mechanics", href: "#mechanics" },
    { name: "Performance", href: "#market-scenarios" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Security", href: "#security" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
];
// ------------------------------------------------------------


export function Footer() {
    // Removed useMemeMode hook and memeMode variable
    // Removed handleSubscribe and newsletter form (often low engagement, adds complexity unless needed)

    return (
        <footer className="bg-muted/50 border-t mt-24 dark:bg-background/30"> {/* Adjusted bg */}
            <div className="container mx-auto pt-12 pb-8 px-4 md:px-6"> {/* Reduced bottom padding */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-6 lg:grid-cols-12"> {/* More granular grid */}

                    {/* Brand & Socials (Takes up more space) */}
                    <div className="md:col-span-3 lg:col-span-4 space-y-4">
                        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm w-fit">
                            <CockroachMascot size="sm" />
                            <span className="text-xl font-bold">$ROACH</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                           The antifragile SPL token engineered to gain strength from market volatility.
                        </p>
                         <div className="flex items-center gap-2 pt-1">
                             <SocialLink href={SOCIAL_LINKS.twitter} icon={FaXTwitter} label="Follow $ROACH on X (Twitter)" />
                             <SocialLink href={SOCIAL_LINKS.telegram} icon={FaTelegram} label="Join $ROACH Telegram" />
                             <SocialLink href={SOCIAL_LINKS.discord} icon={FaDiscord} label="Join $ROACH Discord" />
                         </div>
                    </div>

                    {/* Navigate Links */}
                    <div className="md:col-span-3 lg:col-span-2 space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Navigate</h4>
                        <ul className="space-y-1.5 text-sm">
                           {NAV_LINKS.map(link => (
                               <li key={link.href}><FooterLink href={link.href}>{link.name}</FooterLink></li>
                           ))}
                        </ul>
                    </div>

                    {/* Resource Links */}
                    <div className="md:col-span-3 lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Resources</h4>
                        <ul className="space-y-1.5 text-sm">
                            <li><FooterLink href={RESOURCE_LINKS.whitepaper} target="_blank">Whitepaper <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                            <li><FooterLink href={RESOURCE_LINKS.audit} target="_blank">Security Audit (CertiK) <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                            <li><FooterLink href={RESOURCE_LINKS.contract} target="_blank">Verified Contract <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                            <li><FooterLink href={RESOURCE_LINKS.lockedLiquidity} target="_blank">Liquidity Lock Proof <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                        </ul>
                    </div>

                    {/* Quick Buy Links */}
                     <div className="md:col-span-3 lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Get $ROACH</h4>
                         <ul className="space-y-2 text-sm">
                           <li><FooterLink href={RESOURCE_LINKS.buyJupiter} target="_blank">Swap on Jupiter Aggregator <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                           <li><FooterLink href={RESOURCE_LINKS.buyRaydium} target="_blank">Swap on Raydium <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" /></FooterLink></li>
                           {/* Add link to HowToBuy Section */}
                           <li><FooterLink href="#how-to-buy">View Buying Guide</FooterLink></li>
                         </ul>
                     </div>

                </div>

                <Separator className="my-8 bg-border/50" /> {/* Subtle separator */}

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
                    <p>© {new Date().getFullYear()} $ROACH. All rights reserved.</p>
                    {/* Optionally add Terms/Privacy */}
                    {/* <div className="flex gap-4">
                      <FooterLink href="#">Terms of Service</FooterLink>
                      <FooterLink href="#">Privacy Policy</FooterLink>
                    </div> */}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-[0.7rem] leading-relaxed text-muted-foreground/80 text-center max-w-4xl mx-auto"> {/* Slightly smaller text */}
                        <span className="font-semibold">Disclaimer:</span> Cryptocurrency investment carries significant risk. $ROACH is an experimental token leveraging novel antifragile mechanics; it should be considered highly speculative. Prices can fluctuate dramatically, and you may lose your entire investment. The information on this website is not financial advice. Always conduct thorough Due Diligence (DYOR) and consult with a qualified financial advisor before making any investment decisions. Understand the risks involved and never invest more than you can comfortably afford to lose. $ROACH makes no guarantee of profit or future value.
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Helper: FooterLink (Unchanged functionally)
function FooterLink({ href, children, target }: { href: string; children: React.ReactNode, target?: string }) {
    return (
        <Link
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
            aria-label={typeof children === 'string' ? children : undefined} // Basic aria-label for screen readers
        >
            {children}
        </Link>
    );
}

// Helper: SocialLink (Unchanged functionally)
function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
    return (
        <Button
            variant="ghost" // Use ghost for less emphasis than outline
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-accent/20 rounded-full" // Rounded for social icon feel
            asChild
        >
            <a
                href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label} title={label}
            >
                <Icon className="h-4 w-4" />
            </a>
        </Button>
    );
}

// --- END OF FILE ./components/layout/Footer.tsx ---