import { volunteerQuery, siteQuery } from '@queries';
import { useRouter } from 'next/router';
import { getClient, slugify, usePreviewSubscription } from '@utils';
import { Container, PageLayout, VolunteerForm } from '@components';
import * as SVG from '@svgs';
import { breakpoints, colors } from '@styles';

type Props = {
  content: any;
  global: any;
};

const VolunteerPage = ({ content, global }: Props) => {
  const router = useRouter();
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const { data = {} } = usePreviewSubscription(volunteerQuery, {
    params: { todayDate },
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-color7' }}
    >
      <section
        id={slugify(data.formHeading)}
        className="type py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative bg-color7"
      >
        <SVG.Cap bgColor={colors.color7} />

        <Container maxWidth={breakpoints.lg}>
          <h2
            className="fader text-white text-center font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7"
            data-aos="fade-up"
          >
            {data.formHeading}
          </h2>
          <VolunteerForm
            events={data.eventTypes}
            formId={slugify(data.formHeading)}
          />
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
    pageId: 'volunteerPage',
  });
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
