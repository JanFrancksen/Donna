import { cva } from 'class-variance-authority';
import type React from 'react';
import {
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
	OverlayArrow,
	PopoverContext,
	composeRenderProps,
	useSlottedContext,
} from 'react-aria-components';

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
	showArrow?: boolean;
	children: React.ReactNode;
}

const styles = cva(
	'rounded-xl border border-black/10 bg-white bg-clip-padding text-slate-700 shadow-2xl dark:border-white/[15%] dark:bg-zinc-900/70 dark:text-zinc-300 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas]',
	{
		variants: {
			isEntering: {
				true: 'fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 animate-in duration-200 ease-out',
			},
			isExiting: {
				true: 'fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 animate-out duration-150 ease-in',
			},
		},
	}
);

export function Popover({
	children,
	showArrow,
	className,
	...props
}: PopoverProps) {
	const popoverContext = useSlottedContext(PopoverContext);
	const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';
	let offset = showArrow ? 12 : 8;
	offset = isSubmenu ? offset - 6 : offset;
	return (
		<AriaPopover
			offset={offset}
			{...props}
			className={composeRenderProps(className, (className, renderProps) =>
				styles({ ...renderProps, className })
			)}
		>
			{showArrow && (
				<OverlayArrow className='group'>
					<svg
						width={12}
						height={12}
						viewBox='0 0 12 12'
						className='group-placement-left:-rotate-90 block fill-white stroke-1 stroke-black/10 group-placement-bottom:rotate-180 group-placement-right:rotate-90 dark:fill-[#1f1f21] dark:stroke-zinc-600 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]'
					>
						<title>Popover Arrow</title>
						<path d='M0 0 L6 6 L12 0' />
					</svg>
				</OverlayArrow>
			)}
			{children}
		</AriaPopover>
	);
}
