import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

const createThemeStore = () => {
  const { subscribe, set } = persist(
    writable(false),
    createLocalStorage(),
    "theme"
  );

  return {
    subscribe,
    toggle: (themeChanged: boolean) => set(themeChanged),
  };
};

export const theme = createThemeStore();
