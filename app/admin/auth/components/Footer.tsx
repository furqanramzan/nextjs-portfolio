import { APP_NAME } from '@/utils/contants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 sm:flex sm:items-center sm:justify-between sm:p-4">
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; {currentYear}
        <a href="/" className="hover:underline" target="_blank">
          {APP_NAME}
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
