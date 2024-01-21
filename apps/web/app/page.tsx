import { AlertDialog } from '@repo/ui/AlertDialog';
import { Button } from '@repo/ui/Button';
import Image from 'next/image';

export default function Page(): JSX.Element {
	return (
		<div>
			<Button variant='primary'>Hallo</Button>
			<AlertDialog title='test' actionLabel='dasd'>
				asd
			</AlertDialog>
		</div>
	);
}
