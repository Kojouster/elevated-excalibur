import { useLanguage } from "@/i18n/LanguageContext";
import { homeContent, type HomeLocale } from "@/i18n/home";

export const useHomeContent = (): HomeLocale => {
  const { language } = useLanguage();
  return homeContent[language] ?? homeContent.en;
};
