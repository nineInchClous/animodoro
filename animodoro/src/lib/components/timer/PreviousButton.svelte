<script lang="ts">
	import Previous from '@lucide/svelte/icons/chevron-first';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';

	const timer = getTimerContext();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger
			onclick={timer.goToPreviousRound}
			class={buttonVariants({ variant: 'outline' })}
		>
			<Previous />
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>{m.previous()}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
