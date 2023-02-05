<script>
    import Row from "$lib/components/mainpage/Row.svelte";
</script>

<style>
    :global(body) {
        background-color: #F5F5F5;
    }
    .box {
        width: 32%;
        height: fit-content;
        padding-bottom: 1.5rem;
        border-radius: 10px;
        background-color: #FFFFFF;
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
        font-size: 35px;
        font-family: Manrope;
    }
    .main {
        margin: 1.5rem;
    }
    .three-boxes {
        display: flex;
        justify-content: space-between;
    }
    .content {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
        }
        .box {
            width: 32%;
            height: fit-content;
            padding-bottom: 1.5rem;
            border-radius: 10px;
            background-color: #20323f;
        }
        .my-button {
            background-color: #2A5E1A;
            border: none;
            border-radius: 10px;
            padding: 1rem;
            font-size: 20px;
            font-family: Manrope;
            color: #DAFAD4; 
            font-weight: 900;
            text-shadow: 0px 0.5px #2A5E1A;
            width: 40%;
            transition: 0.2s;
        }
        .my-button:hover {
            background-color: #214a14;
            cursor: pointer;
            transition: 0.2s;
        }
    }
</style>


<div class="main">
    <p class="font-3">Welcome, Dua</p>
    <div class="three-boxes">
        <!-- Create 3 boxes that has a drop shadow -->
        <div class="box">
            <div class="content">
                <button class="my-button" on:click={() => {
                    window.location.href = "/grades";
                }}>Your Grades</button>
            </div>
            <Row icon="pencil" name="Lord of the Flies: Essay" percent="87" eta="null"/>
            <Row icon="desktop" name="Chapter 6 Day 2" percent="100" eta="null"/>
        </div>
        <div class="box">
            <div class="content">
                <button class="my-button" style="width: 54%" on:click={() => {
                    window.location.href = "/priorities";
                }}>Today's Priorities</button>
            </div>
            <Row icon="earth" name="Ch 21 Study Questions" percent="null" eta ="90"/>
            <Row icon="money-check-dollar" name="Business Model Canvas" percent="null" eta="60"/>
            <Row icon="desktop" name="Jimmy Jones Project" percent="null" eta="180"/>
        </div>
        <div class="box">
            <div class="content">
                <button class="my-button" on:click={() => {
                    window.location.href = "/tips";
                }}>Study Tips</button>
            </div>
            <Row icon="pencil" name="Be familiar with rhetorical moves" percent="null" eta="null"/>
            <Row icon="desktop" name="Practice MCQ's on teslaSTEMCS" percent="null" eta="null"/>
            <Row icon="earth" name="Praise the lord John Brown" percent="null" eta="null"/>
        </div>
    </div>
</div>