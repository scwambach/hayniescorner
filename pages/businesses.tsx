import { businessesQuery, siteQuery } from '@queries';
import { getClient, usePreviewSubscription } from '@utils';
import { useRouter } from 'next/router';
import { PageLayout } from '@components';
import { BusinessListing } from '@components';

type Props = {
  content: any;
  global: any;
};

const BusinessesPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(businessesQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-darkOrange' }}
    >
      <BusinessListing sections={data.sections.businessTypes} />
    </PageLayout>
  );
};

export default BusinessesPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(businessesQuery);
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
