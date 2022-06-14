import { pastEventsQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { EventListing, PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const EventsPage = ({ content, global }: Props) => {
  return (
    <PageLayout
      content={content}
      global={global}
      subPage={{
        banner: { ...content.heroBanner, heading: 'Past Events' },
        color: 'bg-brightOrange',
      }}
    >
      <EventListing events={content.events} past />
    </PageLayout>
  );
};

export default EventsPage;

export async function getServerSideProps({ res, err, query, preview = false }) {
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const doc = await getClient(query?.preview === '').fetch(pastEventsQuery, {
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
