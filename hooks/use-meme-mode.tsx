"use client";

import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';

interface MemeModeContextType {
  memeMode: boolean;
  toggleMemeMode: () => void;
}

const MemeModeContext = createContext<MemeModeContextType | undefined>(undefined);

export const MemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [memeMode, setMemeMode] = useState(false); // Default to professional

  const toggleMemeMode = () => {
    setMemeMode((prev) => !prev);
  };

  // Add/remove class from body
  useEffect(() => {
    if (memeMode) {
      document.body.classList.add('meme-mode');
    } else {
      document.body.classList.remove('meme-mode');
    }
  }, [memeMode]);

  const value = useMemo(() => ({ memeMode, toggleMemeMode }), [memeMode]);

  return (
    <MemeModeContext.Provider value={value}>
      {children}
    </MemeModeContext.Provider>
  );
};

export const useMemeMode = (): MemeModeContextType => {
  const context = useContext(MemeModeContext);
  if (!context) {
    throw new Error('useMemeMode must be used within a MemeModeProvider');
  }
  return context;
};