import { describe, it, expect } from 'vitest';
import { secondsToTime, secondsToProgressValue } from '$lib/utils/timeConverter';

describe('secondsToTime', () => {
	it('should return empty string with negative input', () => {
		expect(secondsToTime(-1)).toBe('');
	});
	it('should convert seconds to MM:SS format', () => {
		expect(secondsToTime(0)).toBe('00:00');
		expect(secondsToTime(5)).toBe('00:05');
		expect(secondsToTime(60)).toBe('01:00');
		expect(secondsToTime(65)).toBe('01:05');
		expect(secondsToTime(3600)).toBe('60:00');
	});
});

describe('secondsToProgressValue', () => {
	it('should calculate the progress value correctly', () => {
		expect(secondsToProgressValue(0, 100)).toBe(100);
		expect(secondsToProgressValue(50, 100)).toBe(50);
		expect(secondsToProgressValue(100, 100)).toBe(0);
	});
});
