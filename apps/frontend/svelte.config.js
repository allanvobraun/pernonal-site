import sveltePreprocess from 'svelte-preprocess';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import svg from '@poppanator/sveltekit-svg';
import adapter from '@sveltejs/adapter-node';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [tailwindcss(resolve(__dirname, './tailwind.config.cjs')), autoprefixer],
		},
		sourceMap: true,
	}),

	kit: {
		vite: {
			plugins: [svg()],
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$static: resolve('./static'),
				},
			},
		},
		adapter: adapter(),
	},
};

export default config;
