import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import DarkMode from '@/components/darkmode/DarkMode';

export default function Guest({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="mx-auto grid max-w-screen-xl gap-10 py-10">
        <div className="flex justify-between">
          <Logo />
          <DarkMode />
        </div>
        <div className="relative">
          <Header />
          <div className="mt-3 flex gap-5">
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
