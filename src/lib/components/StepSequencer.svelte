<script lang="ts">
	import { bassState } from '$lib/helpers/state.svelte';
	const stepLength = 16;
	const visualDivision = 4;
	const noteType = 0.5;
	const bpm = 130;
	const secondsPerBeat = 1 / (bpm / 60);

	// TODO: need to do that per instrument
	let steps = [];
	for (let i = 0; i < stepLength; i++) {
		steps.push({
			accentuate: Boolean(Math.floor(i / visualDivision) % 2),
			selected: false,
			ontime: false
		});
	}
	let stepsState = $state(steps);

	// Play pause
	let playing = $state(false);

	let cursor = -1;
	const increaseCursor = () => {
		cursor = (cursor + 1) % stepLength;
	};

	const updateSequencer = () => {
		stepsState.forEach((step, i) => {
			step.ontime = i == cursor;
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
			increaseCursor();
			updateSequencer();
			let currentStep = stepsState[cursor];
			currentStep.ontime = true;
			if (currentStep.selected) {
				console.log('step selected');
				bassState.interactive.interact();
			}

			// remove time taken from the sleep ?
			await new Promise((r) => setTimeout(r, secondsPerBeat * noteType * 1000));
			currentStep.ontime = false;
		}
	};
</script>

<div class="sequencer">
	<button onclick={playPause}> Play </button>
	<button onclick={increaseCursor}> increase </button>
	<button onclick={updateSequencer}> update </button>

	<!-- TODO: loop over each interactive to create it's lane -->
	<div class="line">
		{#each stepsState as { accentuate, selected, ontime }, i}
			<div
				class="block"
				class:ontime
				class:selected
				class:accentuate
				onclick={() => (stepsState[i].selected = !stepsState[i].selected)}
			></div>
		{/each}
	</div>
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
