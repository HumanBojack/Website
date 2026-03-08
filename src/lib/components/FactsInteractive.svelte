<script lang="ts">
	import { Interactible } from '$lib/helpers/interactive';
	import { onMount } from 'svelte';

	const voiceSpriteMap = [
		[0, 750],
		[1425, 2056],
		[4521, 660],
		[6042, 1225],
		[8296, 354],
		[9415, 488],
		[10880, 1393],
		[12885, 853],
		[14479, 798],
		[15359, 850],
		[17019, 864],
		[19106, 696]
	];

	let button: HTMLElement;
	let computerText: HTMLElement;
	let i: Interactible;

	onMount(() => {
		i = new Interactible('voice', voiceSpriteMap, button, () => {
			computerText.innerText = 'TODO: get a random text from a list';
		});
	});
</script>

<button on:click={() => i.interact()} bind:this={button}>
	<p bind:this={computerText}>
		Hiiiii!!! I'm Romain / HumanBojack, I'm 24, non binary and I like music and computer stuff c:
	</p>
	<img src="/images/interactives/computer.png" />
</button>

<style lang="scss">
	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		color: var(--background);
		width: 100%;
		position: relative;

		overflow: hidden;

		img {
			max-width: 100%;
		}

		p {
			color: var(--text);
			max-height: 25%;
			width: 34%;
			position: absolute;
			top: 11%;
			left: 50%;
			transform: translate(-50%, 0%);
			overflow: scroll;
		}
	}
</style>
