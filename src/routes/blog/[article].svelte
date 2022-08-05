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
  import { marked } from 'marked';
  export let article;
  const meta = article.metadata;
</script>

<svelte:head>
  <title>{meta.title} - Romain</title>
  <meta property="og:title" content={meta.title} />
</svelte:head>

<h1>{meta.title}</h1>
<p>Published on {meta.date}</p>
<p>Published on
  <time datetime={meta.date}>{new Date(meta.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}</time>
</p>
<p>{meta.readTime}min read</p>

{#if meta.categories}
<ul>
  {#each meta.categories as category}
  <li>{category}</li>
  {/each}
</ul>
{/if}

<p>The markdown is parsed but we also need to purify it</p>


<div>
  {@html marked(article.content)}
</div>

<style>
  div {
    padding: 1rem;
    margin: 2rem auto;
    max-width: 45rem;
  }
</style>