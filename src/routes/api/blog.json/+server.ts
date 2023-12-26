import { json } from '@sveltejs/kit';

export const GET = async () => {

  const postFiles = import.meta.glob('/src/routes/blog/posts/*.md');
  const iterablePostFiles = Object.entries(postFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const name = path.match(/\/([\w-]+)\.md/)[1];

      return {
        meta: metadata,
        name
      }
    })
  )
  
  const sortedPosts = allPosts.sort((a, b) => {
    return (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  })

  return json(sortedPosts);
}