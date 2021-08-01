import preprocess from 'svelte-preprocess';
import { resolve } from "path";

import svg from '@poppanator/sveltekit-svg';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [svg()],
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$static: resolve('./static'),
				}
			}
		},
	}
		
};

export default config;
