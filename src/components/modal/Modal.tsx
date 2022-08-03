import { AnimatePresence, motion } from 'framer-motion';
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
              <p className='border-red mb-4 rounded border border-green-500 px-2 py-2 text-center text-sm font-medium leading-6 text-green-500'>
                I&apos;m available for a new freelance job from 12/09/2022
              </p>
              <Form />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
