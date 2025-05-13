import { getContext, setContext } from 'svelte';
import type {Timer} from "$lib/entities/timer.svelte";

const TIMER_KEY = 'timer';

export function setTimerContext(timer: Timer) {
	setContext(TIMER_KEY, timer);
}

export function getTimerContext() {
	return getContext(TIMER_KEY) as Timer;
}
