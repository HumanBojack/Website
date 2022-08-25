import fs from "fs";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";
import { getReadTime } from "$lib/helpers/getReadTime";
import { json } from '@sveltejs/kit';

export const GET = async () => {
  console.log("hello");
  fs.readdir(".svelte-kit", function(err, items) {
    console.log(items);
  });
  fs.readdir(".svelte-kit/output", function(err, items) {
    console.log(items);
  });
  fs.readdir(".svelte-kit/output/client", function(err, items) {
    console.log(items);
  });
  fs.readdir(".svelte-kit/build", function(err, items) {
    console.log(items);
  });

  const allPostFilesNames = await fs.promises.readdir(`${import.meta.env.VITE_STATIC_FOLDER}/articles/`);

  const allPostFiles = await Promise.all(
    allPostFilesNames.map(async (file) => {
      const markdownFile = await fs.promises.readFile(`${import.meta.env.VITE_STATIC_FOLDER}/articles/${file}`, 'utf-8')
      const parsedMeta: { metadata?: object, content: string } = await markdownMetaParser(markdownFile);
      const metadata = parsedMeta.metadata;

      if (!metadata) return { name: file.split("."[0]) };

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

  return json(sortedPosts);
}