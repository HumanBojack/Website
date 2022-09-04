<script lang="ts">
  import '$lib/styles/const.scss'
  import '$lib/styles/style.scss';
  import Header from '$lib/components/Header.svelte';
  import { fade } from 'svelte/transition';

  export let data;
  $: isMainPage = (data.currentRoute == "/")

</script>

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

