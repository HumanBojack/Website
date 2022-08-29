export const load = async ({ params }: { params: { post: string }}) => {
  const articleName = params.post;

  try {
    const article = await import(`../posts/${articleName}.md`);

    return {
      status: 200,
      metadata: article.metadata,
      Content: article.default
    }
  } catch {
    // TODO: Throw a custom 404 error or redirect
    // https://kit.svelte.dev/docs/routing#error
    return {
      status: 404
    }
  }
}

