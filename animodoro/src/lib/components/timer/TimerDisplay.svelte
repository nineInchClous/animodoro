<script lang="ts">
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';
	import { Progress } from '$lib/components/ui/progress/index';
	import WorkImage from '$lib/assets/images/undraw_happy-music_na4p.svg';
	import BreakImage from '$lib/assets/images/undraw_playful-cat_3ta5.svg';

	const timer = getTimerContext();
</script>

<div class="timer-container">
	<div class="timer-image-container">
		{#if timer.roundType === 'work'}
			<img alt="Bird listening to music with a headset" src={WorkImage} />
		{:else}
			<img alt="Playful cat" src={BreakImage} />
		{/if}
	</div>

	<p class="time-left">{timer.currentTimeDisplay}</p>
	<p class="round-count">Round: {timer.roundDisplay}</p>
	<p class="round-type">Round type: {timer.roundType}</p>

	<div class="progress-container">
		<Progress value={timer.currentTimeProgressValue} />
	</div>
</div>
