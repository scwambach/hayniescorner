import { eventsQuery, siteQuery } from '@queries';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '@utils';
import { EventListing, PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const EventsPage = ({ content, global }: Props) => {
  const router = useRouter();
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const { data = {} } = usePreviewSubscription(eventsQuery, {
    params: { todayDate },
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-brightOrange' }}
    >
      <EventListing events={data.events} />
    </PageLayout>
  );
};

export default EventsPage;

export async function getServerSideProps({ res, err, query, preview = false }) {
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const doc = await getClient(query?.preview === '').fetch(eventsQuery, {
    todayDate,
  });
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
