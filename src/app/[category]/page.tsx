import Image from 'next/image';

import { ProductCard } from '@/components/organisms';
import catalog from '@/public/catalog.json';

interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category({ params }: CategoryProps) {
  const products = catalog.filter(({ categories }) => categories.includes(params.category));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(({ id, name, imageUrls, price, productUrl }) => (
        <ProductCard.Root key={id}>
          <div className="carousel w-full h-80 bg-white">
            {imageUrls.map((src) => (
              <ProductCard.Image key={src} src={src} alt={name} />
            ))}
          </div>
          <ProductCard.Content>
            <ProductCard.Title title={name} />
            <ProductCard.Price price={price} />
            <div className="flex justify-between">
              <Image src="aliexpress_logo.svg" alt="Aliexpress Logo" width={80} height={30} />
              <ProductCard.Actions>
                <ProductCard.BuyNow href={productUrl} />
              </ProductCard.Actions>
            </div>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
      {products.length <= 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center py-10">
          <i>Nenhum produto encontrado</i>
        </div>
      )}
    </div>
  );
}
