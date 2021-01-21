const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./public/*.html',
		'./src/**/*.vue',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				fadein: 'fadein 0.4s linear',
				'bounce-slow': 'bounce 2s linear infinite',
			},
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
		fontFamily: {
			sans: 'Francois One',
			serif: 'Strait',
			gelasio: 'Gelasio',
		},
		colors: {
			primary: {
				'50': '#9fddf9',
				'100': '#97d7f7',
				'200': '#88cdf2',
				'300': '#66baea',
				'400': '#43a4df',
				'500': '#288bc8',
				'600': '#1d75af',
				'700': '#125c91',
				'800': '#0d5287',
				'900': '#084b81',
			},
			gray: colors.gray,
		},
	},
	variants: {},
	plugins: [],
};
