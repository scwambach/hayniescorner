import { homeQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { colors } from '@styles';
import {
  LogoBanner,
  PageLayout,
  River,
  IconListBanner,
  LinkTiles,
  BannerOxygen,
} from '@components';

type Props = {
  content: any;
  global: any;
};

const ContactPage = ({ content, global }: Props) => {
  return (
    <PageLayout content={content} global={global}>
      <BannerOxygen heading="Contact" />
      <h1 className="text-7xl pt-52 bg-black text-white">Contact Page</h1>
    </PageLayout>
  );
};

export default ContactPage;

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
