<script lang="ts">
  import { page } from '$app/stores';

  let baseUrl = $page.url.origin;

  // Variables
  export let url: string = $page.url.href;
  export let title: string;
  export let description: string;
  export let type: string = "website";
  export let publishedTime: string = new Date().toISOString();
  export let image: string = baseUrl + "/images/hero/default.png";;
  export let imageAlt: string = "Main page of the website";
  export let twitterCard: string = "summary_large_image";

  if (image != baseUrl + "/images/hero/default.png") {
    image = baseUrl + "/images/hero/" + image;
  }
</script>

<svelte:head>
  
  <!-- OpenGraph and twitter metadata -->
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  {#if type == "article"}
    <meta property="og:article:author" content="Romain Spychala" />
    <meta property="og:article:published_time" content={publishedTime} />
  {/if}
  <meta name="twitter:card" content={twitterCard} />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={imageAlt} />

</svelte:head>
