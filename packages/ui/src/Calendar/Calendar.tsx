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

export interface CalendarProps<T extends DateValue>
	extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
	errorMessage?: string;
}

export function Calendar<T extends DateValue>({
	errorMessage,
	...props
}: CalendarProps<T>) {
	return (
		<AriaCalendar {...props} className='flex w-80 flex-col'>
			<CalendarHeader />
			<CalendarGrid>
				<CalendarGridHeader />
				<CalendarGridBody>
					{(date) => (
						<CalendarCell
							date={date}
							className='focus-state flex size-9 cursor-default items-center justify-center rounded-full selected:bg-brand selected:text-text-strong text-sm transition-colors forced-color-adjust-none invalid:bg-destructive hover:bg-brand-weak disabled:text-stroke-weak forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] disabled:forced-colors:text-[GrayText] forced-colors:invalid:bg-[Mark]'
						/>
					)}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text slot='errorMessage' className='text-sm text-text'>
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
			<Button slot='previous'>
				{direction === 'rtl' ? (
					<ChevronRight aria-hidden />
				) : (
					<ChevronLeft aria-hidden />
				)}
			</Button>
			<Heading className='mx-2 flex-1 text-center font-semibold text-brand text-lg' />
			<Button slot='next'>
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
				<CalendarHeaderCell className='font-semibold text-text text-xs'>
					{day}
				</CalendarHeaderCell>
			)}
		</AriaCalendarGridHeader>
	);
}
