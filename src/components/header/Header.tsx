import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillFileEarmarkPdfFill, BsWhatsapp } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import { Logo } from '@/components/logo/Logo';

import { useModalStore } from '@/store/modal';

const Header = () => {
  const { setVisibility, visible } = useModalStore();
  const { asPath } = useRouter();

  return (
    <header className='mb-4 pt-8 sm:mb-6' role='banner'>
      <div className='flex flex-col items-center justify-between sm:flex-row md:flex-row'>
        {asPath !== '/' ? (
          <Link href='/'>
            <a className='flex items-center justify-center'>
              <Logo />
            </a>
          </Link>
        ) : (
          <Logo />
        )}

        <div className='mb-6 flex gap-4 sm:mb-0 md:mt-0'>
          <Button onClick={() => setVisibility(!visible)} variant='outline'>
            <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
            Download CV
          </Button>
          <a
            role='button'
            tabIndex={0}
            target='_blank'
            href='https://api.whatsapp.com/send?phone=31616910079&text=Hoi%20Dave.nl!%20Ik%20kan%20wel%20wat%20front-end%20hulp%20gebruiken%20%F0%9F%92%BB'
            className='flex items-center rounded border border-primary-500 px-4 py-2 font-medium shadow-sm transition-colors duration-75 hover:bg-primary-50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 active:bg-primary-100 disabled:cursor-not-allowed disabled:bg-primary-100'
            rel='noreferrer noopener'
          >
            <BsWhatsapp size={20} className='mr-2 text-green-500' />
            <span className='mr-1 hidden sm:inline-block'>Send</span> WhatsApp
          </a>
        </div>
      </div>
      {/* 
      <div className='flex items-center justify-between gap-6 px-4 py-4 pr-4 mt-4 text-white bg-gray-800 rounded-md sm:px-4'>
        <nav
          role='navigation'
          className='flex items-center justify-around w-full gap-2 text-sm font-medium sm:w-fit sm:gap-6 sm:pl-4 sm:text-base md:gap-8'
        >
          <Link href='/'>
            <a
              className={clsx('hover:underline', { underline: asPath === '/' })}
            >
              Home
            </a>
          </Link>
          <Link href='/blog' passHref>
            <a
              tabIndex={0}
              className={clsx('hover:underline', {
                underline:
                  asPath === '/blog' || asPath.indexOf('/blog/') !== -1,
              })}
            >
              Blog
            </a>
          </Link>
          <Link href='/portfolio'>
            <a
              className={clsx('hover:underline', {
                underline: asPath === '/portfolio',
              })}
            >
              Portfolio
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={clsx('hover:underline', {
                underline: asPath === '/about',
              })}
            >
              About
            </a>
          </Link>
          <Link href='/contact'>
            <a
              className={clsx('hover:underline', {
                underline: asPath === '/contact',
              })}
            >
              Contact
            </a>
          </Link>
        </nav>
        <Button
          className='hidden sm:flex'
          onClick={() => setVisibility(!visible)}
          variant='light'
        >
          <AiFillGift size={20} className='mr-2' />
          Surprise button
        </Button>
      </div>*/}
    </header>
  );
};

export default Header;
