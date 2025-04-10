import { betterFetch } from '@better-fetch/fetch';
import type { auth } from '@repo/db/auth';
import { type NextRequest, NextResponse } from 'next/server';

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    '/api/auth/get-session',
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    }
  );

  if (!session) {
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Apply middleware to specific routes
};
