import { secondsToProgressValue, secondsToTime } from '$lib/utils/timeConverter';
import type { RoundType } from '$lib/types/RoundType';

const ONE_SECOND = 100;
const MINUTES_TO_SECONDS = 60;

const rounds = [25, 5, 25, 5, 25, 5, 25, 15];

export class Timer {
	private interval: NodeJS.Timeout | undefined = $state();
	private currentRoundIndex: number = $state(0);
	private currentTime: number = $state(rounds[0] * MINUTES_TO_SECONDS);
	private autoStart: boolean = $state(false);

	readonly isTimerOn: boolean = $derived(this.interval !== undefined);
	readonly isRoundDone: boolean = $derived(this.currentTime <= 0);
	readonly isSessionDone: boolean = $derived(this.currentRoundIndex >= rounds.length - 1);

	readonly currentTimeDisplay: string = $derived(secondsToTime(this.currentTime));
	readonly currentTimeProgressValue: number = $derived(secondsToProgressValue(this.currentTime, rounds[this.currentRoundIndex] * MINUTES_TO_SECONDS));
	readonly roundDisplay: string = $derived(`${this.currentRoundIndex + 1} / ${rounds.length}`);
	readonly roundType: RoundType = $derived(this.currentRoundIndex % 2 === 0 ? 'work' : 'break');

	startTimer = () => {
		this.interval = setInterval(() => {
			this.currentTime -= 1;
			if (this.isRoundDone) this.goToNextRound();
		}, ONE_SECOND);
	};

	pauseTimer = () => {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = undefined;
		}
	};

	stopTimer = () => {
		this.pauseTimer();
		this.resetCurrentTime();
	};

	goToNextRound = () => {
		this.pauseTimer();

		if (this.isSessionDone) {
			this.currentRoundIndex = 0;
		} else {
			this.currentRoundIndex += 1;
		}

		this.resetCurrentTime();
		if (this.autoStart) this.startTimer();
	};

	goToPreviousRound = () => {
		this.pauseTimer();

		this.currentRoundIndex = Math.max(0, this.currentRoundIndex - 1);

		this.resetCurrentTime();
		if (this.autoStart) this.startTimer();
	};

	resetCurrentTime = () => {
		this.currentTime = rounds[this.currentRoundIndex] * MINUTES_TO_SECONDS;
	};

	resetSession = () => {
		this.pauseTimer();
		this.currentRoundIndex = 0;
		this.resetCurrentTime();
	};
}
