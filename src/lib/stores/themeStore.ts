import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

const createThemeStore = () => {
  const { subscribe, set } = persist(
    writable("light"),
    createLocalStorage(),
    "theme",
  );

  return {
    subscribe,
    toggle: (themeChanged: boolean) => set(themeChanged ? "dark" : "light"),
  };
};

export const theme = createThemeStore();
