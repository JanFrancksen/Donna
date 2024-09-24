'use client';

import { createClient } from '@repo/supabase/client';
import { Button } from '@repo/ui/button';

export function GoogleSignin() {
  const supabase = createClient();

  const handleSignin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <Button onClick={handleSignin} variant='outline' className='font-mono'>
      Sign in with Github
    </Button>
  );
}
