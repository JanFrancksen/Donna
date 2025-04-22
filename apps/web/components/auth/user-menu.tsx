'use client';

import { authClient } from '@repo/db/auth-client';
import {
  BoltIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LogOutIcon,
  UserPenIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

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

export function UserMenu() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Avatar className='size-8'>
            <AvatarImage src={session?.user?.image || ''} alt='Profile image' />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className='opacity-60'
            aria-hidden='true'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='max-w-64' align='end'>
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
            <BoltIcon size={16} className='opacity-60' aria-hidden='true' />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpenIcon size={16} className='opacity-60' aria-hidden='true' />
            <span>Help</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserPenIcon size={16} className='opacity-60' aria-hidden='true' />
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
          <LogOutIcon size={16} className='opacity-60' aria-hidden='true' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
