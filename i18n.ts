import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next).init({
    fallbackLng: {
      'pt': ['pt-BR', 'en'], 
      'default': ['en'] 
    },
    supportedLngs: ['en','pt', 'pt-BR'],
    nonExplicitSupportedLngs: true,
    load: 'currentOnly',
    debug:  import.meta.env.MODE === 'development', 
     interpolation: {
      escapeValue: false,
    },
     backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['home', 'components'], 
    defaultNS:'home',
    detection: {
       order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',

    convertDetectedLanguage: (lng: string) => {
        if (lng.startsWith('pt')) return 'pt-BR';
        return ['en', 'pt-BR'].includes(lng) ? lng : 'en';
      }
    }
} as const)
export default i18n