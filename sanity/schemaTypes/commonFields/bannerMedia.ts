import { backgroundImage } from ".";

export const bannerMedia = (props: any = {}) => {
  return [
    ...backgroundImage({
      title: props.title,
      name: props.name,
      fieldset: props.fieldset,
    }),
  ];
};
