<script lang="ts">
  import { fade } from "svelte/transition";
  import { _ } from "svelte-i18n";
  import { tick } from "svelte";

  import { theme } from "$lib/stores/themeStore";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  import { images } from "../Images/index";

  import "./Header.css";

  async function toggleTheme() {
    if (browser) {
      theme.toggle();
      await tick();
      window.document.body.classList.remove($theme ? "light" : "dark");
      window.document.body.classList.add($theme ? "dark" : "light");
    }
  }
</script>

<div class="Header {$theme ? 'dark' : 'light'}">
  <div class="HeaderLogo">
    <h1>DenKisil</h1>
  </div>
  <div class="HeaderLinks">
    <ul class="HeaderLinksNav">
      <li class="HeaderLink">
        <button
          class="HeaderButton"
          on:click={() => goto("/")}
          aria-label="Home">{$_("Header.Links.Home")}</button
        >
      </li>
      <li class="HeaderLink">
        <button
          class="HeaderButton"
          on:click={() => goto("/cv")}
          aria-label="CV">{$_("Header.Links.CV")}</button
        >
      </li>
      <li class="HeaderLink">
        <button
          class="HeaderButton"
          on:click={() => goto("/projects")}
          aria-label="Projects">{$_("Header.Links.Projects")}</button
        >
      </li>
      <li class="HeaderLink">
        <button
          class="HeaderButton"
          on:click={() => goto("/support")}
          aria-label="Support">{$_("Header.Links.Support")}</button
        >
      </li>
    </ul>
  </div>
  <div class="HeaderPreferences">
    <button class="ChangeThemeButton" on:click={toggleTheme} transition:fade>
      <svelte:component this={images.get($theme ? "dark" : "light")} />
    </button>
  </div>
</div>
