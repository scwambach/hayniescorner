import { aboutQuery, siteQuery } from '@queries';
import { getClient, isEven, usePreviewSubscription } from '@utils';
import { Button, LinkObject, PageLayout, River } from '@components';
import { useRouter } from 'next/router';
import { colors } from '@styles';
import HeadingBlock from '@components/blocks/HeadingBlock';

type Props = {
  content: any;
  global: any;
};

const AboutPage = ({ content, global }: Props) => {
  const router = useRouter();

  const { data = {} } = usePreviewSubscription(aboutQuery, {
    initialData: content,
    enabled: router.query.preview === '',
  });

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{ banner: data.heroBanner, color: 'bg-color6' }}
    >
      <River
        {...data.aboutFeatures}
        cap
        bgColor={colors.black}
        shadowColor={colors.color6}
      />
      <div className="bg-color6 pb-sectionPadding">
        <River
          {...data.hcadaSection}
          bgColor={colors.color6}
          shadowColor={colors.black}
        />
        <HeadingBlock
          {...data.hcadaSection.headingBlock}
          blockColor={colors.black}
        />
        {data.hcadaSection.links.map((link, index) => (
          <div key={link._key} className="mx-auto text-center pt-14">
            <Button
              key={link._key}
              index={index}
              classes={`w-full text-white block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto ${
                isEven(index) ? 'bg-color1' : 'bg-orange'
              }`}
            >
              <LinkObject {...link} />
            </Button>
          </div>
        ))}
      </div>
      <River
        {...data.footerFeatures}
        reverse
        buttonColors={['bg-darkOrange', 'bg-color6']}
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

  return {
    props: { content: doc, global, preview },
    revalidate: preview ? 1 : 60,
  };
}
