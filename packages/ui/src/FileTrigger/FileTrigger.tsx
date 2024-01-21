import { useState } from 'react';
import { Button, FileTrigger } from 'react-aria-components';

function Example() {
	const [file, setFile] = useState(null);

	return (
		<>
			<FileTrigger
				onSelect={(e) => {
					const files = Array.from(e);
					const filenames = files.map((file) => file.name);
					setFile(filenames);
				}}
			>
				<Button>Select a file</Button>
			</FileTrigger>
			{file && file}
		</>
	);
}
