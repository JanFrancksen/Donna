'use client';

import { createClient } from '@repo/supabase/client';
import { Button } from '@repo/ui/button';
import { Icons } from '@repo/ui/icons';

export function SignOut() {
  const supabase = createClient();

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Button
      onClick={handleSignOut}
      variant='outline'
      className='flex items-center gap-2 font-mono'
    >
      <Icons.SignOut className='size-4' />
      <span>Sign out</span>
    </Button>
  );
}
