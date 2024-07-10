import { CreatePostSchema } from '@repo/validators';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Your Awesome Project!',
	description: 'Your awesome description.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex min-h-screen items-center justify-center bg-slate-950'>
					{children}
				</main>
			</body>
		</html>
	);
}
