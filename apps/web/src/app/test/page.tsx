'use client';
import { ComboBox, ComboBoxItem } from '@repo/ui/ComboBox/ComboBox';

function TestPage() {
	return (
		<div className='text-white'>
			<ComboBox>
				<ComboBoxItem>Test</ComboBoxItem>
				<ComboBoxItem>Test</ComboBoxItem>
				<ComboBoxItem>Test</ComboBoxItem>
				<ComboBoxItem>Rahdan</ComboBoxItem>
				<ComboBoxItem>test 3</ComboBoxItem>
			</ComboBox>
		</div>
	);
}

export default TestPage;
