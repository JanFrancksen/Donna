import { VariantProps } from 'class-variance-authority';
import React from 'react';
import {
	Button as AriaButton,
	ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { buttonStyles } from './buttonStyles';

export interface ButtonProps
	extends AriaButtonProps,
		VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
	return <AriaButton className={buttonStyles({ variant, size })} {...props} />;
};
