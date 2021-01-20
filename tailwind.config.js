const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				fadein: 'fadein 450ms linear',
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
			secondary: {
				'50': '#f1c1de',
				'100': '#efb8da',
				'200': '#eca7d3',
				'300': '#e58ac5',
				'400': '#de63b5',
				'500': '#d22d9b',
				'600': '#a6267e',
				'700': '#841f66',
				'800': '#6a1b54',
				'900': '#611a4e',
			},
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
	variants: {
		extend: {
			textColor: ['active'],
			animation: ['hover'],
		},
	},
	plugins: [],
};
