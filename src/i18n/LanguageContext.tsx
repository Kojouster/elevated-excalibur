import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "./en";
import { sk } from "./sk";

export type Language = "en" | "sk";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Translations> = { en, sk };

const defaultT = (key: string): string => {
  const keys = key.split(".");
  let val: any = translations.en;
  for (const k of keys) val = val?.[k];
  return typeof val === "string" ? val : key;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: defaultT,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("ea-lang");
    return (saved === "sk" ? "sk" : "en") as Language;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("ea-lang", lang);
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split(".");
    let val: any = translations[language];
    for (const k of keys) {
      val = val?.[k];
    }
    if (typeof val === "string") return val;
    // fallback to English
    val = translations.en;
    for (const k of keys) {
      val = val?.[k];
    }
    return typeof val === "string" ? val : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
