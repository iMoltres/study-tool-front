<script>
    import { goto } from "$app/navigation";
    import Row from "$lib/components/mainpage/Row.svelte";
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { userEmail, userName } from "../../stores.js";

    
    function getRandomIcon() {
        let icons = [
            "pencil",
            "desktop",
            "money-check-dollar",
            "earth",
            "book-open",
            "graduation-cap",
            "laptop",
            "calculator"
        ];
        return icons[Math.floor(Math.random() * icons.length)]
    }

    async function getGrades() {
        let r = await fetch(
            `http://10.104.148.66:8000/user/${get(userEmail)}/grades`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await r.json();
        let assignments = data["grades"];
        console.log(assignments);
        return assignments;
    }

    async function getStudyTips() {
        let r = await fetch(
            `http://10.104.148.66:8000/studytips/3`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await r.json();
        console.log(data);
        let assignments = data["studyTips"];
        return assignments;
    }

    async function getAssignments() {
        let r = await fetch(
            `http://10.104.148.66:8000/user/${get(userEmail)}/assignments`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await r.json();
        let assignments = data["assignments"];
        console.log(assignments);
        return assignments;
    }

</script>

<div class="main">
    <p class="font-3">Welcome, {get(userName)}</p>
    <div class="three-boxes">
        <!-- Create 3 boxes that have a drop shadow -->
        <div class="box">
            <div class="content">
                <button
                    class="my-button"
                    on:click={() => {
                        goto("/grades", { replaceState: false });
                    }}>Your Grades</button>
            </div>
            {#await getGrades()}
                <div />
            {:then a}
                {#each Object.entries(a) as [assignmentName, vals]}
                    <Row
                        icon={getRandomIcon()}
                        name={assignmentName}
                        percent={(vals["grade"] * 100).toString()}
                        eta={vals["eta"]}
                    />
                {/each}
            {/await}
        </div>
        <div class="box">
            <div class="content">
                <button
                    class="my-button"
                    style="width: 54%"
                    on:click={() => {
                        goto("/priorities");
                    }}>Today's Priorities</button
                >
            </div>

            {#await getAssignments()}
                <div />
            {:then a}
                {#each Object.entries(a) as [assignmentName, vals]}
                    <Row
                        icon={getRandomIcon()}
                        name={a[assignmentName]}
                        percent="null"
                        eta="60"
                    />
                {/each}
            {/await}
        </div>
        <div class="box">
            <div class="content">
                <button
                    class="my-button"
                    on:click={() => {
                        goto("/tips");
                    }}>Study Tips</button
                >
            </div>
            {#await getStudyTips()}
                <div />
            {:then a}
                {#each a as val}
                    <Row
                        icon={getRandomIcon()}
                        name={val}
                        percent="null"
                        eta="null"
                    />
                {/each}
            {/await}
        </div>
    </div>
    <div class = "box2">
        <div class="prediction">
            Upload File to receive a predicted Grade:
        </div>
        <div>
            <form action="demo.php" method="post" enctype="multipart/form-data">
                <br>
                <input type="file" name="fuResume" id="fuResume" >
                <input type="submit" value="Upload File">
                    
    
            </form>
        </div>
        
    </div>
</div>

<style>
    :global(body) {
        background-color: #f5f5f5;
    }
    .box {
        width: 32%;
        height: fit-content;
        padding-bottom: 1.5rem;
        border-radius: 10px;
        background-color: #ffffff;
    }
    .box2 {
        width: 32%;
        height: fit-content;
        padding-bottom: 1.5rem;
        border-radius: 10px;
        background-color: #ffffff;
        align-content: center;
        text-align: center;
        
    }
    .prediction {
        display: flex;
        align-content: center;
        text-align: center;
        justify-content: space-evenly;
    }
    .my-button {
        background-color: #dafad4;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-size: 20px;
        font-family: Manrope;
        color: #2a5e1a;
        font-weight: 900;
        text-shadow: 0px 0.5px #2a5e1a;
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
            background-color: #2a5e1a;
            border: none;
            border-radius: 10px;
            padding: 1rem;
            font-size: 20px;
            font-family: Manrope;
            color: #dafad4;
            font-weight: 900;
            text-shadow: 0px 0.5px #2a5e1a;
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
