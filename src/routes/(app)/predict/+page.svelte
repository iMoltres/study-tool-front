<script lang="ts">
    import { get } from "svelte/store";
    import { userEmail } from "../../../stores";

    let compact = false;
    let percentage: string;
    let question: string;
    let reasoning: string;

    // async function loadData() {
    //     let r = await fetch(
    //         `http://10.104.148.66:8000/user/${get(userEmail)}/grades`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );
    //     let data = await r.json();
    //     console.log(data);
    //     listOfGrades = data["grades"];
    // }

    async function askQuestion() {
        if (question == null || question == undefined || question == "") return;

        reasoning = "Waiting for a response..."

        let r = await fetch(
            `http://10.104.148.66:8000/predictGrade`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: get(userEmail),
                    assignment: question
                }),
            }
        );

        let data = await r.json();
        percentage = data["random"]["percentage"]
        reasoning = data["random"]["reason"]

        question = "";
    }
</script>

<div class="main">
    <p style="font-size: 22.5px">This tool will predict a grade for a response. Include the question.</p>
    <!-- Create 3 boxes that has a drop shadow -->
    <div style="margin: 1rem" />
    <div class="main-box" style="display: flex; justify-content: flex-start">
        <div style="width: 47%">
            <textarea
                class="text-area"
                placeholder="Enter your response here"
                bind:value={question}
            />
            <div style="margin: 1rem;"></div>
            <div style="display: flex; align-items: center; width: 300%">
                <button class="my-button" on:click={() => {
                    askQuestion();
                }}
                    >Ask Question</button
                >
            </div>
        </div>
        <div style="margin-left: 2rem; margin-right: 2rem;" />
        <div style="width: 47%;">
            <p style="font-size: 25px;">Study Buddy's Response</p>
            {#if percentage != undefined}
                <p>Grade: {percentage}</p>
                <div style="margin: 0.5rem;"></div>
            {/if}
            {#if reasoning != undefined}
                {#if reasoning == "Waiting for a response..."}
                    <p>{reasoning}</p>
                {:else}
                    <p>Reasoning: {reasoning}</p>
                {/if}
            {/if}
        </div>
    </div>
</div>

<style>
    .text-area {
        border-radius: 10px;
        width: 100%;
        resize: none;
        height: 55vh;
        background-color: #20323f;
        border: none;
        font-size: 25px;
        color: white;
        font-family: Manrope;
        padding: 1rem;
    }
    p {
        font-family: Manrope;
    }
    .main {
        margin: 1.5rem;
    }
    .main-box {
        display: flex;
        justify-content: space-between;
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
        transition: 0.2s;
    }
    .my-button:hover {
        background-color: #c4e3bf;
        cursor: pointer;
        transition: 0.2s;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-image: none;
            background-color: #192630;
            color: white;
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
            width: 12.5%;
            transition: 0.2s;
        }
        .my-button:hover {
            background-color: #214a14;
            cursor: pointer;
            transition: 0.2s;
        }
    }
</style>
