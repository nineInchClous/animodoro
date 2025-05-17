<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import AppSidebar from '$lib/components/sidebar/AppSidebar.svelte';
	import AppBreadcrumb from '$lib/components/sidebar/AppBreadcrumb.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<AppBreadcrumb />
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

<ModeWatcher />
