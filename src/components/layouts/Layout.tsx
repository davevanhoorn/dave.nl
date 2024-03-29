import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

import usePageLocation from '@/hooks/usePageLocation';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MobileMenu from '@/components/mobile-menu/MobileMenu';
import { Modal } from '@/components/modal/Modal';
import Seo from '@/components/Seo';
import Sidebar from '@/components/sidebar/Sidebar';

import { useMenuStore } from '@/store/menu';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutProps) => {
  const router = useRouter();
  const { isHome, isBlog, isSingleBlog, isAbout } = usePageLocation();
  const { visible, setVisibility } = useMenuStore();

  useEffect(() => {
    setVisibility(false);
  }, [router.asPath, setVisibility]);

  return (
    <div className='container mx-auto max-w-7xl px-4 md:px-8'>
      <Seo />
      <Header />
      <div className='grid md:grid-cols-12 md:gap-8'>
        <main
          role='main'
          className={clsx('col-span-12 max-w-full overflow-hidden', {
            'md:col-span-8 md:border-r md:pr-12 lg:col-span-9':
              isHome || isAbout,
            'lg:px-12 lg:pr-32 lg:pt-2': isSingleBlog || isHome || isBlog,
            'lg:px-36 lg:pt-2 max-w-full': isSingleBlog,
            'lg:pr-0 lg:pl-12 lg:pt-2': isAbout,
            'col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-2': isBlog,
            [String(className)]: !!className,
          })}
        >
          {children}
        </main>
        {isHome || isAbout ? <Sidebar /> : null}
      </div>
      <Footer />
      <Modal />
      {visible && <MobileMenu />}
    </div>
  );
};

export default Layout;
