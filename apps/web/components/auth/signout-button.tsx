'use client';

import { authClient } from '@repo/db/auth-client';
import { Button } from '@repo/ui/components/button';
import { useRouter } from 'next/navigation';

export function SignoutButton() {
  const router = useRouter();
  return (
    <Button
      variant='outline'
      onClick={() => {
        authClient.signOut();
        router.push('/login');
      }}
    >
      Sign Out
    </Button>
  );
}
