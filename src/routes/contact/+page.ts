export const load = async ({ fetch }: { fetch: Function; }) => {
  const statusResponse = await fetch(`https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`);
  if (statusResponse.status != 200) return { status: { success: false } };

  const discordStatus: object = await statusResponse.json();

  return {
  status: discordStatus
}
};

