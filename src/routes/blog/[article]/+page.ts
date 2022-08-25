import { json } from '@sveltejs/kit';

export const load = async ({ params, fetch }: { params: { article: string }, fetch: Function }) => {
  const articleName = params.article;
  
  const response = await fetch(`/api/blog/${articleName}`);
  if (response.status != 200) return json(response);
  
  const article = await response.json();

  return {
    article: article
  }
}

