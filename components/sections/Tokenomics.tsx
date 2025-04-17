// --- START OF FILE ./components/sections/Tokenomics.tsx ---

import React, { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, Sector } from 'recharts'; // Import Sector for active shape
import { cn } from "@/lib/utils";
import { Copy, Info, Check, PieChart as PieChartIcon, ExternalLink, Lock, FileCode, CheckCircle, Users, BarChartHorizontal } from "lucide-react";
// AUDIT FIX: Use only one TooltipProvider at a higher level
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Data (Unchanged) ---
const distributionData = [
    { name: "Liquidity Pool & Public Sale", value: 40, color: "#a78bfa", darkColor: "#c4b5fd", description: "Funds initial DEX liquidity and potential future controlled releases." }, // Adjusted violet for better contrast
    { name: "Marketing & Ecosystem", value: 10, color: "#10b981", darkColor: "#34d399", description: "Dedicated funds for awareness, partnerships, and growth initiatives." },
    { name: "Team Allocation", value: 10, color: "#f59e0b", darkColor: "#fcd34d", description: "Subject to a 6-month linear vesting schedule to ensure long-term commitment." },
    { name: "Exchange Listings & Expansion", value: 40, color: "#3b82f6", darkColor: "#60a5fa", description: "Reserved for potential future CEX/DEX listings and strategic expansion needs, locked until required." },
];
const contractAddress = "ROACHaBXfk3N57vr1gDmQCkSp22d9Xv4V1f"; // REPLACE if needed
const explorerBaseUrl = "https://solscan.io/token/";
const explorerLink = `${explorerBaseUrl}${contractAddress}`;
const pinkLockLink = "#"; // REPLACE
const auditLink = "#"; // REPLACE

const tokenDetails = [ // Unchanged structure, maybe tweak text if needed later
    { key: "Token Name", value: "$ROACH Antifragile", icon: null },
    { key: "Ticker", value: "$ROACH", icon: null },
    { key: "Blockchain", value: "Solana (SPL)", icon: null },
    { key: "Total Supply", value: "1,000,000,000", icon: BarChartHorizontal, tooltip: "Fixed supply. Contract minting function is permanently disabled." },
    { key: "Contract", value: contractAddress, icon: FileCode, isAddress: true, link: explorerLink, tooltip: "View the verified contract code on Solscan." },
    { key: "Audit Status", value: "CertiK Passed", icon: CheckCircle, link: auditLink, tooltip: "Audited by CertiK, confirming security. Click to view report." },
    { key: "Liquidity", value: "Locked (12 Months)", icon: Lock, link: pinkLockLink, tooltip: "Initial Raydium LP locked via PinkLock. Click to verify lock." },
    { key: "Team Vesting", value: "6 Months Linear", icon: Users, link: "#roadmap", tooltip: "Team tokens unlock gradually over 6 months. See Roadmap." },
];
// --------------------

// Custom Pie Chart Active Shape
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos; // Adjust label line start
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 15) * cos; // Adjust label line mid
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12; // Adjust label line end
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-sm font-bold">
         {payload.name}
       </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 4} outerRadius={outerRadius + 8} fill={fill} />{/* Outer ring on active */}
      {/* Label Line - Keep commented unless complex chart needs it */}
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="var(--color-foreground)" dy={-6} className="text-xs font-semibold">{`${payload.name}`}</text>
       <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="var(--color-muted-foreground)" dy={6} className="text-xs">{`(${(percent * 100).toFixed(0)}%)`}</text> */}
     </g>
   );
 };

