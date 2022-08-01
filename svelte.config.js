import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			scss: { prependData: '@import "src/lib/styles/const.scss";'}
		}),
		mdsvex({
			extension: ".md",
			layout: {
				blog: 'src/routes/blog/_blog.svelte'
			}
		})
	],


	kit: {
		adapter: adapter()
	}
};

export default config;
