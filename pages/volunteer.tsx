import { homeQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const VolunteerPage = ({ content, global }: Props) => {
  return (
    <PageLayout content={content} global={global} subPage>
      <h1 className="text-7xl pt-52 bg-black text-white">Volunteer Page</h1>
    </PageLayout>
  );
};

export default VolunteerPage;

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
