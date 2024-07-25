import { createClient } from '@repo/supabase-config/server';
import type { ReactNode } from 'react';
import { PostHogClient } from './PostHog';

export async function PostHogAuthWrapper({
	children,
}: { children: ReactNode }) {
	const supabase = createClient();
	const posthog = PostHogClient();

	const user = await supabase.auth.getUser();

	if (!user || !user.data || !user.data.user) return posthog.shutdown();

	const { id, email } = user.data.user;

	posthog.identify(id, {
		email,
	});

	return children;
}
