/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
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
    GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
    GMAIL_AUTH_CODE: process.env.GMAIL_AUTH_CODE,
    GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
    GMAIL_ACCESS_TOKEN: process.env.GMAIL_ACCESS_TOKEN,
    GMAIL_REDIRECT_URI: process.env.GMAIL_REDIRECT_URI,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
