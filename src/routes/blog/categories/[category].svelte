<script context="module" lang="ts">
  export const load = async ({ params, fetch }: { params: { category: string }, fetch: Function }) => {

    const currentCategory: string = params.category;
    const response = await fetch('/api/posts.json');
    const posts: { meta: { title: string, date: string, categories: string[] }, path: string }[] = await response.json();

    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory));

    return {
      props: {
        posts: matchingPosts
      }
    }
  }
</script>

<script lang="ts">
  export let posts: { meta: { title: string, date: string, categories: string[] }, path: string }[];
</script>

{#each posts as post}
{post.meta.title}
{/each}