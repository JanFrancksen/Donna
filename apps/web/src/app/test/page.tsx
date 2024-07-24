'use client';
import { Checkbox } from '@repo/ui/Checkbox/Checkbox';

function TestPage() {
	return (
		<div className='text-white'>
			<Checkbox>Test</Checkbox>
			<Checkbox isDisabled isSelected>
				Test
			</Checkbox>
		</div>
	);
}

export default TestPage;
