<script lang="ts">
  import { _ } from "svelte-i18n";

  import contacts from "$lib/data/contacts.json";
  import { images } from "../components/Images";
  import { json } from "svelte-i18n";

  const facts: Array<string> = $json("Pages.Main.AboutBanner.Facts") as Array<string>;

  import "$lib/styles/Page.css";
</script>

<div class="Page">
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>{$_("Pages.Main.WelcomeBanner.Title")}</h1>
      <p>{$_("Pages.Main.WelcomeBanner.Description")}</p>
    </div>
  </div>
  <div class="PageContent" style="justify-content: left">
    <div class="PageContentBoard">
      <h1>{$_("Pages.Main.AboutBanner.Title")}</h1>
      <ul>
        {#each facts as fact}
          <li>{fact}</li>
        {/each}
      </ul>
    </div>
    <div class="PageContentBoard">
      <h1>
        {$_("Pages.Main.ContactsBanner.Title")}
      </h1>
      <ul
        style="padding: 0; margin: 0;list-style: none; display: flex; flex-direction: space-between;"
      >
        {#each contacts.contacts as contact}
          <li>
            <a href={contact.link}>
              <svelte:component this={images.get(contact.name)} />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
