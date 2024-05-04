import Image, { ImageProps } from 'next/image';

interface ProductCardImageProps extends ImageProps {}

export function ProductCardImage({ src, alt, ...rest }: ProductCardImageProps) {
  return (
    <div className="carousel-item relative w-full h-full">
      <Image alt={alt} objectFit="contain" className="mx-auto my-auto" layout="fill" {...rest} src={src} />
    </div>
  );
}
