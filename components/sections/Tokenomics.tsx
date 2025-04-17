// --- START OF FILE ./components/sections/Tokenomics.tsx ---

"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { cn } from "@/lib/utils";
import { Copy, Info, Check, PieChart as PieChartIcon, ExternalLink, Lock, FileCode, CheckCircle, BarChartHorizontal, Users } from "lucide-react"; // Added Lock, FileCode, CheckCircle, BarChartHorizontal
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";

// Distribution Data - Remains the same
const distributionData = [
    { name: "Liquidity Pool & Public Sale", value: 40, color: "#8b5cf6", description: "Funds initial DEX liquidity and potential future controlled releases." }, // Added descriptions
    { name: "Marketing & Ecosystem", value: 10, color: "#10b981", description: "Dedicated funds for awareness, partnerships, and growth initiatives." },
    { name: "Team Allocation", value: 10, color: "#f59e0b", description: "Subject to a 6-month linear vesting schedule to ensure long-term commitment." },
    { name: "Exchange Listings & Expansion", value: 40, color: "#3b82f6", description: "Reserved for potential future CEX/DEX listings and strategic expansion needs, locked until required." },
];

// Token Details - Enhanced with Icons and refined descriptions/links
const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // REPLACE if needed
const explorerBaseUrl = "https://solscan.io/token/";
const explorerLink = `${explorerBaseUrl}${contractAddress}`;
const pinkLockLink = "#"; // REPLACE with actual PinkLock link
const auditLink = "#"; // REPLACE with actual CertiK audit link

const tokenDetails = [
    { key: "Token Name", value: "$ROACH Antifragile", icon: null }, // Clearer Name
    { key: "Ticker", value: "$ROACH", icon: null },
    { key: "Blockchain", value: "Solana (SPL)", icon: null },
    { key: "Total Supply", value: "1,000,000,000", icon: BarChartHorizontal, tooltip: "Fixed supply. Contract minting function is permanently disabled." },
    { key: "Contract", value: contractAddress, icon: FileCode, isAddress: true, link: explorerLink, tooltip: "View the verified contract code on Solscan." },
    { key: "Audit Status", value: "CertiK Passed", icon: CheckCircle, link: auditLink, tooltip: "Audited by CertiK, confirming security. Click to view report." }, // Renamed Key
    { key: "Liquidity", value: "Locked (12 Months)", icon: Lock, link: pinkLockLink, tooltip: "Initial Raydium LP locked via PinkLock. Click to verify lock." }, // Renamed Key
    { key: "Team Vesting", value: "6 Months Linear", icon: Users, link: "#roadmap", tooltip: "Team tokens unlock gradually over 6 months. See Roadmap." }, // Renamed Key, internal link
];

