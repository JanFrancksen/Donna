import { cva } from 'class-variance-authority';
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from 'react-aria-components';

export interface ButtonProps extends AriaButtonProps {
	variant?: 'primary' | 'secondary' | 'destructive' | 'icon';
}

const button = cva(
	'cursor-default rounded-lg border border-black/10 px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:border-white/10 dark:shadow-none',
	{
		variants: {
			variant: {
				primary: 'bg-blue-600 pressed:bg-blue-800 text-white hover:bg-blue-700',
				secondary:
					'bg-gray-100 pressed:bg-gray-300 text-gray-800 hover:bg-gray-200 dark:bg-zinc-600 dark:pressed:bg-zinc-400 dark:text-zinc-100 dark:hover:bg-zinc-500',
				destructive:
					'bg-red-700 pressed:bg-red-900 text-white hover:bg-red-800',
				icon: 'flex items-center justify-center border-0 pressed:bg-black/10 p-1 text-gray-600 hover:bg-black/[5%] disabled:bg-transparent dark:pressed:bg-white/20 dark:text-zinc-400 dark:hover:bg-white/10',
			},
			isDisabled: {
				true: 'border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:text-[GrayText]',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	}
);

export function Button(props: ButtonProps) {
	return (
		<AriaButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, variant: props.variant, className })
			)}
		/>
	);
}
