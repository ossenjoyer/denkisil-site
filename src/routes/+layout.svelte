<script lang="ts">
    import { fade, fly } from "svelte/transition";

    import { theme } from "$lib/stores/themeStore";
    import Header from "../components/Header/Header.svelte";

    import "../app.css";
    import "$lib/styles/Page.css"
    export let data: { url: string };
</script>


<body class="{$theme === 'dark' ? 'dark' : ''}">
        <Header />
        {#key data.url}
            <div
                 in:fly={{ y: 200, duration: 300, delay: 300 }}
                 out:fade={{ duration: 150 }}
            >
                <slot/>
            </div>
        {/key}
</body>