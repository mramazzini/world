'use client';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import NavbarSmall from '@/components/Navbar/NavbarSmall';
import { NAVBAR_HEIGHT_REM } from '@/lib/globalVars';
import { useAppSelector } from '@/store/hooks';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const hasPageMaxWidth = useAppSelector(
    (state) => state.layout.hasPageMaxWidth
  );
  const showNav = useAppSelector((state) => state.layout.showNav);
  return (
    <>
      <Navbar />
      <NavbarSmall />
      <div
        className={`${hasPageMaxWidth ? 'max-w-[1800px]' : ''} w-full h-full`}
        style={{
          minHeight: `calc(100vh - ${showNav ? NAVBAR_HEIGHT_REM : 0}rem)`,
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
