<div style="width:100%;">
    <div style="display: flex; flex-direction: column; align-items: center;">
        <div class="header">
            <p class="font-3">Study Buddy</p>
            <div style="display: flex;">
                <button
                    class="header-button"
                    on:click={() => {
                        window.location.href = "/login";
                    }}>Login</button
                >
                <div style="margin: 0.5rem" />
                <button
                    class="header-button"
                    on:click={() => {
                        window.location.href = "/landing";
                    }}>Home</button
                >
            </div>
        </div>
    </div>

    <div class="box">
        <h3 class="padding font-4">SIGN UP</h3>
        <form on:submit|preventDefault={signup}>
            <div class="input-box">
                <div style="display: flex;">
                    <p class="padding font-5" style="color: red;">*</p>
                    <p class="font-5">&nbsp Name</p>
                </div>
                <input
                    type="text"
                    bind:value={name}
                    class="input"
                    required
                />
            </div>
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
            <div class="input-box">
                <div style="display: flex;">
                    <p class="padding font-5" style="color: red;">*</p>
                    <p class="font-5">&nbsp Confirm Password</p>
                </div>
                <input
                    type="password"
                    bind:value={confirmPassword}
                    class="input"
                    required
                />
            </div>

            <div style="margin: 1rem" />
            <div style="text-align: center;">
                <button class="my-button">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</div>

<script>
    import { getNotificationsContext } from 'svelte-notifications';

    const { addNotification } = getNotificationsContext();
    let name = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

    function signup() {
        if (password !== confirmPassword) {
            addNotification({
                position: 'top-right',
                text: 'Passwords do not match',
                type: 'error',
                removeAfter: 3000
            });
            return;
        }

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

        fetch('http://10.104.148.66:8000/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "name": name,
                "password": password,
                "subjects": [
                    ""
                ],
                "grades": {},
                "predictedGrades": {}
            })
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data.detail) {
                    addNotification({
                        position: 'top-right',
                        text: data.detail,
                        type: 'error',
                        removeAfter: 3000
                    });
                } else {
                    addNotification({
                        position: 'top-right',
                        text: "Account created successfully",
                        type: 'success',
                        removeAfter: 3000
                    });
                    window.location.href = '/';
                }
            });
    }
</script>

<style>
    :global(body) {
        background-color: #F5F5F5;
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

    .my-button {
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
        /* bring closer to the text above  */
        margin-top: -1.5rem;

    }

    .header {
        display: flex;
        width: 67.5%;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem;
        height: 75px;
    }

    .header-button {
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

    .header-button:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
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

        .font-3 {
            color: white;
        }

        .font-4 {
            color: white;
        }

        .font-5 {
            color: white;
        }

        .my-button {
            background-color: #2A5E1A;
            color: #DAFAD4; 
            text-shadow: 0px 0.5px #2A5E1A;
        }
        .my-button:hover {
            background-color: #214a14;
            cursor: pointer;
            transition: 0.2s;
        }

        .header-button {
            background-color: #2A5E1A;
            color: #DAFAD4; 
            text-shadow: 0px 0.5px #2A5E1A;
        }
        .header-button:hover {
            background-color: #214a14;
            cursor: pointer;
            transition: 0.2s;
        }
    }
</style>
