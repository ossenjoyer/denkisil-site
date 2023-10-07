<script>
    import "./Header.css";
    import darkThemeIcon from "$lib/images/dark-theme.svg";
    import lightThemeIcon from "$lib/images/light-theme.svg";

    import { fade } from "svelte/transition";
    import { theme } from "$lib/stores/themeStore";
    import { _ } from "svelte-i18n";

    let themeChanged = false;
</script>

<div class="Header {$theme === 'dark' ? 'dark' : 'light'}">
    <div class="HeaderLogo">
        <h1>DenKisil</h1>
    </div>
    <div class="HeaderLinks">
        <ul class="HeaderLinksNav">
            <li class="HeaderLink"><a href="/">{$_("Header.Links.Home")}</a></li>
            <li class="HeaderLink"><a href="/cv">{$_("Header.Links.CV")}</a></li>
            <li class="HeaderLink"><a href="/projects">{$_("Header.Links.Projects")}</a></li>
            <li class="HeaderLink"><a href="/support">{$_("Header.Links.Support")}</a></li>
        </ul>
    </div>
    <div class="HeaderPreferences">
        <button class="ChangeThemeButton"
                on:click={() => {
                    themeChanged = !themeChanged;
                    theme.toggle(themeChanged);

                }}
                transition:fade>
            <img
                alt="change theme"
                src={$theme === "dark" ? lightThemeIcon : darkThemeIcon}
                width="64px"
            />
        </button>
    </div>
</div>
