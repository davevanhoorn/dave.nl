import 'server-only';

import Image from 'next/image';
import { Metadata } from 'next/types';

import clsx from 'clsx';

import ButtonStartProject from '@/components/button/button-start-project';
import { i18n, LocaleParams } from '@/config/i18n';
import { getDictionary } from '@/utils/get-dictionary';
import Logos from './components/logos/logos';

import heroImage from '@/public/images/dave-nl_hero.webp';

import styles from './page.module.scss';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  const path = dictionary.home;

  return {
    title: path.seo.title,
    description: path.seo.description,
    openGraph: {
      title: path.openGraph.title,
      description: path.openGraph.description,
      url: path.openGraph.url,
      siteName: path.openGraph.siteName,
      images: path.openGraph.images,
      locale: path.openGraph.locale,
      type: path.openGraph.type as 'video.other', // TODO
    },
    alternates: {
      canonical: path.alternates.canonical,
      languages: path.alternates.languages,
    },
  };
}

export default async function IndexPage({ params }: { params: LocaleParams }) {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <script
        id='schema-organization'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dictionary.home.schema.organization),
        }}
      />
      <script
        id='schema-local-business'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dictionary.home.schema.localBusiness),
        }}
      />

      <div
        className={clsx(
          styles.hero,
          'mx-auto pt-4 lg:pt-12 px-4 lg:px-6 flex justify-center items-center flex-wrap'
        )}
      >
        <div className='max-w-2xl lg:pr-10'>
          <h1 className='text-secondary text-5xl lg:text-6xl font-extrabold leading-none lg:leading-tight mb-4 font-display'>
            Ik maak{' '}
            <span className={styles.fast}>
              <span className={styles.fast1}>s</span>
              <span className={styles.fast2}>n</span>
              <span className={styles.fast3}>e</span>
              <span className={styles.fast4}>l</span>
              <span className={styles.fast5}>l</span>
              <span className={styles.fast6}>e</span>
            </span>{' '}
            sites.
          </h1>
          <p className='text-secondary text-lg lg:text-2xl lg:leading-relaxed mb-6 font-semibold'>
            Voor o.a. Schiphol, Noten.nl, Formule1.nl, Euroclear, Capgemini,
            DEPT en Expatfile.
          </p>
          <p className='text-secondary text-lg lg:text-2xl lg:leading-relaxed mb-6 font-semibold'>
            Websites die ik maak zijn
            {` `}
            <span className='relative text-secondary font-display font-normal'>
              razendsnel
            </span>
            {` `}
            en
            {` `}
            <span className='relative text-secondary font-display font-normal'>
              converteren.
            </span>
          </p>
          <p className='text-secondary text-lg lg:text-2xl lg:leading-relaxed font-semibold mb-8'>
            Hulp nodig? Beschrijf jouw project zodat we samen kunnen werken aan
            het perfecte resultaat.
          </p>
          <ButtonStartProject
            dictionary={dictionary}
            className='lg:text-xl lg:py-3 lg:px-5'
          />
        </div>
        <Image
          priority
          src={heroImage}
          alt='Dave.nl'
          className={clsx(styles.heroImage, `mt-6 lg:mt-0`)}
        />
        <Logos />
      </div>
    </>
  );
}
