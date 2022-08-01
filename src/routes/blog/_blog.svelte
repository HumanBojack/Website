<script>
  // export let title: string;
  // export let date: string;

  // https://github.com/pngwn/MDsveX/issues/116
  export let title;
  export let date;
  
  date = new Date(date).toLocaleDateString()
</script>

<svelte:head>
  <title>{title} - Romain</title>
  <meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>
<p>Published on {date}</p>

<slot />