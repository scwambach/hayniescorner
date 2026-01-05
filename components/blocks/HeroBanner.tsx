import { CustomImageProps } from "@/utils/types";
import { ImageObject } from "../modules/ImageObject";

export const HeroBanner = ({
  backgroundImage,
  customIcon,
}: {
  backgroundImage: CustomImageProps;
  customIcon: string;
}) => {
  return (
    <section className="banner logo relative font-body">
      <ImageObject
        {...backgroundImage}
        imageWidth={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute layer1 inset-0 bg-blue mix-blend-color" />
      <div className="absolute layer1 opacity-60 inset-0 bg-black" />
      {customIcon && (
        <div
          className="svg py-logoBanner m-auto relative z-20"
          dangerouslySetInnerHTML={{
            __html: customIcon,
          }}
        />
      )}
    </section>
  );
};
