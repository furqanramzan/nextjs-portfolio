import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import DarkMode from '@/components/darkmode/DarkMode';

export default async function Guest({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="mx-auto grid max-w-screen-xl gap-10 px-5 py-10 xl:px-0">
        <div className="flex justify-between">
          <Logo />
          <DarkMode />
        </div>
        <div className="relative">
          <Header />
          <div className="mt-3 flex flex-col gap-5 lg:flex-row">
            <Sidebar />
            <div className="w-full rounded-3xl bg-white px-14 py-8 dark:bg-gray-800 dark:text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
