import { cva } from 'class-variance-authority';
import { Check } from 'lucide-react';
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	type ListBoxProps as AriaListBoxProps,
	Collection,
	Header,
	type ListBoxItemProps,
	Section,
	type SectionProps,
	composeRenderProps,
} from 'react-aria-components';

interface ListBoxProps<T>
	extends Omit<AriaListBoxProps<T>, 'layout' | 'orientation'> {}

export function ListBox<T extends object>({
	children,
	...props
}: ListBoxProps<T>) {
	return (
		<AriaListBox
			{...props}
			className='rounded-lg border border-gray-300 p-1 outline-0 dark:border-zinc-600'
		>
			{children}
		</AriaListBox>
	);
}

export const itemStyles = cva(
	'group relative flex cursor-default select-none items-center gap-8 rounded-md px-2.5 py-1.5 text-sm will-change-transform forced-color-adjust-none',
	{
		variants: {
			isSelected: {
				false:
					'-outline-offset-2 text-slate-700 hover:bg-slate-200 dark:text-zinc-300 dark:hover:bg-zinc-700',
				true: '-outline-offset-4 bg-blue-600 text-white outline-white dark:outline-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:outline-[HighlightText] [&+[data-selected]]:rounded-t-none [&:has(+[data-selected])]:rounded-b-none',
			},
			isDisabled: {
				true: 'text-slate-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
			},
		},
	}
);

export function ListBoxItem(props: ListBoxItemProps) {
	const textValue =
		props.textValue ||
		(typeof props.children === 'string' ? props.children : undefined);
	return (
		<AriaListBoxItem {...props} textValue={textValue} className={itemStyles}>
			{composeRenderProps(props.children, (children) => (
				<>
					{children}
					<div className='absolute right-4 bottom-0 left-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block' />
				</>
			))}
		</AriaListBoxItem>
	);
}

export const dropdownItemStyles = cva(
	'group flex cursor-default select-none items-center gap-4 rounded-lg py-2 pr-1 pl-3 text-sm outline outline-0 forced-color-adjust-none',
	{
		variants: {
			isDisabled: {
				false: 'text-gray-900 dark:text-zinc-100',
				true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
			},
			isFocused: {
				true: 'bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
			},
		},
		compoundVariants: [
			{
				isFocused: false,
				className: 'bg-gray-100 dark:bg-zinc-700/60',
			},
		],
	}
);

export function DropdownItem(props: ListBoxItemProps) {
	const textValue =
		props.textValue ||
		(typeof props.children === 'string' ? props.children : undefined);
	return (
		<AriaListBoxItem
			{...props}
			textValue={textValue}
			className={dropdownItemStyles}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<span className='flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold'>
						{children}
					</span>
					<span className='flex w-5 items-center'>
						{isSelected && <Check className='h-4 w-4' />}
					</span>
				</>
			))}
		</AriaListBoxItem>
	);
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
	title?: string;
}

export function DropdownSection<T extends object>(
	props: DropdownSectionProps<T>
) {
	return (
		<Section className='first:-mt-[5px] after:block after:h-[5px] after:content-[""]'>
			<Header className='-top-[5px] -mt-px -mx-1 sticky z-10 truncate border-y bg-gray-100/60 px-4 py-1 font-semibold text-gray-500 text-sm backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-y-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-300 [&+*]:mt-1'>
				{props.title}
			</Header>
			<Collection items={props.items}>{props.children}</Collection>
		</Section>
	);
}
