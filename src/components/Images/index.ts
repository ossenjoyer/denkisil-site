import DiscordIcon from "./DiscordIcon.svelte";
import GitHubIcon from "./GitHubIcon.svelte";
import DarkThemeIcon from "./DarkThemeIcon.svelte";
import LightThemeIcon from "./LightThemeIcon.svelte";

export const images: Map<string, any> = new Map()
  .set("discord", DiscordIcon)
  .set("github", GitHubIcon)
  .set("light", DarkThemeIcon)
  .set("dark", LightThemeIcon);
