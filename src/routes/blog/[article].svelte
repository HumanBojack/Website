<script context="module" lang="ts">
  export const load = async ({ params, fetch }: { params: { article: string }, fetch: Function }) => {
    const articleName = params.article;
    
    const response = await fetch(`/api/blog/${articleName}`);
    if (response.status != 200) return response;
    
    const article = await response.json();
    
    
    return {
      props: {
        article: article
      }
    }
  }
</script>

<script lang="ts">
  import xss from 'xss';
  import hljs from 'highlight.js';
  import { marked } from 'marked';

  import "$lib/styles/blog.scss";
  
  export let article;

  marked.setOptions({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlightedCode = hljs.highlight(code, { language }).value // need to add an hljs copy option
      return highlightedCode;
    }
  });
  
  const meta = article.metadata;

  const content = xss(marked.parse(article.content), {
    onIgnoreTagAttr: (tag, name, value, isWhiteAttr) => {
      if (value.slice(0, 9) == "language-" || value.slice(0, 4) == "hljs") {
        return name + '="' + xss.escapeAttrValue(value) + '"';
      }
    }
  })
  // const content = marked.parse(article.content);

</script>

<svelte:head>
  <title>{meta.title} - Romain</title>
  <meta property="og:title" content={meta.title} />
</svelte:head>

<div class="main_wrapper">
  
  <div class="presentation">
    <h1>{meta.title}</h1>
    {#if meta.hero}
      <img src="/images/hero/{meta.hero}" alt={meta.hero_alt}/>
    {/if}
    <p>
      <time datetime={meta.date}>{new Date(meta.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}</time>
      — a {meta.readTime} minute{meta.readTime > 1 ? "s" : ""} read
    </p>
    

    {#if meta.categories}
      <div class="categories">
        {#each meta.categories as category}
          <a href="/blog?category={category}">{category}</a>
        {/each}
      </div>
    {/if}

  </div>
  
  
  <div class="article">
    {@html content}
  </div>
</div>

<style lang="scss">
  .main_wrapper {
    // max-width: 50rem;
    max-width: $article-max-width;
    margin: 2rem auto;

    @media (max-width: $article-max-width-margin) {
      margin: 8% 30px;
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
      margin: 0;
    }

    img {
      object-fit: cover;
      aspect-ratio: 16/9;
      width: 100%;
    }

  }

  .categories {    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  a {
    margin: 3px;
    padding: 4px 10px 2px 10px;

    background-color: var(--primary);
    color: var(--background);
    text-transform: capitalize;
    
    border-radius: 15px;

    text-decoration: none;
  }

</style>