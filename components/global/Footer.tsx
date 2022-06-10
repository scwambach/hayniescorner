import {
  Container,
  ImageIcon,
  ImageProps,
  DynamicIcon,
  LinkObject,
} from '@components';
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
    <footer className="bg-black text-color7 text-footer">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 md:flex md:items-center md:justify-between">
          <p>&copy; 2022 | Haynie's Corner Arts Disctrict Association</p>
          <LinkObject url="/">
            <ImageIcon iconImage={iconImage} customIcon={customIcon} />
          </LinkObject>
          <p className="flex items-center justify-between gap-2">
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
            |&nbsp;&nbsp;
            <LinkObject url="https://sproutyourdesign.com" newTab={true}>
              Site Design by Sprout Design
            </LinkObject>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
