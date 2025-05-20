import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Timer } from '$lib/states/timer.svelte';

describe('Timer', () => {
	let timer: Timer;

	beforeEach(() => {
		vi.useFakeTimers();
		timer = new Timer();
	});

	afterEach(() => {
		vi.clearAllTimers();
	});

	it('should initialize with correct default values', () => {
		expect(timer.isTimerOn).toBe(false);
		expect(timer.isRoundDone).toBe(false);
		expect(timer.isSessionDone).toBe(false);
		expect(timer.currentTimeDisplay).toBe('25:00');
		expect(timer.roundDisplay).toBe('1 of 8');
		expect(timer.roundType).toBe('work');
	});

	it('should start the timer', () => {
		timer.startTimer();
		expect(timer.isTimerOn).toBe(true);
		vi.advanceTimersByTime(100);
		expect(timer.currentTimeDisplay).toBe('24:59');
	});

	it('should pause the timer', () => {
		timer.startTimer();
		timer.pauseTimer();
		expect(timer.isTimerOn).toBe(false);
	});

	it('should stop the timer and reset current time', () => {
		timer.startTimer();
		vi.advanceTimersByTime(1000);
		timer.stopTimer();
		expect(timer.isTimerOn).toBe(false);
		expect(timer.currentTimeDisplay).toBe('25:00');
	});

	it('should go to the next round', () => {
		timer.goToNextRound();
		expect(timer.roundDisplay).toBe('2 of 8');
		expect(timer.roundType).toBe('break');
	});

	it('should automatically start timer if autostart is true', () => {
		// TODO
		timer.goToNextRound();
		expect(timer.roundDisplay).toBe('2 of 8');
		expect(timer.roundType).toBe('break');
	});

	it('should go to the previous round', () => {
		timer.goToNextRound();
		timer.goToPreviousRound();
		expect(timer.roundDisplay).toBe('1 of 8');
		expect(timer.roundType).toBe('work');
	});

	it('should reset the current time', () => {
		timer.startTimer();
		vi.advanceTimersByTime(1000);
		timer.resetCurrentTime();
		expect(timer.currentTimeDisplay).toBe('25:00');
	});

	it('should reset the session', () => {
		timer.goToNextRound();
		timer.resetSession();
		expect(timer.roundDisplay).toBe('1 of 8');
		expect(timer.currentTimeDisplay).toBe('25:00');
		expect(timer.roundType).toBe('work');
		expect(timer.isTimerOn).toBe(false);
	});
});
