<script lang="ts">
    import { X, Wallet, Plus } from "@lucide/svelte";

    interface ModalProps {
      isOpen?: boolean;
      onAddExpense: (title: string, category: string, paymentMethod: string, description: string, amount: number, date: string) => void;
    }

    let { isOpen = $bindable(false), onAddExpense }: ModalProps = $props();

    let title = $state("");
    let category = $state("");
    let paymentMethod = $state("");
    let description = $state("");
    let amount = $state<number | "">("");
    let date = $state<string>(new Date().toISOString().split("T")[0]);

    function handleSubmit(e: SubmitEvent) {
      e.preventDefault();
      if (!title || !category || !paymentMethod || !description || !amount || !date) return;

      onAddExpense(title, category, paymentMethod, description, Number(amount), new Date().toISOString());

      title = "";
      category = "";
      paymentMethod = "";
      description = "";
      amount = "";
      date = new Date().toISOString().split("T")[0];
      isOpen = false;
    }

    function closeModal() {
      isOpen = false;
    }
</script>

{#if isOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <button
            type="button"
            class="absolute inset-0 bg-navy-950/70 cursor-default border-none p-0"
            aria-label="Close modal"
            onclick={closeModal}>
        </button>
        <div class="relative bg-navy-800 border border-navy-700 p-6 rounded-2xl shadow-xl z-10 max-w-lg w-full m-4">
            <button
                type="button"
                class="absolute top-4 right-4 text-slate-blue hover:text-ice transition-colors cursor-pointer"
                onclick={closeModal}>
                <X size={20} />
            </button>

            <div class="flex items-center gap-3 mb-6">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-mint-faint">
                    <Wallet size={20} class="text-mint" />
                </div>
                <div>
                    <h2 class="text-lg font-bold text-ice">Add Expense</h2>
                    <p class="text-sm text-slate-blue">Track where your money went</p>
                </div>
            </div>

            <form onsubmit={handleSubmit} class="space-y-4">
                <div>
                    <label for="title" class="block text-sm font-medium text-slate-blue mb-1">Expense Name</label>
                    <input
                        required
                        type="text"
                        id="title"
                        bind:value={title}
                        class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                        placeholder="e.g., Grocery Shopping"
                    />
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="amount" class="block text-sm font-medium text-slate-blue mb-1">Amount</label>
                        <input
                            required
                            type="number"
                            id="amount"
                            bind:value={amount}
                            class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                            placeholder="KSh 0.00"
                        />
                    </div>
                    <div>
                        <label for="category" class="block text-sm font-medium text-slate-blue mb-1">Category</label>
                        <input
                            required
                            type="text"
                            id="category"
                            bind:value={category}
                            class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                            placeholder="e.g., Food"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="paymentMethod" class="block text-sm font-medium text-slate-blue mb-1">Payment Method</label>
                        <input
                            required
                            type="text"
                            id="paymentMethod"
                            bind:value={paymentMethod}
                            class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                            placeholder="e.g., M-Pesa"
                        />
                    </div>
                    <div>
                        <label for="date" class="block text-sm font-medium text-slate-blue mb-1">Date</label>
                        <input
                            required
                            type="date"
                            id="date"
                            bind:value={date}
                            class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                        />
                    </div>
                </div>

                <div>
                    <label for="description" class="block text-sm font-medium text-slate-blue mb-1">Description</label>
                    <input
                        required
                        type="text"
                        id="description"
                        bind:value={description}
                        class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
                        placeholder="What was this expense for?"
                    />
                </div>

                <div class="flex gap-3 pt-2">
                    <button
                        type="button"
                        class="flex-1 rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm font-medium text-slate-blue transition-colors hover:text-ice hover:border-navy-600 cursor-pointer"
                        onclick={closeModal}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="flex-1 flex items-center justify-center gap-2 rounded-lg bg-mint px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-mint-soft cursor-pointer">
                        <Plus size={18} />
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
