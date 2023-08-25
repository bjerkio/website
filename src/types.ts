export interface ImageFormat {
  src: string;
  w: number;
}

export interface PictureSources {
  avif?: ImageFormat[];
  webp?: ImageFormat[];
  [key: string]: ImageFormat[] | undefined;
}

export interface Picture {
  sources: PictureSources;
  img: {
    src: string;
    w: number;
    h: number;
  };
}
