import { breakpoints, colors } from "@/styles";
import { HeadingBlockProps } from "@/utils/types";
import { HeadingShape } from "../svg";
import { ImageObject } from "../modules/ImageObject";
import { slugify } from "@/utils";
import { Portable } from "../modules/Portable";
import { Container } from "../modules/Container";

export const HeadingBlock = ({
  image,
  heading,
  bgColor = colors.color6,
  blockColor = colors.orange,
  message,
}: HeadingBlockProps) => {
  return (
    <section
      className="headingblock relative py-10 lg:py-5 "
      id={heading ? slugify(heading) : undefined}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <HeadingShape />
      <Container maxWidth={breakpoints.wlg}>
        <div
          className={`fader block-container text-white content-box rounded-2xl max-w-smd wlg:max-w-none px-5 smd:px-14 mx-auto wlg:px-36 py-20 ${
            image?.src ? "wlg:flex wlg:items-center" : ""
          }`}
          style={{
            backgroundColor: blockColor,
          }}
        >
          {image?.src && (
            <div className="fader image mx-auto relative pb-5 wlg:pb-0 wlg:w-1/3">
              <div className="w-56 mx-auto brightness-200">
                <ImageObject
                  {...image}
                  className="grayscale-100"
                  imageWidth={300}
                />
              </div>
            </div>
          )}
          <div
            className={`fader copy text-center mx-auto${
              image?.src ? " wlg:text-left wlg:w-2/3 wlg:pl-20" : ""
            }`}
          >
            {heading && !image?.src && (
              <h4 className="fader font-black uppercase tracking-featureHeading text-iconHeading wlg:text-featHeading mb-5">
                {heading}
              </h4>
            )}
            {message && (
              <div
                className={`fader message uppercase${
                  image?.src
                    ? " font-black tracking-featureHeading wlg:text-headingBlock"
                    : " font-semibold tracking-wider"
                }`}
              >
                <Portable content={message} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
