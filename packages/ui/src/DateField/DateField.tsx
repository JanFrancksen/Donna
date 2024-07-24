import {
	DateField as AriaDateField,
	type DateFieldProps as AriaDateFieldProps,
	DateInput as AriaDateInput,
	type DateInputProps,
	DateSegment,
	type DateValue,
	type ValidationResult,
} from 'react-aria-components';
import { Description, FieldError, Label } from '../Field/Field';

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
		<AriaDateField {...props} className='flex flex-col gap-1'>
			{label && <Label>{label}</Label>}
			<DateInput />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaDateField>
	);
}

export function DateInput(props: Omit<DateInputProps, 'children'>) {
	return (
		<AriaDateInput
			className='group flex h-9 min-w-32 items-center overflow-hidden rounded-lg border-2 bg-background-weak px-3 py-2 text-sm disabled:border-stroke-weak forced-colors:bg-[Field]'
			{...props}
		>
			{(segment) => (
				<DateSegment
					segment={segment}
					className='rounded p-0.5 type-literal:px-0 text-text caret-transparent outline outline-0 forced-color-adjust-none focus:bg-brand disabled:text-stroke forced-colors:text-[ButtonText] disabled:forced-colors:text-[GrayText] focus:forced-colors:bg-[Highlight] focus:forced-colors:text-[HighlightText]'
				/>
			)}
		</AriaDateInput>
	);
}
