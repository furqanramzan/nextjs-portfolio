import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import type { LinkItem } from './components/SidebarLink';
import Navbar from '@/app/admin/components/Navbar';
import Layout from '@/components/Layout';

export default function AdminAuth({ children }: { children: React.ReactNode }) {
  const links: LinkItem[] = [
    {
      name: 'Admin',
      href: '/admin/auth/admin',
    },
    {
      name: 'Service',
      href: '/admin/auth/service',
    },
  ];

  return (
    <Layout>
      <Navbar />

      <Sidebar links={links} />

      <div className="flex min-h-screen flex-col gap-y-5 bg-gray-100 p-6 dark:bg-gray-900 md:ml-64">
        <section className="mt-20 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          {children}
        </section>

        <Footer />
      </div>
    </Layout>
  );
}
