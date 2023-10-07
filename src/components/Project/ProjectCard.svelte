<script lang="ts">
  import {get} from "svelte/store";
  import { _, locale } from "svelte-i18n";

  export let project: { name: string, githubLink: string, description: { [name: string]: string } }

  const description = project.description[get(locale)!]
</script>

<div class="ProjectCard">
    <h1>
        {project.name}
    </h1>
    <a href="{project.githubLink}" target="_blank">{$_("Pages.Projects.VisitGithubPage")}</a>
    <p>{description}</p>
</div>