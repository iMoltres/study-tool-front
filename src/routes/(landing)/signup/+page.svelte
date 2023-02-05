<div style="display: flex; flex-direction: column; align-items: center;">
    <div class="header">
        <p class="font-1">Sign-Up</p>
        <div style="display: flex;">
            <a href="/" class="nav-link" />
        </div>
        <button class="home">Home</button>
    </div>
    <div class="box">
        <div style="display: flex">
            <p class="font-2" style="color: red">*</p>
            <p class="font-2">&nbsp First Name:</p>
        </div>
        <p class="font-2">Last Name:</p>
        <div style="display: flex">
            <p class="font-2" style="color: red">*</p>
            <p class="font-2">&nbsp Grade Level:</p>
        </div>
        <div style="display: flex">
            <p class="font-2" style="color: red">*</p>
            <p class="font-2">&nbsp Email:</p>
        </div>
        <div style="display: flex">
            <p class="font-2" style="color: red">*</p>
            <p class="font-2">&nbsp Password:</p>
        </div>
        <div style="display: flex">
            <p class="font-2" style="color: red">*</p>
            <p class="font-2">&nbsp Confirm Password:</p>
        </div>

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
</style>
