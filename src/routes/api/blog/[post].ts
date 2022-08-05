import fs from "fs";
import { marked } from "marked";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";
import { getReadTime } from "$lib/helpers/getReadTime";

export const GET = async ({ params }: { params: { post:string }}) => {
  const articleName = params.post;

  try {
    const markdownFile = await fs.promises.readFile(`src/articles/${articleName}.md`, 'utf-8')
    const parsedMeta: { metadata: object, content: string } = await markdownMetaParser(markdownFile);

    // parsedMeta.metadata.readTime = Math.ceil((parsedMeta.content.length / 5) / 180);
    // const wordCount: number = parsedMeta.content.split(" ").filter((word) => word != "").length;
    // parsedMeta.metadata.readTime = Math.ceil(wordCount / 180);

    parsedMeta.metadata.readTime = await getReadTime(parsedMeta.content);


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