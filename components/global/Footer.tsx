import { breakpoints, colors } from "@/styles";
import * as Icons from "@meronex/icons/si";
import sponsor from "../../images/sponsor.svg";
import Link from "next/link";
import { DynamicIcon } from "../modules/DynamicIcon";
import { CustomImageProps } from "@/utils/types";
import { Container } from "../modules/Container";

interface FooterProps {
  iconImage?: CustomImageProps;
  customIcon?: string;
  socials?: {
    _id: string;
    icon: string;
    url: string;
  }[];
}

export const Footer = ({ customIcon, socials }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-color7 text-footer py-10">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between">
          <div>
            <p className="sponsor flex-col sm:flex-row  flex gap-5 items-center justify-between text-white text-base mb-5">
              <span className="block w-36">
                First Friday&apos;s are brought to you by:
              </span>{" "}
              <a
                className="w-44"
                href="https://www.fieldandmain.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="CRS OneSource"
              >
                <img src={sponsor.src} alt="CRS OneSource logo" />
              </a>
            </p>
            <p>
              &copy; {currentYear} | Haynie&apos;s Corner Arts Disctrict
              Association
            </p>
          </div>
          {customIcon && (
            <Link href="/" className="my-10 lg:my-0">
              <span
                dangerouslySetInnerHTML={{
                  __html: customIcon,
                }}
              />
            </Link>
          )}
          <div className="md:flex items-center justify-center lg:justify-between gap-2">
            <span>Follow us!</span>
            <div className="flex my-5 gap-2 justify-center">
              {socials?.map((soc) => (
                <div key={soc._id}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={soc.url}
                  >
                    <DynamicIcon
                      name={soc.icon as keyof typeof Icons}
                      color={colors.color7}
                      size={16}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="hidden md:inline-block">
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </div>
            <div className="lg:mt-5">
              <Link
                href="https://sproutyourdesign.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Design by Sprout Design
              </Link>

              <span className="block">
                Photos by{" "}
                <Link
                  href="https://www.alexmorganimaging.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Morgan
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
