import React, { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to Hindi ('hi') to celebrate Indian cultural identity, user can toggle to 'en'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('mvss_lang') || 'hi';
  });

  useEffect(() => {
    localStorage.setItem('mvss_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const t = content[lang] || content.hi;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

