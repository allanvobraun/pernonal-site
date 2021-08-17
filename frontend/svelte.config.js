import sveltePreprocess from 'svelte-preprocess';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import svg from '@poppanator/sveltekit-svg';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [tailwindcss(resolve(__dirname, './tailwind.config.cjs')), autoprefixer],
		},
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [svg()],
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$static: resolve('./static'),
				},
			},
		},
	},
};

export default config;
