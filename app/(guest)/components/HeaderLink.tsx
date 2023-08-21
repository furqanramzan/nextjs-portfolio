'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  link: { href: string; title: string; icon: JSX.Element };
}

export default function HeaderLink({ link }: Props) {
  const pathname = usePathname();
  const isCurrentLinkActive = pathname === link.href;

  return (
    <Link href={link.href}>
      <div
        className={`flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-3xl bg-gray-200 hover:shadow-lg focus:ring-primary-300 dark:bg-gray-900 dark:text-white dark:focus:ring-primary-800 ${
          isCurrentLinkActive &&
          'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700'
        }`}
      >
        {link.icon}
        <span>{link.title}</span>
      </div>
    </Link>
  );
}
