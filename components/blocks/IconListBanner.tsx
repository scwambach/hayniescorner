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
        <div className="py-16 md:py-sectionPadding text-white">
          <Container maxWidth={breakpoints.lg}>
            <div className="xmd:flex xmd:ml-4 w-full items-center justify-between">
              <div className="copy max-w-xs mx-auto xmd:mx-0 mb-12 xmd:mb-0 xmd:max-w-eventTypeHeading">
                <h3 className="font-black uppercase leading-base tracking-eventTypeHeading text-4xl lg:text-eventTypeHeading mb-5">
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
                        classes="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-color7 whitespace-nowrap"
                      >
                        <LinkObject {...link} />
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-orange mx-auto xmd:mx-0 content-box rounded-2xl px-7 py-10 md:p-eventListMobile lg:p-eventList w-full flex flex-col h-full max-w-featList">
                <svg className="clip-svg absolute w-0 h-0">
                  <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0.037,0,0.966,0.036 A0.035,0.033,0,0,1,1,0.069 v0.863 a0.035,0.033,0,0,1,-0.034,0.033 L0.037,1 A0.035,0.033,0,0,1,0,0.967 V0.033 A0.035,0.033,0,0,1,0.037,0"></path>
                  </clipPath>
                </svg>
                {items.map((item, index) => (
                  <div
                    key={item._id}
                    className={`sm:flex w-full text-center sm:text-left sm:justify-between items-center${
                      index !== 0 ? ' mt-7' : ''
                    }`}
                  >
                    <div className="itemIcon mx-auto mb-3 sm:m-0 flex justify-center">
                      <ImageIcon
                        customIcon={item.customIcon}
                        iconImage={item.iconImage}
                      />
                    </div>
                    <div className="itemTitle font-semibold uppercase text-iconHeading">
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
