<script lang="ts">
    import type ExpenseObj from "../../utils/interfaces";
    import type { StyleObj } from "../../utils/interfaces";

    interface ExpenseCardProps {
      expenses: ExpenseObj[],
      expense: ExpenseObj,
      style: StyleObj,
      i: number
    }

    let { expenses, expense, style, i }: ExpenseCardProps  = $props();

    function formatAmount(amount: number) {
        return amount.toLocaleString();
    }

    function formatDate(iso: string) {
        return new Date(iso).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }
</script>


<div
    class="flex items-center justify-between py-3"
    class:border-b={i < expenses.length - 1}
    class:border-mint-faint={i < expenses.length - 1}
>
    <div class="flex items-center gap-3">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full {style.bg}">
            <style.icon size={16} class={style.text} />
        </div>
        <div class="flex flex-col">
            <span class="text-sm font-medium text-ice">{expense.title}</span>
            <span class="text-xs text-slate-blue">{expense.category} · {expense.payment}</span>
        </div>
    </div>

    <div class="flex flex-col items-end">
        <span class="text-sm font-bold font-mono text-ice">KSh {formatAmount(expense.amount)}</span>
        <span class="text-xs text-slate-blue">{formatDate(expense.date)}</span>
    </div>
</div>
