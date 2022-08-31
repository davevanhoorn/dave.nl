import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useClickAway, useLockBodyScroll } from 'react-use';

import { Form } from '@/components/form/Form';

import { useModalStore } from '@/store/modal';

export const Modal = () => {
  const { visible, setVisibility } = useModalStore();
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setVisibility(false);
  });

  useLockBodyScroll(visible);

  return visible ? (
    <div className='fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black/90 px-6'>
      <div
        ref={ref}
        className='relative max-w-lg rounded-lg bg-white p-6 text-black'
      >
        <div className='absolute -top-14 left-1/2 cursor-pointer text-white'>
          <IoMdClose
            className='h-9 w-9 -translate-x-1/2 p-2'
            onClick={() => setVisibility(false)}
          />
        </div>
        <div>
          <p className='border-red mb-4 rounded border border-green-600 px-2 py-2 text-center text-sm font-medium leading-6 text-green-600'>
            I&apos;m available for a new job from November 2022.
          </p>
          <Form />
        </div>
      </div>
    </div>
  ) : null;
};
