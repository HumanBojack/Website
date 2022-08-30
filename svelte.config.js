import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	// https://svelte.dev/docs#compile-time-svelte-preprocess
	preprocess: [
		preprocess({
			scss: { prependData: '@import "src/lib/styles/const.scss";'}
		}),
		mdsvex(mdsvexConfig)
	],


	kit: {
		adapter: adapter()
	}
};

export default config;
