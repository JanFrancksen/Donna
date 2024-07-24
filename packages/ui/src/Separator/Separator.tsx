import {
	Separator as AriaSeparator,
	type SeparatorProps,
} from 'react-aria-components';

export function Separator(props: SeparatorProps) {
	return (
		<AriaSeparator
			{...props}
			className='my-2 orientation-horizontal:h-px orientation-vertical:w-px w-full border-background-weak forced-colors:bg-[ButtonBorder]'
		/>
	);
}
