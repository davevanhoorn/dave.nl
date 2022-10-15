import clsx from 'clsx';
import { ReactNode } from 'react';

import usePageLocation from '@/hooks/usePageLocation';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Modal } from '@/components/modal/Modal';
import Seo from '@/components/Seo';
import Sidebar from '@/components/sidebar/Sidebar';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutProps) => {
  const { isHome, isBlog, isSingleBlog, isAbout } = usePageLocation();

  return (
    <div className='container mx-auto max-w-7xl px-4 md:px-8'>
      <Seo />
      <Header />
      <div className='grid md:grid-cols-12 md:gap-8'>
        <main
          role='main'
          className={clsx('col-span-12 max-w-full overflow-hidden', {
            'md:col-span-8 md:border-r md:pr-12 lg:col-span-9':
              isHome || isSingleBlog || isAbout,
            'lg:px-12 lg:pr-32 lg:pt-2': isSingleBlog || isHome || isAbout,
            'lg:pr-0': isAbout,
            'col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-2':
              isBlog && !isSingleBlog,
            [String(className)]: !!className,
          })}
        >
          {children}
        </main>
        {isHome || isSingleBlog || isAbout ? <Sidebar /> : null}
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default Layout;
