import React from 'react';
import { homeQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { colors } from '@styles';
import { LogoBanner, PageLayout, River, IconListBanner } from '@components';

type Props = {
  content: any;
  global: any;
};

const IndexPage = ({ content, global }: Props) => {
  return (
    <PageLayout content={content} global={global}>
      <LogoBanner {...content.heroBanner} priority align="text-center" />
      <River {...content.aboutFeatures} cap bgColor={colors.color6} />
      <IconListBanner {...content.eventTypes} bgColor={colors.color6} />
      <River
        {...content.closerFeatures}
        reverse
        bgColor={colors.blue}
        shadowColor={colors.color7}
      />
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
