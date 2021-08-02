const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				fira: ['Fira Code'],
			},

			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				dark: '#121212',
				grey1: '#353436',
				grey2: '#212121',
				darkGrey: '#262626',
				white: '#FFFF',
				boneWhite: '#fbf8ee',
				purplishWhite: '#EDE9FE',
			},
		},
	},
};

module.exports = config;
