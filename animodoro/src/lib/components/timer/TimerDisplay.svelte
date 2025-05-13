<script lang="ts">
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';

	const timer = getTimerContext();
</script>

<p>{timer.currentTimeDisplay}</p>
<p>{timer.roundDisplay}</p>
<p>{timer.roundType}</p>
