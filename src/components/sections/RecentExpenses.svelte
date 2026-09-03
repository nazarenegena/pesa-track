<script lang="ts">
    import type { Component } from "svelte";
    import type ExpenseObj from "../../utils/interfaces";
    import { ReceiptText, ShoppingCart, Bus, Home, Gamepad2, Heart, Tag } from "@lucide/svelte";

    let { expenses }: { expenses: ExpenseObj[] } = $props();

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

    const categoryStyles: Record<string, { icon: Component; bg: string; text: string }> = {
        food: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
        drinks: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
        groceries: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
        transport: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
        travel: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
        housing: { icon: Home, bg: "bg-violet/15", text: "text-violet" },
        rent: { icon: Home, bg: "bg-violet/15", text: "text-violet" },
        entertainment: { icon: Gamepad2, bg: "bg-coral/15", text: "text-coral" },
        health: { icon: Heart, bg: "bg-amber/15", text: "text-amber" }
    };

    const defaultStyle = { icon: Tag, bg: "bg-mint/15", text: "text-mint" };

    function getCategoryStyle(category: string | undefined | null) {
        return categoryStyles[category?.toLowerCase() ?? ""] ?? defaultStyle;
    }
</script>

<div class="bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl space-y-4">
    <div class="flex items-center justify-between">
        <p class="font-semibold">Recent Expenses</p>
        <a href="/expenses" class="text-sm text-mint hover:text-mint-soft transition-colors">View All</a>
    </div>

    {#if expenses.length === 0}
        <div class="flex flex-col items-center justify-center py-12 gap-3">
            <ReceiptText size={48} class="text-slate-blue" />
            <p class="text-slate-blue font-medium">No expenses yet</p>
            <p class="text-slate-blue text-sm">Add your first expense to see it here</p>
        </div>
    {:else}
        {#each expenses as expense, i (expense.id)}
            {@const style = getCategoryStyle(expense.category)}
            <div class="flex items-center justify-between py-3 {i < expenses.length - 1 ? 'border-b border-navy-800' : ''}">
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
        {/each}
    {/if}
</div>
