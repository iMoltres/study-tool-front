<script>
    import Row from "$lib/components/mainpage/Row.svelte";
    import CompactRow from "$lib/components/gradespage/CompactRow.svelte";
    import AddGrade from "$lib/components/gradespage/AddGrade.svelte";

    let compact = false;
    let addGrade = true;

</script>

<div class="main" class:opacity={addGrade == true}>
    <p class="font-3">Your Grades</p>
    <!-- Create 3 boxes that has a drop shadow -->
    <div style="display: flex; align-items: center;">
        <p style="font-size: 20px;">Enable compact mode:</p>
        <div style="margin: 0.5rem" />
        <label class="switch">
            <input
                type="checkbox"
                on:click={() => {
                    compact = !compact;
                }}
            />
            <span class="slider round" />
        </label>
    </div>
    
    <div style="display: flex; align-items: center;">
        <button class="my-button" on:click={() => {
            window.location.href = "/grades";
        }}>Add a Grade</button>
    </div>
    <div style="margin: 1rem" />
    <div class="main-box">
        <div class="box">
            {#if compact}
                <CompactRow
                    name="Lord of the Flies: Essay"
                    percent="87"
                    eta="null"
                    subject="null"
                />
                <div class="compact-divider" />
                <CompactRow
                    name="Chapter 6 Day 2"
                    percent="100"
                    eta="null"
                    subject="null"
                />
            {:else}
                <div class="content">
                    <Row
                        icon="pencil"
                        name="Lord of the Flies: Essay"
                        percent="87"
                        eta="null"
                    />
                    <div class="divider" />
                    <Row
                        icon="desktop"
                        name="Chapter 6 Day 2"
                        percent="100"
                        eta="null"
                    />
                </div>
            {/if}
        </div>
    </div>
</div>

{#if addGrade}
    <AddGrade />
{/if}

<style>
    .opacity {
        opacity: 15%;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2a5e1a;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2a5e1a;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    p {
        font-family: Manrope;
    }
    .divider {
        margin: 0.5rem;
        height: 1.5px;
        background-color: #dddddd;
    }
    .compact-divider {
        height: 1.5px;
        margin: 0;
        padding: 0;
        background-color: #dddddd;
    }
    .box {
        width: 100%;
        height: fit-content;
        border-radius: 10px;
        background-color: #ffffff;
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
    .content {
        margin-left: 0rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
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
        width: 12.5%;
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
        .box {
            width: 100%;
            height: fit-content;
            border-radius: 10px;
            background-color: #20323f;
        }
        .divider {
            height: 1.5px;
            background-color: #3c505d;
        }
        .compact-divider {
            height: 1.5px;
            margin: 0;
            padding: 0;
            background-color: #3c505d;
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
