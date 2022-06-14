import { aboutQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { PageLayout, River } from '@components';
import { colors } from '@styles';

type Props = {
  content: any;
  global: any;
};

const AboutPage = ({ content, global }: Props) => {
  return (
    <PageLayout
      content={content}
      global={global}
      subPage={{ banner: content.heroBanner, color: 'bg-color6' }}
    >
      <River
        {...content.aboutFeatures}
        cap
        bgColor={colors.black}
        shadowColor={colors.color6}
      />
    </PageLayout>
  );
};

export default AboutPage;

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
