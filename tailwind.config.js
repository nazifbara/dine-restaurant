/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['League Spartan', 'sans-serif']
		},
		extend: {
			colors: {
				primary: {
					1: 'hsl(27 22% 51%)',
					2: 'hsl(0 0% 7%)'
				},
				secondary: {
					1: 'hsl(234 30% 13%)',
					2: 'hsl(218 21% 18%)',
					3: 'hsl(217 14% 42%)'
				},
				text: 'hsl(var(--color-text) / <alpha-value>)',
				surface: 'hsl(var(--color-surface) / <alpha-value>)'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
}
