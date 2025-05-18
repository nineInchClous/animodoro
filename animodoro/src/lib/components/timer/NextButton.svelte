<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import Next from '@lucide/svelte/icons/chevron-last';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';

	const timer = getTimerContext();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger onclick={timer.goToNextRound} class={buttonVariants({ variant: 'outline' })}>
			<Next />
		</Tooltip.Trigger>
		<Tooltip.Content side="bottom">
			<p>Next</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
