<script lang="ts">
	import { onDestroy } from 'svelte';
	import { setTimerContext } from '$lib/contexts/timerContext.svelte';
	import { Timer } from '$lib/states/timer.svelte';
	import TimerControls from '$lib/components/timer/TimerControls.svelte';
	import TimerDisplay from '$lib/components/timer/TimerDisplay.svelte';
	import TimerToast from '$lib/components/timer/TimerToast.svelte';

	const timer = new Timer();

	setTimerContext(timer);

	onDestroy(() => {
		timer.pauseTimer();
	});
</script>

<div class="simple-container">
	<TimerDisplay />
	<TimerControls />
	<TimerToast />
</div>

<style lang="postcss">
	.simple-container {
		@apply flex flex-col items-center;
	}
</style>
