const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: '#181818',
			grey1: '#353436',
			grey2: '#212121',
			darkGrey: '#262626',
			white: '#FFFF',
			boneWhite: '#fbf8ee',
			purplishWhite: '#EDE9FE',
		},
		extend: {
			fontFamily: {
				fira: ['Fira Code'],
			},
		},
	},
};

module.exports = config;
