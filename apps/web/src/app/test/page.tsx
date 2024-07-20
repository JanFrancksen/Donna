'use client';
import { AlertDialog } from '@repo/ui/AlertDialog/AlertDialog';

function TestPage() {
	return (
		<div className='text-white'>
			<AlertDialog
				title='Hallo'
				actionLabel='Test'
				onAction={() => alert('test')}
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
				perspiciatis sit ad animi, nesciunt repellendus magni ab mollitia.
				Quibusdam repudiandae rem eligendi dolorem enim adipisci temporibus,
				magnam odio sequi rerum.
			</AlertDialog>
		</div>
	);
}

export default TestPage;
