<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import { get } from "svelte/store";

  import { theme } from "$lib/stores/themeStore";

  export let Project: {
    name: string;
    github_url: string;
    live_url?: string;
    description: { en: string; ua: string };
  };

  const { en, ua } = Project.description;

  const description = get(locale) === "uk" || get(locale) === "uk-UA" ? ua : en;
</script>

<div class="ProjectCard {$theme ? 'border-light' : 'border-dark'}">
  <h2>{Project.name}</h2>
  <a href={Project.github_url} target="_blank">GitHub</a>
  {#if Project.live_url}
    <a href={Project.live_url} target="_blank">Live</a>
  {/if}
  <p>{description}</p>
</div>
