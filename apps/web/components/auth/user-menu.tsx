'use client';

import { authClient } from '@repo/db/auth-client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/avatar';
import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import {
  BoltIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LogOutIcon,
  UserPenIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export function UserMenu() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Avatar className='size-8'>
            <AvatarImage alt='Profile image' src={session?.user?.image || ''} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            aria-hidden='true'
            className='opacity-60'
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='max-w-64'>
        <DropdownMenuLabel className='flex min-w-0 flex-col'>
          <span className='truncate font-medium text-foreground text-sm'>
            {session?.user?.name}
          </span>
          <span className='truncate font-normal text-muted-foreground text-xs'>
            {session?.user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoltIcon aria-hidden='true' className='opacity-60' size={16} />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpenIcon aria-hidden='true' className='opacity-60' size={16} />
            <span>Help</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserPenIcon aria-hidden='true' className='opacity-60' size={16} />
            <span>Edit Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            authClient.signOut();
            router.push('/login');
          }}
        >
          <LogOutIcon aria-hidden='true' className='opacity-60' size={16} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
