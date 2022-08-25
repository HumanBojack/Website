import { json } from '@sveltejs/kit';
import fs from "fs";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";
import { getReadTime } from "$lib/helpers/getReadTime";

export const GET = async ({ params }: { params: { post:string }}) => {
  const articleName = params.post;

  try {
    const markdownFile = await fs.promises.readFile(`${import.meta.env.VITE_STATIC_FOLDER}/articles/${articleName}.md`, 'utf-8');
    const parsedMeta: { metadata: object, content: string } = await markdownMetaParser(markdownFile);

    parsedMeta.metadata.readTime = await getReadTime(parsedMeta.content);

    return json(parsedMeta)

  } catch (error: any) {
    return json({
      error: error?.message
    }, {
      status: 404
    })
  }
}