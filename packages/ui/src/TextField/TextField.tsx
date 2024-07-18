import { cx } from 'class-variance-authority';
import {
	TextField as AriaTextField,
	type TextFieldProps as AriaTextFieldProps,
	type ValidationResult,
} from 'react-aria-components';
import {
	Description,
	FieldError,
	Input,
	Label,
	fieldBorderStyles,
} from '../Field/Field';
import { composeTailwindRenderProps } from '../examples/utils';

const inputStyles = cx('rounded-md border-2', fieldBorderStyles);

export interface TextFieldProps extends AriaTextFieldProps {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({
	label,
	description,
	errorMessage,
	...props
}: TextFieldProps) {
	return (
		<AriaTextField
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'flex flex-col gap-1'
			)}
		>
			{label && <Label>{label}</Label>}
			<Input className={inputStyles} />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaTextField>
	);
}
