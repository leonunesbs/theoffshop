import { ProductCard } from '@/components/organisms';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard.Root>
        <ProductCard.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <ProductCard.Content>
          <ProductCard.Title title="Teste" />
          <ProductCard.Description>If a dog chews shoes whose shoes does he choose?</ProductCard.Description>
          <ProductCard.Actions>
            <ProductCard.BuyNow href="/" />
          </ProductCard.Actions>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <ProductCard.Content>
          <ProductCard.Title title="Teste" />
          <ProductCard.Description>If a dog chews shoes whose shoes does he choose?</ProductCard.Description>
          <ProductCard.Actions>
            <ProductCard.BuyNow href="/" />
          </ProductCard.Actions>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <ProductCard.Content>
          <ProductCard.Title title="Teste" />
          <ProductCard.Description>
            If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog
            chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes
            whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes
            does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he
            choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a
            dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?
          </ProductCard.Description>
          <ProductCard.Actions>
            <ProductCard.BuyNow href="/" />
          </ProductCard.Actions>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <ProductCard.Content>
          <ProductCard.Title title="Teste" />
          <ProductCard.Description>If a dog chews shoes whose shoes does he choose?</ProductCard.Description>
          <ProductCard.Actions>
            <ProductCard.BuyNow href="/" />
          </ProductCard.Actions>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <ProductCard.Content>
          <ProductCard.Title title="Teste" />
          <ProductCard.Description>If a dog chews shoes whose shoes does he choose?</ProductCard.Description>
          <ProductCard.Actions>
            <ProductCard.BuyNow href="/" />
          </ProductCard.Actions>
        </ProductCard.Content>
      </ProductCard.Root>
    </div>
  );
}
