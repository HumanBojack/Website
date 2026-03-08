<script lang="ts">
	import { Interactible } from '$lib/helpers/interactive';
	import { onMount } from 'svelte';

	// Muted modifiers since the noise was breaking the flow
	const keyboardSpriteMap = [
		[0, 204],
		[845, 249],
		[1447, 225],
		[2377, 278],
		[3382, 119],
		[3992, 230],
		[4436, 171],
		[5435, 186],
		[5938, 175]
		// [7221, 201]
		// [7989, 254],
		// [9036, 189],
		// [9578, 220]
	];

	let button: HTMLElement;
	let i: Interactible;
	onMount(() => {
		i = new Interactible('keyboard', keyboardSpriteMap, button);
	});
</script>

<button on:click={() => i.interact()} bind:this={button}>
	<p>keyboard</p>
</button>

<style lang="scss">
</style>
