<script lang="ts">
    import type ExpenseObj from "../../utils/interfaces";
    import { X } from "@lucide/svelte";



    interface ViewExpenseModalProps extends ExpenseObj{
      isOpen?:boolean;
    }
    let {isOpen = $bindable(false), title, category, payment, amount, description,date}:ViewExpenseModalProps = $props()

    function closeModal(){
      isOpen = false
    }
</script>

{#if isOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <button
            type="button"
            class="absolute inset-0 bg-navy-950/70 cursor-default border-none p-0"
            aria-label="Close modal"
            onclick={closeModal}
        >
        </button>
        <div class="relative bg-navy-800 border border-navy-700 p-6 rounded-2xl shadow-xl z-10 max-w-lg w-full m-4"
>
    <button
        type="button"
        class="absolute top-4 right-4 text-slate-blue hover:text-ice transition-colors cursor-pointer"
        onclick={closeModal}
    >
        <X size={20} />
    </button>
    <div>
        <p>Transaction Details</p>
        <div class="flex flex-col">
            <span class="text-sm font-medium text-ice">{title}</span>
            <span class="text-xs text-slate-blue">{category} · {payment}</span>
        </div>
        <p>{amount}</p>
         <p>{description}</p>
          <p>{date}</p>
    </div>
        </div>
    </div>
    {/if}
