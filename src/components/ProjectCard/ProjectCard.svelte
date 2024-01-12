<script lang="ts">
  import { get } from "svelte/store";
  import { _, locale } from "svelte-i18n";

  export let project: {
    name: string;
    githubLink: string;
    previewLink?: string;
    description: { en: string; uk: string };
  };

  const { en, uk } = project.description;

  const description = get(locale) === "uk" || get(locale) === "uk-UA" ? uk : en;
</script>

<div class="ProjectCard">
  <h1>
    {project.name}
  </h1>
  <a href={project.githubLink} target="_blank"
    >{$_("Pages.Projects.VisitGithubPage")}</a
  >
  <p>{description}</p>
</div>
