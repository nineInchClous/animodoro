<script>
	import PlayPauseButton from '$lib/components/timer/PlayPauseButton.svelte';
	import StopReloadButton from '$lib/components/timer/StopReloadButton.svelte';
	import PreviousButton from '$lib/components/timer/PreviousButton.svelte';
	import NextButton from '$lib/components/timer/NextButton.svelte';
</script>

<section class="timer-controls-container">
	<PreviousButton />
	<PlayPauseButton />
	<StopReloadButton />
	<NextButton />
</section>
