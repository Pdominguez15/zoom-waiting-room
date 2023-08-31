import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import es from './assets/locales/es/es.json';
import en from './assets/locales/en/en.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            }
        }
    });

export default i18n;
