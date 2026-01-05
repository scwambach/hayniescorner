declare module "@meronex/icons/*" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "@meronex/icons" {
  import { FC, SVGProps } from "react";
  export type IconType = FC<SVGProps<SVGSVGElement>>;
}
