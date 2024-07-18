import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import {
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
	type RadioProps,
	type ValidationResult,
} from 'react-aria-components';
import { Description, FieldError, Label } from '../Field/Field';
import { composeTailwindRenderProps } from '../examples/utils';

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
	label?: string;
	children?: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup(props: RadioGroupProps) {
	return (
		<RACRadioGroup
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'group flex flex-col gap-2'
			)}
		>
			<Label>{props.label}</Label>
			<div className='flex gap-2 group-orientation-vertical:flex-col group-orientation-horizontal:gap-4'>
				{props.children}
			</div>
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</RACRadioGroup>
	);
}

const styles = cva(
	'h-5 w-5 rounded-full border-2 bg-white transition-all dark:bg-zinc-900',
	{
		variants: {
			isSelected: {
				false:
					'border-gray-400 group-pressed:border-gray-500 dark:border-zinc-400 dark:group-pressed:border-zinc-300',
				true: 'forced-colors:!border-[Highlight] border-[7px] border-gray-700 group-pressed:border-gray-800 dark:border-slate-300 dark:group-pressed:border-slate-200',
			},
			isInvalid: {
				true: 'forced-colors:!border-[Mark] border-red-700 group-pressed:border-red-800 dark:border-red-600 dark:group-pressed:border-red-700',
			},
			isDisabled: {
				true: 'forced-colors:!border-[GrayText] border-gray-200 dark:border-zinc-700',
			},
		},
	}
);

export function Radio(props: RadioProps) {
	return (
		<RACRadio
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'group flex items-center gap-2 text-gray-800 text-sm transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]'
			)}
		>
			{(renderProps) => (
				<>
					<div className={styles(renderProps)} />
					{props.children}
				</>
			)}
		</RACRadio>
	);
}
