import type { Metadata } from 'next';
import { Google_Sans } from 'next/font/google';
import './globals.css';

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mindful',
  description: 'A gentle space for your mind and your everyday.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={googleSans.className}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
