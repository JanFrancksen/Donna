import { cva } from 'class-variance-authority';
import {
	ToggleButton as RACToggleButton,
	type ToggleButtonProps,
	composeRenderProps,
} from 'react-aria-components';

const styles = cva(
	'cursor-default rounded-lg border border-black/10 px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition forced-color-adjust-none dark:border-white/10 dark:shadow-none forced-colors:border-[ButtonBorder]',
	{
		variants: {
			isSelected: {
				false:
					'forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] bg-gray-100 pressed:bg-gray-300 text-gray-800 hover:bg-gray-200 dark:bg-zinc-600 dark:pressed:bg-zinc-400 dark:text-zinc-100 dark:hover:bg-zinc-500',
				true: 'forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText] bg-gray-700 pressed:bg-gray-900 text-white hover:bg-gray-800 dark:bg-slate-300 dark:pressed:bg-slate-100 dark:text-black dark:hover:bg-slate-200',
			},
			isDisabled: {
				true: 'forced-colors:!bg-[ButtonFace] forced-colors:!text-[GrayText] border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:border-[GrayText]',
			},
		},
	}
);

export function ToggleButton(props: ToggleButtonProps) {
	return (
		<RACToggleButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				styles({ ...renderProps, className })
			)}
		/>
	);
}
