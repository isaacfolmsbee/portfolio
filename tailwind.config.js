module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'fadein': 'fadein 450ms linear',
			},
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
		fontFamily: {
			'sans': 'Francois One',
			'serif': 'Strait',
			'gelasio': 'Gelasio',
		}
	},
	variants: {
		extend: {
			textColor: ['active'],
			animation: ['hover'],
		},
	},
	plugins: [],
}
