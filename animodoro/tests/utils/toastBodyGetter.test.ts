import { describe, it, expect } from 'vitest';
import { getRandomWorkBody, getRandomBreakBody } from '$lib/utils/toastBodyGetter';

describe('getRandomWorkBody', () => {
	it('should return a random work body from the workBodies array', () => {
		const workBodies = [
			'Your hard work and dedication will pay off.',
			'Stay positive and focused on your goals.',
			'You are capable of more than you think.',
			'Keep pushing forward, one step at a time.',
			'Every small step brings you closer to your goals.',
			'You are doing an amazing job. Keep it up!',
			"Keep learning and growing. You're on the right track!",
			'Believe in yourself and all that you are.',
		];

		const result = getRandomWorkBody();
		expect(workBodies).toContain(result);
	});
});

describe('getRandomBreakBody', () => {
	it('should return a random break body from the pauseBodies array', () => {
		const pauseBodies = [
			'Take a moment to breathe and recharge.',
			'You deserve this break. Enjoy it!',
			'A pause can bring new perspectives. Relax and refresh.',
			'Rest is essential for productivity. Take your time.',
			'Use this pause to gather your thoughts and energy.',
			'Allow yourself to unwind and reset.',
			"You've been working hard. Enjoy this moment of rest.",
			'A short break can do wonders for your well-being.',
		];

		const result = getRandomBreakBody();
		expect(pauseBodies).toContain(result);
	});
});
