import NextImage, { ImageLoader, ImageProps } from 'next/image';

// opt-out of image optimization, no-op
const customLoader: ImageLoader = ({ src }) => {
  return src;
};

export const Image: React.FC<ImageProps> = props => {
  return <NextImage {...props} loader={customLoader} />;
};
