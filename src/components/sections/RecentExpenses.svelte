<script lang="ts">
    import { ReceiptText } from "@lucide/svelte";

    import type ExpenseObj from "../../utils/interfaces";
    import { getCategoryStyle } from "../../utils/categoryStyles";

    import ExpenseCard from "./ExpenseCard.svelte";

    let { expenses }: { expenses: ExpenseObj[] } = $props();
</script>

<div class="bg-navy-700/40 border border-mint-faint px-5 pt-6 py-2 rounded-2xl space-y-4">
    <div class="flex items-center justify-between">
       <div class="space-y-1">
           <p class="font-semibold">Recent Expenses</p>
           <p class="text-slate-blue text-sm">Your latest transactions</p>
       </div>
        <a href="/expenses" class="text-sm text-mint hover:text-mint-soft transition-colors">View all expenses</a>
    </div>

    {#if expenses.length === 0}
        <div class="flex flex-col items-center justify-center py-4 gap-1">
            <ReceiptText size={40} class="text-slate-blue/45" />
            <p class="text-slate-blue font-medium">No expenses yet</p>
            <p class="text-slate-blue text-sm">Add your first expense to see it here</p>
        </div>
    {:else}
        {#each expenses as expense, i (expense.id)}
            {@const style = getCategoryStyle(expense.category)}
            <ExpenseCard {expenses} {expense} {style} {i} />
        {/each}
    {/if}
</div>
