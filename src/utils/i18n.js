import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

console.log();

i18n.use(I18NextHttpBackend).use(initReactI18next).init({});

export default i18n;
