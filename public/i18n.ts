import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next).init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR'],
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
        order: ['navigator', 'htmlTag', 'cookie', 'localStorage'],
      caches: ['cookie'],
    }
})