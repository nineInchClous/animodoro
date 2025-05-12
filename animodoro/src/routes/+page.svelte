<script lang="ts">
    import {onDestroy} from "svelte";
    import {secondsToTime} from "$lib/utils/timeConverter";
    import {Button} from "$lib/components/ui/button";

    const ONE_SECOND = 1000;
    const MINUTES_TO_SECONDS = 60;

    const rounds = [25, 5, 25, 5, 25, 5, 25, 15];

    let interval: NodeJS.Timeout | undefined = $state();
    let currentRoundIndex = $state(0);
    let currentTime = $state(rounds[0] * MINUTES_TO_SECONDS);
    let autoStart = $state(false);

    const currentRoundTime = $derived(rounds[currentRoundIndex] * MINUTES_TO_SECONDS);
    const isRoundDone = $derived(currentTime <= 0);
    const isSessionDone = $derived(currentRoundIndex >= rounds.length - 1);

    const currentTimeDisplay = $derived(secondsToTime(currentTime));
    const roundDisplay = $derived(`${currentRoundIndex + 1} / ${rounds.length}`);
    const roundType = $derived(currentRoundIndex % 2 === 0 ? 'work' : 'break');

    const resetCurrentTime = () => {
        currentTime = currentRoundTime;
    };

    const startTimer = () => {
        interval = setInterval(() => {
            currentTime -= 1;
            if (isRoundDone) goToNextRound();
        }, ONE_SECOND);
    };

    const pauseTimer = () => {
        if (interval) clearInterval(interval);
    };

    const stopTimer = () => {
        pauseTimer();
        resetCurrentTime();
    };

    const goToNextRound = () => {
        pauseTimer();

        if (isSessionDone) {
            currentRoundIndex = 0;
        } else {
            currentRoundIndex += 1;
        }

        resetCurrentTime();
        if (autoStart) startTimer();
    };

    const resetSession = () => {
        pauseTimer();
        currentRoundIndex = 0;
        resetCurrentTime();
    };

    onDestroy(() => {
        pauseTimer();
    });
</script>

<h1>Animodoro</h1>
<p>{currentTimeDisplay}</p>
<p>{roundDisplay}</p>
<p>{roundType}</p>
<Button onclick={startTimer}>play</Button>
<Button onclick={pauseTimer}>pause</Button>
<Button onclick={stopTimer}>stop</Button>
<Button onclick={goToNextRound}>next</Button>
<Button onclick={resetSession}>reset</Button>
