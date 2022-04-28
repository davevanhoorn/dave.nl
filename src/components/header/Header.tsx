import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

import Button from '@/components/buttons/Button';

import { useModalStore } from '@/store/modal';

const Header = () => {
  const { setVisibility, visible } = useModalStore();

  return (
    <header className='mb-8 flex flex-col items-center justify-between border-b py-8 md:flex-row'>
      <div>
        <h2 className='mb-1 text-2xl font-semibold'>Dave van Hoorn</h2>
        <h1 className='text-base font-medium'>
          Freelance FE developer (React, TypeScript, Next.js) • available
          October 2022
        </h1>
      </div>
      <Button
        onClick={() => setVisibility(!visible)}
        variant='outline'
        className='mt-6 md:mt-0'
      >
        <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
        Download CV
      </Button>
    </header>
  );
};

export default Header;
