import { defineMDSveXConfig } from 'mdsvex';

import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { remarkReadTime } from './src/lib/remark/remarkReadingTime.js';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';


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
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['heading-link'] },
          children: [
            {
              type: 'element',
              tagName: 'img',
              properties: {
                src: '/icons/link.svg',
                alt: 'Link to title icon'
              },
              children: [],
            },
          ],
        }
      }
    ],
    [
      rehypeExternalLinks,
      {
        content: {
          type: 'element',
          tagName: 'img',
          properties: {
            src: '/icons/external-link.svg',
            alt: 'External link icon',
          },
          children: [],
        },
        contentProperties: { className: ['external-link-icon'] },
      }
    ]
  ]
});


export default mdsvexConfig;