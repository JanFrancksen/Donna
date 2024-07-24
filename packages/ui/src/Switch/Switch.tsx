import { cva } from 'class-variance-authority';
import type React from 'react';
import {
	Switch as AriaSwitch,
	type SwitchProps as AriaSwitchProps,
} from 'react-aria-components';
import { composeTailwindRenderProps } from '../examples/utils';

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
	children: React.ReactNode;
}

const track = cva(
	'flex h-4 w-7 shrink-0 cursor-default items-center rounded-full border border-transparent px-px shadow-inner transition duration-200 ease-in-out',
	{
		variants: {
			isSelected: {
				false:
					'bg-gray-400 group-pressed:bg-gray-500 dark:bg-zinc-400 dark:group-pressed:bg-zinc-300',
				true: 'forced-colors:!bg-[Highlight] bg-gray-700 group-pressed:bg-gray-800 dark:bg-zinc-300 dark:group-pressed:bg-zinc-200',
			},
			isDisabled: {
				true: 'forced-colors:group-selected:!bg-[GrayText] bg-gray-200 dark:bg-zinc-700 forced-colors:border-[GrayText]',
			},
		},
	}
);

const handle = cva({
	base: '-outline-offset-1 h-3 w-3 transform rounded-full bg-white shadow outline outline-1 outline-transparent transition duration-200 ease-in-out dark:bg-zinc-900',
	variants: {
		isSelected: {
			false: 'translate-x-0',
			true: 'translate-x-[100%]',
		},
		isDisabled: {
			true: 'forced-colors:outline-[GrayText]',
		},
	},
});

export function Switch({ children, ...props }: SwitchProps) {
	return (
		<AriaSwitch
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'group flex items-center gap-2 text-gray-800 text-sm transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]'
			)}
		>
			{() => (
				<>
					<div className={track()}>
						<span className={handle()} />
					</div>
					{children}
				</>
			)}
		</AriaSwitch>
	);
}
