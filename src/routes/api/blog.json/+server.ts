import fs from "fs";
import { markdownMetaParser } from "$lib/helpers/mardownMetaParser";
import { getReadTime } from "$lib/helpers/getReadTime";
import { json } from '@sveltejs/kit';

export const GET = async () => {
  console.log("hello");
  // fs.readdir(".svelte-kit", function(err, items) {
  //   console.log(items);
  // });
  // fs.readdir(".svelte-kit/output", function(err, items) {
  //   console.log(items);
  // });
  // fs.readdir(".svelte-kit/output/client", function(err, items) {
  //   console.log(items);
  // });
  // fs.readdir(".svelte-kit/build", function(err, items) {
  //   console.log(items);
  // });

  // const postsFolder = "src/routes/blog/posts";
  // const allPostFilesNames = await fs.promises.readdir(`${postsFolder}/`);

  const postFiles = import.meta.glob('/src/routes/blog/posts/*.md');
  const iterablePostFiles = Object.entries(postFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const name = path.match(/\/(\w+)\.md/)[1];

      return {
        meta: metadata,
        name
      }
    })
  )

  // const allPostFiles = await Promise.all(
  //   allPostFilesNames.map(async (file) => {
  //     const markdownFile = await fs.promises.readFile(`${postsFolder}/${file}`, 'utf-8')
  //     const parsedMeta: { metadata?: object, content: string } = await markdownMetaParser(markdownFile);
  //     const metadata = parsedMeta.metadata;

  //     if (!metadata) return { name: file.split("."[0]) };

  //     parsedMeta.metadata.readTime = await getReadTime(parsedMeta.content);


  //     return {
  //       name: file.split(".")[0],
  //       meta: metadata
  //     }

  //   })
  // );
  console.log(allPosts);
  
  const sortedPosts = allPosts.sort((a, b) => {
    return (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  })

  return json(sortedPosts);
}