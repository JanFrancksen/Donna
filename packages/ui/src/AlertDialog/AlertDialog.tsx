'use client';

import { VariantProps, cva, cx } from 'class-variance-authority';
import React from 'react';
import {
	Button as AriaButton,
	ButtonProps as AriaButtonProps,
	Dialog,
	DialogProps,
	Heading,
	Modal,
} from 'react-aria-components';
import { Button } from '../Button/Button';

const alertDialogStyles = cva('rounded', {
	variants: {
		variant: {
			primary: 'bg-black text-white',
			secondary: 'bg-secondary text-white',
			success: 'success',
			danger: 'danger',
			warning: 'warning',
		},
		size: {
			small: 'px-2 py-1',
			medium: 'px-4 py-2',
			large: 'px-6 py-3',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});

export interface AlertDialogProps
	extends Omit<DialogProps, 'children'>,
		VariantProps<typeof alertDialogStyles> {
	title: string;
	children: React.ReactNode;
	actionLabel: string;
	cancelLabel?: string;
	onAction?: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
	variant,
	size,
	title,
	children,
	cancelLabel,
	actionLabel,
	...props
}) => {
	return (
		<Modal>
			<Dialog
				role='alertdialog'
				className={alertDialogStyles({ variant, size })}
				{...props}
			>
				{({ close }) => (
					<>
						<Heading
							slot='title'
							className='text-xl font-semibold leading-6 my-0'
						>
							{title}
						</Heading>
						<div className=''>
							{variant === 'danger' ? 'dangericon' : 'warningicon'}
						</div>
						<p className='mt-3 text-slate-500 dark:text-zinc-400'>{children}</p>
						<div className='mt-6 flex justify-end gap-2'>
							<Button variant='secondary' onPress={close}>
								{cancelLabel || 'Cancel'}
							</Button>
							<Button variant={variant} autoFocus onPress={() => {}}>
								{actionLabel}
							</Button>
						</div>
					</>
				)}
			</Dialog>
		</Modal>
	);
};
