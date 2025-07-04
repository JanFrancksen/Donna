'use client';

import { authClient } from '@repo/db/auth-client';
import { Button } from '@repo/ui/components/button';
import { useRouter } from 'next/navigation';

export function SignoutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        authClient.signOut();
        router.push('/login');
      }}
      variant='outline'
    >
      Sign Out
    </Button>
  );
}
