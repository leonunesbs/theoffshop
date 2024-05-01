import { ProductCard } from '@/components/organisms';
import catalog from '@/public/catalog.json';

export default async function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {catalog.map(({ id, name, imageUrl, price }) => (
        <ProductCard.Root key={id}>
          <ProductCard.Image src={imageUrl} alt={name} />
          <ProductCard.Content>
            <ProductCard.Title title={name} />
            <ProductCard.Price price={price} />
            <ProductCard.Actions>
              <ProductCard.BuyNow href={imageUrl} />
            </ProductCard.Actions>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
    </div>
  );
}
