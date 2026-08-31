<script lang="ts">
    import { Plus } from "@lucide/svelte";
    import StatsCard from "./StatsCard.svelte";
   	import { ChartLine, Wallet, Bookmark, SaveCheck, MoveUpRight  } from '@lucide/svelte';
    import SpendingOverview from "./SpendingOverview.svelte";
    import SpendingCategory from "./SpendingCategory.svelte";

  let today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

  // Format the date and convert it to uppercase
  let formattedDate = today.toLocaleDateString('en-US', dateOptions ).toUpperCase();
</script>
<!-- Header Section -->
<div class="space-y-10">
        <div  class="">
            <p class="text-md text-slate-blue font-bold">{formattedDate}</p>
        </div>
        <div class="flex justify-between  ">
            <div class="space-y-2">
                <p class="text-3xl">Good morning</p>
                <p class="text-md text-slate-blue font-bold">Here's how your money is looking this month.</p>
            </div>

            <div class="flex bg-mint text-navy-900 items-center px-4 rounded-md gap-1 h-12 ">
                <Plus size={18}/>
                <p class="font-semibold text-sm">Add Expense</p>
            </div>
        </div>
        <!-- Stats Card Section -->
        <div class="flex justify-evenly">
            <StatsCard title = "Total Spent" TitleIcon = {Bookmark} amount ={42850} TextIcon={MoveUpRight} percentage={12} description={"% less than last month"}/>
           <StatsCard title = "Monthly Budget" TitleIcon = {Wallet} amount ={60000} description = {" 71% of your budget used"} showProgress progress={60}/>
           <StatsCard title = "Balance" TitleIcon = {ChartLine} amount ={17150} description={"28 days remaining"} />
           <StatsCard title = "Savings" TitleIcon = {SaveCheck} amount ={18450} TextIcon={MoveUpRight} percentage={8.4} description={"% this month"}/>
        </div>

        <!-- Analysis Section -->
        <div class="grid grid-cols-2 gap-x-8">
            <SpendingOverview/>
             <SpendingCategory/>
        </div>
</div>
