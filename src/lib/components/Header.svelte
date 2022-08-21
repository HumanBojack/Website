<script>
  import ToggleDarkMode from './ToggleDarkMode.svelte';
</script>

<header>
  <a href="/">Home</a>

  <nav>
    <ul>
      <li><a href="/blog">blog</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/contact">contact</a></li>
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
  }

  ul {
    margin: 0;
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