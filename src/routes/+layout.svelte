<script lang="ts">
  import '$lib/styles/const.scss'
  import '$lib/styles/style.scss';
  import Header from '$lib/components/Header.svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';

  $: url = $page.url;
</script>

<svelte:head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏻‍💻</text></svg>">
</svelte:head>

<Header />

{#key url.pathname}
  <main in:fade={{ duration: 100 }}>
    <slot />
  </main>
{/key}

<!-- <footer>This is a magnificient footer</footer> -->
