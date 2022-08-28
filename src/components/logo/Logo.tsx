import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='flex items-center justify-between pb-4 md:flex-row'>
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
        <h2 className='text-xl font-semibold'>Dave van Hoorn</h2>
        <h1 className='mt-1 flex text-sm font-normal leading-none text-gray-900 md:mt-0 md:text-base'>
          Front-end developer
          <span className='ml-1 hidden lg:inline-block'>
            - Available 11/2022
          </span>
        </h1>
      </div>
    </div>
  );
};
