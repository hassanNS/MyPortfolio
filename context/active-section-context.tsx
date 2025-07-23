"use client"
import React, { useState, createContext} from 'react'
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>;
};


// to consume a context
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// a component that keeps track of state using the context API
// You can have server components wrapped with this too as long as you use the children prop
export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeofLastClick, setTimeofLastClick] = useState(0);

  // Passthrough component to provide the context value
  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeofLastClick,
    setTimeofLastClick }}>
    {children}
  </ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}
