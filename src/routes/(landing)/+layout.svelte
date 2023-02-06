<script lang="ts">
    import { goto } from "$app/navigation";
    import { loggedIn } from "../../stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";

    onMount(() => {
        console.log(get(loggedIn));
        if (get(loggedIn)) {
            routeToPage("", true);
        }
    })

    function routeToPage(route: string, replaceState: boolean) {
        goto(`/${route}`, {replaceState});
    }

</script>

{#if !get(loggedIn)}
<slot />
{/if}