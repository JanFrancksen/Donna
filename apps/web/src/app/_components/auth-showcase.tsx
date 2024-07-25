import { createClient } from '@repo/supabase-config/server';
import Link from 'next/link';

import { signOut } from '~/app/auth/actions';

export async function AuthShowcase() {
	const supabase = createClient();
	const user = await supabase.auth.getUser();

	if (!user.data.user) {
		return (
			<Link
				className='rounded-full px-10 py-3 font-semibold no-underline transition hover:bg-white/20'
				href='/auth/login'
			>
				Sign in
			</Link>
		);
	}

	return (
		<div className='flex items-center gap-x-2'>
			<p className='text-center text-white'>{user.data.user.email}</p>

			<form action={signOut}>
				<button
					type='submit'
					className='rounded-full bg-purple-500 px-4 py-2 font-semibold no-underline transition hover:bg-white/20'
				>
					Sign out
				</button>
			</form>
		</div>
	);
}
