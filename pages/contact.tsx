import { contactQuery, siteQuery } from '@queries';
import { getClient, usePreviewSubscription } from '@utils';
import { useRouter } from 'next/router';
import { ContactInfo, PageLayout } from '@components';

type Props = {
  content: any;
  global: any;
};

const ContactPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(contactQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-color9' }}
    >
      <ContactInfo email={global.site.mainEmail} />
    </PageLayout>
  );
};

export default ContactPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(contactQuery);
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return { props: { content: doc, global, preview } };
}
