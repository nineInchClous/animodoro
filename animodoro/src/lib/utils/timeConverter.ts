function secondsToTime(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	const paddedMinutes = minutes.toString().padStart(2, '0');
	const paddedSeconds = remainingSeconds.toString().padStart(2, '0');

	return `${paddedMinutes}:${paddedSeconds}`;
}

function secondsToProgressValue(currentSeconds: number, maxSeconds: number): number {
	return 100 - (currentSeconds / maxSeconds) * 100;
}

export { secondsToTime, secondsToProgressValue };
