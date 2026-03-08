<script lang="ts">
	import { Interactible } from '$lib/helpers/interactive';
	import { themeState } from '$lib/helpers/state.svelte';
	import { setRandomTheme } from '$lib/helpers/theme';
	import { onMount } from 'svelte';

	const paintSpriteMap = [
		[349, 665],
		[1717, 349],
		[2784, 461],
		[3894, 526],
		[5208, 791],
		[6520, 823],
		[8133, 535],
		[9533, 621],
		[10918, 459],
		[12025, 381],
		[12971, 271],
		[13998, 251],
		[15062, 313],
		[16239, 288],
		[17321, 352],
		[18283, 310],
		[19366, 328],
		[20323, 501],
		[21429, 414],
		[22681, 506],
		[23794, 644],
		[25142, 671]
	];

	let button: HTMLElement;
	let i: Interactible;
	onMount(() => {
		i = new Interactible('paint', paintSpriteMap, button, setRandomTheme);
		themeState.interactive = i;
	});
</script>

<button on:click={() => i.interact()} bind:this={button}>
	<p>theme</p>
</button>

<style lang="scss">
</style>
