import Image from 'next/image';

import { ProductCard } from '@/components/organisms';
import { normalizeText } from '@/libs/utils';
import mainCatalog from '@/public/catalog.json';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    search: string;
  };
}) {
  const filteredCatalog = searchParams?.search
    ? mainCatalog.filter((product) => {
        const normalizedSearch = normalizeText(searchParams.search);
        return (
          normalizeText(product.name).includes(normalizedSearch) ||
          product.price.toString().includes(normalizedSearch) ||
          product.categories.some((category) => normalizeText(category).includes(normalizedSearch))
        );
      })
    : mainCatalog;

  const catalog = searchParams?.search ? filteredCatalog : mainCatalog;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {catalog.map(({ id, name, imageUrls, productUrl }) => (
        <ProductCard.Root key={id}>
          <div className="carousel w-full h-80 bg-white">
            {imageUrls.map((src) => (
              <ProductCard.Image key={src} src={src} alt={name} />
            ))}
          </div>
          <ProductCard.Content>
            <ProductCard.Title title={name} />
            {/* <ProductCard.Price price={price} /> */}
            <div className="flex justify-between">
              <Image src="aliexpress_logo.svg" alt="Aliexpress Logo" width={80} height={30} />
              <ProductCard.Actions>
                <ProductCard.BuyNow href={productUrl} />
              </ProductCard.Actions>
            </div>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
    </div>
  );
}
