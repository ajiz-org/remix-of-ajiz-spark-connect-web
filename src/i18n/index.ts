import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import fr from "./locales/fr";
import ar from "./locales/ar";

export const supportedLanguages = ["en", "fr", "ar"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages as unknown as string[],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

const applyDocumentLanguage = (lng: string) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
};

applyDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);

i18n.on("languageChanged", (lng) => {
  applyDocumentLanguage(lng);
});

export default i18n;
