'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import type { ReactNode } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  });
}
export function CSPostHogProvider({ children }: { children: ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
