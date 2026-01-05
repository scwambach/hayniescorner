import { ImageObject } from "../modules/ImageObject";
import { CustomImageProps } from "@/utils/types";

interface BackgroundWrapperProps {
  alt?: string;
  backgroundClasses?: string;
  backgroundColor?: string;
  underColor?: string;
  backgroundImage?: CustomImageProps;
  children?: any | any[];
  grayScale?: boolean;
  hardLight?: boolean;
  priority?: boolean;
  thin?: boolean;
  video?: string;
}

export const BackgroundWrapper = ({
  backgroundColor,
  underColor,
  backgroundImage,
  children,
  hardLight,
}: BackgroundWrapperProps) => {
  return (
    <div className="backgroundWrapper">
      <div className="mx-auto">
        <div
          className={`relative ${backgroundColor ? ` ${backgroundColor}` : ""}`}
        >
          {backgroundImage && (
            <div className="absolute inset-0">
              <ImageObject
                {...backgroundImage}
                imageWidth={1500}
                className="object-cover absolute top-0 left-0 w-full h-full"
              />
            </div>
          )}

          {backgroundColor && (
            <>
              <div
                className={`absolute layer1 inset-0 ${
                  underColor || backgroundColor
                } ${hardLight ? "mix-blend-color" : "mix-blend-multiply"}`}
              />
              <div
                className={`absolute ${
                  underColor ? "opacity-60 " : "opacity-60 "
                }inset-0  ${backgroundColor}`}
              />
            </>
          )}
          <div className="content relative mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};
