import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import path from "path";

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      locationPath: "locals/{{lng}}/translation.json"
    }
  });
