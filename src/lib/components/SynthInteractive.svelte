<script lang="ts">
	import { Interactible } from '$lib/helpers/interactive';
	import { onMount } from 'svelte';

	const synthSpriteMap = {
		Em: [0, 2769],
		'Am/E': [3692, 2769],
		'Cmaj/E': [7385, 2769],
		'Bm/Gb': [11077, 2769]
	};

	let button: HTMLElement;
	let i: Interactible;
	onMount(() => {
		i = new Interactible('synth', synthSpriteMap, button);
	});
</script>

<button on:click={() => i.interact()} bind:this={button}>
	<p>synth</p>
</button>

<style lang="scss">
</style>
