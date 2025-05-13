<script lang="ts">
	import Play from '@lucide/svelte/icons/play';
	import Pause from '@lucide/svelte/icons/pause';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { buttonVariants } from '../ui/button/index.js';
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';

	const timer = getTimerContext();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		{#if !timer.isTimerOn}
			<Tooltip.Trigger onclick={timer.startTimer} class={buttonVariants({ variant: 'outline' })}>
				<Play />
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{m.play()}</p>
			</Tooltip.Content>
		{:else}
			<Tooltip.Trigger onclick={timer.pauseTimer} class={buttonVariants({ variant: 'outline' })}>
				<Pause />
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{m.pause()}</p>
			</Tooltip.Content>
		{/if}
	</Tooltip.Root>
</Tooltip.Provider>
