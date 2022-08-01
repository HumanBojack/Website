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

<script>
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/style.scss';
  import '$lib/styles/prism-shades-of-purple.css';
  import { fade } from 'svelte/transition';

  export let currentRoute;
</script>

<Header />

{#key currentRoute}
  <main in:fade={{ duration: 300 }}>
    <slot />
  </main>
{/key}

<footer>This is a magnificient footer</footer>

