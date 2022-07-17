import { homeQuery, siteQuery } from '@queries';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '@utils';
import { colors } from '@styles';
import {
  LogoBanner,
  PageLayout,
  River,
  IconListBanner,
  LinkTiles,
  LeftBanner,
} from '@components';

type Props = {
  content: any;
  global: any;
};

const IndexPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(homeQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout content={data} global={global}>
      <LogoBanner
        {...data.heroBanner}
        underColor="bg-blue"
        backgroundColor="bg-black"
        priority
        align="text-center"
      />

      <River {...data.aboutFeatures} cap bgColor={colors.color6} delay={1} />
      <IconListBanner {...data.eventTypes} bgColor={colors.seaFoam} delay={2} />
      <LinkTiles {...data.linkTiles} />
      <LeftBanner {...data.arts} />
      <River
        {...data.closerFeatures}
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

  return {
    props: { content: doc, global, preview },
    revalidate: preview ? 1 : 60,
  };
}
