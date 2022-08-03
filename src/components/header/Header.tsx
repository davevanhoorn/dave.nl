import Image from 'next/image';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

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
            src='/images/davevanhoorn.jpg'
            alt='Dave van Hoorn'
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold'>Dave van Hoorn</h2>
          <h1 className='text-sm font-medium'>
            Freelance developer (React, TypeScript, Next.js) •{' '}
            <span className='font-medium text-green-600'>
              Available 12/09/2022
            </span>
          </h1>
        </div>
      </div>
      <Button
        onClick={() => setVisibility(!visible)}
        variant='outline'
        className='mt-6 md:mt-0'
      >
        <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
        Request my CV
      </Button>
    </header>
  );
};

export default Header;
