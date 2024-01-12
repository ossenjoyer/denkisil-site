<script lang="ts">
  import "./Header.css";

  import { images } from "../Images/index";

  import { fade } from "svelte/transition";
  import { theme } from "$lib/stores/themeStore";
  import { _ } from "svelte-i18n";
  import { browser } from "$app/environment";
</script>

<div class="Header {$theme ? 'dark' : 'light'}">
  <div class="HeaderLogo">
    <h1>DenKisil</h1>
  </div>
  <div class="HeaderLinks">
    <ul class="HeaderLinksNav">
      <li class="HeaderLink"><a href="/">{$_("Header.Links.Home")}</a></li>
      <li class="HeaderLink"><a href="/cv">{$_("Header.Links.CV")}</a></li>
      <li class="HeaderLink">
        <a href="/projects">{$_("Header.Links.Projects")}</a>
      </li>
      <li class="HeaderLink">
        <a href="/support">{$_("Header.Links.Support")}</a>
      </li>
    </ul>
  </div>
  <div class="HeaderPreferences">
    <button
      class="ChangeThemeButton"
      on:click={() => {
        if (browser) {
          theme.toggle();
          window.document.body.classList.remove($theme ? "light" : "dark");
          window.document.body.classList.add($theme ? "dark" : "light");
        }
      }}
      transition:fade
    >
      <svelte:component this={images.get($theme ? "dark" : "light")} />
    </button>
  </div>
</div>
