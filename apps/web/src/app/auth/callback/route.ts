import { createClient } from '@repo/supabase-config/server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const code = url.searchParams.get('code');

	if (code) {
		const supabase = createClient();
		await supabase.auth.exchangeCodeForSession(code);
	}

	// URL to redirect to after sign in process completes
	return NextResponse.redirect(url.origin);
}
