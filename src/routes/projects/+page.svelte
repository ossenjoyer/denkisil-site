<script>
  import { _ } from "svelte-i18n";

  import "$lib/styles/Page.css";
</script>

<div class="Page">
  <div class="PageContent">
    <div class="PageContentBoard">
      <h1>{$_("Pages.Projects.NoProjectsHere.Title")}</h1>
      <p>{$_("Pages.Projects.NoProjectsHere.Description")}</p>
    </div>
  </div>
</div>
