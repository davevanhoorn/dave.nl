'use client';

import 'client-only';

import { FunctionComponent, useRef } from 'react';

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

import useWindowScroll from '@/hooks/use-window-scroll';
import styles from './logos.module.scss';

const Logos: FunctionComponent = () => {
  const { windowAtTop, hasScrolledWindow } = useWindowScroll();
  const logoRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(logoRef);

  const fadeIn = !windowAtTop && isOnScreen && hasScrolledWindow;

  return (
    <div className={clsx(styles.logos, 'mt-16')}>
      <div ref={logoRef}>
        <LogoSchiphol
          className={clsx(styles.logoSchiphol, { [styles.fadeIn1]: fadeIn })}
        />
      </div>
      <LogoNoten
        className={clsx(styles.logoNoten, { [styles.fadeIn2]: fadeIn })}
      />
      <LogoDept
        className={clsx(styles.logoDept, { [styles.fadeIn3]: fadeIn })}
      />
      <LogoCapgemini
        className={clsx(styles.logoCapgemini, { [styles.fadeIn4]: fadeIn })}
      />

      <LogoExpatfile
        className={clsx(styles.logoExpatfile, { [styles.fadeIn5]: fadeIn })}
      />

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
