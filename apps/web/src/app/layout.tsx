import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { cn } from '@repo/ui/cn';
import '@repo/ui/globals.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const DepartureMono = localFont({
  src: '../fonts/DepartureMono-Regular.woff2',
  variable: '--font-departure-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://v1.run'),
  title: 'Create v1',
  description:
    'A free, open-source starter kit for your next project, built with insights from Midday.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable}${GeistSans.variable}${GeistMono.variable}`,
          'dark antialiased'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
