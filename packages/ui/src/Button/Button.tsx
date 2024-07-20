import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { type ReactNode, forwardRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Button as AriaButton } from 'react-aria-components';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import {
	type ButtonStyleProps,
	buttonLoadingIndicatorStyles,
	buttonStyles,
} from './ButtonUtilities';

interface ButtonProps extends ButtonStyleProps {
	isLoading?: boolean;
	children: ReactNode;
}

export const Button = forwardRef<
	HTMLButtonElement,
	Omit<AriaButtonProps, 'children'> & ButtonProps
>(
	(
		{
			children,
			className = '',
			isDisabled,
			hasFullWidth,
			isInverted,
			isLoading = false,
			isSquare,
			size,
			type = 'button',
			variant,
			...rest
		},
		ref
	) => {
		return (
			<AriaButton
				className={cx(
					buttonStyles({
						variant,
						size,
						isInverted,
						isSquare,
						hasFullWidth,
					}),
					className
				)}
				isDisabled={isDisabled || isLoading}
				ref={ref}
				type={type}
				{...rest}
			>
				{isLoading && (
					<div
						className={buttonLoadingIndicatorStyles({ isInverted, variant })}
					>
						<span className='sr-only'>Lädt</span>
						<LoadingIndicator className='h-5' />
					</div>
				)}
				{children}
			</AriaButton>
		);
	}
);

export const MotionAriaButton = motion(AriaButton);
