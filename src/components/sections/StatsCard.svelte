<script lang="ts">
    import type { Component } from "svelte";

  interface CardProps {
    title: string;
    amount: number;
    percentage?: number | null;
    TitleIcon?: Component
    TextIcon?: Component
    description?:string
    showProgress?: boolean
    progress?: number
  }
  let {title, amount, percentage, description, TitleIcon, TextIcon, showProgress = false, progress = 0} : CardProps = $props();
</script>

<div class="bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl space-y-4 w-68">
    <div class="flex justify-between">
        <p class=" text-slate-blue text-sm">{title}</p>
       <div class="bg-mint/25 p-2 text-mint font-bold rounded-md">
            <TitleIcon size={18}/>
       </div>
    </div>

   <div>
       <p class="text-2xl font-bold font-mono"><span>KSh </span> {amount}</p>
   </div>
   {#if showProgress}
     <div class="flex h-1 w-full overflow-hidden rounded-full">
       <div
         class="h-20 bg-mint transition-all"
         style="width: {progress}%"
       ></div>
       <div
         class="h-20 bg-mint-faint transition-all"
         style="width: {100 - progress}%"
       ></div>
     </div>
   {/if}
   <div class="flex  text-sm items-center gap-1">

       {#if title == "Monthly Budget" || title ==  "Balance"}
        <p class="text-slate-blue"> {percentage} {description} </p>
        {:else}
        <div class="flex text-mint gap-x-2">
            <TextIcon size={18}/>
            <p class="text-sm"> {percentage} {description} </p>
        </div>

       {/if}

   </div>

</div>
