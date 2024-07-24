import { Label as AriaLabel, type LabelProps } from 'react-aria-components';

export function Label(props: LabelProps) {
	return (
		<AriaLabel
			{...props}
			className='w-fit cursor-default font-medium text-sm text-text'
		/>
	);
}
