<script lang="ts">
  export let data;
  let { status } = data ;
</script>


<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<h1>Contact me!</h1>
<p>You can contact me on <a href="mailto:spychalar59@gmail.com">my email</a>!</p>

{#if status.success && status.data.discord_status != "offline"}
  <p>I'm currently available on discord! ({status.data.discord_status})</p>
{/if}