<script lang="ts">
	import {
		bassState,
		factsState,
		keyboardState,
		synthState,
		themeState
	} from '$lib/helpers/state.svelte';
	const stepLength = 16;
	const visualDivision = 4;
	const noteType = 0.5;
	const bpm = 130;
	const secondsPerBeat = 1 / (bpm / 60);

	const instruments = {
		Bass: {
			state: bassState,
			steps: null
		},
		Facts: {
			state: factsState
		},
		Keyboard: {
			state: keyboardState
		},
		Synth: {
			state: synthState
		},
		Theme: {
			state: themeState
		}
	};

	Object.keys(instruments).forEach((name) => {
		let steps = $state([]);
		for (let y = 0; y < stepLength; y++) {
			steps.push({
				accentuate: Boolean(Math.floor(y / visualDivision) % 2),
				selected: false,
				ontime: false
			});
		}
		instruments[name].steps = steps;
	});

	// Play pause
	let playing = $state(false);

	let cursor = -1;
	const increaseCursor = () => {
		cursor = (cursor + 1) % stepLength;
	};

	const updateSequencer = () => {
		Object.keys(instruments).forEach((name) => {
			instruments[name].steps.forEach((step, i) => {
				step.ontime = i == cursor;
			});
		});
	};

	const playPause = () => {
		playing = !playing;

		if (!playing) {
			cursor = -1;
			updateSequencer();
		}

		if (playing) {
			runPlayLoop();
		}
	};

	const runPlayLoop = async () => {
		while (playing) {
			let previousCursor = cursor;
			increaseCursor();
			updateSequencer();

			Object.keys(instruments).forEach((name) => {
				let previousStep = instruments[name]['steps'][previousCursor];
				if (previousStep) {
					previousStep.ontime = false;
				}

				let currentStep = instruments[name]['steps'][cursor];
				currentStep.ontime = true;

				if (currentStep.selected) {
					instruments[name].state.interactive.interact();
				}
			});

			// remove time taken from the sleep ?
			await new Promise((r) => setTimeout(r, secondsPerBeat * noteType * 1000));
		}
	};
</script>

<div class="sequencer">
	<button onclick={playPause}> Play </button>

	{#each Object.keys(instruments) as name (name)}
		<div class="line">
			{#each instruments[name].steps as { accentuate, selected, ontime }, i}
				<div
					class="block"
					class:ontime
					class:selected
					class:accentuate
					onclick={() =>
						(instruments[name].steps[i].selected = !instruments[name].steps[i].selected)}
				></div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.sequencer {
		.line {
			display: flex;
		}

		.block {
			height: 1.2em;
			width: 1.2em;
			margin: 2px;
			opacity: 0.5;

			background-color: var(--primary);
		}

		.accentuate {
			background-color: var(--contrast);
		}
		.selected {
			opacity: 1;
		}
		.ontime {
			opacity: 1;
			background-color: var(--text);
		}
	}
</style>
