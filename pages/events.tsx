import { eventsQuery, siteQuery } from '@queries';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '@utils';
import { EventListing, PageLayout } from '@components';
import dayjs from 'dayjs';

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

export async function getServerSideProps({ query, preview = false }) {
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  const doc = await getClient(query?.preview === '').fetch(eventsQuery, {
    todayDate: today,
  });
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: { content: doc, global, preview },
  };
}
