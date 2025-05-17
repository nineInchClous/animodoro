<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebarMain from '$lib/components/sidebar/AppSidebarMain.svelte';
	import AppSidebarUser from '$lib/components/sidebar/AppSidebarUser.svelte';
	import Dog from '@lucide/svelte/icons/dog';
	import { HOME_PATH } from '$lib/utils/urlPaths';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet tooltipContent()}
						Animodoro
					{/snippet}
					{#snippet child({ props })}
						<a href={HOME_PATH} {...props}>
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
							>
								<Dog class="size-6" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate text-xl font-semibold">Animodoro</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>

	<AppSidebarMain />

	<Sidebar.Footer>
		<AppSidebarUser />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
