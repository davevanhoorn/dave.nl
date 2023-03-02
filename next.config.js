const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    appDir: true,
    legacyBrowsers: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles/scss')],
  },
  async headers() {
    return [
      {
        source: '/:path*',
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
    // Stylelint
    config.plugins.push(new StylelintPlugin());

    // SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
