export const load = async ({ fetch }: { fetch: Function; }) => {
  const postsResponse = await fetch('/api/blog.json');
  const posts: JSON[] = await postsResponse.json();

  return {
    posts: posts
  }
};

