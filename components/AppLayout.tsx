import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { themeClass } from './darkmode/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={themeClass()}>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}