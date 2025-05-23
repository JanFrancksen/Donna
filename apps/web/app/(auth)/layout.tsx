import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='my-12 flex min-h-screen flex-col items-center justify-center gap-12'>
      <Image src='/onyxsoft_logo.png' alt='logo' width={260} height={38} />
      {children}
    </div>
  );
}
