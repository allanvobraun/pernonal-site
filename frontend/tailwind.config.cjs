const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,svelte}'],
	important: true,
	theme: {
		extend: {
			fontFamily: {
				fira: ['Fira Code'],
				sand: ['Quicksand'],
				glory: ['Glory'],
			},

			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				dark: '#252422',
				grey1: '#403D39',
				grey2: '#CCC5B9',
				orange: '#EB5E28',
				boneWhite: '#fbf8ee',
				purplishWhite: '#EDE9FE',
			},
		},
	},
};

module.exports = config;
