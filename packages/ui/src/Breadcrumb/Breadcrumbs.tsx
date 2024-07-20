import { ChevronRight } from 'lucide-react';
import {
	Breadcrumb as AriaBreadcrumb,
	Breadcrumbs as AriaBreadcrumbs,
	Link as AriaLink,
	type BreadcrumbProps,
	type BreadcrumbsProps,
	type LinkProps,
} from 'react-aria-components';

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
	return <AriaBreadcrumbs {...props} className='flex items-center gap-x-1' />;
}

export function Breadcrumb(props: BreadcrumbProps & LinkProps) {
	return (
		<AriaBreadcrumb {...props} className='flex items-center gap-x-1'>
			<AriaLink
				className='max-w-40 truncate rounded text-xs transition-colors hover:text-body-weak focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 aria-[current]:text-accent'
				{...props}
			/>
			{props.href && <ChevronRight className='size-5 text-body-weak' />}
		</AriaBreadcrumb>
	);
}
