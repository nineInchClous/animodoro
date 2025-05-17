<script>
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { HOME_PATH } from '$lib/utils/urlPaths.js';
	import Dog from '@lucide/svelte/icons/dog';
</script>

<Sidebar.Header>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton size="lg">
				{#snippet child({ props })}
					<a href={HOME_PATH} {...props}>
						<div class="header-button">
							<Dog class="size-6" />
						</div>
						<div>
							<span>Animodoro</span>
						</div>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Header>

<style lang="postcss">
	.header-button {
		@apply flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground;
		div {
			@apply grid flex-1 text-left text-sm leading-tight;
			span {
				@apply truncate text-xl font-semibold;
			}
		}
	}
</style>
