import { CalendarIcon } from 'lucide-react';
import {
	DatePicker as AriaDatePicker,
	type DatePickerProps as AriaDatePickerProps,
	type DateValue,
	type ValidationResult,
} from 'react-aria-components';
import { Button } from '../Button/Button';
import { Calendar } from '../Calendar/Calendar';
import { DateInput } from '../DateField/DateField';
import { Dialog } from '../Dialog/Dialog';
import { Description, FieldError, FieldGroup, Label } from '../Field/Field';
import { Popover } from '../Popover/Popover';

export interface DatePickerProps<T extends DateValue>
	extends AriaDatePickerProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DatePickerProps<T>) {
	return (
		<AriaDatePicker {...props} className='group space-y-1'>
			{label && <Label>{label}</Label>}
			<FieldGroup className='w-auto min-w-52'>
				<DateInput className='flex min-w-32 flex-1 px-3 py-2 text-sm' />
				<Button variant='clear'>
					<CalendarIcon aria-hidden className='size-4 text-foreground' />
				</Button>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<Calendar />
				</Dialog>
			</Popover>
		</AriaDatePicker>
	);
}
