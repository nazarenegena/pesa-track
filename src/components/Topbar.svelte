<script lang="ts">
	import { Search, Bell } from '@lucide/svelte';
</script>

<header class="sticky top-0 z-10 flex items-center justify-between border-b border-mint-faint bg-navy-900 px-8 py-4">
	<div class="relative flex-1 max-w-md">
		<Search size={18} class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-blue" />
		<input
			type="text"
			placeholder="Search expenses..."
			class="w-full rounded-lg border border-navy-800 bg-navy-800 py-2 pl-10 pr-4 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"
		/>
	</div>

	<button class="relative rounded-lg p-2 text-slate-blue transition-colors hover:bg-navy-800 hover:text-ice">
		<Bell size={20} />
		<span class="absolute -top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-ice">
			3
		</span>
	</button>
</header>
