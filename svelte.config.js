import adapter from '@sveltejs/adapter-static';
import sveltepreprocess from "svelte-preprocess"
import { vitePreprocess } from '@sveltejs/kit/vite';
import {preprocess} from 'svelte/compiler';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltepreprocess({ postcss: true }),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	paths: { // gh-pages :broken_heart:
        base: process.env.NODE_ENV === 'production' ? '/homepage' : '',
    }
};

export default config;
