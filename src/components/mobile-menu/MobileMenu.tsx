import clsx from 'clsx';
import { useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useClickAway, useLockBodyScroll } from 'react-use';

import styles from './MobileMenu.module.scss';

import Button from '@/components/buttons/Button';
import Navigation from '@/components/navigation/Navigation';

import { useMenuStore } from '@/store/menu';

const MobileMenu = () => {
  const { visible, setVisibility } = useMenuStore();
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setVisibility(false);
  });

  useLockBodyScroll(visible);

  return (
    <div
      className={clsx(
        styles.menu,
        'absolute top-0 right-0 w-full h-full px-24'
      )}
    >
      <Button
        onClick={() => setVisibility(!visible)}
        variant='light'
        className='absolute top-4 right-4 p-1'
      >
        <RxCross2 className='text-2xl text-gray-800' />
      </Button>

      <Navigation className='flex flex-col items-center justify-center h-full text-4xl leading-loose' />
    </div>
  );
};

export default MobileMenu;
