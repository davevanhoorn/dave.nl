import Link from 'next/link';
import { BsFillFileEarmarkPdfFill, BsWhatsapp } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

import usePageLocation from '@/hooks/usePageLocation';

import Button from '@/components/buttons/Button';
import { Logo } from '@/components/logo/Logo';
import Navigation from '@/components/navigation/Navigation';

import { useMenuStore } from '@/store/menu';
import { useModalStore } from '@/store/modal';

const Header = () => {
  const { setVisibility: setModalVisibility, visible: modalVisible } =
    useModalStore();
  const { setVisibility: setMenuVisibility, visible: menuVisible } =
    useMenuStore();
  const { isHome } = usePageLocation();

  return (
    <header className='mb-4 pt-8 sm:mb-6' role='banner'>
      <div className='flex flex-col items-start md:items-center justify-between sm:flex-row md:flex-row'>
        {!isHome ? (
          <Link href='/' className='flex items-center justify-center'>
            <Logo />
          </Link>
        ) : (
          <Logo />
        )}

        <div className='mb-6 flex gap-2 md:gap-4 sm:mb-0 md:mt-0 w-full md:w-auto'>
          <Button
            onClick={() => setModalVisibility(!modalVisible)}
            variant='light'
            className='px-2 text-xs sm:px-4 sm:text-base whitespace-nowrap sm:ml-auto md:ml-px'
          >
            <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
            Download
            <span className='hidden'>my</span>
            <span className='ml-1'>CV</span>
          </Button>
          <a
            role='button'
            tabIndex={0}
            target='_blank'
            href='https://api.whatsapp.com/send?phone=31616910079&text=Hoi%20Dave.nl!%20Ik%20kan%20wel%20wat%20front-end%20hulp%20gebruiken%20%F0%9F%92%BB'
            className='whitespace-nowrap inline-flex items-center rounded border border-gray-300 bg-white px-2 py-2 text-xs font-medium text-black shadow-sm transition-colors duration-75 hover:bg-gray-100 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-500 active:bg-white/80 disabled:cursor-not-allowed disabled:bg-gray-200 sm:hidden sm:px-4'
            rel='noreferrer noopener'
          >
            <BsWhatsapp size={20} className='mr-2 text-green-500' />
            Ask
            <span className='hidden'>me</span>
            <span className='hidden sm:inline-block'>a</span>
            <span className='ml-1'>question</span>
          </a>
          <Button
            onClick={() => setMenuVisibility(!menuVisible)}
            variant='light'
            className='px-2 text-xs sm:px-3 sm:text-base text-center ml-auto sm:ml-px md:hidden'
          >
            <RxHamburgerMenu size={20} />
          </Button>
        </div>
      </div>

      <div className='hidden md:flex mt-2 mb-8 items-center justify-between gap-6 rounded-md border bg-white py-3 pr-4 pl-7 text-base text-black sm:mt-8 md:my-10 md:text-lg'>
        <Navigation />
        <a
          role='button'
          tabIndex={0}
          target='_blank'
          href='https://api.whatsapp.com/send?phone=31616910079&text=Hoi%20Dave.nl!%20Ik%20kan%20wel%20wat%20front-end%20hulp%20gebruiken%20%F0%9F%92%BB'
          className='disabled:cursor-not-allowedinline-flex hidden items-center rounded bg-white px-4 py-2 font-medium text-black shadow-none transition-colors duration-75 hover:bg-gray-50 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-500 active:bg-primary-100 active:bg-white/80 disabled:cursor-not-allowed disabled:bg-primary-100 disabled:bg-gray-200 sm:inline-flex'
          rel='noreferrer noopener'
        >
          <BsWhatsapp size={20} className='mr-2 text-green-500' />
          Ask me a question
        </a>
      </div>
    </header>
  );
};

export default Header;
