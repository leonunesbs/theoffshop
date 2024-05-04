import Image, { ImageProps } from 'next/image';

interface ProductCardImageProps extends ImageProps {}

export function ProductCardImage({ src, alt }: ProductCardImageProps) {
  return (
    <div className="carousel-item relative w-full h-full">
      <Image
        alt={alt}
        style={{
          objectFit: 'contain',
        }}
        fill
        src={src}
      />
    </div>
  );
}
