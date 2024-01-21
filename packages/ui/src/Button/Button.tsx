import { VariantProps, cva, cx } from 'class-variance-authority';
import React from 'react';
import {
	Button as AriaButton,
	ButtonProps as AriaButtonProps,
} from 'react-aria-components';

const buttonStyles = cva('rounded', {
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

export interface ButtonProps
	extends AriaButtonProps,
		VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
	return <AriaButton className={buttonStyles({ variant, size })} {...props} />;
};
