import { Dialog as AriaDialog, type DialogProps } from 'react-aria-components';

export function Dialog(props: DialogProps) {
	return (
		<AriaDialog
			{...props}
			className='relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4'
		/>
	);
}
