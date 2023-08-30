import type { Metadata } from 'next';
import Footer from '../auth/components/Footer';
import Navbar from '@/app/admin/components/Navbar';
import Layout from '@/components/Layout';
import { getTitle } from '@/utils/title';

export default function AdminGuest({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Navbar />
      {children}
      <Footer className="absolute bottom-0" />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: getTitle('Admin'),
  description:
    'Explore the controls and mechanisms that keep this site running smoothly.',
};
