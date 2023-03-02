import 'server-only';

import { Metadata } from 'next/types';

import { i18n, LocaleParams } from '@/config/i18n';
import { getDictionary } from '@/utils/get-dictionary';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  const path = dictionary.portfolio;

  return {
    title: path.seo.title,
    description: path.seo.description,
    openGraph: {
      title: path.openGraph.title,
      description: path.openGraph.description,
      url: new URL(path.openGraph.url),
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

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <h1>{dictionary.portfolio.seo.title}</h1>
    </>
  );
}
