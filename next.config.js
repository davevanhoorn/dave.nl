/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  i18n: {
    localeDetection: false,
    locales: ['nl-NL', 'en-US'],
    defaultLocale: 'nl-NL',
  },
  images: {
    domains: ['i.scdn.co'],
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  poweredByHeader: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/files/cv.docx',
        destination: '/files/cv.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/posts/:slug',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'none',
          },
        ],
      },
      {
        source: '/files/cv.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'none',
          },
        ],
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};

module.exports = withPWA(nextConfig);
