<script>
  import { _ } from "svelte-i18n";

  import "$lib/styles/Page.css";
</script>

<div class="Page">
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>{$_("Pages.CV.CVBanner.Title")}</h1>
      <p>{$_("StillInProgress")}</p>
    </div>
  </div>
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>{$_("Pages.CV.PortfolioBanner.Title")}</h1>
      <p>{$_("Pages.CV.PortfolioBanner.Description")}</p>
    </div>
  </div>
</div>
