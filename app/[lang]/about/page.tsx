import "server-only";

import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

// generateStaticParams can be used with dynamic route segments - like getStaticPaths and [slug].tsx
// this is not the same as getStaticProps(!)
export async function generateStaticParams(params: any) {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// generateMetadata creates the metadata (seo, opengraph, canonicals) for this page
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return {
    openGraph: {
      title: dictionary.home.openGraph.title,
      description: dictionary.home.openGraph.description,
      url: dictionary.home.openGraph.url,
      siteName: dictionary.home.openGraph.siteName,
      images: dictionary.home.openGraph.images,
      locale: dictionary.home.openGraph.locale,
      type: dictionary.home.openGraph.type,
    },
    alternates: {
      canonical: dictionary.home.alternates.canonical,
      languages: dictionary.home.alternates.languages,
    },
  };
}

// the default exported function is what we actually "see" on the page
// this is a server component (layout.tsx and page.tsx), so we can make it async and await in here
export default async function IndexPage({
  params,
}: {
  params: { lang: Locale; slug?: string };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      {/* Organization schema.org data */}
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dictionary.home.schema.organization),
        }}
      />
      {/* Local business schema.org data */}
      <script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dictionary.home.schema.localBusiness),
        }}
      />
      <h1>About / Over mij</h1>
    </>
  );
}
