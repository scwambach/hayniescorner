import { Map, Container, LinkObject } from '@components';
import * as SVG from '@svgs';
import { breakpoints, colors } from '@styles';

interface ContactInfoProps {
  email: string;
}

const ContactInfo = ({ email }: ContactInfoProps) => {
  return (
    <div className="contactinfo py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative w-full bg-color9 text-white">
      <SVG.Cap bgColor={colors.color9} />
      <Container maxWidth={breakpoints.wlg}>
        <div className="lg:flex">
          <div className="lg:w-1/3">
            <div className="flex flex-col md:flex-row lg:flex-col gap-20">
              <div>
                <h2 className="mb-5 font-black uppercase tracking-sectionHeading text-featHeading">
                  Visit
                </h2>
                <p className="font-semibold text-featBody leading-featBody">
                  <LinkObject
                    newTab
                    url="https://www.google.com/maps/place/Haynies+Corner,+Evansville,+IN+47713"
                  >
                    Haynie’s Corner Arts District
                    <br />
                    Evansville, IN 47713
                  </LinkObject>
                </p>
              </div>
              <div>
                <h3 className="font-black lg:mt-20 uppercase tracking-sectionHeading text-featHeading">
                  Contact
                </h3>
                <p className="font-semibold text-featBody leading-featBody">
                  General Inquiries
                  <br />
                  <LinkObject
                    classes="block underline"
                    newTab
                    url={`mailto:${email}`}
                  >
                    {email}
                  </LinkObject>
                  <br />
                  Sponsor an Event
                  <br />
                  <LinkObject
                    classes="block underline"
                    newTab
                    url={`mailto:${email}`}
                  >
                    {email}
                  </LinkObject>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-2/3">
            <h2 className="mb-5 font-black uppercase tracking-sectionHeading text-featHeading">
              Find Us
            </h2>
            <Map />
          </div>
        </div>
      </Container>
    </div>
  );
};

export { ContactInfo };
export default ContactInfo;
