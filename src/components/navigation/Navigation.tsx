import { clsx } from 'clsx';
import Link from 'next/link';
import { FunctionComponent, HTMLProps } from 'react';

import usePageLocation from '@/hooks/usePageLocation';

import { routes } from '@/config/config';

type NavigationProps = HTMLProps<HTMLDivElement>;

const Navigation: FunctionComponent<NavigationProps> = ({ className }) => {
  const { isHome, isAbout, isBlog } = usePageLocation();

  return (
    <nav
      role='navigation'
      className={clsx(className, {
        'flex w-full items-center justify-around gap-2 font-medium sm:w-fit sm:gap-6':
          !className,
      })}
    >
      <Link href='/' className={clsx('hover:underline', { underline: isHome })}>
        Home
      </Link>
      <Link
        href={routes.blog}
        className={clsx('hover:underline', {
          underline: isBlog,
        })}
      >
        Blog
      </Link>
      <Link
        href='/about'
        className={clsx('hover:underline', {
          underline: isAbout,
        })}
      >
        About
      </Link>
    </nav>
  );
};

export default Navigation;
