<script lang="ts">
	import PlayPauseButton from '$lib/components/timer/PlayPauseButton.svelte';
	import StopReloadButton from '$lib/components/timer/StopReloadButton.svelte';
	import NextButton from '$lib/components/timer/NextButton.svelte';
	import PreviousButton from '$lib/components/timer/PreviousButton.svelte';
	import { setTimerContext } from '$lib/contexts/timerContext.svelte';
	import { onDestroy } from 'svelte';
	import { Timer } from '$lib/entities/timer.svelte';
	import TimerDisplay from '$lib/components/timer/TimerDisplay.svelte';

	const timer = new Timer();

	setTimerContext(timer);

	onDestroy(() => {
		timer.pauseTimer();
	});
</script>

<TimerDisplay />
<PreviousButton />
<PlayPauseButton />
<StopReloadButton />
<NextButton />
