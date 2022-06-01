import { Container } from '@components/modules/Container';
import { breakpoints } from '@styles';

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-white">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2022 Wambach Web Development All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
