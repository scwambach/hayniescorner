import {
  BackgroundWrapper,
  ImageProps,
  LinkProps,
  Button,
  ImageIcon,
  LinkObject,
  PortableTextModule,
  Container,
} from '@components';
import { breakpoints, colors } from '@styles';

interface IconItem {
  _id: string;
  title: string;
  link?: LinkProps;
  iconImage?: ImageProps;
  customIcon?: string;
}

interface IconListBannerProps {
  backgroundImage: ImageProps;
  backgroundColor: string;
  blockContent?: any | any[];
  items: IconItem[];
  title: string;
  links?: LinkProps[];
}

const IconListBanner = ({
  title,
  links = [],
  items,
  blockContent,
  backgroundImage,
  backgroundColor = 'bg-orange',
}: IconListBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };
  return (
    <section className="iconListBanner relative overflow-hidden">
      <BackgroundWrapper {...backgroundProps}>
        <div className="py-16 md:py-5 lg:py-sectionPadding text-white">
          <Container maxWidth={breakpoints.lg}>
            <div className="flex lg:ml-4 w-full items-center justify-between">
              <div className="copy lg:max-w-eventTypeHeading">
                <h3 className="font-black uppercase leading-base tracking-eventTypeHeading lg:text-eventTypeHeading mb-5">
                  {title}
                </h3>
                {blockContent && (
                  <div className="text-eventTypeBody leading-6">
                    <PortableTextModule text={blockContent} />
                  </div>
                )}
                {links && (
                  <div className="mt-7">
                    {links.map((link, index) => (
                      <Button
                        key={link._key}
                        index={index}
                        classes="w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto bg-color7 whitespace-nowrap"
                      >
                        <LinkObject {...link} />
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-orange content-box rounded-2xl p-eventList w-full flex flex-col h-full max-w-featList">
                <svg className="clip-svg absolute w-0 h-0">
                  <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0.037,0,0.966,0.036 A0.035,0.033,0,0,1,1,0.069 v0.863 a0.035,0.033,0,0,1,-0.034,0.033 L0.037,1 A0.035,0.033,0,0,1,0,0.967 V0.033 A0.035,0.033,0,0,1,0.037,0"></path>
                  </clipPath>
                </svg>
                {items.map((item, index) => (
                  <div
                    key={item._id}
                    className={`flex w-full items-center${
                      index !== 0 ? ' mt-7' : ''
                    }`}
                  >
                    <div className="w-14 flex justify-center">
                      <ImageIcon
                        customIcon={item.customIcon}
                        iconImage={item.iconImage}
                      />
                    </div>
                    <div className="font-semibold uppercase text-iconHeading ml-6">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </BackgroundWrapper>
    </section>
  );
};

export { IconListBanner };
export default IconListBanner;
