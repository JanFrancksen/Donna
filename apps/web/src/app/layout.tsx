import { CreatePostSchema } from '@repo/validators';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { env } from '~/env';
import { AuthShowcase } from './_components/auth-showcase';
import {
	CreatePostForm,
	PostCardSkeleton,
	PostList,
} from './_components/posts';
import { TRPCReactProvider } from './trpc/react';
import { api } from './trpc/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(
		env.VERCEL_ENV === 'production'
			? 'https://j1n.dev'
			: 'http://localhost:3000'
	),
	title: 'Your awesome Project',
	description: 'Your awesome Project Description',
	openGraph: {
		title: 'Your awesome Project Title',
		description: 'Your awesome Project Description',
		url: '',
		siteName: 'Your awesome Project',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@j1ndev',
		creator: '@j1ndev',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const posts = api.post.all();

	return (
		<html lang='en'>
			<body className={inter.className}>
				<TRPCReactProvider>
					<main className='flex min-h-screen flex-col items-center justify-center bg-slate-950'>
						{children}
						<AuthShowcase />

						<CreatePostForm />
						<div className='h-[40vh] w-full max-w-2xl overflow-y-scroll'>
							<Suspense
								fallback={
									<div className='flex w-full flex-col gap-4'>
										<PostCardSkeleton />
										<PostCardSkeleton />
										<PostCardSkeleton />
									</div>
								}
							>
								<PostList posts={posts} />
							</Suspense>
						</div>
					</main>
				</TRPCReactProvider>
			</body>
		</html>
	);
}
