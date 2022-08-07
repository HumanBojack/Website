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
  
  export let article;

  marked.setOptions({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlightedCode = hljs.highlight(code, { language }).value
      return highlightedCode;
    }
  });
  
  const meta = article.metadata;

  // we might want to use sanitize-html insead of xss
  const content = xss(marked.parse(article.content), {
    onIgnoreTagAttr: (tag, name, value, isWhiteAttr) => {
      if (value.slice(0, 9) == "language-" || value.slice(0, 5) == "hljs-") {
        return name + '="' + xss.escapeAttrValue(value) + '"';
      }
    }
  })

</script>

<svelte:head>
  <title>{meta.title} - Romain</title>
  <meta property="og:title" content={meta.title} />
</svelte:head>

<div class="main_wrapper">
  
  <div class="presentation">
    <h1>{meta.title}</h1>
    <p>
      <time datetime={meta.date}>{new Date(meta.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}</time>
      — a {meta.readTime} minute{meta.readTime > 1 ? "s" : ""} read
    </p>
    
    {#if meta.categories}
      <p class="categories">
        {#each meta.categories as category}
          <span>{category}</span>
        {/each}
      </p>
    {/if}
  </div>
  
  
  <div class="article">
    {@html content}
  </div>
</div>

<style lang="scss">
  .main_wrapper {
    max-width: 50rem;
    margin: 2rem auto;
  }

  .article {
    padding: 1rem;
    margin: 2rem auto;
    max-width: 45rem;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .categories {
    /* width: 50%; */
    display: flex;
    justify-content: center;

    span {
      margin-top: auto;
      margin-bottom: auto;
      padding: 3px 3px 1px 3px;
  
      background-color: var(--primary);
      color: var(--background);
      text-transform: uppercase;

      border-radius: 2px;
    }

    span:not(:first-child) {
      margin-inline-start: 10px;
    }
  }


</style>