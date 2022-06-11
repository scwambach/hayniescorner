import { Container, ImageProps, DynamicIcon, LinkObject } from '@components';
import ImageIcon from '@components/modules/ImageIcon';
import { breakpoints, colors } from '@styles';

interface FooterProps {
  iconImage?: ImageProps;
  customIcon?: string;
  socials?: {
    _id: string;
    icon: string;
    url: string;
  }[];
}

const Footer = ({ iconImage, customIcon, socials }: FooterProps) => {
  return (
    <footer className="bg-black text-color7 text-footer py-10">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between">
          <p>&copy; 2022 | Haynie&apos;s Corner Arts Disctrict Association</p>
          <LinkObject url="/" classes="my-10 lg:my-0">
            <ImageIcon iconImage={iconImage} customIcon={customIcon} />
          </LinkObject>
          <div className="flex items-center justify-center lg:justify-between gap-2">
            <span>Follow us!</span>
            {socials.map((soc) => (
              <div key={soc._id}>
                <LinkObject newTab={true} url={soc.url}>
                  <DynamicIcon
                    name={soc.icon}
                    color={colors.color7}
                    size={16}
                  />
                </LinkObject>
              </div>
            ))}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <LinkObject url="https://sproutyourdesign.com" newTab={true}>
              Site Design by Sprout Design
            </LinkObject>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
