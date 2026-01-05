"use client";
import { breakpoints, colors } from "@/styles";
import { Container } from "../modules/Container";
import { LinkObject } from "../modules/LinkObject";
import { Map } from "../modules/Map";
import { LinkProps } from "@/utils/types";
import * as SVG from "@/components/svg";
import { Button } from "../modules/Button";

interface ContactInfoProps {
  email: string;
  links: LinkProps[];
}

const ContactInfo = ({ email, links }: ContactInfoProps) => {
  return (
    <section
      id="contactInfo"
      className="contactinfo py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative w-full bg-color9 text-white"
    >
      <SVG.Cap bgColor={colors.color9} />
      <Container maxWidth={breakpoints.wlg}>
        <div className="lg:flex lg:gap-10">
          <div
            className="fader lg:w-1/3"
            data-aos-anchor="#contactInfo"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row lg:flex-col gap-12  md:flex-wrap lg:flex-nowrap">
              <div
                className="fader"
                data-aos-anchor="#contactInfo"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="mb-5 font-black uppercase tracking-sectionHeading text-featHeading">
                  Visit
                </h2>
                <p
                  className="fader font-semibold text-featBody leading-featBody"
                  data-aos-anchor="#contactInfo"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
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
              <div
                className="fader"
                data-aos-anchor="#contactInfo"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3
                  className="fader font-black uppercase tracking-sectionHeading text-featHeading"
                  data-aos-anchor="#contactInfo"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  Contact
                </h3>
                <p
                  className="fader font-semibold text-featBody leading-featBody"
                  data-aos-anchor="#contactInfo"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
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
              <div
                data-aos-anchor="#contactInfo"
                data-aos="fade-up"
                data-aos-delay="350"
                className="links w-full block md:flex lg:block gap-0 md:gap-5 lg:gap-0"
              >
                {links.map((link, index) => (
                  <Button
                    key={link._key}
                    index={index}
                    className={`w-full md:w-1/3 lg:w-full block ${
                      index !== 0 ? "mt-3 md:mt-0 lg:mt-3" : ""
                    } mx-auto md:mx-0 sm:w-full md:w-auto bg-orange`}
                  >
                    <LinkObject {...link} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div
            className="fader mt-20 lg:mt-0 lg:w-2/3"
            data-aos-anchor="#contactInfo"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2 className="mb-5 font-black uppercase tracking-sectionHeading text-featHeading">
              Find Us
            </h2>
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { ContactInfo };
export default ContactInfo;
