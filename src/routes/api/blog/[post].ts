import fs from "fs";
import { marked } from "marked";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";

export const GET = async ({ params }: { params: { post:string }}) => {
  const articleName = params.post;

  try {
    const markdownFile = await fs.promises.readFile(`src/articles/${articleName}.md`, 'utf-8')
    const parsedMeta = await markdownMetaParser(markdownFile);

    return {
      body: parsedMeta
    }

  } catch (error: any) {
    return {
      status: 404,
      body: {
        error: error?.message
      }
    }
  }
}