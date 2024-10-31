/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				"coiny": ["Coiny-Regular"],
				"give-you-glory": ["GiveYouGlory-Regular"],
				"charmonman": ["Charmonman-Regular"]
			},
			colors: {
				"color-a": "#6447E3",
				"color-b": "#FF7327",
				"color-c": "#6447E3",
				"dark": "#5F5F5F"
			},
			screens: {
				mobile: '360px',
				tablet: '640px',
				md: '768px',
				lg: '976px',
				laptop: '1024px',
				desktop: '1280px',
				xl: '1440px',
			},
			aspectRatio: {
				'card': '3/4',
			},
			animation: {
				'gradient-bg': 'gradient 3s ease infinite',
			},
			keyframes: {
				gradient: {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
			},
			backgroundSize: {
				'gradient-size': '150% 105%',
			},
		},
	},
	plugins: [],
}
