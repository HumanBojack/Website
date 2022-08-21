<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script lang="ts">
  import '$lib/styles/const.scss'
  import '$lib/styles/style.scss';
  import '$lib/styles/lioshi.css'
  import Header from '$lib/components/Header.svelte';
  import { fade } from 'svelte/transition';

  export let currentRoute;
  $: isMainPage = (currentRoute == "/")

</script>

<Header />

{#key currentRoute}
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

