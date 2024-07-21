/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				brand: {
					weak: 'hsla(var(--brand-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--brand) / <alpha-value>)',
					strong: 'hsla(var(--brand-strong) / <alpha-value>)',
				},
				accent: {
					weak: 'hsla(var(--accent-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--accent) / <alpha-value>)',
					strong: 'hsla(var(--accent-strong) / <alpha-value>)',
				},
				background: {
					weak: 'hsla(var(--background-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--background) / <alpha-value>)',
					strong: 'hsla(var(--background-strong) / <alpha-value>)',
				},
				text: {
					weak: 'hsla(var(--text-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--text) / <alpha-value>)',
					strong: 'hsla(var(--text-strong) / <alpha-value>)',
				},
				stroke: {
					weak: 'hsla(var(--stroke-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--stroke) / <alpha-value>)',
					strong: 'hsla(var(--stroke-strong) / <alpha-value>)',
				},
				destructive: {
					weak: 'hsla(var(--destructive-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--destructive) / <alpha-value>)',
					strong: 'hsla(var(--destructive-strong) / <alpha-value>)',
				},
			},
		},
	},
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx}', // Add the ui package
	],
	plugins: [
		require('tailwindcss-animate'),
		require('tailwindcss-react-aria-components'),
	],
};
