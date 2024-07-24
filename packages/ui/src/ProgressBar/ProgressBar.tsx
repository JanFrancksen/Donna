import {
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import { Label } from '../Label/Label';

export interface ProgressBarProps extends AriaProgressBarProps {
	label?: string;
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
	return (
		<AriaProgressBar {...props} className='flex flex-col gap-1'>
			{({ percentage, valueText, isIndeterminate }) => (
				<>
					<div className='flex justify-between gap-2'>
						<Label className='text-text'>{label}</Label>
						<span className='text-sm'>{valueText}</span>
					</div>
					<div className='-outline-offset-1 relative h-2 w-64 overflow-hidden rounded-full bg-stroke-weak outline outline-1 outline-transparent'>
						<div
							className={`absolute top-0 h-full rounded-full bg-brand transition-[width] forced-colors:bg-[Highlight] ${isIndeterminate ? 'slide-out-to-right-full repeat-infinite left-full animate-in duration-1000 ease-out [--tw-enter-translate-x:calc(-16rem-100%)]' : 'left-0'}`}
							style={{ width: `${isIndeterminate ? 40 : percentage}%` }}
						/>
					</div>
				</>
			)}
		</AriaProgressBar>
	);
}
