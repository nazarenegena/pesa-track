<script lang="ts">
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';
	import Topbar from '../components/Topbar.svelte';

	let { children } = $props();
</script>

<div id="app" class="min-h-screen bg-navy-900 text-ice">
	<div class="flex">
		<Sidebar />
		<div class="flex flex-1 flex-col">
			<Topbar />
			<main class="flex-1 p-8">
				{@render children()}
			</main>
		</div>
	</div>
</div>
