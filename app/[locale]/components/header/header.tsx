import 'server-only';

import { FunctionComponent } from 'react';

import clsx from 'clsx';
import { RiWhatsappFill } from 'react-icons/ri';

import { Dictionary, Locale } from '@/config/i18n';

import Button, { ButtonTypeEnum } from '@/components/button/button';
import ButtonStartProject from '@/components/button/button-start-project';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import LocaleSwitcherFlag from '@/components/locale-switcher/locale-switcher-flag';
import Logo from '@/components/logo/logo';
import ThemeSwitcher from '@/components/theme-switcher/theme-switcher';

import HeaderLink from './header-link';

import styles from './header.module.scss';

type HeaderProps = {
  currentLocale: Locale;
  dictionary: Dictionary;
};

const Header: FunctionComponent<HeaderProps> = ({
  currentLocale,
  dictionary,
}) => {
  const links = dictionary.global.header.navigation.filter(
    (link) => link.value !== 'Home'
  );

  return (
    <header
      className={clsx(styles.header, 'fixed w-full backdrop-blur-sm z-20')}
    >
      <nav className='mx-auto max-w-screen-2xl lg:px-8' aria-label='Top'>
        <div
          className={
            'flex w-full items-center justify-between pt-3 lg:py-3 lg:border-none'
          }
        >
          <div className='flex items-center w-full'>
            <Logo />
            <div className='sm:px-4 md:px-0 hidden md:space-x-0 lg:space-x-7 xl:space-x-10 lg:flex flex-grow justify-center'>
              {links.map((link, key) => (
                <HeaderLink
                  key={`navigation-link-item-${key}`}
                  href={link.href}
                  title={link.title}
                  aria-label={link.ariaLabel}
                  className='text-secondary relative text-lg md:text-xl focus:rounded-md'
                >
                  {link.value}
                </HeaderLink>
              ))}
            </div>
          </div>
          <div className='space-x-2 md:space-x-3 flex mr-3 lg:mr-0'>
            <ButtonStartProject dictionary={dictionary} className="hidden sm:inline-flex"/>
            <Button
              className={clsx(styles.whatsappButton)}
              element={ButtonTypeEnum.A}
              href={dictionary.global.header.callToAction.whatsapp.href}
              title={dictionary.global.header.callToAction.whatsapp.title}
              aria-label={
                dictionary.global.header.callToAction.whatsapp.ariaLabel
              }
              icon={
                <span className={styles.whatsappWrapper}>
                  <span
                    className={clsx(
                      styles.whatsappDot,
                      'dark:border-black border-white'
                    )}
                  >
                    1
                  </span>
                  <RiWhatsappFill
                    data-id='whatsapp-icon'
                    className='mr-1 xs:mr-2 text-base xs:text-lg sm:text-xl'
                  />
                </span>
              }
            >
              <span className={clsx(styles.whatsappText, 'relative')}>
                {dictionary.global.header.callToAction.whatsapp.value}
              </span>
            </Button>
            <LocaleSwitcher>
              <Button
                element={ButtonTypeEnum.BUTTON}
                className='lg:px-4'
                aria-label={dictionary?.global.languageSwitcher.label}
              >
                <LocaleSwitcherFlag locale={currentLocale as Locale} />
              </Button>
            </LocaleSwitcher>
            <ThemeSwitcher />
          </div>
        </div>
        <div className='flex justify-center xs:gap-x-3 pt-2 pb-1 xs:py-2 lg:hidden flex-nowrap'>
          {links.map((link, key) => (
            <HeaderLink
              key={`mobile-navigation-link-item-${key}`}
              href={link.href}
              title={link.title}
              aria-label={link.ariaLabel}
              className={
                'text-secondary text-base xs:text-lg lg:text-xl p-2 whitespace-nowrap'
              }
            >
              {link.value}
            </HeaderLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
