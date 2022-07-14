import { aboutQuery, siteQuery } from '@queries';
import { getClient, usePreviewSubscription } from '@utils';
import { PageLayout, River } from '@components';
import { useRouter } from 'next/router';
import { colors } from '@styles';

type Props = {
  content: any;
  global: any;
};

const HcadaPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(aboutQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-color6' }}
    >
      <River
        {...data.aboutFeatures}
        cap
        bgColor={colors.black}
        shadowColor={colors.color6}
      />
    </PageLayout>
  );
};

export default HcadaPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(aboutQuery);
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
