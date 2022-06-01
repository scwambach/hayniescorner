import { ProgressiveImage, ImageProps, DynamicIcon } from '@components';

type Props = {
  customIcon: string;
  icon: string;
  color: string;
  blockType?: string;
  size?: number;
  iconImage: ImageProps;
};

const ImageIcon = ({
  customIcon,
  icon,
  iconImage,
  color,
  size,
  blockType = 'block',
}: Props) => {
  return (
    <div className="imageIcon">
      {customIcon ? (
        <span
          className={`customIcon${
            typeof size !== 'undefined' ? ` ${blockType}` : ''
          }`}
          style={{
            width: size ? `${size}px` : null,
            height: size ? 'auto' : null,
          }}
          dangerouslySetInnerHTML={{
            __html: customIcon,
          }}
        />
      ) : icon ? (
        <DynamicIcon name={icon} color={color} size={size} />
      ) : (
        <ProgressiveImage {...iconImage} />
      )}
    </div>
  );
};

export { ImageIcon };
export default ImageIcon;
