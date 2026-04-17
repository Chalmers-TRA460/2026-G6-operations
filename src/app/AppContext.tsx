import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, Mode } from '../types';

type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  languageChosen: boolean;
  languageModalOpen: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mode, setMode] = useState<Mode>('patient');
  const [languageChosen, setLanguageChosen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'sv') {
      setLanguageState(saved);
      setLanguageChosen(true);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    setLanguageChosen(true);
    setLanguageModalOpen(false);
  }

  return (
    <AppContext.Provider value={{
      language, setLanguage,
      mode, setMode,
      languageChosen,
      languageModalOpen,
      openLanguageModal: () => setLanguageModalOpen(true),
      closeLanguageModal: () => setLanguageModalOpen(false),
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
