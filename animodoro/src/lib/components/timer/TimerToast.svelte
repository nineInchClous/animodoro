<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { getTimerContext } from '$lib/contexts/timerContext.svelte';
	import { getRandomBreakBody, getRandomWorkBody } from '$lib/utils/toastBodyGetter';

	const timer = getTimerContext();
	toast('test');
	$effect(() => {
		if (timer.roundType === 'work') {
			toast('Time to work! 🐕', { description: getRandomWorkBody() });
		} else {
			toast("It's time to take a break! 🐶", { description: getRandomBreakBody() });
		}
	});
</script>
