'use client';

import 'client-only';

import { FunctionComponent, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import useOnScreen from '@/hooks/use-on-screen';

import LogoBankai from '@/public/images/logos/dave-nl_logo-bankai.svg';
import LogoCapgemini from '@/public/images/logos/dave-nl_logo-capgemini.svg';
import LogoDept from '@/public/images/logos/dave-nl_logo-dept.svg';
import LogoEuroclear from '@/public/images/logos/dave-nl_logo-euroclear.svg';
import LogoExpatfile from '@/public/images/logos/dave-nl_logo-expatfile.svg';
import LogoNoten from '@/public/images/logos/dave-nl_logo-noten-nl.svg';
import LogoOrangeTribes from '@/public/images/logos/dave-nl_logo-orange-tribes.svg';
import LogoSchiphol from '@/public/images/logos/dave-nl_logo-schiphol.svg';

import styles from './logos.module.scss';

const Logos: FunctionComponent = () => {
  const [windowAtTop, setWindowAtTop] = useState<boolean>(true);
  const [hasScrolledWindow, setHasScrolledWindow] = useState<boolean>(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(logoRef);

  const fadeIn = !windowAtTop && isOnScreen && hasScrolledWindow;

  useEffect(() => {
    const updateScrollPosition = () => {
      if (window.scrollY > 0 && windowAtTop === true) {
        setWindowAtTop(false);
        setHasScrolledWindow(true);
      }

      if (window.scrollY <= 1 && windowAtTop === false) {
        setWindowAtTop(true);
      }
    };

    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [windowAtTop]);

  return (
    <div className={styles.logos}>
      <LogoSchiphol
        className={clsx(styles.logoSchiphol, { [styles.fadeIn1]: fadeIn })}
      />
      <LogoNoten
        className={clsx(styles.logoNoten, { [styles.fadeIn2]: fadeIn })}
      />
      <LogoDept
        className={clsx(styles.logoDept, { [styles.fadeIn3]: fadeIn })}
      />
      <LogoCapgemini
        className={clsx(styles.logoCapgemini, { [styles.fadeIn4]: fadeIn })}
      />
      <div ref={logoRef}>
        <LogoExpatfile
          className={clsx(styles.logoExpatfile, { [styles.fadeIn5]: fadeIn })}
        />
      </div>
      <LogoBankai
        className={clsx(styles.logoBankai, { [styles.fadeIn6]: fadeIn })}
      />
      <LogoEuroclear
        className={clsx(styles.logoEuroclear, { [styles.fadeIn7]: fadeIn })}
      />
      <LogoOrangeTribes
        className={clsx(styles.logoOrangeTribes, {
          [styles.fadeIn8]: fadeIn,
        })}
      />
    </div>
  );
};

export default Logos;
