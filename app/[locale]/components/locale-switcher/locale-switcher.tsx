'use client';

import 'client-only';

import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';

import type { Locale } from '@/config/i18n';
import { findNestedObject } from '@/utils/find-nested-object';

import LocaleSwitcherFlag from '@/components/locale-switcher/locale-switcher-flag';
import { DictionaryContext } from '@/context/dictionary-context';

import styles from './locale-switcher.module.scss';

const LocaleSwitcher: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { currentLocale, dictionary } = useContext(DictionaryContext);
  const pathName = usePathname();

  const [translations, setTranslations] = useState<Array<{
    locale: Locale;
    slug: string;
  }> | null>(null);

  useEffect(() => {
    const pathNames = pathName.split('/');
    const slug = pathNames[2] ? pathNames[2] : pathNames[1];
    if (!slug) return;

    const slugs = findNestedObject(dictionary, currentLocale as Locale, slug);
    if (!slugs) return;

    const translations = Object.keys(slugs).map((locale) => ({
      locale: locale as Locale,
      slug: slugs[locale] === locale ? '' : (slugs[locale] as string),
    }));

    setTranslations(translations);
  }, [pathName, currentLocale, dictionary]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          collisionPadding={10}
          sideOffset={10}
          className={clsx(
            styles.localeSwitcherContent,
            'rounded-md p-1 sm:p-2 bg-white dark:bg-black text-secondary dark:border-white dark:border z-10'
          )}
        >
          <DropdownMenu.Arrow />
          {translations?.map((translation) => (
            <DropdownMenu.Item key={translation.locale}>
              <Link
                replace
                className={clsx(
                  styles.localeLink,
                  'p-1 sm:p-2 hover:underline hover:decoration-wavy hover:decoration-1'
                )}
                href={
                  translation.slug === '/'
                    ? `/${translation.locale}`
                    : (`/${translation.locale}/${translation.slug}` as {})
                }
              >
                <span className='relative mr-3'>
                  <LocaleSwitcherFlag locale={translation.locale} />
                  {translation.locale === currentLocale && (
                    <span
                      className={clsx(
                        styles.localeCheck,
                        'absolute text-center rounded-2xl'
                      )}
                    >
                      <FaCheck className='w-2 h-2' />
                    </span>
                  )}
                </span>
                <span className='font-bold text-base'>
                  {
                    dictionary?.global.languageSwitcher.locales[
                      translation.locale
                    ].name
                  }
                </span>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LocaleSwitcher;
