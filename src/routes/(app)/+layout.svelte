<div class="header">
    <p class="font-1">Sanat x Dua Lipa</p>
    <div style="display: flex;">
        <a href="/" class="nav-link">Home</a>
        <div style="margin: 1rem"></div>
        <a href="/grades" class="nav-link">Grades</a>
        <div style="margin: 1rem"></div>
        <a href="/priorities" class="nav-link">Priorities</a>
        <div style="margin: 1rem"></div>
        <a href="/tips" class="nav-link">Tips</a>
    </div>

    <div class="profile">
        <button class="sign-out">Sign Out</button>
        <p class="font-2">Dua Misra</p>
        <i class="fa-solid fa-circle-user user-icon" />
    </div>
</div>

<slot />

<style>
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
    }
</style>
