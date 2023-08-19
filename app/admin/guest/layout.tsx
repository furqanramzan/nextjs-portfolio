import Navbar from '@/app/admin/components/Navbar';
import AppLayout from '@/components/AppLayout';

export default function Guest({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout>
      <Navbar />
      {children}
    </AppLayout>
  );
}
