import { cx } from 'class-variance-authority';
import type React from 'react';

interface LoadingIndicatorProps {
	className?: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
	className = '',
}) => (
	<div className={cx('flex items-center gap-1', className)}>
		<div className='size-1 animate-[grow_ease-in-out_1.5s_infinite] rounded-full bg-current' />
		<div className='size-1 animate-[grow_ease-in-out_1.5s_infinite_0.2s] rounded-full bg-current' />
		<div className='size-1 animate-[grow_ease-in-out_1.5s_infinite_0.4s] rounded-full bg-current' />
	</div>
);
