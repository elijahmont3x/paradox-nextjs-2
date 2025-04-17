// --- START OF FILE ./components/sections/Tokenomics.tsx ---

"use client";

import React, { useState } from "react"; // Import useState for copy functionality
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader"; // Use SectionHeader
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"; // Removed TableHead/Header as it's a key-value table
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { useMemeMode } from "@/hooks/use-meme-mode";
import { cn } from "@/lib/utils";
import { Copy, Info, Check, PieChart as PieChartIcon, ExternalLink } from "lucide-react"; // Added Check and PieChartIcon
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Distribution Data based on Whitepaper v2
const distributionData = [
  { name: "Liquidity & Presales", value: 40, color: "#8b5cf6" }, // Violet 500
  { name: "Marketing", value: 10, color: "#10b981" }, // Emerald 500
  { name: "Team (6m Vested)", value: 10, color: "#f59e0b" }, // Amber 500
  { name: "CEX Listings (Locked)", value: 40, color: "#3b82f6" }, // Blue 500
];

// Token Details
const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // REPLACE with actual address
const explorerBaseUrl = "https://solscan.io/token/"; // Or SolanaFM etc.
const explorerLink = `${explorerBaseUrl}${contractAddress}`;
const pinkLockLink = "#"; // REPLACE with actual PinkLock link

const tokenDetails = [
    { key: "Token Name", value: "ROACH", memeValue: "The Unkillable One" },
    { key: "Ticker", value: "$ROACH" },
    { key: "Total Supply", value: "1,000,000,000", tooltip: "Fixed supply. No more can ever be created (no mint function)." },
    { key: "Blockchain", value: "Solana (SPL)" },
    { key: "Contract Address", value: contractAddress, isAddress: true, link: explorerLink },
    { key: "Liquidity Lock", value: "12 Months", link: pinkLockLink, tooltip: "Initial LP tokens locked via PinkLock. Cannot be rugged." },
    { key: "Audit", value: "CertiK Passed", link: "#", tooltip: "Full audit completed, verifying contract security." } // REPLACE # with audit link
];

export function Tokenomics() {
  const { memeMode } = useMemeMode();
  const [copied, setCopied] = useState(false);

  // Copy Handler
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
        setCopied(true);
        toast.success(memeMode ? "Address Secured!" : "Contract address copied!");
        setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
        console.error("Copy failed:", err);
        toast.error("Failed to copy address.");
    });
  };

  // Custom Tooltip for Recharts Pie Chart
   const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; // Access the data object
      return (
        <div className="bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-3 text-xs">
          <p className="font-bold mb-1 flex items-center">
             <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: data.color }}></span>
             {data.name}
          </p>
          <p className="text-muted-foreground">Allocation: <span className="font-medium text-foreground">{data.value}%</span></p>
          <p className="text-muted-foreground">Tokens: <span className="font-medium text-foreground">{(data.value * 10_000_000).toLocaleString()}</span></p>
        </div>
      );
    }
    return null;
  };

  // Custom Legend for Recharts Pie Chart
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4 text-xs">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }}></span>
            <span className="text-muted-foreground">{entry.value} ({entry.payload.value}%)</span>
          </li>
        ))}
      </ul>
    );
  };

   // Animation Variants
   const cardVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
   };

  return (
    <Section id="tokenomics" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-muted/30">
      <SectionHeader
        title={memeMode ? "Roachonomics 101: Supply Breakdown" : "Tokenomics & Distribution"}
        description={memeMode
          ? "How the $ROACH supply is sliced. Built for long-term survival, not a quick pump & dump rug buffet."
          : "A transparent and strategic distribution ensures ecosystem health, marketing capabilities, and long-term project alignment."}
        subtitle={<><PieChartIcon className="inline h-4 w-4 mr-1"/> Supply Allocation</>}
        alignment="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Distribution Chart */}
        <motion.div
            className="lg:col-span-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300", memeMode && "border-dashed border-primary/30")}>
            <CardHeader>
                <CardTitle className={cn("text-xl md:text-2xl", memeMode && "font-mission")}>Token Allocation</CardTitle>
                <CardDescription>Total Supply: 1,000,000,000 $ROACH (Fixed)</CardDescription>
            </CardHeader>
            <CardContent>
                <AspectRatio ratio={16 / 11} className="w-full h-full"> {/* Adjusted aspect ratio slightly */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="85%" // Slightly larger radius
                        innerRadius="55%" // Larger donut hole
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        stroke="var(--color-background)" // Add stroke matching background for separation
                        strokeWidth={2}
                    >
                        {distributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted) / 0.5)' }} /> {/* Added hover effect */}
                    <Legend content={renderLegend} verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px' }}/>
                    </PieChart>
                </ResponsiveContainer>
                </AspectRatio>
            </CardContent>
            </Card>
        </motion.div>

        {/* Token Details Table */}
        <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, delay: 0.1 }}
        >
            <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 h-full", memeMode && "border-dashed border-primary/30")}> {/* Added h-full */}
            <CardHeader>
                <CardTitle className={cn("text-xl md:text-2xl", memeMode && "font-mission")}>Key Details</CardTitle>
                <CardDescription>Essential token information.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableBody>
                    {tokenDetails.map((item) => (
                    <TableRow key={item.key} className="border-b last:border-b-0">
                        <TableCell className="font-medium text-muted-foreground text-xs align-top pt-3 pr-2 w-[110px]"> {/* Fixed width for key */}
                            {item.key}
                            {item.tooltip && (
                                <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-3 w-3 text-muted-foreground/70 inline-block ml-1 cursor-help align-[-1px]" />
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="start">
                                        <p className="max-w-[200px] text-xs">{item.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            )}
                        </TableCell>
                        <TableCell className="text-sm font-medium py-2.5 break-words"> {/* Allow address to break */}
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                                title={item.isAddress ? "View on Explorer" : `View ${item.key}`}
                            >
                                {memeMode && item.memeValue ? item.memeValue : item.value}
                                {!item.isAddress && <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200"/>}
                            </a>
                        ) : (
                             memeMode && item.memeValue ? item.memeValue : item.value
                        )}
                        {item.isAddress && (
                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-1.5 align-[-3px]" onClick={handleCopy} aria-label="Copy Contract Address">
                                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground"/>}
                            </Button>
                        )}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
        </motion.div>
      </div>
    </Section>
  );
}
// --- END OF FILE ./components/sections/Tokenomics.tsx ---