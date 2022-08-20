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
  import { footnotes } from '$lib/helpers/markedFootnotes';

  import "$lib/styles/blog.scss";
  
  export let article;

  marked.setOptions({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlightedCode = hljs.highlight(code, { language }).value // need to add an hljs copy option
      return highlightedCode;
    }
  });
  marked.use({ renderer: footnotes });
  
  const meta = article.metadata;

  // We are not using xss yet since we have issue of it blocking our markdown (title id, checklist...)
  // const content = xss(marked.parse(article.content), {
  //   onIgnoreTagAttr: (tag, name, value, isWhiteAttr) => {
  //     console.log(value);
  //     if (value.slice(0, 9) == "language-" || value.slice(0, 4) == "hljs") {
  //       return name + '="' + xss.escapeAttrValue(value) + '"';
  //     }
  //   }
  // })
  const content = marked.parse(article.content);

</script>

<svelte:head>
  <title>{meta.title} - Romain</title>
  <meta property="og:title" content={meta.title} />
</svelte:head>

<div class="main_wrapper">
  
  <div class="presentation">
    {#if meta.hero}
      <div class="hero">
        <h1>{meta.title}</h1>
        <img src="/images/hero/{meta.hero}" alt={meta.hero_alt}/>
      </div>
    {:else}
      <h1>{meta.title}</h1>
    {/if}
    <p>
      <time datetime={meta.date}>
        {new Date(meta.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}
      </time>
      — a {meta.readTime} minute{meta.readTime > 1 ? "s" : ""} read
    </p>
    

    <div class="categories">
      {#each meta.categories as category}
        <a href="/blog?category={category}">{category}</a>
      {/each}
    </div>

  </div>
  <hr/>
  
  
  <div class="article">
    {@html content}
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


    .hero {
      position:relative;
      background: black;

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

      @media (max-width: 400px) {
        img {
          aspect-ratio: 4/3;
        }
      }
    }
    
  }

  .categories {    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      margin: 3px;
      /* padding: 4px 10px 2px 10px; */
      padding: 2px 8px;
  
      background-color: var(--primary);
      color: var(--background);

      font-size: 0.9em;
      text-transform: capitalize;
      border-radius: 15px;
      text-decoration: none;
    }
  }
  

</style>