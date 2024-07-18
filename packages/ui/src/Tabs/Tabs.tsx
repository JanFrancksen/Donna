import { cva } from 'class-variance-authority';
import {
	Tab as RACTab,
	TabList as RACTabList,
	TabPanel as RACTabPanel,
	Tabs as RACTabs,
	type TabListProps,
	type TabPanelProps,
	type TabProps,
	type TabsProps,
	composeRenderProps,
} from 'react-aria-components';

const tabsStyles = cva('flex gap-4', {
	variants: {
		orientation: {
			horizontal: 'flex-col',
			vertical: 'w-[800px] flex-row',
		},
	},
});

export function Tabs(props: TabsProps) {
	return (
		<RACTabs
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabsStyles({ ...renderProps, className })
			)}
		/>
	);
}

const tabListStyles = cva('flex gap-1', {
	variants: {
		orientation: {
			horizontal: 'flex-row',
			vertical: 'flex-col items-start',
		},
	},
});

export function TabList<T extends object>(props: TabListProps<T>) {
	return (
		<RACTabList
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabListStyles({ ...renderProps, className })
			)}
		/>
	);
}

const tabProps = cva(
	'flex cursor-default items-center rounded-full px-4 py-1.5 font-medium text-sm transition forced-color-adjust-none',
	{
		variants: {
			isSelected: {
				false:
					'pressed:bg-gray-200 pressed:text-gray-700 text-gray-600 hover:bg-gray-200 hover:text-gray-700 dark:pressed:bg-zinc-800 dark:pressed:text-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-200',
				true: 'bg-gray-800 text-white dark:bg-zinc-200 dark:text-black forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
			},
			isDisabled: {
				true: 'selected:bg-gray-200 selected:text-gray-300 text-gray-200 dark:selected:bg-zinc-600 dark:selected:text-zinc-500 dark:text-zinc-600 forced-colors:selected:bg-[GrayText] forced-colors:selected:text-[HighlightText] forced-colors:text-[GrayText]',
			},
		},
	}
);

export function Tab(props: TabProps) {
	return (
		<RACTab
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabProps({ ...renderProps, className })
			)}
		/>
	);
}

const tabPanelStyles = 'flex-1 p-4 text-gray-900 text-sm dark:text-zinc-100';

export function TabPanel(props: TabPanelProps) {
	return <RACTabPanel {...props} className={tabPanelStyles} />;
}
