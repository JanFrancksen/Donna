import { cva } from 'class-variance-authority';
import {
	ModalOverlay,
	type ModalOverlayProps,
	Modal as RACModal,
} from 'react-aria-components';

const overlayStyles = cva(
	'fixed top-0 left-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-center justify-center bg-black/[15%] p-4 text-center backdrop-blur-lg',
	{
		variants: {
			isEntering: {
				true: 'fade-in animate-in duration-200 ease-out',
			},
			isExiting: {
				true: 'fade-out animate-out duration-200 ease-in',
			},
		},
	}
);

const modalStyles = cva(
	'max-h-full w-full max-w-md rounded-2xl border border-black/10 bg-white bg-clip-padding text-left align-middle text-slate-700 shadow-2xl dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-300 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas]',
	{
		variants: {
			isEntering: {
				true: 'zoom-in-105 animate-in duration-200 ease-out',
			},
			isExiting: {
				true: 'zoom-out-95 animate-out duration-200 ease-in',
			},
		},
	}
);

export function Modal(props: ModalOverlayProps) {
	return (
		<ModalOverlay {...props} className={overlayStyles}>
			<RACModal {...props} className={modalStyles} />
		</ModalOverlay>
	);
}
