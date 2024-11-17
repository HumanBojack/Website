<script lang="ts">
  import { page } from '$app/stores';

  let baseUrl = $page.url.origin;

  let {
    url = $page.url.href,
    title,
    description,
    type = "website",
    publishedTime = new Date().toISOString(),
    image = baseUrl + "/images/hero/default.png",
    imageAlt = "Main page of the website",
    twitterCard = "summary_large_image",
  } = $props();

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
	{#if type == 'article'}
		<meta property="og:article:author" content="Romain Spychala" />
		<meta property="og:article:published_time" content={publishedTime} />
	{/if}
	<meta name="twitter:card" content={twitterCard} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={imageAlt} />
</svelte:head>
