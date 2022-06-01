import React from 'react';
import { homeQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { BannerXenon, PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const IndexPage = ({ content, global }: Props) => {
  return (
    <PageLayout content={content} global={global}>
      <BannerXenon {...content.heroBanner} priority align="text-center" />
    </PageLayout>
  );
};

export default IndexPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(homeQuery);
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
