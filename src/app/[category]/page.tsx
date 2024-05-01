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
      {products.map(({ id, name, imageUrl, price }) => (
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
      {products.length <= 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center py-10">
          <i>Nenhum produto encontrado</i>
        </div>
      )}
    </div>
  );
}
