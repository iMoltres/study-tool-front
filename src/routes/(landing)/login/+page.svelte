<div style="display: flex; flex-direction: column; align-items: center;">
    <div class="header">
        <p class="font-1">Login</p>
        <div style="display: flex;">
            <a href="/" class="nav-link" />
            <a href="/" class="nav-link" />
        </div>
        <div style="display: flex;">
            <button class="home">Sign Up</button>
            <div style="margin: 0.5rem" />
            <button class="home">Home</button>
        </div>
    </div>
    <div class="box" style="display: flex">
        <p class="font-2">&nbsp Email:</p>
        <input type="text" />
        <p class="font-2">&nbsp Password:</p>
        <input type="text" />
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
    .home:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
    }
    .box {
        display: flex;
        flex-direction: column;
        width: 66%;
        height: 85%;
        padding: 1rem;
        padding-top: 0;
        padding-bottom: 0;
        margin: 1rem;
        border-radius: 10px;
        background-color: #ffffff;
    }
    .header {
        display: flex;
        width: 67.5%;
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
        font-family: Manrope;
    }
    input[type="text"] {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1.5rem;
    }
</style>
