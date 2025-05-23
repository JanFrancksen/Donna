'use server';

import { auth } from '@repo/db/auth';

interface LoginResponse {
  success: boolean;
  error?: string;
}

export async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
      callbackURL: '/',
    });

    if (!response.ok) {
      return {
        success: false,
        error: 'Invalid credentials',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
