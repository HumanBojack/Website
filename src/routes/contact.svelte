<script context="module" lang="ts">
  export const load = async ({ fetch }: { fetch: Function; }) => {
    const statusResponse = await fetch(`https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`);
    if (statusResponse.status != 200) return { props: { status: { success: false } } };

    const discordStatus: object = await statusResponse.json();

    return {
      props: {
        status: discordStatus
      }
    }
  };

</script>

<script lang="ts">
  export let status:object;
</script>


<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<h1>Contact me!</h1>
<p>You can contact me on <a href="mailto:spychalar59@gmail.com">my email</a>!</p>

{#if status.success && status.data.discord_status != "offline"}
  <p>I'm currently available on discord! ({status.data.discord_status})</p>
{/if}