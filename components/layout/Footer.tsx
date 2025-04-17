// --- START OF FILE ./components/layout/Footer.tsx ---

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CockroachMascot } from "@/components/ui/CockroachMascot"; // Import mascot for logo
import { cn } from "@/lib/utils";
import { useMemeMode } from "@/hooks/use-meme-mode";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { toast } from "sonner";
import { ExternalLink } from "lucide-react"; // For external links

export function Footer() {
  const { memeMode } = useMemeMode();

  // Replace with actual links
  const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // REPLACE
  const explorerLink = `https://solscan.io/token/${contractAddress}`; // Example Solscan link
  const whitepaperLink = "#"; // Replace with actual path or URL
  const auditLink = "#"; // Replace with actual path or URL
  const twitterLink = "#";
  const telegramLink = "#";
  const discordLink = "#";

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    if (emailInput && emailInput.value) {
      // Replace with actual subscription logic
      console.log("Subscribing email:", emailInput.value);
      toast.success(
        `${memeMode ? "Intel acquired!" : "Subscribed!"} (Demo)`
      );
      e.currentTarget.reset();
    } else {
      toast.error("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-muted/50 border-t mt-24"> {/* Added more margin-top */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5"> {/* Adjusted grid for 5 columns */}
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2"> {/* Brand takes more space */}
            <Link href="/" className="flex items-center gap-2">
              <CockroachMascot size="sm" />
              <span
                className={cn(
                  "text-xl font-bold",
                  memeMode && "font-mission"
                )}
              >
                $ROACH
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {memeMode
                ? "The token that eats FUD for breakfast. Built to survive anything."
                : "The antifragile SPL token designed to thrive under market pressure on Solana."}
            </p>
            <div className="flex space-x-2">
              <SocialLink href={twitterLink} icon={FaXTwitter} label="Twitter / X" />
              <SocialLink href={telegramLink} icon={FaTelegram} label="Telegram" />
              <SocialLink href={discordLink} icon={FaDiscord} label="Discord" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li><FooterLink href="#problem-solution">Concept</FooterLink></li>
              <li><FooterLink href="#mechanics">Mechanics</FooterLink></li>
              <li><FooterLink href="#tokenomics">Tokenomics</FooterLink></li>
              <li><FooterLink href="#roadmap">Roadmap</FooterLink></li>
              <li><FooterLink href="#faq">FAQ</FooterLink></li>
              <li><FooterLink href="#how-to-buy">How to Buy</FooterLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <FooterLink href={whitepaperLink} target="_blank">Whitepaper <ExternalLink className="inline h-3 w-3 ml-0.5" /></FooterLink>
              </li>
              <li>
                <FooterLink href={auditLink} target="_blank">Audit <ExternalLink className="inline h-3 w-3 ml-0.5" /></FooterLink>
              </li>
              <li>
                <FooterLink href={explorerLink} target="_blank">Contract <ExternalLink className="inline h-3 w-3 ml-0.5" /></FooterLink>
              </li>
               <li>
                <FooterLink href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" target="_blank">Buy on Raydium <ExternalLink className="inline h-3 w-3 ml-0.5" /></FooterLink>
              </li>
               <li>
                <FooterLink href="https://jup.ag/swap/SOL-ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f" target="_blank">Swap on Jupiter <ExternalLink className="inline h-3 w-3 ml-0.5" /></FooterLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              {memeMode ? "Get Intel" : "Stay Updated"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {memeMode ? "Alpha drops, straight to your inbox." : "Subscribe for the latest $ROACH news and updates."}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="your.email@domain.com"
                className="flex-1 text-xs h-9" // Smaller input
                required
                aria-label="Email for newsletter"
              />
              <Button type="submit" size="sm" className="h-9">
                {memeMode ? "Sign Up" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} $ROACH Protocol. All rights reserved.</p>
          {/* Optional links */}
          {/* <div className="flex gap-4">
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </div> */}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground/80 text-center max-w-3xl mx-auto">
            <span className="font-semibold">Disclaimer:</span> Cryptocurrency
            investment involves significant risk. $ROACH is an experimental token
            with novel mechanics and should be considered highly speculative. Do
            Your Own Research (DYOR) before investing. Nothing on this website
            constitutes financial advice. The value of $ROACH can go down as
            well as up. Never invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper component for footer links
function FooterLink({ href, children, target }: { href: string; children: React.ReactNode, target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="hover:text-foreground transition-colors duration-200 inline-flex items-center"
    >
      {children}
    </Link>
  );
}

// Helper component for social links
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Button
      variant="outline" // Changed to outline for better visibility
      size="icon"
      className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50"
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label} // Added title for tooltip on hover
      >
        <Icon className="h-4 w-4" />
      </a>
    </Button>
  );
}

// --- END OF FILE ./components/layout/Footer.tsx ---