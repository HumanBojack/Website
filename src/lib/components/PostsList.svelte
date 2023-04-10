<script lang="ts">
  export let posts: { meta: { title: string, date: string, readTime: number, categories: string[], subtitle: string }, path: string }[];
</script>

<div class="article_list">
  {#each posts as post}
    <a href="/blog/{post.name}">
      <div class="metadata">
        <p>{new Date(post.meta.date).toLocaleDateString()}</p>
        <p>{post.meta.readTime} minute{post.meta.readTime > 1 ? "s" : ""} read</p>
      </div>
      <h3>{post.meta.title}</h3>
      <p>{post.meta.subtitle}</p>

    </a>
  {/each}
</div>


<style lang="scss">

  .article_list {
    display: grid;
    grid-gap: 1.8rem;

    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      * {
        margin: 5px 0;
      }

      &:hover h3 {
       color: var(--contrast);
      }
    }
  }

  .metadata {
    color: var(--muted);
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }
</style>