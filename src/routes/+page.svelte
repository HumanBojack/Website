<script lang="ts">

  import Presentation from "$lib/components/Presentation.svelte"; 
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
  const { posts }: { meta: { title: string, date: string }, path: string }[] = data;

</script>

<svelte:head>
  <title>Romain Spychala</title>
</svelte:head>

<div class="main_wrapper">
  <div class="presentation">
    <Presentation />
  </div>

  <div class="blog_posts">
    <h2>Last 3 blog posts</h2>
    <PostsList posts="{posts.slice(0, 3)}" />
  </div>

  <!-- <div class="projects">
    <h2>Last 3 projects</h2>
    <PostsList {posts} />
  </div> -->

</div>


<style lang="scss">

  .main_wrapper {
    max-width: $max-width;
    margin: 2rem auto;
    
    @media (max-width: $max-width-margin) {
      margin: 2rem $margin;

      & > * {
        margin-bottom: 120px;
      }
    }
  }
  
  @media (min-width: 768px) {
    .main_wrapper {
      display: grid;
      gap: 2rem 4rem;
      grid-template-columns: minmax(200px, 3fr) minmax(250px, 4fr);
    }
  }


  .presentation {
    grid-column: 1;
  }

  .blog_posts {
    grid-column: 2;
    /* margin: auto; */
  }

  .projects {
    grid-column: 1 / span 2;
    /* width: 100%;
    max-width: 1000px; */
    margin: auto;
  }
</style>