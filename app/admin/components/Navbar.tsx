import React from 'react';
import Logo from '@/components/Logo';
import DarkMode from '@/components/darkmode/DarkMode';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="ml-2 flex md:mr-24">
              <Logo />
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-3 flex items-center">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
