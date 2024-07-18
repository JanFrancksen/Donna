'use client';

import { MenuTrigger } from 'react-aria-components';
import { Button } from '../Button/Button';
import { Menu, MenuItem } from '../examples/Menu';

export function UserMenu() {
	return (
		<div className='fixed top-2 right-2 z-30'>
			<MenuTrigger>
				<Button>test</Button>
				<Menu>
					<MenuItem>Test</MenuItem>
				</Menu>
			</MenuTrigger>
		</div>
	);
}
