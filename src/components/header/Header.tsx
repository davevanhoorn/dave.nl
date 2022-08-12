import Image from 'next/image';
import { BsFillFileEarmarkPdfFill, BsWhatsapp } from 'react-icons/bs';

import Button from '@/components/buttons/Button';

import { useModalStore } from '@/store/modal';

const Header = () => {
  const { setVisibility, visible } = useModalStore();

  return (
    <header className='mb-8 flex flex-col items-center justify-between border-b py-8 md:flex-row'>
      <div className='flex items-center justify-center'>
        <div className='mr-3 inline-block h-12 w-12 flex-shrink-0'>
          <Image
            width={50}
            height={50}
            className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            src='/images/davevanhoorn-2022.png'
            alt='Dave van Hoorn'
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold'>Dave van Hoorn</h2>
          <h1 className='mt-1 flex flex-col text-sm font-normal text-gray-900 md:mt-0 md:block'>
            Senior front-end developer{' '}
            <span className='hidden md:inline'>-</span>{' '}
            <span className='mt-1 font-semibold text-black md:mt-0'>
              Available Sept. &apos;22
            </span>
          </h1>
        </div>
      </div>
      <div className='mt-6 flex gap-3 md:mt-0'>
        <Button onClick={() => setVisibility(!visible)} variant='light'>
          <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
          Download CV
        </Button>
        <a
          target='_blank'
          href='https://api.whatsapp.com/send?phone=31616910079&text=Hoi%20Dave.nl!%20Ik%20kan%20wel%20wat%20front-end%20hulp%20gebruiken%20%F0%9F%92%BB'
          className='inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 font-medium text-black shadow-sm shadow-none hover:bg-gray-100 hover:bg-primary-50 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-500 active:bg-white/80 active:bg-primary-100 disabled:bg-gray-200 disabled:bg-primary-100'
          rel='noreferrer noopener'
        >
          <BsWhatsapp size={20} className='mr-2 text-green-500' />
          <span className='mr-1 hidden lg:inline'>Send</span> WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
