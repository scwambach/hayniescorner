const withPWA = require('next-pwa');
/**
 * @type {import('next').NextConfig}
 **/

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  pwa: {
    dest: 'public',
  },
  env: {
    SANITY_ID: process.env.SANITY_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    SITE_URL: process.env.SITE_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    SNIPCART_API_KEY: process.env.SNIPCART_API_KEY,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
});
