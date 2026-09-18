import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationPT from './locales/pt.json'
import translationFR from './locales/fr.json'
import translationEN from './locales/en.json'

const resources = {
  pt: { translation: translationPT },
  fr: { translation: translationFR },
  en: { translation: translationEN }
}

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador do usuário automaticamente
  .use(initReactI18next) // Conecta as traduções ao ecossistema React
  .init({
    resources,
    fallbackLng: 'pt', // Se o usuário falar um idioma não mapeado, mostra português
    interpolation: {
      escapeValue: false // O React já previne injeções de script nativamente
    }
  })

export default i18n
