<script lang="ts">
    import MonthlyData from "./MonthlyData.svelte";
    import WeeklyData from "./WeeklyData.svelte";
    import YearlyData from "./YearlyData.svelte";


let currentView = $state("week")
const viewItems = ["week", "month", "year"]
const handleViewToggle = (view:string)=> {
  currentView = view;
}
const activeBtnStyle = "bg-slate-blue/20 px-3 py-0 rounded-lg"
</script>

<div class="space-y-10 bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl">
    <div class="flex justify-between">
        <div class="space-y-2">
            <p class="font-semibold">Spending Overview </p>
            <p class="text-slate-blue">{#if currentView === "week"}Your spending activity across this week {:else} Your spending activity across {`${currentView}`} {/if}</p>
        </div>

         <div class="flex gap-x-6 bg-navy-850 px-3 text-sm rounded-xl h-10 py-1.5">
{#each viewItems as view }
    <button onclick={()=> handleViewToggle(view)} class="cursor-pointer {currentView === view  ? `${activeBtnStyle}` : ""}">
        {view}
    </button>
    {/each}
         </div>
    </div>
    {#if currentView === "month"}
        <MonthlyData/>
        {:else if currentView === "year"}
        <YearlyData/>
         {:else}
       <WeeklyData/>
        {/if}

</div>
