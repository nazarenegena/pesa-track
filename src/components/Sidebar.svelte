<script lang="ts">
	import { page } from '$app/state';
	import { LayoutDashboard, Wallet, PiggyBank, ChartColumn, Settings, User } from '@lucide/svelte';

	const links = [
		{ href: '/', label: 'Overview', icon: LayoutDashboard },
		{ href: '/expenses', label: 'Expenses', icon: Wallet },
		{ href: '/budget', label: 'Budget', icon: PiggyBank },
		{ href: '/analytics', label: 'Analytics', icon: ChartColumn }
	];

	function isActive(href: string) {
		return page.url.pathname === href;
	}

	function linkClass(href: string) {
		return isActive(href)
			? 'bg-mint-faint text-mint border-l-2'
			: 'text-slate-blue hover:bg-navy-800 hover:text-ice';
	}
</script>

<aside class="sticky top-0 h-screen w-60 shrink-0 border-r border-mint-faint bg-navy-850 p-4">
	<div class="mb-16 mt-6 px-2">
		<span class="text-2xl font-semibold tracking-tight text-ice">Pesa<span class="text-mint">Track</span></span>
	</div>
	<nav class="flex flex-col gap-8">

		{#each links as link}
    {@const Icon = link.icon}
    <a href={link.href} class="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-colors {linkClass(link.href)}">
        <Icon size={18} />
        {link.label}
    </a>
		{/each}
<div class="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-colors text-slate-blue hover:bg-navy-800 hover:text-ice">
    <Settings size={18}/>
    <p>Settings</p>
</div>
	</nav>
	<div class="relative border-t border-navy-800 pt-4">
		<div class="fixed bottom-5 flex items-center gap-3 rounded-lg px-2 py-2">
			<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-faint">
				<User size={18} class="text-mint" />
			</div>
			<div class="flex flex-col overflow-hidden">
				<span class="truncate text-sm font-medium text-ice">Your Name</span>
				<span class="truncate text-xs text-slate-blue">user@email.com</span>
			</div>
		</div>
	</div>
</aside>
