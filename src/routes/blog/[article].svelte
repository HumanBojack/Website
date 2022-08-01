<script context="module" lang="ts">
  export const load = async ({ params, fetch }: { params: { article: string }, fetch: Function }) => {
    const articleName = params.article;

    const response = await fetch(`/api/blog/${articleName}`);
    const article = await response.json();

    console.log(article)

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
</script>

<svelte:head>

</svelte:head>

<h1>{article.metadata.title}</h1>

{@html marked(article.content)}