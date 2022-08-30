import Image from 'next/image';

import usePageLocation from '@/hooks/usePageLocation';

export const Logo = () => {
  const { isHome } = usePageLocation();
  const name = 'Dave van Hoorn';
  const role = 'Front-end developer';
  const availableFrom = 'Available 11/2022';

  return (
    <div className='flex items-center justify-between pb-4 sm:pb-0 md:flex-row'>
      <div className='mr-3 inline-block h-14 w-14 flex-shrink-0'>
        <Image
          width={70}
          height={70}
          className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
          src='/images/davevanhoorn-2022.png'
          alt='Dave van Hoorn'
        />
      </div>
      <div>
        {isHome ? (
          <>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <h1 className='mt-1 flex text-sm font-normal leading-none text-gray-900 md:mt-1'>
              {role}
              <span className='ml-1 hidden lg:inline-block'>
                - {availableFrom}
              </span>
            </h1>
          </>
        ) : (
          <>
            <p className='text-xl font-semibold'>{name}</p>
            <p className='mt-1 flex text-sm font-normal leading-none text-gray-900 md:mt-1'>
              {role}
              <span className='ml-1 hidden lg:inline-block'>
                - {availableFrom}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
