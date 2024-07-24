import { Check, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import {
	Checkbox as AriaCheckbox,
	CheckboxGroup as AriaCheckboxGroup,
	type CheckboxGroupProps as AriaCheckboxGroupProps,
	type CheckboxProps,
	type ValidationResult,
} from 'react-aria-components';
import { Description, FieldError } from '../Field/Field';
import { Label } from '../Label/Label';

export interface CheckboxGroupProps
	extends Omit<AriaCheckboxGroupProps, 'children'> {
	label?: string;
	children?: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
	return (
		<AriaCheckboxGroup {...props} className='flex flex-col gap-2'>
			<Label>{props.label}</Label>
			{props.children}
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</AriaCheckboxGroup>
	);
}

const iconStyles =
	'size-4 text-text group-disabled:text-background forced-colors:text-[HighlightText]';

export function Checkbox({ children, ...props }: CheckboxProps) {
	return (
		<AriaCheckbox
			{...props}
			className='group flex items-center gap-2 text-sm text-text transition disabled:cursor-not-allowed disabled:text-stroke-weak forced-colors:text-[GrayText]'
		>
			{({ isIndeterminate, isSelected }) => (
				<>
					<div className='flex size-5 flex-shrink-0 items-center justify-center rounded border-2 border-text bg-background transition group-invalid:text-destructive group-disabled:border-stroke-weak group-disabled:bg-stroke-weak group-selected:border-brand group-selected:bg-brand group-disabled:forced-colors:[GrayText]'>
						{isIndeterminate ? (
							<Minus aria-hidden className={iconStyles} />
						) : isSelected ? (
							<Check aria-hidden className={iconStyles} />
						) : null}
					</div>
					{children}
				</>
			)}
		</AriaCheckbox>
	);
}
