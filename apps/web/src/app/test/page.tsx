'use client';
import { ProgressBar } from '@repo/ui/ProgressBar/ProgressBar';

function TestPage() {
	return (
		<div className='text-white'>
			<ProgressBar value={30} label='Test' />
		</div>
	);
}

export default TestPage;
