import { ImageLoader } from 'next/image';

export const imageLoader: ImageLoader = ({ src }) => {
  return src;
};
