<script lang="ts">
    import { getNotificationsContext } from 'svelte-notifications';
    import { loggedIn, userEmail, userName } from '../../../stores';
    import { goto } from "$app/navigation";
    import { get } from "svelte/store";
    import Cookies from "js-cookie";

    const { addNotification } = getNotificationsContext();


    let email = "";
    let password = "";

    function routeToPage(route: string, replaceState: boolean) {
        goto(`/${route}`, {replaceState});
    }

    function capitalizeName(name: string) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    }

    async function getName() {
        let r = await fetch(
            `http://10.104.148.66:8000/user/${get(userEmail)}/name`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        let data = await r.text();
        data = data.replaceAll("\"", "");
        data = capitalizeName(data);
        userName.set(data);
        Cookies.set("name", data, { expires: 7 });
    }

    function login() {
        // check if email is matching the email regex
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            addNotification({
                position: 'top-right',
                text: 'Invalid email',
                type: 'error',
                removeAfter: 3000
            });
            return;
        }

        fetch('http://10.104.148.66:8000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        })
            .then(r => r.json())
            .then(data => {
                let status = data.detail;
                if (status === "OK") {
                    loggedIn.set(true);
                    userEmail.set(email);
                    getName().then(() => {
                        Cookies.set("email", email, { expires: 7 });
                        Cookies.set("loggedIn", "true", { expires: 7 });
                        addNotification({
                            position: 'top-right',
                            text: 'Login successful',
                            type: 'success',
                            removeAfter: 1000
                        });
                        routeToPage('', true);
                    });
                } else {
                    addNotification({
                        position: 'top-right',
                        text: 'Login failed',
                        type: 'error',
                        removeAfter: 1000
                    });
                }
            });
    }
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
    <div class="header">
        <p class="font-3">Study Buddy</p>
        <div style="display: flex;">
            <button
                class="home"
                on:click={() => {
                    window.location.href = "/signup";
                }}>Sign Up</button
            >
            <div style="margin: 0.5rem" />
            <button
                class="home"
                on:click={() => {
                    window.location.href = "/landing";
                }}>Home</button
            >
        </div>
    </div>
    <div class="box">
        <h3 class="padding font-4">LOG IN</h3>

        <form on:submit|preventDefault={login}>
            <div class="input-box">
                <div style="display: flex;">
                    <p class="padding font-5" style="color: red;">*</p>
                    <p class="font-5">&nbsp Email</p>
                </div>
                <input
                    type="text"
                    bind:value={email}
                    class="input"
                    required
                />
            </div>
            <div class="input-box">
                <div style="display: flex;">
                    <p class="padding font-5" style="color: red;">*</p>
                    <p class="font-5">&nbsp Password</p>
                </div>
                <input
                    type="password"
                    bind:value={password}
                    class="input"
                    required
                />
            </div>

            <div style="margin: 1rem" />
            <div style="text-align: center;">
                <button class="home">Login</button>
            </div>
        </form>
    </div>
    
</div>

<style>
    :global(body) {
        background-color: #f5f5f5;
    }
    .home {
        background-color: #dafad4;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-size: 15px;
        font-family: Manrope;
        color: #2a5e1a;
        font-weight: 900;
        text-shadow: 0px 0.5px #2a5e1a;
        transition: 0.2s;
    }

    .padding {
        padding-left: 9.9%;
    }


    .home:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
    }
    .box {
        width: 74%;
        height: 100%;
        padding-top: 3%;
        padding-bottom: 3%;
        border-radius: 10px;
        background-color: #FFFFFF;

        /* center the box */
        margin-left: auto;
        margin-right: auto;
    }
    .header {
        display: flex;
        width: 67.5%;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem;
        height: 75px;
    }

    .font-3 {
        font-size: 50px;
        font-family: Manrope;
        font-weight: bolder;
    }

    .padding {
        padding-left: 9.9%;
    }

    .font-4 {
        font-size: 30px;
        font-family: Manrope;
        font-weight: bolder;
        text-align: left;
        margin: 0;
        margin-bottom: 30px;
    }

    .font-5 {
        font-size: 25px;
        font-family: Manrope;
        text-align: left;
        padding-top: 5%;
        /* bring closer to the text aboive  */
        margin-top: -1.5rem;

    }

    .input {
        width: 78%;
        height: 3rem;
        border-radius: 5px;
        border: 1px solid #DDDDDD;
        padding-left: 1rem;
        font-size: 20px;
        font-family: Manrope;
        margin-left: 10%;
        margin-top: -1rem;
        margin-bottom: 1rem;

        /* add a transition */
        transition: 0.2s;
    }

    .input:focus {
        /* add a shadow under the box  */
        box-shadow: 0 1px 5px #888;
        background: #fff;
        outline: none;
    }

    .input-box {
        margin-top: -3rem;
        margin-bottom: 1rem;
    }

    /* dark mode */
    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
        }

        .box {
            background-color: #20323f;
        }

        .input {
            background-color: #192630;
            border: none;
            color: white;
        }

        .header {
            display: flex;
            width: 67.5%;
            align-items: center;
            justify-content: space-between;
            margin: 1.5rem;
            height: 75px;
        }

        .input:focus {
            box-shadow: 0 1px 5px #888;
            background: #192630;
            outline: none;
        }

        .home {
            background-color: #2a5e1a;
            color: #DAFAD4; 
            text-shadow: 0px 0.5px #2a5e1a;
        }

        .home:hover {
            background-color: #2a5e1a;
            color: #DAFAD4; 
            text-shadow: 0px 0.5px #2a5e1a;
        }

        .font-3 {
            color: white;
        }

        .font-4 {
            color: white;
        }

        .font-5 {
            color: white;
        }
        
    }
</style>
