import { businessesQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const BusinessesPage = ({ content, global }: Props) => {
  return (
    <PageLayout
      content={content}
      global={global}
      subPage={{ banner: content.heroBanner, color: 'bg-red' }}
    >
      {/* content */}
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

  return { props: { content: doc, global, preview } };
}
