'use server';

import { auth } from '@repo/db/auth';
import { redirect } from 'next/navigation';

interface SignupResponse {
  success: boolean;
  error?: string;
}

export async function signupAction({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<SignupResponse> {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
      asResponse: true,
    });

    if (!response.ok) {
      return {
        success: false,
        error: 'Failed to create account',
      };
    }

    redirect('/');
    return {
      success: true,
    };
  } catch (_error) {
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}
