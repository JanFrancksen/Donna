import { cva } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
	Calendar as AriaCalendar,
	CalendarGridHeader as AriaCalendarGridHeader,
	type CalendarProps as AriaCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarHeaderCell,
	type DateValue,
	Heading,
	Text,
	useLocale,
} from 'react-aria-components';
import { Button } from '../Button/Button';

const cellStyles = cva(
	'flex h-9 w-9 cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none',
	{
		variants: {
			isSelected: {
				false:
					'pressed:bg-gray-200 text-zinc-900 hover:bg-gray-100 dark:pressed:bg-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-700',
				true: 'bg-blue-600 text-white invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]',
			},
			isDisabled: {
				true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
			},
		},
	}
);

export interface CalendarProps<T extends DateValue>
	extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
	errorMessage?: string;
}

export function Calendar<T extends DateValue>({
	errorMessage,
	...props
}: CalendarProps<T>) {
	return (
		<AriaCalendar {...props}>
			<CalendarHeader />
			<CalendarGrid>
				<CalendarGridHeader />
				<CalendarGridBody>
					{(date) => <CalendarCell date={date} className={cellStyles} />}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text slot='errorMessage' className='text-red-600 text-sm'>
					{errorMessage}
				</Text>
			)}
		</AriaCalendar>
	);
}

export function CalendarHeader() {
	const { direction } = useLocale();

	return (
		<header className='flex w-full items-center gap-1 px-1 pb-4'>
			<Button variant='icon' slot='previous'>
				{direction === 'rtl' ? (
					<ChevronRight aria-hidden />
				) : (
					<ChevronLeft aria-hidden />
				)}
			</Button>
			<Heading className='mx-2 flex-1 text-center font-semibold text-xl text-zinc-900 dark:text-zinc-200' />
			<Button variant='icon' slot='next'>
				{direction === 'rtl' ? (
					<ChevronLeft aria-hidden />
				) : (
					<ChevronRight aria-hidden />
				)}
			</Button>
		</header>
	);
}

export function CalendarGridHeader() {
	return (
		<AriaCalendarGridHeader>
			{(day) => (
				<CalendarHeaderCell className='font-semibold text-gray-500 text-xs'>
					{day}
				</CalendarHeaderCell>
			)}
		</AriaCalendarGridHeader>
	);
}
