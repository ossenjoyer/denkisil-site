<script lang="ts">
  import { _ } from "svelte-i18n";

  import { json } from "svelte-i18n";

  const facts: Array<string> = $json(
    "Pages.Main.AboutBanner.Facts"
  ) as Array<string>;

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
      <p>{@html $_("Pages.Main.AboutBanner.Description")}</p>
    </div>
  </div>
</div>
