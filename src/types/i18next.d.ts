import "i18next";

import en from "./../../public/locales/en/translation.json";
import ua from "./../../public/locales/ua/translation.json";

const resources = { en, ua };

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
