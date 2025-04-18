import { UserMenu } from '@/components/auth/user-menu';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='my-12 flex min-h-screen flex-col items-center justify-center gap-12'>
      <UserMenu />
      {children}
    </div>
  );
}
