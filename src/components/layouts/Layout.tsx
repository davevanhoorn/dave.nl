import { ReactNode } from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Modal } from '@/components/modal/Modal';
import Seo from '@/components/Seo';
import Sidebar from '@/components/sidebar/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='container mx-auto max-w-5xl px-4 md:px-8'>
      <Seo />
      <Header />
      <div className='grid md:grid-cols-12 md:gap-8'>
        <div className='col-span-12 md:col-span-8 md:border-r md:pr-8 lg:col-span-9'>
          {children}
        </div>
        <Sidebar />
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default Layout;
