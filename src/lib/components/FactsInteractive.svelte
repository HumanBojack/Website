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
	let i: Interactible;
	onMount(() => {
		i = new Interactible('voice', voiceSpriteMap, button);
	});
</script>

	<p>fact</p>
<button on:click={() => i.interact()} bind:this={button}>
</button>

<style lang="scss">
</style>
