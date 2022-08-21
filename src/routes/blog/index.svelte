<script context="module" lang="ts">
  import { getCategories } from "$lib/helpers/getCategories";

  export const load = async ({ url, fetch }: { url, fetch: Function; }) => {
    const postsResponse = await fetch('/api/blog.json');
    const posts: JSON[] = await postsResponse.json();

    const paramsCategories = url.searchParams.getAll('category');
    const categories = getCategories(posts, paramsCategories);
    
    return {
      props: {
        posts: posts,
        categories: categories
      }
    }
  }
</script>

<script lang="ts">
  // import { getCategories } from "$lib/helpers/getCategories";
  // import { alphabetical } from '$lib/helpers/sortCategories'
  import { composeCategoryParams } from "$lib/helpers/composeCategoryParams";
  import { copy } from "$lib/helpers/copy.ts";

  import { flip } from 'svelte/animate';
  import { crossfade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import { page } from '$app/stores';

  import PostsList from "$lib/components/PostsList.svelte";

  export let posts: { meta: { title: string, date: string }, path: string }[];
  export let categories;

  const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});


  const toggleCategory = (category) => {
    category.selected = !category.selected;
    categories = categories;
  }

  const resetSearch = () => {
    categories.forEach((cat) => cat.selected = false);
    categories = categories;
  }


  $:selectedCategories = categories.filter((elm) => elm.selected).map((elm) => elm.name);
  $:filteredPosts = posts.filter((post) => selectedCategories.every((elm) => post.meta.categories.includes(elm)));

  $:postCount = getCategories(filteredPosts).reduce((previous, elm) => {
    return {
      ...previous,
      [elm.name]: elm.articles.length
    }
  }, {});

</script>

<svelte:head>
  <title>Blog posts</title>
</svelte:head>

<div class="main_wrapper">
  <div class="category_filter">

    <div class="actions" class:invisible={!selectedCategories.length}>
      <button on:click={(e) => copy(e, $page.url.host + "/blog/" + composeCategoryParams(selectedCategories))}
        >Copy</button>
      <button on:click={resetSearch}>Reset</button>
    </div>

    <hr/>

    <div class="categories">
      {#each categories
        .filter(elm => postCount[elm.name])
        .sort((a, b) => b.selected - a.selected)
        as category (category.name)}
        <!-- get the categories that have at least a post, display the selected categories first -->
        <span
          on:click="{() => toggleCategory(category)}"
          animate:flip
          class:selected={category.selected}
          >
          <!-- in:receive={{key: category.name}}
          out:send={{key: category.name}} -->
          <!-- class:active={postCount[category.name]} -->
          {category.name}
          ({postCount[category.name]})
        </span>
      {/each}
    </div>

  </div>
  
  <div class="blog_posts">
    <h1>{filteredPosts.length} post{filteredPosts.length == 1 ? "" : "s"}</h1>
    <PostsList posts={filteredPosts} />
  </div>
</div>

<style lang="scss">
  .main_wrapper {
    max-width: $max-width;
    margin: 8% auto;
    
    display: grid;
    gap: 4rem;
  }
  
  @media (min-width: 768px) {
    .main_wrapper {
      grid-template-columns: 1fr 3fr;
      margin: 3% auto;
    }
  }

  @media (max-width: $max-width-margin) {
    .main_wrapper {
      margin: 8% 30px;
    }
  }

  .category_filter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  .actions {
    display: flex;

    button {
      border: none;
      background-color: transparent;
      color: var(--text);
      cursor: pointer;
      margin: 0 3px;
    }
  }
  
  
  .categories {    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  span {
    margin: 3px;
    // padding: 4px 10px 2px 10px
    padding: 1px 8px;

    background-color: var(--primary);
    color: var(--background);
    text-transform: capitalize;
    
    border-radius: 15px;
    
    cursor: pointer;

    &.selected {
      background-color: var(--secondary);
    }
  }
  
</style>