import { ReactElement } from "react";
import * as Icons from "@meronex/icons/si";
import { colors } from "@/styles";

interface Props {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
}

export function DynamicIcon({
  name,
  size = 50,
  color = colors.color2,
}: Props): ReactElement {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return <Icons.SiSafari size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} />;
}
