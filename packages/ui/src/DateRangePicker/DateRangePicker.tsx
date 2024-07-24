import { CalendarIcon } from 'lucide-react';
import {
	DateRangePicker as AriaDateRangePicker,
	type DateRangePickerProps as AriaDateRangePickerProps,
	type DateValue,
	type ValidationResult,
} from 'react-aria-components';
import { Button } from '../Button/Button';
import { DateInput } from '../DateField/DateField';
import { Dialog } from '../Dialog/Dialog';
import { Description, FieldError, FieldGroup } from '../Field/Field';
import { Label } from '../Label/Label';
import { Popover } from '../Popover/Popover';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';

export interface DateRangePickerProps<T extends DateValue>
	extends AriaDateRangePickerProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateRangePickerProps<T>) {
	return (
		<AriaDateRangePicker {...props} className='group flex flex-col gap-1'>
			{label && <Label>{label}</Label>}
			<FieldGroup className='w-auto min-w-64'>
				<DateInput slot='start' className='flex px-2 py-1.5 text-sm' />
				<span
					aria-hidden='true'
					className='group-disabled:text-stroke-weak forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]'
				>
					–
				</span>
				<DateInput slot='end' className='flex flex-1 px-2 py-1.5 text-sm' />
				<Button variant='clear'>
					<CalendarIcon aria-hidden className='h-4 w-4' />
				</Button>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<RangeCalendar />
				</Dialog>
			</Popover>
		</AriaDateRangePicker>
	);
}
