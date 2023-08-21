import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import DarkMode from '@/components/darkmode/DarkMode';

export default function Guest({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl">
        <div className="my-10 flex justify-between">
          <Logo />
          <DarkMode />
        </div>
        {children}
      </div>
    </Layout>
  );
}
