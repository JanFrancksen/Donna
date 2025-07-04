import { UserMenu } from '@/components/auth/user-menu';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='absolute top-4 right-4'>
        <UserMenu />
      </div>
      {children}
    </div>
  );
}
