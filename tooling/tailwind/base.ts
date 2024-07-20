import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					weak: 'hsl(var(--brand-weak) / <alpha-value>)',
					DEFAULT: 'hsl(var(--brand) / <alpha-value>)',
					strong: 'hsl(var(--brand-strong) / <alpha-value>)',
				},
				accent: 'hsl(var(--accent) / <alpha-value>)',
				body: {
					weak: 'hsl(var(--body-weak) / <alpha-value>)',
					DEFAULT: 'hsl(var(--body) / <alpha-value>)',
					strong: 'hsl(var(--body-strong) / <alpha-value>)',
				},
				stroke: {
					weak: 'hsl(var(--stroke-weak) / <alpha-value>)',
					strong: 'hsl(var(--stroke-strong) / <alpha-value>)',
				},
				background: {
					weak: 'hsl(var(--background-weak) / <alpha-value>)',
					strong: 'hsl(var(--background-strong) / <alpha-value>)',
				},
			},
		},
	},
} satisfies Config;
