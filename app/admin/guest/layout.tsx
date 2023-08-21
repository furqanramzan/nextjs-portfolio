import Footer from '../auth/components/Footer';
import Navbar from '@/app/admin/components/Navbar';
import Layout from '@/components/Layout';

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
