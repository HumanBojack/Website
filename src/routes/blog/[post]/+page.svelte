<script lang="ts">
  import "$lib/styles/blog.scss";
  
  export let data;
  const { Content, metadata } = data;
</script>

<svelte:head>
  <title>{metadata.title} - Romain</title>
  <meta property="og:title" content={metadata.title} />
</svelte:head>

<div class="main_wrapper">
  
  <div class="presentation">
    {#if metadata.hero}
      <div class="hero">
        <h1>{metadata.title}</h1>
        <img src="/images/hero/{metadata.hero}" alt={metadata.hero_alt}/>
      </div>
    {:else}
      <h1>{metadata.title}</h1>
    {/if}
    <h5>{metadata.subtitle}</h5>
    <p>
      <time datetime={metadata.date}>
        {new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}
      </time>
      — a {metadata.readTime} minute{metadata.readTime > 1 ? "s" : ""} read
    </p>
    
    <div class="categories">
      {#each metadata.categories as category}
        <a href="/blog?category={category}">{category}</a>
      {/each}
    </div>

  </div>
  <hr/>
  
  <div class="article">
    <!-- <svelte:component this={Content} /> // A nice alternative -->
    <Content />
  </div>
</div>

<style lang="scss">
  .main_wrapper {
    max-width: $article-max-width;
    margin: 2rem auto;

    @media (max-width: $article-max-width-margin) {
      margin: 8% $margin;
    }
  }

  .article {
    margin: 2rem auto;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 130px;
    justify-content: space-between;

    & > * {
      margin: 8px 0;
    }

    p {
      color: var(--muted);
    }

    h1 {
      text-align: center;
    }

    h5 {
      color: var(--text);
    }
  }

  .hero {
    position:relative;

    img {
      opacity: 0.8;
      display: block;

      object-fit: cover;

      aspect-ratio: 2/1;
      width: 100%;
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      
      margin: 0;
      width: 100%;

      color: $light;
      text-align: center;

      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(48,52,55,0.38697485830269607) 50%, rgba(0,0,0,0) 100%);
    }

    @media (max-width: $article-max-width-margin) {
      h1 {
        position: relative;
        transform: none;
        right: 0;
        left: 0;
        margin-bottom: 1rem;
      }
    }
  }

  .categories {    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      margin: 3px;
      padding: 1px 8px;
  
      background-color: var(--primary);
      color: var(--background);

      font-size: 0.9em;
      text-transform: capitalize;
      border-radius: 15px;
      text-decoration: none;
    }
  }
  

</style>