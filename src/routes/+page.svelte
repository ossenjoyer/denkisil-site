<script lang="ts">
  import {_} from "svelte-i18n";

  import contacts from "$lib/data/contacts.json";
  import discord from "$lib/images/discord.svg";
  import github from "$lib/images/github.svg";

  import "$lib/styles/Page.css";

  let images = { discord, github }

</script>

<div class="Page">
    <div class="PageContent">
        <div class="PageContentBoard">
            <h1>{$_("Pages.Main.WelcomeBanner.Title")}</h1>
            <p>{$_("Pages.Main.WelcomeBanner.Description")}</p>
        </div>
    </div>
    <div class="PageContent" style="justify-content: left">
        <div class="PageContentBoard">
            <h1>{$_("Pages.Main.AboutBanner.Title")}</h1>
            <ul>
                {#each Object.values($_("Pages.Main.AboutBanner.Facts")) as fact}
                    <li>{fact}</li>
                {/each}
            </ul>
        </div>
        <div class="PageContentBoard">
            <h1>
                {$_("Pages.Main.ContactsBanner.Title")}
            </h1>
            <ul style="list-style: none;">
                {#each contacts.contacts as contact}
                    <li>
                        <img alt="{contact.name}" src="{images[contact.name]}" width="18px">
                        <a href="{contact.link}" target="_blank">{contact.value}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>