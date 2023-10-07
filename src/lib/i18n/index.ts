import { browser } from "$app/environment";
import { init, register } from "svelte-i18n";

register("en", () => import("$lib/locales/en.json"));
register("uk", () => import("$lib/locales/uk.json"));

init({
  fallbackLocale: "en",
  initialLocale: browser ? window.navigator.language : "en",
});
