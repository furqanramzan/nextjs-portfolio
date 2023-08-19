'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkItem {
  href: string;
  name: string;
  active?: string;
}

export default function SidebarLink({ link }: { link: LinkItem }) {
  const pathname = usePathname();
  const isCurrentLinkActive = pathname.startsWith(link.active || link.href);

  return (
    <li className={isCurrentLinkActive ? 'active' : ''}>
      <Link
        href={link.href}
        className={`group flex items-center rounded-lg p-2 ${
          isCurrentLinkActive
            ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
        }`}
      >
        <span className="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
      </Link>
    </li>
  );
}
