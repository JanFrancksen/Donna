import { GithubSignin } from '@/components/github-signin';
import Image from 'next/image';

export const metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex size-96 flex-col items-center justify-center'>
        <Image
          src='/logo.png'
          alt='logo'
          className='mb-8 rounded-full border border-gray-800'
          width={100}
          height={100}
        />
        <h1 className='mb-2 font-bold text-2xl'>Welcome to Donna</h1>
        <p className='mb-8 text-gray-500'>Sign in with Github to continue</p>
        <GithubSignin />
      </div>
    </div>
  );
}
