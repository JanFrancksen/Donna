import { AlertDialog } from '@repo/ui/AlertDialog';
import { Button } from '@repo/ui/Button';
import Image from 'next/image';
import { DialogTrigger } from 'react-aria-components';

export default function Page(): JSX.Element {
	return (
		<div>
			<DialogTrigger>
				<Button variant='primary'>Hallo</Button>
				<AlertDialog title='test' actionLabel='dasd'>
					asd
				</AlertDialog>
			</DialogTrigger>
		</div>
	);
}