export function Tokenomics() {
    const [copied, setCopied] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // State for active pie slice
    const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Assume dark default, adjust if needed

    // Handle theme changes for chart colors
    useEffect(() => {
        // Simple check for dark mode class on body or html
        const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');

        // Optional: Add MutationObserver for dynamic theme changes if needed
        // const observer = new MutationObserver(...)
        // return () => observer.disconnect();
    }, []); // Run on mount


    const handleCopy = () => {/* unchanged */ navigator.clipboard.writeText(contractAddress).then(() => { setCopied(true); toast.success("Contract address copied!"); setTimeout(() => setCopied(false), 2500); }).catch(err => { console.error("Copy failed:", err); toast.error("Failed to copy address."); }); };
    const onPieEnter = (_: any, index: number) => setActiveIndex(index);
    const onPieLeave = () => setActiveIndex(activeIndex); // Keep active index on leave, or set to null if preferred


    const cardVariants = { /* unchanged */ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
    const CustomTooltip = ({ active, payload }: any) => { /* unchanged */ if (active && payload && payload.length) { const data = payload[0].payload; return ( <div className="bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-3 text-xs max-w-[250px] backdrop-blur-sm"> <p className="font-bold mb-1 flex items-center"> <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: theme === 'dark' ? data.darkColor || data.color : data.color }}></span> {data.name} ({data.value}%) </p> <p className="text-muted-foreground mb-1">Tokens: <span className="font-medium text-foreground">{(data.value * 10_000_000).toLocaleString()}</span></p> {data.description && <p className="text-muted-foreground text-balance leading-snug">{data.description}</p>} </div> ); } return null; };
    const renderLegend = (props: any) => { /* unchanged */ const { payload } = props; return ( <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-4 text-xs"> {payload.map((entry: any, index: number) => ( <li key={`item-${index}`} className="flex items-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={onPieLeave}> <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: theme === 'dark' ? entry.payload.darkColor || entry.color : entry.color }}></span> <span className="text-muted-foreground">{entry.value} ({entry.payload.value}%)</span> </li> ))} </ul> ); };


    return (
        // AUDIT FIX: Added TooltipProvider wrapper
        <TooltipProvider>
            <Section id="tokenomics" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/10 to-muted/30 dark:from-background/10 dark:to-background/30"> {/* Added lg padding, dark bg adjust */}
                <SectionHeader title="Tokenomics: Built for Endurance" description="A strategically allocated fixed supply underpins the $ROACH ecosystem, balancing initial distribution with resources for sustained growth, marketing, and security." subtitle={<><PieChartIcon className="inline h-4 w-4 mr-1" /> Supply & Allocation</>} alignment="center" className="mb-16" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
                    {/* Distribution Chart Card */}
                    <motion.div className="lg:col-span-3" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 dark:border-border/20 h-full">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Token Allocation</CardTitle>
                                <CardDescription>Fixed Total Supply: 1,000,000,000 $ROACH</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <AspectRatio ratio={16 / 12} className="w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                                            <Pie
                                                activeIndex={activeIndex}
                                                activeShape={renderActiveShape} // Use custom active shape
                                                data={distributionData}
                                                cx="50%" cy="50%"
                                                labelLine={false}
                                                outerRadius="80%" innerRadius="55%" // Adjusted radius slightly
                                                fill="#8884d8" paddingAngle={3} dataKey="value"
                                                stroke="var(--card)" strokeWidth={2}
                                                onMouseEnter={onPieEnter}
                                                // onMouseLeave={onPieLeave} // Keep commented if preferred active index stays
                                            >
                                                 {/* Map colors based on theme */}
                                                {distributionData.map((entry, index) => (
                                                     <Cell key={`cell-${index}`} fill={theme === 'dark' ? entry.darkColor || entry.color : entry.color} />
                                                 ))}
                                            </Pie>
                                            <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent) / 0.3)' }} />
                                            <Legend content={renderLegend} verticalAlign="bottom" wrapperStyle={{ paddingTop: '10px', paddingBottom: '0px' }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </AspectRatio>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Token Details Card */}
                    <motion.div className="lg:col-span-2" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, delay: 0.1 }}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10 dark:border-border/20 h-full">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Key Information</CardTitle>
                                <CardDescription>Essential contract and token attributes.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        {tokenDetails.map((item) => (
                                            <TableRow key={item.key} className="border-b last:border-b-0 hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors h-11"> {/* Fixed height for row */}
                                                <TableCell className="font-medium text-muted-foreground text-xs align-middle pt-0 pb-0 pr-2 w-[110px] whitespace-nowrap">
                                                     <div className="flex items-center gap-1.5">
                                                        {item.icon && <item.icon className="h-3.5 w-3.5 shrink-0 opacity-80" />} {/* Reduced opacity slightly */}
                                                         {item.key}
                                                         {item.tooltip && ( /* Tooltip integrated */ <Tooltip delayDuration={100}> <TooltipTrigger className="cursor-help flex items-center"><Info className="h-3 w-3 text-muted-foreground/60 ml-1" /></TooltipTrigger> <TooltipContent side="top" align="start"><p className="max-w-[200px] text-xs">{item.tooltip}</p></TooltipContent> </Tooltip> )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-sm font-medium py-1 break-words align-middle">
                                                    {item.link ? ( <Link href={item.link} target={item.link === "#roadmap" ? "_self" : "_blank"} rel={item.link !== "#roadmap" ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm" title={item.tooltip || `View ${item.key}`}> <span className={item.isAddress ? "font-mono text-xs" : ""}>{item.value}</span> {!item.isAddress && item.link !== "#roadmap" && <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200"/>} </Link> ) : ( <span className={item.isAddress ? "font-mono text-xs" : ""}>{item.value}</span> )}
                                                    {item.isAddress && ( <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 align-[-3px] text-muted-foreground hover:text-foreground focus-visible:ring-offset-0" onClick={handleCopy} aria-label="Copy Contract Address"> {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />} </Button> )}
                                                </TableCell>
                                            </TableRow> ))}
                                    </TableBody>
                                </Table>
                                {/* Visual Placeholder UNCOMMENTED */}
                                 <div className="mt-4 border-t border-border/20 pt-4">
                                    <div className="bg-muted/30 dark:bg-muted/10 border border-dashed border-border/50 rounded-md flex items-center justify-center p-3 min-h-[60px]">
                                        <p className="text-xs text-muted-foreground/70 dark:text-muted-foreground/50 italic text-center">
                                           AI Prompt: Combined visual: small timeline showing 6mo vesting for Team tokens AND a vault icon showing 12mo lock for Liquidity.
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

// --- END OF FILE ./components/sections/Tokenomics.tsx ---