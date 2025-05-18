<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import Square from '@lucide/svelte/icons/square';
	import Rotate from '@lucide/svelte/icons/rotate-ccw';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';

	const timer = getTimerContext();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		{#if timer.isTimerOn}
			<Tooltip.Trigger
				onclick={timer.stopTimer}
				class={buttonVariants({ variant: 'outline', size: 'lg' })}
			>
				<Square />
			</Tooltip.Trigger>
			<Tooltip.Content side="bottom">
				<p>Stop</p>
			</Tooltip.Content>
		{:else}
			<Tooltip.Trigger
				onclick={timer.resetSession}
				class={buttonVariants({ variant: 'outline', size: 'lg' })}
			>
				<Rotate />
			</Tooltip.Trigger>
			<Tooltip.Content side="bottom">
				<p>Reload</p>
			</Tooltip.Content>
		{/if}
	</Tooltip.Root>
</Tooltip.Provider>
