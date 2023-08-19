import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import type { LinkItem } from './components/SidebarLink';
import Navbar from '@/app/admin/components/Navbar';
import AppLayout from '@/components/AppLayout';

export default function Auth({ children }: { children: React.ReactNode }) {
  const links: LinkItem[] = [
    {
      name: 'Dashboard',
      href: '/admin/auth/dashboard',
    },
  ];

  return (
    <AppLayout>
      <Navbar />

      <Sidebar links={links} />

      <div className="flex min-h-screen flex-col gap-y-5 bg-gray-100 p-6 dark:bg-gray-900 md:ml-64">
        <section className="mt-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          {children}
        </section>

        <Footer />
      </div>
    </AppLayout>
  );
}
