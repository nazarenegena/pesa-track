<script lang="ts">
    import MonthlyData from "./MonthlyData.svelte";
    import WeeklyData from "./WeeklyData.svelte";
    import YearlyData from "./YearlyData.svelte";


let currentView = $state("Week")
const viewItems = ["Week", "Month", "Year"]
const handleViewToggle = (view:string)=> {
  currentView = view;
}
const activeBtnStyle = "bg-slate-blue/25 text-white px-3 py-0 rounded-lg"
</script>

<div class="space-y-10 bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl">
    <div class="flex justify-between">
        <div class="space-y-2">
            <p class="font-semibold">Spending Overview </p>
            <p class="text-slate-blue">{#if currentView === "Week"}Your spending activity across this week {:else} Your spending activity across {`${currentView}`} {/if}</p>
        </div>

         <div class="flex gap-x-6 bg-navy-850 px-3 text-sm rounded-xl h-10 py-1.5">
{#each viewItems as view }
    <button onclick={()=> handleViewToggle(view)} class="cursor-pointer text-slate-blue transition-colors {currentView === view ? activeBtnStyle : 'hover:text-ice'}">
        {view}
    </button>
    {/each}
         </div>
    </div>
    {#if currentView === "Month"}
        <MonthlyData/>
        {:else if currentView === "Year"}
        <YearlyData/>
         {:else}
       <WeeklyData/>
        {/if}

</div>
