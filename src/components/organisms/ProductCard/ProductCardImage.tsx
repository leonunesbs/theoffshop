import Image, { ImageProps } from 'next/image';

interface ProductCardImageProps extends ImageProps {}

export function ProductCardImage({ src, alt, ...rest }: ProductCardImageProps) {
  return <Image src={src} alt={alt} width={600} height={600} {...rest} />;
}
