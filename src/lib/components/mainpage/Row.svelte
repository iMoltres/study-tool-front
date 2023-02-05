<div class="content">
    <div class="my-box">
        <i class="fa-solid fa-{icon}" />
    </div>
    <div class="info">
        <p class="font-1">{name}</p>
        <div class="percent">
            <p class="percent">
                {#if percent != "null"}
                    {percent}%
                {:else if eta != "null"}
                    {#if +eta < 60}
                        ~{eta} mins
                    {:else}
                        ~{round_number(+eta)} hr(s)
                    {/if}
                {/if}
            </p>
        </div>
    </div>
</div>

<script lang="ts">
    export let icon: string;
    export let name: string;
    export let percent: string;
    export let eta: string;

    function round_number(num: number) {
        let rounded: number =  Math.round((num / 60) * 10) / 10;
        return rounded;
    }
</script>

<style>
    .content {
        display: flex;
        align-items: center;
        height: 80px;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
    .my-box {
        background-color: #DAFAD4;
        border: none;
        border-radius: 10px;
        margin-right: 1rem;
        padding: 1rem;
        font-size: 30px;
        font-family: Manrope;
        color: #2a5e1a;
        font-weight: 900;
        text-shadow: 0px 0.5px #2a5e1a;
        width: 40px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .percent {
        font-family: Manrope;
        font-weight: bolder;
        font-size: 30px;
        display: flex;
    }
    .font-1 {
        font-family: Manrope;
        width: 50%;
        font-size: 18.5px;
    }
    
    @media (prefers-color-scheme: dark) {
        .my-box {
            background-color: #2a5e1a;
            border: none;
            border-radius: 10px;
            margin-right: 1rem;
            padding: 1rem;
            font-size: 30px;
            font-family: Manrope;
            color: #DAFAD4;
            font-weight: 900;
            text-shadow: 0px 0.5px #2a5e1a;
            width: 40px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
