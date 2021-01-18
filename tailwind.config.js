module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'bounce-slow': 'bounce 2s infinite',
			},
		},
		fontFamily: {
			'sans': ['Francois One'],
			'serif': ['Strait']

		}
	},
	variants: {
		extend: {
			animation: ['hover'],
		},
	},
	plugins: [],
}
