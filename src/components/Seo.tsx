import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Freelance front-end (REACT) developer (NL) | Dave van Hoorn',
  siteName: 'Freelance front-end (REACT) developer (NL) | Dave van Hoorn',
  description:
    'Freelance front-end developer with 10+ years of experience. From the Netherlands, working remote. React, TypeScript, Next.js, Tailwind.css',
  url: 'https://dave.nl',
  type: 'website',
  robots: 'follow, index',
  image: 'https://dave.nl/opengraph/dave-nl_senior-front-end-developer.jpg',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Dave van Hoorn'
          />
        </>
      )}

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <meta name='msapplication-TileColor' content='#ffc40d' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
    </Head>
  );
}
