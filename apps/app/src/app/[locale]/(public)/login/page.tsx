import { GoogleSignin } from '@/components/google-signin';
import Image from 'next/image';

export const metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex size-96 flex-col items-center justify-center'>
        <Image src='/logo.png' alt='logo' width={350} height={350} />
        <GoogleSignin />
      </div>
    </div>
  );
}
