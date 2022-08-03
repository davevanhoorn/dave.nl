/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['i.scdn.co'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/files/cv.docx',
        destination: '/files/cv.pdf',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/blog/:slug',
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
  reactStrictMode: true,
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
