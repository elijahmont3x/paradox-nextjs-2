// --- START OF FILE components/ui/sonner.tsx ---
"use client"

// Use next-themes ThemeProvider for theme detection
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import React from 'react'; // Import React for CSSProperties typing

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme(); // Get current theme

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]} // Cast theme string
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            // Apply custom variables from globals.css if needed for richer styling
        },
      }}
       // Pass CSS variables from our theme if needed (optional)
      // style={
      //   {
      //     '--normal-bg': 'var(--popover)', // Map Sonner vars to our theme vars
      //     '--normal-text': 'var(--popover-foreground)',
      //     '--normal-border': 'var(--border)',
      //     // Add mappings for success, error, warning if needed
      //     // '--success-bg': 'var(--color-success-bg)',
      //     // '--error-bg': 'var(--color-destructive)',
      //     // '--warning-bg': 'var(--color-warning-bg)',
      //   } as React.CSSProperties
      // }
      {...props}
    />
  )
}

export { Toaster }
// --- END OF FILE components/ui/sonner.tsx ---