<script>
  import ToggleDarkMode from './ToggleDarkMode.svelte';
</script>

<header class="title">
  <a href="/">Home</a>

  <nav>
    <ul>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><ToggleDarkMode /></li>
    </ul>
  </nav>
</header>

<style lang="scss">

  header {
    grid-column: 1/-1;
    padding: 0.75rem;
    background: var(--primary);
    color: var(--background);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.3;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;

    li {
      margin: auto;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    margin:auto 0;
  }
</style>