import { artsQuery, siteQuery } from '@queries';
import { getClient, usePreviewSubscription } from '@utils';
import { PageLayout, River } from '@components';
import { useRouter } from 'next/router';
import { colors } from '@styles';
import HeadingBlock from '@components/blocks/HeadingBlock';

type Props = {
  content: any;
  global: any;
};

const ArtsPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(artsQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-red' }}
    >
      <River
        features={data.artFeatures.upperfeatures}
        cap
        buttonColors={['bg-seaFoam', 'bg-color7']}
        bgColor={colors.red}
        shadowColor={colors.orange}
      />
      <HeadingBlock {...data.artFeatures.headingBlock} bgColor={colors.red} />
      <River
        features={data.artFeatures.lowerfeatures}
        reverse
        buttonColors={['bg-seaFoam', 'bg-color7']}
        bgColor={colors.red}
        shadowColor={colors.orange}
      />
    </PageLayout>
  );
};

export default ArtsPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(artsQuery);
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: { content: doc, global, preview },
    revalidate: preview ? 1 : 60,
  };
}
