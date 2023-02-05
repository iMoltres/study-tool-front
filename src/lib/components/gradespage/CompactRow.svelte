<script lang="ts">
    export let name: string;
    export let percent: string;
    export let eta: string;
    export let subject: string;

    function round_number(num: number) {
        let rounded: number = Math.round((num / 60) * 10) / 10;
        return rounded;
    }
</script>

<div class="content">
    {#if subject != "null"}
        <div class="info-alt">
            <div style="width: 12%">
                <p class="font-1" style="color: #DDDDDD;">{subject}</p>
            </div>
            <div style="width: 88%">
                <p class="font-1">{name}</p>
            </div>
        </div>
    {:else}
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
    {/if}
</div>

<style>
    .content {
        display: flex;
        align-items: center;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
    .info-alt {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
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
        font-size: 20px;
        display: flex;
    }
    .font-1 {
        font-family: Manrope;
        width: 50%;
        font-size: 18.5px;
    }
</style>
