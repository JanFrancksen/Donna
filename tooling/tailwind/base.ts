import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					weak: 'hsla(var(--brand-weak) / <alpha-value>)',
					DEFAULT: 'hsla(var(--brand) / <alpha-value>)',
					strong: 'hsla(var(--brand-strong) / <alpha-value>)',
				},
				accent: {
					weak: 'hsla(var(--accent-weak) / <alpha-value)',
					DEFAULT: 'hsla(var(--accent) / <alpha-value)',
					strong: 'hsla(var(--accent-strong) / <alpha-value)',
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
	plugins: [
		require('tailwindcss-animate'),
		require('tailwindcss-react-aria-components'),
	],
} satisfies Config;
