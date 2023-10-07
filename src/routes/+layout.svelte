<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import Header from "../components/Header/Header.svelte";
    import {theme} from "$lib/stores/themeStore";

    import "../app.css";
    import "$lib/styles/Page.css"
    import {browser} from "$app/environment";

    if (browser) {
      window.document.body.classList.add($theme ? 'dark': 'light');
    }

    export let data: { url: string };
</script>



<Header />
{#key data.url}
    <div
            in:fly={{ y: 200, duration: 300, delay: 300 }}
            out:fade={{ duration: 150 }}
    >
        <slot/>
    </div>
{/key}
