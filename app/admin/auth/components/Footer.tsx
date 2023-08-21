import Link from 'next/link';
import { Github, Upwork } from './Icons';
import { APP_NAME } from '@/utils/contants';
import Tooltip from '@/components/Tooltip';

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'upwork',
      title: 'Upwork',
      description: 'Hire me on Upwork',
      href: 'https://upwork.com/freelancers/~016621b11e28c78a5f',
      icon: Upwork,
    },
    {
      name: 'github',
      title: 'Github',
      description: 'Star and Follow me on GitHub',
      href: 'https://github.com/furqanramzan',
      icon: Github,
    },
  ];

  return (
    <footer
      className={`mt-auto w-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 sm:flex sm:items-center sm:justify-between sm:p-4 ${className}`}
    >
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; {currentYear}{' '}
        <Link href="/" className="hover:underline" target="_blank">
          {APP_NAME}
        </Link>
        . All rights reserved.
      </p>
      <div className="flex items-center justify-center space-x-1">
        {socialLinks.map(({ name, title, description, href, icon }) => (
          <Tooltip key={name} content={description}>
            <a
              href={href}
              target="_blank"
              className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {icon()}
              <span className="sr-only">{title}</span>
            </a>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
}
