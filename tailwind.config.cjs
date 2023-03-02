/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '0rem'
			},
		},
		extend: {
			fontFamily: {
				"firaSans": ["Fira Sans", "sans-serif"] //1-9 italic
			},
			colors: {
				dark: "#0A0A00",
				light: "#EBE8E0",
				primary: "#D01110"
			}
		},
		screens: {
			'sm': "640px",
			'md': "768px",
			'lg': "1024px",
			'xl': "1280px",
			'2xl': "1400px"
		}
	},
	plugins: [
		require('prettier-plugin-tailwindcss')
	],
}
