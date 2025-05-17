<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as m from '$lib/paraglide/messages';
	import Clock from '@lucide/svelte/icons/clock';
	import Settings from '@lucide/svelte/icons/settings';
	import { HOME_PATH, SETTINGS_PATH } from '$lib/utils/urlPaths';

	const items = [
		{
			title: m.timer(),
			url: HOME_PATH,
			icon: Clock,
		},
		{
			title: m.settings(),
			url: SETTINGS_PATH,
			icon: Settings,
		},
	];
</script>

<Sidebar.Content>
	<Sidebar.Group>
		<Sidebar.Menu>
			{#each items as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton>
						{#snippet tooltipContent()}
							{item.title}
						{/snippet}

						{#snippet child({ props })}
							<a href={item.url} {...props}>
								{#if item.icon}
									<item.icon />
								{/if}

								<span>{item.title}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.Group>
</Sidebar.Content>
