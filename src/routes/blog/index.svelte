<script context="module" lang="ts">
  export const load = async ({ fetch }: { fetch: Function; }) => {
    const postsResponse = await fetch('/api/blog.json');
    const posts: JSON[] = await postsResponse.json();

    return {
      props: {
        posts: posts
      }
    }
  }
</script>

<script lang="ts">
  export let posts: { meta: { title: string, date: string }, path: string }[];
</script>

<svelte:head>
  <title>Blog posts</title>
</svelte:head>

<h1>Blog</h1>
<p>This is where my blog posts will eventually go</p>
<ul>
  {#each posts as post}
  <li>
    <a href={post.path}>
      {post.meta.title}
    </a>
    Published on {new Date(post.meta.date).toLocaleDateString()}
  </li>
  {/each}
</ul>