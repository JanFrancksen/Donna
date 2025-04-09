'use server';

import { auth } from '@repo/db/auth'; // path to your Better Auth server instance

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
      error: 'An unexpected error occurred',
    };
  }
}
