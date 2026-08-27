<script lang="ts">
    import MonthlyData from "./MonthlyData.svelte";
    import WeeklyData from "./WeeklyData.svelte";
    import YearlyData from "./YearlyData.svelte";


let currentView = $state("Week")
const handleViewToggle = (view:string)=> {
  currentView = view;
}
const activeBtnStyle = "bg-slate-blue/20 px-3 py-0 rounded-lg"
</script>

<div class="space-y-10 bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl">
    <div class="flex justify-between">
        <div class="space-y-2">
            <p>Spending Overview </p>
            <p>Your spending activity across {`${currentView}`}</p>
        </div>
        <div class="flex gap-x-6 bg-navy-850 px-3 text-sm rounded-xl h-10 py-1.5">
            <button onclick={()=> handleViewToggle("week")} class="cursor-pointer {currentView === "week"  ? `${activeBtnStyle}` : ""}">Week</button>
            <button onclick={()=> handleViewToggle("month")} class="cursor-pointer { currentView === "month"  ? `${activeBtnStyle}` : ""}">Month</button>
            <button onclick={()=> handleViewToggle("year")} class="cursor-pointer {currentView === "year" ? `${activeBtnStyle}` : ""}">Year</button>
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
