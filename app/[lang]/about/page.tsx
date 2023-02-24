import "server-only";

import { Metadata } from "next/types";

import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

// generateStaticParams can be used with dynamic route segments - like getStaticPaths and [slug].tsx
// this is not the same as getStaticProps(!)
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// generateMetadata creates the metadata (seo, opengraph, canonicals) for this page
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  const path = dictionary.about;

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
      type: path.openGraph.type as "video.other", // TODO
    },
    alternates: {
      canonical: path.alternates.canonical,
      languages: path.alternates.languages,
    },
  };
}

// the default exported function is what we actually "see" on the page
// this is a server component (layout.tsx and page.tsx), so we can make it async and await in here
export default async function IndexPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <h1>About / Over mij</h1>
    </>
  );
}
