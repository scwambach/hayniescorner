import {
  BannerCitra,
  BannerDurango,
  BannerMercury,
  BannerMorpheus,
  BannerOrbis,
  BannerOxygen,
  BannerXenon,
  Layout,
} from '@components';
import {
  imageBooks,
  imagePerson,
  colorImage,
  imageTech,
} from 'data/dummyImages';
import { message, simpleMessage } from 'data/dummyMessage';
import { features } from 'data/dummyFeatures';

type Props = {};

const Banners = (_props: Props) => {
  return (
    <Layout>
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Citra</h2>
      <BannerCitra
        backgroundImage={imageBooks}
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        subHeading="Elit est magna proident magna sunt minim nisi"
        message={simpleMessage}
        align="text-center"
        priority
        level={2}
      />
      <BannerCitra
        backgroundImage={imagePerson}
        align="text-left"
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        subHeading="Elit est magna proident magna sunt minim nisi"
        video="https://res.cloudinary.com/dccdxhera/video/upload/v1652831199/bgVideo_dqrzen.mp4"
        backgroundColor="bg-color2"
        message={message}
        level={2}
      />
      <BannerCitra
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        align="text-center"
        subHeading="Elit est magna proident magna sunt minim nisi"
        message={message}
        backgroundColor="bg-color2"
        level={2}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Durango</h2>
      <BannerDurango
        backgroundImage={imageBooks}
        heading="Esse excepteur cillum exercitation"
        subHeading="Dolore lorem enim"
        video="https://res.cloudinary.com/dccdxhera/video/upload/v1652831156/fest_lbfpbj.mp4"
        features={features}
        level={2}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Xenon</h2>
      <BannerXenon
        backgroundImage={imageBooks}
        heading="Esse excepteur cillum exercitation"
        subHeading="Dolore lorem enim"
        features={features}
        level={2}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Orbis</h2>
      <BannerOrbis
        backgroundImage={imageTech}
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        message={message}
        level={2}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Oxygen</h2>
      <BannerOxygen
        backgroundImage={imageBooks}
        heading="Pariatur sed elit"
        subHeading="Incididunt &bull; Laboris"
        level={4}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Morpheus</h2>
      <BannerMorpheus
        backgroundImage={imagePerson}
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        subHeading="Elit est magna proident magna sunt minim nisi"
        video="https://res.cloudinary.com/dccdxhera/video/upload/v1652831199/bgVideo_dqrzen.mp4"
        modalVideo="https://www.youtube.com/watch?v=eP9y_7it3ZM"
        message={message}
        level={2}
      />
      <h2 className="text-5xl px-10 py-5 font-display">Banner - Mercury</h2>
      <BannerMercury
        backgroundImage={imageBooks}
        heading="Laborum voluptate non est sed occaecat dolore nulla sed aliqua"
        subHeading="Ut eu nisi lacus"
        modalVideo="https://www.youtube.com/watch?v=RRpF56sS3zw"
        message={message}
        level={2}
      />
      <BannerMercury
        backgroundImage={colorImage}
        backgroundColor="bg-color2"
        heading="In congue aecenas ac augue condimentum"
        subHeading="Fusce quis egestas mauris"
        message={message}
        level={2}
      />
    </Layout>
  );
};

export default Banners;
