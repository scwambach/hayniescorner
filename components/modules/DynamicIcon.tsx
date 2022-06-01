import React, { ReactElement } from 'react';
import * as Icons from '@meronex/icons/fa';
import { colors } from '@styles';

interface Props {
  name: string;
  color?: string;
  size?: number;
}

function DynamicIcon({
  name,
  size = 50,
  color = colors.color2,
}: Props): ReactElement {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return <Icons.FaStar size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} />;
}

export { DynamicIcon };
export default DynamicIcon;
