import { getCategories } from "$lib/helpers/getCategories";

export const load = async ({ url, fetch }: { url, fetch: Function; }) => {
  const postsResponse = await fetch('/api/blog.json');
  const posts: JSON[] = await postsResponse.json();

  const paramsCategories = url.searchParams.getAll('category');
  const categories = getCategories(posts, paramsCategories);
  
  return {
    posts: posts,
    categories: categories
  }
}
