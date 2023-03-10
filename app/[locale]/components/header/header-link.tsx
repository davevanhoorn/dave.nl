'use client';

import 'client-only';

import {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { isAbsoluteURL } from '@/utils/is-absolute-url';

import styles from './header-link.module.scss';

const HeaderLinkBorder = () => (
  <svg
    x='0px'
    y='0px'
    viewBox='0 0 570.4 67.4'
    xmlSpace='preserve'
    fill='currentColor'
    className='top-1 relative'
  >
    <path
      d='M500.9,67.2c9.4,0.4,18.8,0.2,28-0.8c26.8-3.1,43.1-15.6,41.3-32.7c-0.1-0.5-0.1-1-0.2-1.5
	c-0.1-0.5-0.2-1-0.4-1.5c-0.3-1-0.6-2-1-3c-0.8-2-1.8-3.9-3.1-5.7c-2.6-3.6-6.2-7-10.5-9.9c-8.6-5.8-20.4-9.9-33.4-11.1
	c-12.5-0.9-25.2-1-37.6-0.7C391.9,0.5,299.7,1,207.7,2c-39,0.5-78,1.1-116.7,2.4C70.6,5,50.6,6.5,31.7,9C20.8,10.5,12.4,14.3,7,19
	c-2.7,2.4-4.7,4.9-5.8,7.7c-0.5,1.4-0.9,2.8-1.1,4.2C0,31.6,0,32.3,0.1,33c0,0.4,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.7,0.2,1.1
	c2.5,11.4,19.4,21.7,41.9,23.9c9.2,0.6,18.6,1,28,0.8c70.3,0.8,140.6,1.4,226.8,2.4C354.2,63.6,427.6,65.4,500.9,67.2L500.9,67.2
	L500.9,67.2z'
    />
  </svg>
);

const HeaderLink: FunctionComponent<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => {
  const pathname = usePathname();

  if (!props.href) return null;

  const isAbsoluteUrl = isAbsoluteURL(props.href);

  return (
    <span
      className={clsx(styles.link, className, {
        [styles.active]: pathname === props.href,
      })}
    >
      {isAbsoluteUrl ? (
        <a
          className='flex justify-center items-center flex-col lg:pt-2'
          target='_blank'
          rel='noreferrer noopener'
          href={props.href as string}
          title={props.title}
          aria-label={props?.['aria-label'] ? props['aria-label'] : undefined}
          {...props}
        >
          {children}
          <HeaderLinkBorder />
        </a>
      ) : (
        <Link
          className='flex justify-center items-center flex-col lg:pt-2'
          href={props.href as {}}
          title={props.title}
          aria-label={props?.['aria-label'] ? props['aria-label'] : undefined}
          {...props}
        >
          {children}
          <HeaderLinkBorder />
        </Link>
      )}
    </span>
  );
};

export default HeaderLink;
