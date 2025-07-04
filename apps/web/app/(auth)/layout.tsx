import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='my-12 flex min-h-screen flex-col items-center justify-center gap-12'>
      <Image alt='logo' height={38} src='/onyxsoft_logo.png' width={260} />
      {children}
    </div>
  );
}
