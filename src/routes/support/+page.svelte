<script>
  import { _, locale } from "svelte-i18n";

  import aid from "$lib/data/aid.json";
  import "$lib/styles/Page.css";
  import { get } from "svelte/store";

  const { en, uk } = aid.aid;

  const aidList = get(locale) === "uk" || get(locale) === "uk-UA" ? uk : en;
</script>

<div class="Page">
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>
        {$_("Pages.Support.WelcomeBanner.Title")}
      </h1>
      <p>{$_("Pages.Support.WelcomeBanner.Description")}</p>
    </div>
  </div>
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>{$_("Pages.Support.SupportUkraineBanner.Title")}</h1>
      <p>{$_("Pages.Support.SupportUkraineBanner.Description")}</p>
      <ul>
        {#each aidList as aid}
          <li><a href={aid.link}>{aid.name}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</div>
