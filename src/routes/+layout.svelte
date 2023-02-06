<script lang="ts">
    import Notifications from 'svelte-notifications';
    import Cookies from 'js-cookie';
    import { loggedIn, userEmail, userName } from "../stores";

    $: if (Cookies.get("loggedIn") != undefined) {
        let bool = Cookies.get("loggedIn") == "true";
        loggedIn.set(bool);
    }

    $: if (Cookies.get("email") != undefined) {
        userEmail.set(Cookies.get("email") as string);
    }

    $: if (Cookies.get("name") != undefined) {
        userName.set(Cookies.get("name") as string);
    }
</script>

<style>
    :global(div) {
        font-family: Manrope, sans-serif;
    }
</style>

<Notifications>
    <slot />
</Notifications>