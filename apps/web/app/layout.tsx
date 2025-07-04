import { Toaster } from '@repo/ui/components/sonner';
import { ThemeToggle } from '@repo/ui/components/theme';
import { Providers } from '@/components/providers';
import '@repo/ui/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-mono antialiased `}
      >
        <Providers>
          {children}
          <div className='fixed right-4 bottom-4'>
            <ThemeToggle />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
