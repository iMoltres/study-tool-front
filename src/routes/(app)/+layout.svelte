<script lang="ts">   
    import { addGrade } from "../../stores";
    import { goto } from "$app/navigation";
    import { loggedIn, userEmail, userName } from "../../stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    let toAdd: boolean;

    addGrade.subscribe(value => {
        toAdd = value;
    });

    onMount(() => {
        console.log(get(loggedIn));
        if (!get(loggedIn)) {
            routeToPage("landing", true);
        }
    })
    
    function routeToPage(route: string, replaceState: boolean) {
        goto(`/${route}`, {replaceState});
    }

    function signout() {
        loggedIn.set(false);
        userEmail.set("");
        Cookies.set("loggedIn", "false");
        Cookies.set("email", "");
        // use onMount to redirect to landing page
        routeToPage("landing", true);
    }

</script>

{#if get(loggedIn)}
    
<div class="header" class:opacity={toAdd}>
    <p class="font-1">Study Buddy</p>
    <div style="display: flex;">
        <a href="/" class="nav-link">Home</a>
        <div style="margin: 1rem"></div>
        <a href="/grades" class="nav-link">Grades</a>
        <div style="margin: 1rem"></div>
        <a href="/tips" class="nav-link">Tips</a>
    </div>

    

    <div class="profile">
        <button on:click={() => signout()} class="sign-out">Sign Out</button>
        <p class="font-2">{get(userName)}</p>
        <i class="fa-solid fa-circle-user user-icon" />
    </div>
        
    
</div>

<slot />

{/if}

<style>
    .opacity {
        opacity: 15%;
    }
    :global(body) {
        background-color: #f5f5f5;
    }
    .profile {
        background-color: white;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border-radius: 10px;
        display: flex;
        margin-top: 0;
        align-items: center;
        justify-content: center;
        height: 90px;
    }
    .sign-out {
        background-color: #dafad4;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-size: 15px;
        font-family: Manrope;
        color: #2a5e1a;
        font-weight: 900;
        text-shadow: 0px 0.5px #2a5e1a;
        margin-right: 15px;
        transition: 0.2s;
    }
    .sign-out:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem;
        height: 75px;
    }
    .font-1 {
        font-size: 50px;
        font-family: Manrope;
    }
    .font-2 {
        font-size: 25px;
        margin-right: 14px;
        font-family: Manrope;
    }
    .user-icon {
        font-size: 60px;
    }
    .nav-link {
        color: black;
        font-family: Manrope;
        font-size: 20px;
        text-decoration: none;
        transition: 0.2s;
    }
    .nav-link:hover {
        color: #2a5e1a;
        font-family: Manrope;
        text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
        }
        .profile {
            background-color: #20323f;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-radius: 10px;
            display: flex;
            margin-top: 0;
            align-items: center;
            justify-content: center;
            height: 90px;
        }
        .sign-out {
            background-color: #2a5e1a;
            border: none;
            border-radius: 10px;
            padding: 1rem;
            font-size: 15px;
            font-family: Manrope;
            color: #dafad4;
            font-weight: 900;
            text-shadow: 0px 0.5px #2a5e1a;
            margin-right: 15px;
            transition: 0.2s;
        }
        .sign-out:hover {
            background-color: #214a14;
            cursor: pointer;
            transition: 0.2s;
        }
        .nav-link {
            color: white;
            font-family: Manrope;
            text-decoration: none;
            transition: 0.2s;
        }
        .nav-link:hover {
            color: #dafad4;
            font-family: Manrope;
            text-decoration: none;
        }
        my-button {
            background-color: #DAFAD4;
            border: none;
            border-radius: 10px;
            padding: 1rem;
            font-size: 20px;
            font-family: Manrope;
            color: #2A5E1A;
            font-weight: 900;
            text-shadow: 0px 0.5px #2A5E1A;
            width: 40%;
            transition: 0.2s;
        }
        .my-button:hover {
            background-color: #c4e3bf;
            cursor: pointer;
            transition: 0.2s;
        }
        .custom-file-upload {
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #555;
            text-align: center;
            }

        input[type="file"] {
            display: none;
        }
    }
</style>
