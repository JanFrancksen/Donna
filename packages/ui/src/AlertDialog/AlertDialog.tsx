'use client';

import { cx } from 'class-variance-authority';
import { AlertCircleIcon, InfoIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { chain } from 'react-aria';
import { type DialogProps, Heading } from 'react-aria-components';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';

interface AlertDialogProps extends Omit<DialogProps, 'children'> {
	title: string;
	children: ReactNode;
	variant?: 'info' | 'destructive';
	actionLabel: string;
	cancelLabel?: string;
	onAction?: () => void;
}

export function AlertDialog({
	title,
	variant,
	cancelLabel,
	actionLabel,
	onAction,
	children,
	...props
}: AlertDialogProps) {
	return (
		<Dialog role='alertdialog' {...props}>
			{({ close }) => (
				<>
					<Heading
						slot='title'
						className='my-0 font-semibold text-xl leading-6'
					>
						{title}
					</Heading>
					<div
						className={cx(
							'absolute top-6 right-6 h-6 w-6 stroke-2',
							variant === 'destructive' ? 'text-red-500' : 'text-brand'
						)}
					>
						{variant === 'destructive' ? (
							<AlertCircleIcon aria-hidden />
						) : (
							<InfoIcon aria-hidden />
						)}
					</div>
					<p className='mt-3 text-slate-500 dark:text-zinc-400'>{children}</p>
					<div className='mt-6 flex justify-end gap-2'>
						<Button variant='secondary' onPress={close}>
							{cancelLabel || 'Cancel'}
						</Button>
						<Button
							variant={variant === 'destructive' ? 'destructive' : 'primary'}
							autoFocus
							onPress={chain(onAction, close)}
						>
							{actionLabel}
						</Button>
					</div>
				</>
			)}
		</Dialog>
	);
}
