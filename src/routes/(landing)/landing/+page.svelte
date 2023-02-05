<div>
    <div style="width:100%">
        <div style="text-align: center;">
            <h1 class="font-1">Overflow Studies</h1>
            <h2 class="font-4">
                Study smarter not harder with Overflow Studies
            </h2>

            <div class="profile" style="justify-content: center;">
                <button class="sign-up">Sign Up</button>
                <button class="sign-up">Log In</button>
            </div>
        </div>
    </div>

    
</div>

<style>
    :global(body) {
        background-color: #F5F5F5;
    }
    .profile {
        display: flex;
        margin-top: 0;
        align-items: center;
        height: 90px;
    }
    .font-1 {
        font-size: 50px;
        color: #000000;
        font-family: Manrope;
    }
    .font-2 {
        font-size: 27px;
        font-weight: bolder;
        margin-right: 14px;
        margin-left: 14px;
        font-family: Manrope;
        color: #000000;
    }
    .font-4 {
        font-size: 20px;
        font-weight: bolder;
        margin-right: 14px;
        margin-left: 14px;
        font-family: Manrope;
        color: #000000;
    }
    .all-content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .sign-up {
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
    .box {
        height: fit-content;
        padding-bottom: 1.5rem;
        border-radius: 10px;
        background-color: #ffffff;
        border-color: #ffffff;
        border: 4px solid rgb(255, 255, 255);
        background-size: cover;
        align-self: center;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
        }
        .font-1 {
            color: #ffffff;
        }
        .font-4 {
            color: #ffffff;
        }
        .sign-up {
            background-color: #2a5e1a; 
            color: #dafad4;
            text-shadow: 0px 0.5px #dafad4;
        }
        .log-in {
            background-color: #2a5e1a; 
            color: #dafad4;
            text-shadow: 0px 0.5px #dafad4;
        }
    }
</style>
