import { SignOut } from '@/components/sign-out';
import { getI18n } from '@/locales/server';
import { getUser } from '@repo/supabase/queries';

export const metadata = {
  title: 'Home',
};

export default async function Page() {
  const { data } = await getUser();
  const t = await getI18n();

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p>{t('welcome', { name: data?.user?.email })}</p>

        <SignOut />
      </div>
    </div>
  );
}
