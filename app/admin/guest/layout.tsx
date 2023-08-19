import Footer from '../auth/components/Footer';
import Navbar from '@/app/admin/components/Navbar';
import AppLayout from '@/components/AppLayout';

export default function Guest({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout>
      <Navbar />
      {children}
      <Footer className="absolute bottom-0" />
    </AppLayout>
  );
}
