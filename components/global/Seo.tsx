import Head from 'next/head';
import React from 'react';
import { Pwa } from '@components';

interface SeoProps {
  content: any;
  global: any;
}

const Seo = ({ content, global }: SeoProps) => {
  return (
    <Head>
      <title>
        {content.slug.current === '/'
          ? global.site.siteTitle
          : `${content.title} | ${global.site.siteTitle}`}
      </title>
      <meta name="og:image" content={`${content.mainImage.url}?w=600`} />
      <meta name="twitter:image" content={`${content.mainImage.url}?w=600`} />
      <link rel="icon" href="/favicon.png" />
      <meta property="og:site_name" content={global.site.siteTitle} />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content={content.pageDescription || global.site.siteDescription}
      ></meta>
      <meta
        property="og:description"
        content={content.pageDescription || global.site.siteDescription}
      ></meta>
      <meta
        name="twitter:url"
        content={
          process.env.SITE_URL +
          (content.slug.current === '/' ? '' : content.slug.current)
        }
      />
      <meta
        name="twitter:title"
        content={
          content.slug.current === '/'
            ? global.site.siteTitle
            : `${content.title} | ${global.site.siteTitle}`
        }
      />
      <link
        rel="canonical"
        href={
          process.env.SITE_URL +
          (content.slug.current === '/' ? '' : content.slug.current)
        }
      />
      <meta
        property="og:title"
        content={
          content.slug.current === '/'
            ? global.site.siteTitle
            : `${content.title} | ${global.site.siteTitle}`
        }
      />
      <Pwa siteTitle={global.site.siteTitle} />
    </Head>
  );
};

export { Seo };
export default Seo;
