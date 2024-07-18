import { cva } from 'class-variance-authority';
import type React from 'react';
import {
	Tooltip as AriaTooltip,
	type TooltipProps as AriaTooltipProps,
	OverlayArrow,
	composeRenderProps,
} from 'react-aria-components';

export interface TooltipProps extends Omit<AriaTooltipProps, 'children'> {
	children: React.ReactNode;
}

const styles = cva(
	'group rounded-lg border border-slate-800 bg-slate-700 px-3 py-1 text-sm text-white shadow-[inset_0_1px_0_0_theme(colors.gray.600)] drop-shadow-lg will-change-transform dark:border-white/10 dark:bg-slate-600 dark:shadow-none',
	{
		variants: {
			isEntering: {
				true: 'fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 animate-in duration-200 ease-out',
			},
			isExiting: {
				true: 'fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 animate-out duration-150 ease-in',
			},
		},
	}
);

export function Tooltip({ children, ...props }: TooltipProps) {
	return (
		<AriaTooltip
			{...props}
			offset={10}
			className={composeRenderProps(props.className, (className, renderProps) =>
				styles({ ...renderProps, className })
			)}
		>
			<OverlayArrow>
				<svg
					width={8}
					height={8}
					viewBox='0 0 8 8'
					className='group-placement-left:-rotate-90 fill-slate-700 stroke-gray-800 group-placement-bottom:rotate-180 group-placement-right:rotate-90 dark:fill-slate-600 dark:stroke-white/10 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]'
				>
					<title>arrow</title>
					<path d='M0 0 L4 4 L8 0' />
				</svg>
			</OverlayArrow>
			{children}
		</AriaTooltip>
	);
}
