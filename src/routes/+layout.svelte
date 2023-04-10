<script lang="ts">
  import '$lib/styles/const.scss'
  import '$lib/styles/style.scss';
  import Header from '$lib/components/Header.svelte';
  import { fade } from 'svelte/transition';

  export let data;
  $: isMainPage = (data.currentRoute == "/")

</script>

<svelte:head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏻‍💻</text></svg>">
</svelte:head>

<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 300 }} class:isMainPage>
    <slot />
  </main>
{/key}

<!-- <footer>This is a magnificient footer</footer> -->

<style>
  /* main {
    grid-column: 3 / span 5;
  }
  
  .isMainPage {
    grid-column: 1/-1;
  } */
</style>

