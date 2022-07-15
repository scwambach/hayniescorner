import { hcadaQuery, siteQuery } from '@queries';
import { getClient, usePreviewSubscription } from '@utils';
import { Board, PageLayout, River } from '@components';
import { useRouter } from 'next/router';
import { colors } from '@styles';
import HeadingBlock from '@components/blocks/HeadingBlock';

type Props = {
  content: any;
  global: any;
};

const HcadaPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(hcadaQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-seaFoam' }}
    >
      <River
        {...data.upperFeatures}
        cap
        bgColor={colors.black}
        shadowColor={colors.seaFoam}
      />
      <HeadingBlock
        {...data.boardSection.headingBlock}
        bgColor={colors.black}
        blockColor={colors.seaFoam}
      />

      <Board {...data.boardSection} />

      <River
        {...data.lowerFeatures}
        reverse
        bgColor={colors.black}
        shadowColor={colors.seaFoam}
      />
    </PageLayout>
  );
};

export default HcadaPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(hcadaQuery);
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
