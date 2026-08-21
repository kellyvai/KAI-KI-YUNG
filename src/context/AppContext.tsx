import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, FieldNote, CareMap, Conviction } from '../types';
import { fieldNotesData } from '../data/fieldNotesData';
import { careMapsData } from '../data/careMapsData';
import { convictionsData } from '../data/convictionsData';

export type ActiveTab = 'home' | 'convictions' | 'framework' | 'care-maps' | 'field-notes' | 'contact';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedFieldNote: FieldNote | null;
  setSelectedFieldNote: (note: FieldNote | null) => void;
  selectedCareMap: CareMap | null;
  setSelectedCareMap: (map: CareMap | null) => void;
  selectedConviction: Conviction | null;
  setSelectedConviction: (conviction: Conviction | null) => void;
  openFieldNoteBySlug: (slug: string) => void;
  openCareMapById: (id: string) => void;
  openConvictionById: (id: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh-TW');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedFieldNote, setSelectedFieldNote] = useState<FieldNote | null>(null);
  const [selectedCareMap, setSelectedCareMap] = useState<CareMap | null>(null);
  const [selectedConviction, setSelectedConviction] = useState<Conviction | null>(null);

  const openFieldNoteBySlug = (slug: string) => {
    const note = fieldNotesData.find((n) => n.slug === slug || n.id === slug);
    if (note) {
      setSelectedFieldNote(note);
    }
  };

  const openCareMapById = (id: string) => {
    const map = careMapsData.find((m) => m.id === id || m.slug === id);
    if (map) {
      setSelectedCareMap(map);
    }
  };

  const openConvictionById = (id: string) => {
    const conv = convictionsData.find((c) => c.id === id || c.slug === id);
    if (conv) {
      setSelectedConviction(conv);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace(/^#/, '');
    
    // Check if cleanId matches one of our standalone pages
    if (cleanId === 'convictions' || cleanId === 'framework' || cleanId === 'care-maps' || cleanId === 'field-notes' || cleanId === 'contact') {
      setActiveTab(cleanId as ActiveTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById(cleanId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        selectedFieldNote,
        setSelectedFieldNote,
        selectedCareMap,
        setSelectedCareMap,
        selectedConviction,
        setSelectedConviction,
        openFieldNoteBySlug,
        openCareMapById,
        openConvictionById,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