export function Tokenomics() {
    // Removed useMemeMode
    const [copied, setCopied] = useState(false);

    // Copy Handler - Remains the same
    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
            setCopied(true);
            toast.success("Contract address copied!"); // Unified tone
            setTimeout(() => setCopied(false), 2500);
        }).catch(err => {
            console.error("Copy failed:", err);
            toast.error("Failed to copy address.");
        });
    };

    // Custom Recharts Tooltip (Includes Description) - Enhanced
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-3 text-xs max-w-[250px]">
                    <p className="font-bold mb-1 flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: data.color }}></span>
                        {data.name} ({data.value}%)
                    </p>
                    {/* Added token amount */}
                    <p className="text-muted-foreground mb-1">Tokens: <span className="font-medium text-foreground">{(data.value * 10_000_000).toLocaleString()}</span></p>
                    {/* Added description */}
                     {data.description && <p className="text-muted-foreground text-balance leading-snug">{data.description}</p>}
                </div>
            );
        }
        return null;
    };

    // Custom Legend - Remains the same functionally, slight style tweak may occur via Card className
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
        <Section id="tokenomics" className="py-20 md:py-28 bg-gradient-to-b from-muted/10 to-muted/30">
            <SectionHeader
                title="Tokenomics: Built for Endurance" // Clearer title
                description="A strategically allocated fixed supply underpins the $ROACH ecosystem, balancing initial distribution with resources for sustained growth, marketing, and security."
                subtitle={<><PieChartIcon className="inline h-4 w-4 mr-1" /> Supply & Allocation</>}
                alignment="center"
                className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start"> {/* Added items-start */}
                {/* Distribution Chart */}
                <motion.div
                    className="lg:col-span-3"
                    variants={cardVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 h-full"> {/* Added h-full */}
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl">Token Allocation</CardTitle>
                            <CardDescription>Fixed Total Supply: 1,000,000,000 $ROACH</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <AspectRatio ratio={16 / 12} className="w-full"> {/* Slightly taller aspect ratio */}
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <Pie
                                            data={distributionData}
                                            cx="50%" cy="50%"
                                            labelLine={false}
                                            outerRadius="85%" innerRadius="50%" // Adjusted inner radius
                                            fill="#8884d8" paddingAngle={2} dataKey="value"
                                            stroke="var(--card)" strokeWidth={3} // Thicker stroke for visual separation
                                        >
                                            {distributionData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent) / 0.5)' }} />
                                         <Legend content={renderLegend} verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px', paddingBottom: '5px' }}/>
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
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, delay: 0.1 }}
                >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 h-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl">Key Information</CardTitle>
                             <CardDescription>Essential contract and token details.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableBody>
                                    {tokenDetails.map((item) => (
                                        <TableRow key={item.key} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                                            <TableCell className="font-medium text-muted-foreground text-xs align-top pt-3 pr-2 w-[100px] whitespace-nowrap"> {/* Adjusted width slightly */}
                                                 <div className="flex items-center gap-1.5">
                                                     {item.icon && <item.icon className="h-3.5 w-3.5 shrink-0" />}
                                                    {item.key}
                                                    {item.tooltip && (
                                                        <TooltipProvider delayDuration={100}> <Tooltip>
                                                            <TooltipTrigger className="cursor-help"><Info className="h-3 w-3 text-muted-foreground/60 inline-block align-[-1px]" /></TooltipTrigger>
                                                            <TooltipContent side="top" align="start"><p className="max-w-[200px] text-xs">{item.tooltip}</p></TooltipContent>
                                                        </Tooltip> </TooltipProvider>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-sm font-medium py-2.5 break-words">
                                                {item.link ? (
                                                    <Link
                                                        href={item.link}
                                                        target={item.link === "#roadmap" ? "_self" : "_blank"} // Allow internal link for roadmap
                                                        rel={item.link !== "#roadmap" ? "noopener noreferrer" : undefined}
                                                        className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                                                        title={item.tooltip || `View ${item.key}`}
                                                    >
                                                        <span className={item.isAddress ? "font-mono text-xs" : ""}>{item.value}</span>
                                                         {!item.isAddress && <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200"/>}
                                                     </Link>
                                                 ) : (
                                                     <span className={item.isAddress ? "font-mono text-xs" : ""}>{item.value}</span>
                                                 )}
                                                {item.isAddress && (
                                                     <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 align-[-3px] text-muted-foreground hover:text-foreground" onClick={handleCopy} aria-label="Copy Contract Address">
                                                         {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                                                     </Button>
                                                 )}
                                             </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                             {/* Optional Visual Placeholder for Vesting/Lock */}
                             {/* <div className="mt-6 bg-muted/30 border border-dashed rounded flex items-center justify-center p-3 aspect-[16/5]">
                               <p className="text-xs text-muted-foreground italic text-center">AI Prompt: Simple timeline graphic illustrating the 6-month linear vesting schedule for team tokens. / Simple graphic showing a locked vault icon with '12 Months' text for liquidity lock.</p>
                            </div> */}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}

// --- END OF FILE ./components/sections/Tokenomics.tsx ---