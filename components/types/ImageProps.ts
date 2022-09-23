export interface AssetProps {
  _ref: string;
  _type: string;
}

export interface RefProps {
  _type: string;
  asset: AssetProps;
}

export interface CropProps {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface HotspotProps {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface ImageProps {
  aspectRatio?: number;
  height?: number;
  lqip?: string;
  reference?: RefProps;
  url?: string;
  width?: number;
  crop?: CropProps;
  hotspot?: HotspotProps;
}
