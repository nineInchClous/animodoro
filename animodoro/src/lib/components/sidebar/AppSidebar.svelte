<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebarHeader from '$lib/components/sidebar/AppSidebarHeader.svelte';
	import AppSidebarMain from '$lib/components/sidebar/AppSidebarMain.svelte';
	import AppSidebarUser from '$lib/components/sidebar/AppSidebarUser.svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<AppSidebarHeader />
	<AppSidebarMain />
	<Sidebar.Footer>
		<AppSidebarUser />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
