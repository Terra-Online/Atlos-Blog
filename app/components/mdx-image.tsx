import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { ComponentProps } from 'react';

type MdxImageProps = ComponentProps<'img'> & {
  src?: unknown;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type StaticImageDataLike = {
  src: string;
  height?: number;
  width?: number;
};

function isStaticImageData(value: unknown): value is StaticImageDataLike {
  return (
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    typeof (value as StaticImageDataLike).src === 'string'
  );
}

export function MdxImage({ src, alt = '', ...props }: MdxImageProps) {
  if (isStaticImageData(src)) {
    const {
      blurDataURL: _blurDataURL,
      blurWidth: _blurWidth,
      blurHeight: _blurHeight,
      ...image
    } = src as StaticImageDataLike & {
      blurDataURL?: string;
      blurWidth?: number;
      blurHeight?: number;
    };

    return (
      <ImageZoom
        {...(props as any)}
        src={image}
        alt={alt}
        placeholder="empty"
        unoptimized
      />
    );
  }

  return <ImageZoom {...(props as any)} src={src as any} alt={alt} />;
}
