import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useClickAway, useLockBodyScroll } from 'react-use';

import Button from '@/components/buttons/Button';

import { useModalStore } from '@/store/modal';

export const Modal = () => {
  const { visible, setVisibility } = useModalStore();
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setVisibility(false);
  });

  useLockBodyScroll(visible);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className='fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black/90 px-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.125 }}
        >
          <motion.div
            ref={ref}
            className='relative max-w-lg rounded-lg bg-white p-6 text-black'
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.125 },
            }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.125 }}
          >
            <motion.div
              className='absolute -top-14 left-1/2 cursor-pointer text-white'
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { delay: 0.235 },
              }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.24 }}
            >
              <IoMdClose
                className='h-9 w-9 -translate-x-1/2 p-2'
                onClick={() => setVisibility(false)}
              />
            </motion.div>
            <div>
              <p className='border-red mb-4 rounded border border-red-500 px-2 py-2 text-center text-sm text-sm font-medium leading-6 leading-6 text-red-500'>
                Sorry. I&apos;m currently not available for new work.
              </p>
              <div className='opacity-10'>
                <p className='mb-2 text-sm leading-6'>
                  Please enter your details below to receive my CV in{' '}
                  <span className='font-semibold'>PDF and Microsoft Word</span>{' '}
                  format.
                </p>
                <p className='mb-4 text-sm'>
                  Prefer a quick answer or need instant help with a project?
                  Call me or send a WhatsApp message to +31 (0)6 169 100 79.
                </p>
                <label
                  className='mb-2 block text-base font-medium text-black'
                  htmlFor='name'
                >
                  Your name:
                </label>
                <input
                  disabled
                  className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 focus:outline-none'
                  id='name'
                  type='text'
                />
                <label
                  className='mb-2 block text-base font-medium text-black'
                  htmlFor='name'
                >
                  Your email address:
                </label>
                <input
                  disabled
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 focus:outline-none'
                  id='email'
                  type='text'
                />
                <Button disabled className='mt-6' variant='dark'>
                  Download my CV
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
