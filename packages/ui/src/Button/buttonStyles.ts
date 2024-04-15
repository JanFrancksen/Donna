import { cva } from 'class-variance-authority';

export const buttonStyles = cva('rounded', {
	variants: {
		variant: {
			primary: 'bg-black text-white',
			secondary: 'bg-secondary text-white',
			success: 'success',
			danger: 'danger',
			warning: 'warning',
		},
		size: {
			small: 'px-2 py-1',
			medium: 'px-4 py-2',
			large: 'px-6 py-3',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});
