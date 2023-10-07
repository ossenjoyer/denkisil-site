import type { Handle } from "@sveltejs/kit";
import { locale } from "svelte-i18n";

export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get("accept-language")?.split(",")[0];

  if (lang) {
    lang == "ukr" || lang == "uk" || lang == "uk-UA"
      ? locale.set("uk")
      : locale.set("en");
  }
  return resolve(event);
};
