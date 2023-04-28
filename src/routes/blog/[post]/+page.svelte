<script lang="ts">
  import "$lib/styles/blog.scss";
  import "$lib/styles/prism.css";
  import { page } from '$app/stores';

  let baseUrl = $page.url.origin;
  
  export let data;
  const { Content, metadata } = data;
</script>

<svelte:head>
  <title>{metadata.title} - Romain</title>
  
  <!-- OpenGraph and twitter metadata -->
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.subtitle} />
  <meta property="og:type" content="article" />
  <meta property="og:article:published_time" content={metadata.date} />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Use the hero image or a default one -->
  {#if metadata.hero}
  <meta property="og:image" content={baseUrl + "/images/hero/{metadata.hero}"} />
  <meta property="og:image:alt" content={metadata.hero_alt} />
  {:else}
  <meta property="og:image" content={baseUrl+ "/images/hero/default.png"} />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:alt" content="Main page of the website" />
  {/if}

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
    <h2 class="h5">{metadata.subtitle}</h2>
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
    font-size: 22px;
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

      color: #FDF5ED;
      text-align: center;

      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(48,52,55,0.38697485830269607) 50%, rgba(0,0,0,0) 100%);
    }

    @media (max-width: $article-max-width-margin) {
      h1 {
        position: relative;
        transform: none;
        right: 0;
        left: 0;
        margin-bottom: 1rem;
        color: var(--text);
        background: none;
      }
    }
  }

  .categories {    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 500;

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