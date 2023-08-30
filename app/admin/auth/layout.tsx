import type { Metadata } from 'next';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import type { LinkItem } from './components/SidebarLink';
import { getTitle } from '@/utils/title';
import Navbar from '@/app/admin/components/Navbar';
import Layout from '@/components/Layout';

export default function AdminAuth({ children }: { children: React.ReactNode }) {
  const links: LinkItem[] = [
    {
      name: 'Admins',
      href: '/admin/auth/admin',
    },
    {
      name: 'Services',
      href: '/admin/auth/service',
    },
    {
      name: 'Educations',
      href: '/admin/auth/education',
    },
    {
      name: 'Experiences',
      href: '/admin/auth/experience',
    },
    {
      name: 'Work Skills',
      href: '/admin/auth/work-skill',
    },
    {
      name: 'Soft Skills',
      href: '/admin/auth/soft-skill',
    },
    {
      name: 'Projects',
      href: '/admin/auth/project',
    },
    {
      name: 'Settings',
      href: '/admin/auth/setting',
    },
    {
      name: 'Messages',
      href: '/admin/auth/message',
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

export const metadata: Metadata = {
  title: getTitle('Admin'),
  description:
    'Explore the controls and mechanisms that keep this site running smoothly.',
};
