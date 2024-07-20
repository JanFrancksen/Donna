import { cva } from 'class-variance-authority';
import {
	DateField as AriaDateField,
	type DateFieldProps as AriaDateFieldProps,
	DateInput as AriaDateInput,
	type DateInputProps,
	DateSegment,
	type DateValue,
	type ValidationResult,
} from 'react-aria-components';
import {
	Description,
	FieldError,
	Label,
	fieldGroupStyles,
} from '../Field/Field';
import { composeTailwindRenderProps } from '../examples/utils';

export interface DateFieldProps<T extends DateValue>
	extends AriaDateFieldProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateFieldProps<T>) {
	return (
		<AriaDateField
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'flex flex-col gap-1'
			)}
		>
			{label && <Label>{label}</Label>}
			<DateInput />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaDateField>
	);
}

const segmentStyles = cva(
	'inline rounded p-0.5 type-literal:px-0 text-gray-800 caret-transparent outline outline-0 forced-color-adjust-none dark:text-zinc-200 forced-colors:text-[ButtonText]',
	{
		variants: {
			isPlaceholder: {
				true: 'text-gray-600 italic dark:text-zinc-400',
			},
			isDisabled: {
				true: 'text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText]',
			},
			isFocused: {
				true: 'bg-blue-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
			},
		},
	}
);

export function DateInput(props: Omit<DateInputProps, 'children'>) {
	return (
		<AriaDateInput
			className={(renderProps) =>
				fieldGroupStyles({
					...renderProps,
					class: 'block min-w-[150px] px-2 py-1.5 text-sm',
				})
			}
			{...props}
		>
			{(segment) => <DateSegment segment={segment} className={segmentStyles} />}
		</AriaDateInput>
	);
}