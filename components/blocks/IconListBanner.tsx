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
import { slugify } from '@utils';

interface IconItem {
  _id: string;
  title: string;
  subtitle?: string;
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
  backgroundColor = 'bg-darkOrange',
}: IconListBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };

  const delayNum = delay * 100;

  return (
    <section
      className="iconListBanner relative overflow-hidden"
      id={slugify(title)}
    >
      <BackgroundWrapper {...backgroundProps} grayScale alt={title}>
        <div
          className="fader py-16 md:py-sectionPadding text-white "
          data-aos="fade-up"
          data-aos-delay={`${delayNum}`}
        >
          <Container maxWidth={breakpoints.lg}>
            <div className="xmd:flex xmd:ml-4 w-full items-center justify-between">
              <div className="copy max-w-xs mx-auto xmd:mx-0 mb-12 xmd:mb-0 xmd:max-w-eventTypeHeading">
                <h3
                  className="fader font-black uppercase leading-base tracking-eventTypeHeading text-4xl lg:text-eventTypeHeading mb-5"
                  data-aos="fade-up"
                  data-aos-anchor={`#${slugify(title)}`}
                  data-aos-delay={`${delayNum + 50}`}
                >
                  {title}
                </h3>
                {blockContent && (
                  <div
                    className="fader text-eventTypeBody leading-6"
                    data-aos="fade-up"
                    data-aos-anchor={`#${slugify(title)}`}
                    data-aos-delay={`${delayNum + 100}`}
                  >
                    <PortableTextModule text={blockContent} />
                  </div>
                )}
                {links && (
                  <div
                    className="fader mt-7"
                    data-aos="fade-up"
                    data-aos-anchor={`#${slugify(title)}`}
                    data-aos-delay={`${delayNum + 150}`}
                  >
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
              <div
                className="fader bg-orange mx-auto xmd:mx-0 content-box rounded-2xl px-7 py-16 md:p-eventListMobile lg:p-eventList w-full flex flex-col h-full max-w-featList"
                data-aos="fade-up"
                data-aos-delay={`${delayNum + 200}`}
              >
                {items.map((item, index) => {
                  const itemDelay = delayNum + (index + 1) * 50;
                  return (
                    <div
                      key={item._id}
                      className={`fader sm:flex w-full text-center sm:text-left sm:justify-between items-center${
                        index !== 0 ? ' mt-7' : ''
                      }`}
                      data-aos="fade-up"
                      data-aos-anchor={`#${slugify(title)}`}
                      data-aos-delay={`${itemDelay}`}
                    >
                      <div className="itemIcon mx-auto mb-3 sm:m-0 flex justify-center">
                        <ImageIcon
                          customIcon={item.customIcon}
                          iconImage={item.iconImage}
                        />
                      </div>
                      <div className="itemTitle font-semibold uppercase text-iconHeading">
                        {item.title}
                        <span className="block text-base tracking-widest">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
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
