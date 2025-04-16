"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import { useEffect, useState } from 'react';

export function ClientProviders({ children }) {
  const [dir, setDir] = useState('ltr');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    setDir(i18n.language === 'ar' ? 'rtl' : 'ltr');
    setLang(i18n.language);
    
    const handleLanguageChanged = (lng) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
      setDir(lng === 'ar' ? 'rtl' : 'ltr');
      setLang(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}