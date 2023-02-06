<script lang="ts">
    import { get } from "svelte/store";
    import { addGrade, userEmail } from "../../../stores";

    export let listOfGrades: Object;

    let newName: string = "";
    let newGrade: number;

    let errorMessage: string = "";

    function removeGrade(name: string) {
        delete (listOfGrades as any)[name];
        listOfGrades = listOfGrades;
    }

    function addNewGrade() {
        if (newName == "" || newGrade < 0 || newGrade > 100) {
            errorMessage = "Please enter a valid grade and name";
            return;
        }

        newGrade = newGrade / 100;

        (listOfGrades as any)[newName] = newGrade;
        newName = "";
        newGrade = 0;
    }

    async function sendGrades() {
        if (Object.keys(listOfGrades).length == 0) {
            errorMessage = "Please enter at least one grade";
            return;
        }

        await fetch(
            `http://10.104.148.66:8000/user/${get(userEmail)}/grades`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(listOfGrades),
            }
        );

        window.location.reload();
    }
</script>

<div class="main-content">
    <div class="modal">
        <div class="flex">
            <h3>Edit Your Grades</h3>
            <button
                class="btn-close"
                on:click={() => {
                    addGrade.set(false);
                }}
            >
                <i class="fa-solid fa-times" />
            </button>
        </div>
        <div>
            <p>
                Below is a list of the grades you have entered. You can edit
                them by clicking on the grade. 
            </p>
            <p>
                Add a new grade by entering the name and the percentage in the boxes below.
            </p>
            <p style="color: red;">{errorMessage}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <div
                    style="display: flex; align-items: center; justify-content: space-between; "
                >
                    <input type="text" placeholder="Name" style="width: 60%" bind:value={newName}/>
                    <div style="margin: 0.25rem;" />
                    <input type="text" placeholder="Grade" style="width: 20%" bind:value={newGrade}/>
                    <button
                        style="background: none; font-size: 20px; width: 10%;"
                        on:click={() => {
                            addNewGrade();
                        }}
                    >
                        <i
                            class="fa-solid fa-add"
                            style=" color: #00DD66;"
                        />
                    </button>
                </div>
            {#each Object.entries(listOfGrades) as [name, grade]}
                <div
                    style="display: flex; align-items: center; justify-content: space-between; "
                >
                    <input type="text" placeholder="Name" style="width: 60%" value={name} />
                    <div style="margin: 0.25rem;" />
                    <input type="text" placeholder="Grade" style="width: 20%" value="{grade * 100}" />
                    <button
                        style="background: none; font-size: 20px; width: 10%;"
                        on:click={() => {
                            removeGrade(name);
                        }}
                    >
                        <i
                            class="fa-solid fa-trash-can"
                            style=" color: #FF5656;"
                        />
                    </button>
                </div>
            {/each}
        </div>
        <button class="btn" on:click={sendGrades}>Submit</button>
    </div>
</div>

<style>
    .main-content {
        font-family: Manrope;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #222;
        position: absolute;
        top: 0;
        left: 50%;
        min-height: 100vh;
    }
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;
        padding: 0rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 450px;
        min-height: 250px;
        position: absolute;
        top: 20%;
        background-color: white;
        border-radius: 15px;
    }

    .modal .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem 0.25rem;
    }

    .modal input {
        padding: 0.7rem 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 0.9em;
    }

    .modal p {
        font-size: 0.9rem;
        padding: 0rem 0.25rem;
        color: #bbbbbb;
    }

    button {
        cursor: pointer;
        border: none;
        font-weight: 600;
    }

    .btn {
        display: inline-block;
        padding: 0.8rem 1.4rem;
        font-weight: 700;
        background-color: #dafad4;
        color: #2a5e1a;
        border-radius: 5px;
        text-align: center;
        font-size: 1em;
        transition: 0.2s;
    }
    .btn:hover {
        background-color: #c4e3bf;
        transition: 0.2s;
    }

    .btn-close {
        background: none;
        border-radius: 50%;
        font-size: 25px;
        padding: 0;
    }

    @media (prefers-color-scheme: dark) {
        input {
            color: #fff;
        }
        .main-content {
            color: #fff;
        }
        .modal {
            background-color: #24323e;
        }
        .modal .flex {
            display: flex;
            align-items: center;
        }
        .btn {
            display: inline-block;
            padding: 0.8rem 1.4rem;
            font-weight: 700;
            background-color: #2a5e1a;
            color: #dafad4;
            border-radius: 5px;
            text-align: center;
            font-size: 1em;
            transition: 0.2s;
        }
        .modal input {
            padding: 0.7rem 1rem;
            border: none;
            background: #1c262f;
            border-radius: 5px;
            font-size: 0.9em;
            transition: 0.2s;
            outline: none;
        }

        .modal input:focus {
            box-shadow: 0 1px 4px #888;
            transition: 0.2s;
            outline: none;
        }
        .btn:hover {
            background-color: #214a14;
            transition: 0.2s;
        }
        .btn-close {
            background: none;
            border-radius: 50%;
            font-size: 25px;
            padding: 0;
            color: white;
        }
    }
</style>
