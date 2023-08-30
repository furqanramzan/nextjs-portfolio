import '@/app/globals.css';
import { Poppins } from 'next/font/google';
import { themeClass } from './darkmode/utils';

const font = Poppins({
  weight: ['700', '600', '500', '400', '300'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={themeClass()}>
      <body className={`${font.className} bg-gray-100 dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
