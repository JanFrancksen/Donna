import { cva } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import {
	Checkbox as AriaCheckbox,
	CheckboxGroup as AriaCheckboxGroup,
	type CheckboxGroupProps as AriaCheckboxGroupProps,
	type CheckboxProps,
	type ValidationResult,
	composeRenderProps,
} from 'react-aria-components';
import { Description, FieldError, Label } from '../Field/Field';
import { composeTailwindRenderProps } from '../examples/utils';

export interface CheckboxGroupProps
	extends Omit<AriaCheckboxGroupProps, 'children'> {
	label?: string;
	children?: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
	return (
		<AriaCheckboxGroup
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'flex flex-col gap-2'
			)}
		>
			<Label>{props.label}</Label>
			{props.children}
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</AriaCheckboxGroup>
	);
}

const checkboxStyles = cva('group flex items-center gap-2 text-sm transition', {
	variants: {
		isDisabled: {
			false: 'text-gray-800 dark:text-zinc-200',
			true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
		},
	},
});

const boxStyles = cva(
	'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition',
	{
		variants: {
			isSelected: {
				false:
					'border-[--color] bg-white [--color:theme(colors.gray.400)] dark:bg-zinc-900 group-pressed:[--color:theme(colors.gray.500)] dark:[--color:colors.zinc-400)] dark:group-pressed:[--color:theme(colors.zinc.300)]',
				true: 'forced-colors:![--color:Highlight] border-[--color] bg-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)]',
			},
			isInvalid: {
				true: 'forced-colors:![--color:Mark] [--color:theme(colors.red.700)] group-pressed:[--color:theme(colors.red.800)] dark:[--color:theme(colors.red.600)] dark:group-pressed:[--color:theme(colors.red.700)]',
			},
			isDisabled: {
				true: 'forced-colors:![--color:GrayText] [--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)]',
			},
		},
	}
);

const iconStyles =
	'w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]';

export function Checkbox(props: CheckboxProps) {
	return (
		<AriaCheckbox
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				checkboxStyles({ ...renderProps, className })
			)}
		>
			{({ isSelected, isIndeterminate, ...renderProps }) => (
				<>
					<div
						className={boxStyles({
							isSelected: isSelected || isIndeterminate,
							...renderProps,
						})}
					>
						{isIndeterminate ? (
							<Minus aria-hidden className={iconStyles} />
						) : isSelected ? (
							<Check aria-hidden className={iconStyles} />
						) : null}
					</div>
					{props.children}
				</>
			)}
		</AriaCheckbox>
	);
}
