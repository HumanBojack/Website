import { defineMDSveXConfig } from 'mdsvex';

import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { remarkReadTime } from './src/lib/remark/remarkReadingTime.js';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';


const mdsvexConfig = defineMDSveXConfig({
  extensions: ['.md'],
  remarkPlugins: [
    remarkParse,
    remarkFrontmatter,
    remarkReadTime,
    remarkGfm,
  ],
  // smartypants: true,
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings
  ]
});


export default mdsvexConfig;