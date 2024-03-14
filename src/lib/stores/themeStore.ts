import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

let themeChanged: boolean = false;

const createThemeStore = () => {
  const { subscribe, set } = persist(
    writable(themeChanged),
    createLocalStorage(),
    "theme"
  );

  return {
    subscribe,
    toggle: () => {
      themeChanged = !themeChanged;
      return set(themeChanged);
    },
  };
};

export const theme = createThemeStore();
