<script lang="ts">
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';
	import { Progress } from '$lib/components/ui/progress/index';
	import WorkImage from '$lib/assets/images/undraw_happy-music_na4p.svg';
	import BreakImage from '$lib/assets/images/undraw_refreshing-beverage_w8al.svg';

	const timer = getTimerContext();
</script>

<div class="timer-container">
	<div class="timer-image-container">
		{#if timer.roundType === 'work'}
			<img alt="Bird listening to music with a headset" src={WorkImage} />
		{:else}
			<img class="break-image" alt="Playful cat" src={BreakImage} />
		{/if}
	</div>

	<p class="time-left">{timer.currentTimeDisplay}</p>
	<p class="round-type">{timer.roundType === 'work' ? 'Focus' : 'Break'}</p>
	<p class="round-count">{timer.roundDisplay} rounds</p>

	<div class="progress-container">
		<Progress value={timer.currentTimeProgressValue} />
	</div>
</div>
