import { Container, ImageProps, DynamicIcon, LinkObject } from '@components';
import ImageIcon from '@components/modules/ImageIcon';
import { breakpoints, colors } from '@styles';
import sponsor  from '../../images/sponsor.png';

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
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-color7 text-footer py-10">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between">
          <div>

            <p className='sponsor flex items-center justify-between text-white text-base mb-5'><span className='block w-36'>First Friday&apos;s are brought to you by:</span> <a href='https://www.fieldandmain.com/' target='_blank'
              rel='noopener noreferrer'
              >
                <img src={ sponsor.src} alt="Field and Main" />
              </a></p>
            <p>&copy; {currentYear} | Haynie&apos;s Corner Arts Disctrict Association</p>
          </div>
          <LinkObject url="/" classes="my-10 lg:my-0">
            <ImageIcon iconImage={iconImage} customIcon={customIcon} />
          </LinkObject>
          <div className="md:flex items-center justify-center lg:justify-between gap-2">
            <span>Follow us!</span>
            <div className="flex my-5 gap-2 justify-center">
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
            </div>
            <div className="hidden md:inline-block">
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </div>
            <div className="lg:mt-5">
              <LinkObject url="https://sproutyourdesign.com" newTab={true}>
                Site Design by Sprout Design
              </LinkObject>

              <span className="block">
                Photos by{' '}
                <LinkObject newTab url="https://www.alexmorganimaging.com/">
                  Alex Morgan
                </LinkObject>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
