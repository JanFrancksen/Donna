'use client';
import { Breadcrumb, Breadcrumbs } from '@repo/ui/Breadcrumb/Breadcrumbs';

function TestPage() {
	return (
		<div className='text-white'>
			<Breadcrumbs>
				<Breadcrumb href='/'>Test</Breadcrumb>
				<Breadcrumb>Test</Breadcrumb>
			</Breadcrumbs>
		</div>
	);
}

export default TestPage;
