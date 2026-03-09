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

	const minBPM = 60;
	const maxBPM = 500;

	// Yes we should only use one bpm variable but it doesn't work if I remove one and it's 4am so let's keep that okay?
	let dirtyBPM = $state(130);
	let bpm = $derived(Math.min(Math.max(minBPM, dirtyBPM), maxBPM));
	let secondsPerBeat = $derived(1 / (bpm / 60));
	let sleepDuration = $derived(secondsPerBeat * noteType * 1000);

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
			let start = performance.now();
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
			let end = performance.now();

			await new Promise((r) => setTimeout(r, sleepDuration - (end - start)));
		}
	};
</script>

<div class="sequencer">
	{#each Object.keys(instruments) as name (name)}
		<div class="line">
			<p>{name}</p>
			<div class="block-line">
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
		</div>
	{/each}
	<div class="controls">
		<button onclick={playPause}>{playing ? 'Stop' : 'Play'}</button>
		<div>
			<label for="bpm">BPM</label>
			<input
				type="number"
				id="bpm"
				name="bpm"
				min={minBPM}
				max={maxBPM}
				bind:value={dirtyBPM}
				onchange={() => (dirtyBPM = bpm)}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.sequencer {
		display: grid;
		grid-template-columns: min-content max-content;
		column-gap: 0.5em;

		.block-line {
			display: flex;
		}

		.line {
			grid-column: 1/3;
			display: grid;
			grid-template-columns: subgrid;
		}

		.controls {
			display: flex;

			div {
				display: flex;
			}
		}

		p {
			grid-column: 1 / 2;
			padding: 0;
			margin: 0;
			display: block;
			line-height: 100%;
			align-content: center;
		}

		.block-line {
			grid-column: 2 / 3;
		}

		.block {
			height: 1.2em;
			width: 1.2em;
			margin: 2px;
			opacity: 0.5;

			cursor: pointer;

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
