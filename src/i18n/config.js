import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "FA",
  lng: "FA",
  resources: {
    EN: {
      translations: require("./locales/en/translations.json"),
    },
    FA: {
      translations: require("./locales/fa/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["EN", "FA"];

export default i18n;
