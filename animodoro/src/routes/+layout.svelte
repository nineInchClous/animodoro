<script lang="ts">
	import '../app.css';
	import '$lib/styles/global.css';
	import '$lib/styles/timer.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import AppSidebar from '$lib/components/sidebar/AppSidebar.svelte';
	import AppBreadcrumb from '$lib/components/sidebar/AppBreadcrumb.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<AppBreadcrumb />
		<div class="container">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

<ModeWatcher />
<Toaster />

<style lang="postcss">
	.container {
		@apply flex flex-1 flex-col gap-4 p-4 pt-0;
	}
</style>
