<script lang="ts">
    import Row from "$lib/components/mainpage/Row.svelte";
    import CompactRow from "$lib/components/gradespage/CompactRow.svelte";
    import { get } from "svelte/store";
    import { userEmail } from "../../../stores";

    let compact = false;
    let response: string = "";
    let question: string;

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

        response = "Waiting for response...";

        let r = await fetch(
            `http://10.104.148.66:8000/questionHint`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question: question,
                    email: get(userEmail)
                }),
            }
        );

        let data = await r.json();
        response = data["questionHint"]

        question = "";
    }
</script>

<div class="main">
    <p class="font-3">Ask for a Tip Below</p>
    <!-- Create 3 boxes that has a drop shadow -->
    <div style="margin: 1rem" />
    <div class="main-box" style="display: flex; justify-content: flex-start">
        <div style="width: 47%">
            <textarea
                class="text-area"
                placeholder="Enter your question here"
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
            <p>{response}</p>
        </div>
    </div>
</div>

<style>
    .text-area {
        border-radius: 10px;
        width: 100%;
        resize: none;
        height: 50vh;
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
    .font-3 {
        font-size: 35px;
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
