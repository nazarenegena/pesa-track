<script lang="ts">
    import type { Component } from "svelte";

interface SpendingCardProps {
  amount: number,
  TextIcon?: Component,
  description?: string
}

let {amount, TextIcon, description}: SpendingCardProps = $props()
let  formattedAmount = $derived(amount.toLocaleString('en-US'));

</script>

<div class="flex gap-4">
    <p class=" text-2xl font-semibold inline-flex items-baseline gap-1.5">
        <span class="text-xl">KSh</span>
          <span class="font-mono">{formattedAmount}</span>
    </p>
    <div class="flex justify-baseline text-mint items-center text-sm">
       <TextIcon size={16}/>
        <p>{description}</p>
    </div>
</div>
