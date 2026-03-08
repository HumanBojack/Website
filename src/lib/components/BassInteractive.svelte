<script lang="ts">
	import { Interactible } from '$lib/helpers/interactive';
	import { onMount } from 'svelte';

	const bassSpriteMap = {
		e0: [0, 531],
		d: [1031, 520],
		b: [2051, 518],
		a: [3069, 519],
		g: [4088, 520],
		e: [5108, 515]
	};
	let button: HTMLElement;
	let i: Interactible;
	onMount(() => {
		i = new Interactible('bass', bassSpriteMap, button);
	});
</script>

<button on:click={() => i.interact()} bind:this={button}>
	<p>bass</p>
</button>

<style lang="scss">
</style>
