import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    resources: {
      en: {
        translation: require('../../public/locales/en/common.json')
      },
      ar: {
        translation: require('../../public/locales/ar/common.json')
      }
    }
  });

export default i18n;