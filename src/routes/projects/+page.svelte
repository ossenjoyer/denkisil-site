<script>
    import { _ } from "svelte-i18n";

    import ProjectCard from "../../components/Project/ProjectCard.svelte";
    import projects from "$lib/data/projects.json";
    import "$lib/styles/Page.css";
</script>

<div class="Page">
    <div class="PageContent">
        <div class="PageContentBoard">
            <h1>{$_("Pages.Projects.WelcomeBanner.Title")}</h1>
            <p>{$_("Pages.Projects.WelcomeBanner.Description")}</p>
        </div>
    </div>

        {#each projects.projects as project}
            <div class="PageContent" style="justify-content: left">
                <div class="PageContentBoard">
                    <ProjectCard project={project} />
                </div>
            </div>
        {/each}
</div>