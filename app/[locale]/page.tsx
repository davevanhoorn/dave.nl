import 'server-only';

import { Metadata } from 'next/types';

import clsx from 'clsx';

import { i18n, LocaleParams } from '@/config/i18n';
import { getDictionary } from '@/utils/get-dictionary';

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
      <div className={clsx(styles.heroWrapper)}>
        <div
          className={clsx(
            styles.hero,
            'mx-auto max-w-3xl py-12 px-6 flex items-center flex-col justify-center'
          )}
        >
          <h1 className='text-text text-5xl font-extrabold leading-tight mb-6 pt-12'>
            Hallo! Dave hier. Ik maak graag razendsnelle websites.
          </h1>
          <p className='text-text text-xl leading-relaxed mb-6'>
            Voor opdrachtgevers als Schiphol, Noten.nl, Formule1.nl, Euroclear,
            Capgemini, DEPT en Expatfile maakte ik websites op maat. Soms zijn
            dit korte trajecten (3 maanden), soms zijn dit lange trajecten (24
            maanden).
          </p>
          <p className='text-text text-xl leading-relaxed mb-6'>
            Opdrachtgevers huren mij in om websites te maken die zijn gericht op
            snelheid, gebruiksvriendelijkheid en niet onbelangrijk, optimale
            conversie.
          </p>
          <p className='text-text text-xl leading-relaxed'>
            Ben je op zoek naar een communicatieve, oplossinggerichte
            ontwikkelaar? Neem contact op en laten we samen voor een optimaal
            resultaat gaan!
          </p>
        </div>
      </div>
    </>
  );
}
