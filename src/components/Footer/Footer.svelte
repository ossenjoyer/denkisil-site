<script lang="ts">
  import contactLinks from "$lib/data/contacts.json";
  import { images } from "../Images/index";

  import { theme } from "$lib/stores/themeStore";

  import "./Footer.css";
</script>

<div class="Footer {$theme ? 'dark' : 'light'}">
  <ul class="ContactLinks">
    {#each contactLinks.contacts as contactLink}
      <li class="ContactLink">
        <a href={contactLink.link}>
          <svelte:component this={images.get(contactLink.name)} />
          {contactLink.name}
        </a>
      </li>
    {/each}
  </ul>
</div>
