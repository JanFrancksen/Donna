import { ChevronDown } from 'lucide-react';
import type React from 'react';
import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	ListBox,
	type ListBoxItemProps,
	type ValidationResult,
} from 'react-aria-components';
import { Button } from '../Button/Button';
import {
	Description,
	FieldError,
	FieldGroup,
	Input,
	Label,
} from '../Field/Field';
import {
	DropdownItem,
	DropdownSection,
	type DropdownSectionProps,
} from '../ListBox/ListBox';
import { Popover } from '../Popover/Popover';

export interface ComboBoxProps<T extends object>
	extends Omit<AriaComboBoxProps<T>, 'children'> {
	label?: string;
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBox<T extends object>({
	label,
	description,
	errorMessage,
	children,
	items,
	...props
}: ComboBoxProps<T>) {
	return (
		<AriaComboBox {...props} className='group flex flex-col gap-1'>
			<Label>{label}</Label>
			<FieldGroup>
				<Input />
				<Button variant='clear'>
					<ChevronDown aria-hidden className='size-4' />
				</Button>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover className='w-[--trigger-width]'>
				<ListBox
					items={items}
					className='max-h-[inherit] overflow-auto p-1 outline-0'
				>
					{children}
				</ListBox>
			</Popover>
		</AriaComboBox>
	);
}

export function ComboBoxItem(props: ListBoxItemProps) {
	return <DropdownItem {...props} />;
}

export function ComboBoxSection<T extends object>(
	props: DropdownSectionProps<T>
) {
	return <DropdownSection {...props} />;
}
