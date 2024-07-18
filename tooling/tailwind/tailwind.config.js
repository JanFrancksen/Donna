/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				brand: {
					weak: 'hsla(var(--color-primary-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--color-primary) / <alpha-value>)',
					strong: 'hsla(var(--color-primary-strong) / <alpha-value>)',
				},
				accent: {
					weak: 'var(--color-accent-weak)',
					DEFAULT: 'var(--color-accent)',
					strong: 'var(--color-accent-strong)',
				},
				background: 'var(--color-background)',
				text: 'var(--color-text)',
				border: 'var(--color-border)',
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
