import { volunteerQuery, siteQuery } from '@queries';
import { getClient } from '@utils';
import { Container, PageLayout, VolunteerForm } from '@components';
import * as SVG from '@svgs';
import { breakpoints, colors } from '@styles';

type Props = {
  content: any;
  global: any;
};

const VolunteerPage = ({ content, global }: Props) => {
  return (
    <PageLayout
      content={content}
      global={global}
      subPage={{ banner: content.heroBanner, color: 'bg-color7' }}
    >
      <section className="type py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative bg-color7">
        <SVG.Cap bgColor={colors.color7} />
        <Container maxWidth={breakpoints.lg}>
          {content.availableEvents.length > 0 && (
            <h2 className="text-white text-center font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7">
              {content.formHeading}
            </h2>
          )}
          <VolunteerForm events={content.availableEvents} />
        </Container>
      </section>
    </PageLayout>
  );
};

export default VolunteerPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const doc = await getClient(query?.preview === '').fetch(volunteerQuery, {
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
