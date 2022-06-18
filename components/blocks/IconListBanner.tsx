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
import { ListBox } from '@svgs';
import { breakpoints } from '@styles';

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
  delay?: number;
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
  delay = 0,
  backgroundImage,
  backgroundColor = 'bg-orange',
}: IconListBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };
  return (
    <section className="iconListBanner relative overflow-hidden">
      <BackgroundWrapper {...backgroundProps} alt={title}>
        <div
          className="py-16 md:py-sectionPadding text-white "
          data-aos="fade-up"
          data-aos-delay={`${delay * 50}`}
        >
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
                    {links.map((link, index) => {
                      return (
                        <Button
                          key={link._key}
                          index={index}
                          classes="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-color7 whitespace-nowrap"
                        >
                          <LinkObject {...link} />
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>

              <ListBox />
              <div className="bg-orange mx-auto xmd:mx-0 content-box rounded-2xl px-7 py-16 md:p-eventListMobile lg:p-eventList w-full flex flex-col h-full max-w-featList">
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
