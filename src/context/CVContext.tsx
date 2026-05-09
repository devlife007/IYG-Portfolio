import React, { createContext, useContext, useState, ReactNode } from 'react';
import CVModal from '../components/CVModal';

interface CVContextType {
  openCV: () => void;
  closeCV: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const openCV = () => setIsCVOpen(true);
  const closeCV = () => setIsCVOpen(false);

  return (
    <CVContext.Provider value={{ openCV, closeCV }}>
      {children}
      <CVModal isOpen={isCVOpen} onClose={closeCV} />
    </CVContext.Provider>
  );
}

export function useCV() {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
}
