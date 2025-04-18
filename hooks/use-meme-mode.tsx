// --- START OF FILE hooks/use-meme-mode.tsx ---
"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface MemeModeContextType {
  memeMode: boolean;
  toggleMemeMode: () => void;
}

// Provide a default context value matching the type structure
const defaultContextValue: MemeModeContextType = {
  memeMode: false, // Default to professional mode
  toggleMemeMode: () => { console.warn("MemeModeProvider not found"); } // Placeholder toggle
};

const MemeModeContext = createContext<MemeModeContextType>(defaultContextValue);

export const MemeModeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [memeMode, setMemeMode] = useState<boolean>(false); // Default state

  const toggleMemeMode = useCallback(() => {
    setMemeMode(prevMode => !prevMode);
    // Optionally, add logic here to persist the mode (e.g., localStorage)
    // localStorage.setItem('memeMode', JSON.stringify(!memeMode));
  }, []); // Removed memeMode dependency, rely on functional update

  // Initialize mode from localStorage on mount (optional persistence)
  // useEffect(() => {
  //   const persistedMode = localStorage.getItem('memeMode');
  //   if (persistedMode) {
  //     setMemeMode(JSON.parse(persistedMode));
  //   }
  // }, []);

  const contextValue = React.useMemo(() => ({ memeMode, toggleMemeMode }), [memeMode, toggleMemeMode]);


  return (
    <MemeModeContext.Provider value={contextValue}>
      {children}
    </MemeModeContext.Provider>
  );
};

export const useMemeMode = (): MemeModeContextType => {
  const context = useContext(MemeModeContext);
  // No check needed if default value is provided in createContext
  // if (!context) {
  //   throw new Error("useMemeMode must be used within a MemeModeProvider");
  // }
  return context;
};
// --- END OF FILE hooks/use-meme-mode.tsx ---