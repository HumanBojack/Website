import fs from "fs";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";
import { getReadTime } from "$lib//helpers/getReadTime";

export const GET = async () => {
  const allPostFilesNames = await fs.promises.readdir("src/articles/");

  const allPostFiles = await Promise.all(
    allPostFilesNames.map(async (file) => {
      const markdownFile = await fs.promises.readFile(`src/articles/${file}`, 'utf-8')
      const parsedMeta: { metadata: object, content: string } = await markdownMetaParser(markdownFile);
      const metadata = parsedMeta.metadata;

      // parsedMeta.metadata.readTime = Math.ceil((parsedMeta.content.length / 5) / 180);
      // const wordCount: number = parsedMeta.content.split(" ").filter((word) => word != "").length;
      // parsedMeta.metadata.readTime = Math.ceil(wordCount / 180);

      parsedMeta.metadata.readTime = await getReadTime(parsedMeta.content);


      return {
        name: file.split(".")[0],
        meta: metadata
      }

    })
  );

  const sortedPosts = allPostFiles.sort((a, b) => {
    return (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  })

  return {
    body: sortedPosts
  }
}