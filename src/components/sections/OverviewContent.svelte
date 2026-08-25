<script lang="ts">
    import { Plus } from "@lucide/svelte";
    import StatsCard from "./StatsCard.svelte";
  let today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

  // Format the date and convert it to uppercase
  let formattedDate = today.toLocaleDateString('en-US', dateOptions ).toUpperCase();
</script>
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
        <div>
           <StatsCard/>
        </div>
</div>
