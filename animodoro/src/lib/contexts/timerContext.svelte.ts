import { getContext, setContext } from 'svelte';
import type {Timer} from "$lib/states/timer.svelte";

const key = {};

export function setTimerContext(timer: Timer) {
	setContext(key, timer);
}

export function getTimerContext() {
	return getContext(key) as Timer;
}
