<script>
  import { _ } from "svelte-i18n";

  import projects from "$lib/data/projects.json";

  import ProjectCard from "../../components/ProjectCard/ProjectCard.svelte";

  import "$lib/styles/Page.css";

  import "../../components/ProjectCard/ProjectCard.css";
</script>

<div class="Page">
  <div class="PageContent">
    <div class="PageContentBoard">
      {#each projects.projects as project}
        <ProjectCard Project={project} />
      {/each}
    </div>
  </div>
</div>

<style>
  .PageContentBoard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
